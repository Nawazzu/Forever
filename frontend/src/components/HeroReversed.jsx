import React from 'react';
import polo_img from '../assets/polo_img.png'; // ✅ Direct import of image

const HeroReversed = () => {
  return (
    // ✅ Added margin-bottom to the entire container for spacing below
    <div className='flex flex-col sm:flex-row border border-gray-300 mb-16'>
      {/* ✅ Left Side - Image */}
      <img
        className='w-full sm:w-1/2 object-cover h-[400px] sm:h-auto'
        src={polo_img}
        alt="Instax Dash Cam"
      />

      {/* ✅ Right Side - Text */}
      <div className='w-full sm:w-1/2 flex items-center justify-center p-6 sm:p-10 bg-white'>
        <div className='text-[#1a1a1a] space-y-6 max-w-md'>
          <h1 className='prata-regular text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug'>
            "Capture Every Curve."
          </h1>
          <p className='text-base sm:text-lg font-normal text-gray-600 leading-relaxed'>
            With Polaroid's retro flair and modern clarity, the Instax Dash Cam turns your commute into a highlight reel.
          </p>

          {/* ✅ CTA Button */}
          <button className='inline-block mt-4 px-6 py-3 bg-black text-white text-sm font-medium tracking-wide rounded-md hover:bg-gray-800 transition-all duration-300'>
            Explore the Drive
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroReversed;
