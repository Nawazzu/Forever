import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  const getShareLinks = () => {
    const productUrl = `${window.location.origin}/product/${id}`;
    const productName = encodeURIComponent(name);

    return {
      whatsapp: `https://api.whatsapp.com/send?text=Check out this product: ${productName} - ${productUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`,
      instagram: `https://www.instagram.com/?url=${encodeURIComponent(productUrl)}`,
    };
  };

  const { whatsapp, facebook, instagram } = getShareLinks();

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      to={`/product/${id}`}
      className="text-gray-700 cursor-pointer group"
    >
      {/* Square-like Image Box */}
      <div className="w-full aspect-[1/1] overflow-hidden rounded-md bg-gray-100">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <p className="pt-3 pb-1 text-sm font-medium truncate">{name}</p>
      <p className="text-sm font-semibold">{currency}{price}</p>

      {/* Social Icons */}
      <div className="flex gap-4 mt-3 items-center">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-green-500"
          title="Share on WhatsApp"
        >
          <i className="fab fa-whatsapp text-lg sm:text-xl"></i>
        </a>
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-600"
          title="Share on Facebook"
        >
          <i className="fab fa-facebook text-lg sm:text-xl"></i>
        </a>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-pink-500"
          title="Share on Instagram"
        >
          <i className="fab fa-instagram text-lg sm:text-xl"></i>
        </a>
      </div>
    </Link>
  );
};

export default ProductItem;
