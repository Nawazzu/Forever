import React from "react";

// Logo imports
import amazon from "../assets/amazon.png";
import sony from "../assets/sony.png";
import canon from "../assets/canon.png";
import nikon from "../assets/nikon.png";
import polaroid from "../assets/polaroid.png";

const OurPolicy = () => {
  const companyLogos = [amazon, sony, canon, nikon, polaroid];

  return (
    <section className="py-24 bg-white">
      <style>{`
        .marquee-inner {
          animation: marqueeScroll 15s linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* Section Title */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-4">
          Our Brand Partners
        </h2>
        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
          We collaborate with globally trusted brands to bring you the best in class products.
        </p>
      </div>

      {/* Marquee Logo Section */}
      <div className="overflow-hidden w-full relative max-w-6xl mx-auto select-none">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="marquee-inner flex will-change-transform min-w-[200%]">
          <div className="flex">
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Brand-${index}`}
                className="h-24 sm:h-28 mx-10 object-contain"
                draggable={false}
              />
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
};

export default OurPolicy;
