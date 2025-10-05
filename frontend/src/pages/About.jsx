import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hero_img3 from '../assets/hero_img3.jpeg';
import hero_img4 from '../assets/hero_img4.jpeg';
import hero_img5 from '../assets/hero_img5.jpeg';
import Title from '../components/Title';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const contentRef = useRef(null);
  const featureRef = useRef(null);
  const expRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const sections = [contentRef, featureRef, expRef, testimonialRef];
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
      {/* Page Title */}
      <div className="text-center text-4xl font-semibold py-16 border-t-4 border-black tracking-wide">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* Intro Content */}
      <div
        ref={contentRef}
        className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto px-6 py-10"
      >
        <div className="w-full md:w-1/2">
          <img
            src={hero_img5}
            alt="About SnapStore"
            className="w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            <span className="font-semibold text-xl text-gray-900">SnapStore</span> was born with a
            singular vision: to redefine the way people experience photography gear. Whether you're
            a travel blogger, wildlife enthusiast, or street-style shooter, we provide handpicked{' '}
            <strong>bags, cameras, and lenses</strong> that help you see the world with clarity.
          </p>
          <p>
            Our collection features <strong>professional-grade equipment</strong> and stylish,
            functional bags to complement your aesthetic and performance needs. Each product is
            curated to deliver performance, design, and innovation.
          </p>
        </div>
      </div>

      {/* Features */}
      <div ref={featureRef} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose SnapStore?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {['Premium Bags', 'Precision Lenses', 'Pro Cameras'].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-2xl p-10 shadow-md hover:shadow-2xl transition duration-300"
            >
              <h4 className="text-xl font-semibold mb-4">{item}</h4>
              <p className="text-gray-600">
                Our {item.toLowerCase()} blend innovation with quality to deliver top-tier
                performance and timeless aesthetics.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SnapStore Experience */}
      <div ref={expRef} className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">The SnapStore Experience</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We go beyond products — we deliver excellence through thoughtful design, packaging, and
            support.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              img: hero_img4,
              title: 'Unbox Luxury',
              desc: 'Elegant packaging with a premium feel.',
            },
            {
              img: hero_img5,
              title: 'Expert Guidance',
              desc: 'Support like a personal camera concierge.',
            },
            {
              img: hero_img3,
              title: 'Curated Collection',
              desc: 'Only the best, handpicked for creators.',
            },
          ].map(({ img, title, desc }, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={img}
                alt={title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div ref={testimonialRef} className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Our Customers Say</h2>
          <p className="text-gray-600 text-lg">
            Real stories from passionate creators who trust SnapStore.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: 'Sophie Tan',
              location: 'Singapore',
              quote:
                'Absolutely love the lens I bought. Clean visuals and packed securely. The SnapStore experience is elite.',
              img: 'https://randomuser.me/api/portraits/women/65.jpg',
            },
            {
              name: 'Arjun Mehra',
              location: 'Delhi, India',
              quote:
                'The bag I ordered is functional and sleek. Fast delivery and beautiful presentation.',
              img: 'https://randomuser.me/api/portraits/men/33.jpg',
            },
            {
              name: 'Laura Kim',
              location: 'Seoul, South Korea',
              quote:
                'Customer service was super helpful in picking my first camera. Will return for more!',
              img: 'https://randomuser.me/api/portraits/women/44.jpg',
            },
          ].map(({ name, location, quote, img }, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 text-left"
            >
              <p className="text-gray-600 italic">“{quote}”</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-gray-800">{name}</p>
                  <p className="text-gray-500 text-sm">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
