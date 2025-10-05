import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Truck, RotateCw, HelpCircle } from 'lucide-react';

const ShippingReturnsPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    { question: 'How is my order processed?', answer: 'Orders are processed within 1-2 business days and shipped via our trusted carriers.' },
    { question: 'What are the available shipping methods?', answer: 'We offer standard and express shipping. You can choose your preferred option at checkout.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship globally. Shipping time and fees depend on the destination country.' },
    { question: 'What is your return policy for international orders?', answer: 'International returns are accepted within 30 days. Shipping fees are non-refundable.' },
    { question: 'What are your customer service hours?', answer: 'Our team is available Monday to Friday, 9 AM - 6 PM (local time).' },
    { question: 'What if my package is lost?', answer: 'Please contact us immediately. We will investigate and ensure a suitable resolution.' },
  ];

  return (
    <>
      <div className="max-w-[1300px] bg-[#f8f9fc] rounded-[20px] shadow-2xl mx-auto mt-16 mb-16 px-6 py-16 font-['Playfair_Display']">
        <h1 className="text-4xl md:text-5xl text-center text-[#1c1c1e] mb-10 font-bold">Shipping & Returns</h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section */}
          <motion.div
            className="flex-1 flex flex-col gap-8"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <p className="text-[#444] text-[1.1rem] leading-8">
              Experience fast, reliable, and secure shipping with every order. Our returns are hassle-free and customer satisfaction is our priority.
            </p>

            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <Truck className="text-blue-500 w-7 h-7" />
              <div>
                <h2 className="text-lg font-semibold">Fast & Reliable Shipping</h2>
                <p className="text-gray-500">Shipped with trusted global carriers.</p>
              </div>
            </div>

            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <RotateCw className="text-blue-500 w-7 h-7" />
              <div>
                <h2 className="text-lg font-semibold">Easy Returns</h2>
                <p className="text-gray-500">30-day return policy on all orders.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-blue-100 p-5 rounded-xl text-blue-900 text-sm font-medium">
              <HelpCircle className="w-6 h-6" />
              <p>
                Still have questions?{' '}
                <a href="/contact" className="text-blue-700 underline hover:text-blue-900">Contact Us</a>
              </p>
            </div>
          </motion.div>

          {/* Right Section - FAQs */}
          <motion.div
            className="flex-1.2"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <h2 className="text-3xl font-semibold mb-6">FAQs</h2>

            <div className="bg-white/90 rounded-2xl p-6 backdrop-blur-md shadow-md">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="bg-black text-white mb-4 rounded-md shadow-md hover:shadow-lg transition-all"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer px-4 py-3 font-semibold hover:bg-neutral-900"
                    onClick={() => toggleQuestion(index)}
                  >
                    {item.question}
                    <motion.span
                      animate={{ rotate: activeQuestion === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Plus className="w-5 h-5 text-white" />
                    </motion.span>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: activeQuestion === index ? 'auto' : 0,
                      opacity: activeQuestion === index ? 1 : 0
                    }}
                    transition={{ duration: 0.4 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {activeQuestion === index && (
                      <p className="text-sm px-4 pb-3 pt-1 text-gray-200">{item.answer}</p>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ShippingReturnsPage;
