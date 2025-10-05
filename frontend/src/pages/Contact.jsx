import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hero_img6 from '../assets/hero_img6.jpeg';
import Title from '../components/Title';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const sections = [infoRef, formRef, mapRef];
    sections.forEach((ref) => {
      gsap.from(ref.current, {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
        },
      });
    });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Title Section */}
      <div className="text-center text-4xl font-semibold py-16 border-t-4 border-black tracking-wide">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Contact Info + Form Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto px-6 py-10">
        {/* Image */}
        <div ref={infoRef} className="w-full md:w-1/2 h-full flex items-center justify-center">
          <img
            src={hero_img6}
            alt="Contact"
            className="w-full h-full object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Contact Form */}
        <div
          ref={formRef}
          className="w-full md:w-1/2 h-full bg-white p-10 rounded-2xl shadow-xl border border-gray-100"
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Get in Touch</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="text-lg text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-4 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-black mt-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-4 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-black mt-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-lg text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message"
                rows="6"
                className="w-full p-4 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-black mt-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-black text-white font-semibold rounded-xl shadow-lg hover:bg-gray-900 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div ref={mapRef} className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Visit Us at Churchgate Station, Mumbai
        </h2>
        <div className="rounded-xl overflow-hidden shadow-xl border border-gray-300">
          <iframe
            title="Churchgate Station Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6862847787953!2d72.82755357514332!3d18.93485715696765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1d4f29bebb%3A0x37c3f78ff2b64c97!2sChurchgate%20Station!5e0!3m2!1sen!2sin!4v1628504935536!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
