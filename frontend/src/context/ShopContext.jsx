import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const addToCart = async (itemId, size = null) => {
    let cartData = structuredClone(cartItems);

    if (size) {
      if (!cartData[itemId]) cartData[itemId] = {};
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    } else {
      cartData[itemId] = (cartData[itemId] || 0) + 1;
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        toast.error(error.message);
      }
    }

    toast.success("Item added to cart!");
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    if (size) {
      cartData[itemId][size] = quantity;
    } else {
      cartData[itemId] = quantity;
    }
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/update",
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const getCartCount = () => {
    let total = 0;
    for (const id in cartItems) {
      const item = cartItems[id];
      if (typeof item === "number") {
        total += item;
      } else {
        for (const size in item) total += item[size];
      }
    }
    return total;
  };

  const getCartAmount = () => {
    let amount = 0;
    for (const id in cartItems) {
      const product = products.find((p) => p._id === id);
      if (!product) continue;
      
      const item = cartItems[id];
      if (typeof item === "number") {
        amount += item * product.price;
      } else if (typeof item === "object") {
        for (const size in item) {
          if (item[size] > 0) {
            amount += item[size] * product.price;
          }
        }
      }
    }
    return amount;
  };

  const getProductsData = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/product/list`);
      if (res.data.success) setProducts(res.data.products.reverse());
    } catch (err) {
      toast.error(err.message);
    }
  };

  const getUserCart = async (token) => {
    try {
      const res = await axios.post(`${backendUrl}/api/cart/get`, {}, { headers: { token } });
      if (res.data.success) setCartItems(res.data.cartData);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("token");
    if (!token && stored) {
      setToken(stored);
      getUserCart(stored);
    } else if (token) {
      getUserCart(token);
    }
  }, [token]);

  return (
    <ShopContext.Provider
      value={{
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        setCartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        backendUrl,
        navigate,
        token,
        setToken,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;