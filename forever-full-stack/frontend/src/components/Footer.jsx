import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { assets } from "../assets/assets";
import { Camera } from "lucide-react"; // ✅ Import Camera icon

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f9f9f9] pt-20 px-6 sm:px-16 md:px-28 text-black font-['Playfair_Display'] w-full">
      {/* Grid layout */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-base mb-16">
        {/* Brand Info */}
        <div>
         <div className="flex items-center gap-2 mb-4">
  <Camera className="w-6 h-6 text-black" /> {/* ✅ Icon used here */}
  <h3 className="text-black text-xl font-semibold hover:text-gray-900 transition">SnapStore</h3>
</div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Your trusted partner in photography. High-quality cameras, lenses,
            and bags to capture life perfectly.
          </p>
          <div className="flex items-center gap-2 text-gray-700">
            <Mail size={18} />
            <a
              href="mailto:support@snapstore.com"
              className="hover:text-gray-900 transition"
            >
              support@snapstore.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xl font-semibold mb-5 text-black hover:text-gray-900 transition">
            Quick Links
          </p>
          <ul className="flex flex-col gap-2 text-gray-700">
            <li>
              <Link to="/" className="hover:text-gray-900 transition">
                › Home
              </Link>
            </li>
            <li>
              <Link to="/cameras" className="hover:text-gray-900 transition">
                › Cameras
              </Link>
            </li>
            <li>
              <Link to="/lenses" className="hover:text-gray-900 transition">
                › Lenses
              </Link>
            </li>
            <li>
              <Link to="/bags" className="hover:text-gray-900 transition">
                › Bags
              </Link>
            </li>
            <li>
              <Link
                to="/accessories"
                className="hover:text-gray-900 transition"
              >
                › Accessories
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-900 transition">
                › Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Store Locations */}
        <div>
          <p className="text-xl font-semibold mb-5 text-black hover:text-gray-900 transition">
            Our Stores
          </p>
          <div className="text-gray-700 space-y-6">
            <div>
              <p className="font-semibold">Agra Branch:</p>
              <p className="text-sm">123 Taj Road, Agra, UP - 282001</p>
              <div className="flex items-center gap-2 mt-1">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
            </div>
            <hr className="border-gray-300 my-2" />
            <div>
              <p className="font-semibold">Delhi Branch:</p>
              <p className="text-sm">45 Connaught Place, New Delhi - 110001</p>
              <div className="flex items-center gap-2 mt-1">
                <Phone size={16} />
                <span>+91 91234 56789</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-center border-t border-gray-300 pt-6 pb-5 text-gray-500 text-sm">
        <p>© 2024 SnapStore. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook size={18} className="hover:text-gray-900 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={18} className="hover:text-gray-900 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter size={18} className="hover:text-gray-900 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
