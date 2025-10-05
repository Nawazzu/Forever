import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import the images
import hero_img4 from '../assets/hero_img4.jpeg';
import hero_img2 from '../assets/hero_img2.jpeg';
import hero_img3 from '../assets/hero_img3.jpeg';


const slides = [
  { id: 1, img: hero_img4,    title: 'Spring/Summer 2025',
    subtitle: 'Discover timeless silhouettes with modern details.', },

   { id: 2, img: hero_img2,     title: 'Luxe Essentials',
   subtitle: 'Crafted for comfort. Designed for elegance.', },

   { id: 3, img: hero_img3,  title: 'The Signature Edit',
     subtitle: 'Your wardrobe, reimagined with purpose.', },
];

const FadeCarouselWithCaptions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-[800px] overflow-hidden mb-16"> {/* Changed from padding to margin-bottom */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slides[currentIndex].img}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Caption Styling */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-4 bg-black/30">
            <div className="text-white space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-5xl font-playfair mt-64"> {/* Increased mt-64 to move caption further down */}

                {slides[currentIndex].title}
              </h2>
              <p className="text-sm sm:text-lg font-lora">{slides[currentIndex].subtitle}</p>
              <button className="mt-4 px-6 py-2 border border-white text-white bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all">
                Shop Now
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FadeCarouselWithCaptions;
