import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { ChevronLeft } from 'lucide-react';

const Product = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Back to Home Button */}
      <div className="mb-8 mt-[-24px]">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-700 hover:text-black transition-colors gap-2 text-base sm:text-lg"
        >
          <ChevronLeft size={22} />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Product Data Section */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt=""
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* Product Info */}
       <div className='flex-1'>
  <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

  <div className='flex items-center gap-1 mt-2'>
    <img src={assets.star_icon} alt="" className="w-3.5" />
    <img src={assets.star_icon} alt="" className="w-3.5" />
    <img src={assets.star_icon} alt="" className="w-3.5" />
    <img src={assets.star_icon} alt="" className="w-3.5" />
    <img src={assets.star_dull_icon} alt="" className="w-3.5" />
    <p className='pl-2'>(122)</p>
  </div>

  <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>

  <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

  {/* Add to Cart Button with spacing */}
  <div className='mt-10'>
    <button
      onClick={() => addToCart(productData._id)}
      className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
    >
      ADD TO CART
    </button>
  </div>

  {/* Share Buttons */}
  <div className='flex gap-4 mt-4 items-center'>
    <a
      href={`https://api.whatsapp.com/send?text=Check out this product: ${encodeURIComponent(window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:text-gray-600"
      title="Share on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-xl sm:text-2xl"></i>
    </a>
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:text-gray-600"
      title="Share on Facebook"
    >
      <i className="fa-brands fa-facebook text-xl sm:text-2xl"></i>
    </a>
    <a
      href={`https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:text-gray-600"
      title="Share on Instagram"
    >
      <i className="fa-brands fa-instagram text-xl sm:text-2xl"></i>
    </a>
  </div>

  <hr className='mt-8 sm:w-4/5' />

  <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
    <p>100% Original product.</p>
    <p>Cash on delivery is available on this product.</p>
    <p>Easy return and exchange policy within 7 days.</p>
  </div>
</div>





      </div>

 

      {/* Related Products Section */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
