import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../assets/assets';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // ✅ Animate the text section with longer duration
    gsap.from(textRef.current, {
      opacity: 0,
      x: -120,
      duration: 2.2, // ⬅️ Increased duration to make it slower (was 1.2)
      ease: 'power2.out', // ⬅️ Slightly slower ease
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
      },
    });

    // ✅ Animate the image section with longer duration
    gsap.from(imageRef.current, {
      opacity: 0,
      x: 120,
      duration: 2.2, // ⬅️ Increased duration to match text
      ease: 'power2.out', // ⬅️ Same easing for smooth effect
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div className='flex flex-col sm:flex-row border border-gray-300'>
      {/* Left: Text Section */}
      <div
        ref={textRef} // ✅ Ref used for GSAP text animation
        className='w-full sm:w-1/2 flex items-center justify-center px-6 py-12 sm:py-0 sm:px-12'
      >
        <div className='text-[#414141] max-w-xl space-y-6'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug prata-regular'>
            "Bag the Best, <br className='hidden sm:block' />
            Focus on What Matters".
          </h1>

          <p className='text-sm md:text-base font-medium text-gray-600 leading-relaxed'>
            Shop our curated selection of <strong>cameras, lenses, and bags</strong> crafted to support your creative journey — whether you're just starting out or you're behind the scenes of your next big project.
          </p>
        </div>
      </div>

      {/* Right: Image Section */}
      <div
        ref={imageRef} // ✅ Ref used for GSAP image animation
        className='w-full sm:w-1/2'
      >
        <img
          src={assets.hero_img}
          alt='Hero'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default Hero;
