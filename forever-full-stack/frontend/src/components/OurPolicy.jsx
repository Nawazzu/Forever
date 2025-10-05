import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Logo imports
import amazon from "../assets/amazon.png";
import sony from "../assets/sony.png";
import canon from "../assets/canon.png";
import nikon from "../assets/nikon.png";
import polaroid from "../assets/polaroid.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const OurPolicy = () => {
  const logoContainer = useRef(null);

  useEffect(() => {
    const logos = logoContainer.current.querySelectorAll("img");

    gsap.from(logos, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: logoContainer.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="py-24 bg-white">
      {/* Section Title */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-4">
          Our Brand Partners
        </h2>
        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
          We collaborate with globally trusted brands to bring you the best in class products.
        </p>
      </div>

      {/* Brand Logos */}
      <div
        ref={logoContainer}
        className="flex flex-wrap justify-center items-center gap-12 px-6 max-w-7xl mx-auto"
      >
        {[amazon, sony, canon, nikon, polaroid].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand-${index}`}
            className="h-28 sm:h-32"
          />
        ))}
      </div>
    </section>
  );
};

export default OurPolicy;
