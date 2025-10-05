import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { assets } from "../assets/assets"; // ✅ Logo

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f9f9f9] pt-20 px-6 sm:px-16 md:px-28 text-black font-['Playfair_Display'] w-full">
      
      {/* 2-column layout */}
      <div className="flex flex-col md:flex-row justify-between gap-16 mb-16">

        {/* Brand Info */}
        <div className="flex-1 -mt-8"> {/* Slightly shifted up */}
          <div className="mb-1">
            <Link to="/" onClick={scrollToTop}>
              <img src={assets.logo} alt="Logo" className="w-32 sm:w-40" />
            </Link>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3"> {/* Tighter spacing */}
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

        {/* Quick Links + Store */}
        <div className="flex-1 flex flex-col md:flex-row justify-between gap-12"> {/* Balanced gap */}
          
          {/* Quick Links */}
          <div>
            <p className="text-xl font-semibold mb-4 text-black hover:text-gray-900 transition">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2 text-gray-700">
              <li><Link to="/" className="hover:text-gray-900 transition">› Home</Link></li>
              <li><Link to="/cameras" className="hover:text-gray-900 transition">› Cameras</Link></li>
              <li><Link to="/lenses" className="hover:text-gray-900 transition">› Lenses</Link></li>
              <li><Link to="/bags" className="hover:text-gray-900 transition">› Bags</Link></li>
              <li><Link to="/accessories" className="hover:text-gray-900 transition">› Accessories</Link></li>
              <li><Link to="/contact" className="hover:text-gray-900 transition">› Contact</Link></li>
            </ul>
          </div>

          {/* Store */}
          <div>
            <p className="text-xl font-semibold mb-4 text-black hover:text-gray-900 transition">
              Our Store
            </p>
            <div className="text-gray-700">
              <p className="font-semibold">Churchgate Branch:</p>
              <p className="text-sm mb-1">Churchgate, Mumbai, Maharashtra - 400020</p>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-6 pb-5 text-gray-500 text-sm gap-3 md:gap-0">
        <p>© 2024 SnapStore. All Rights Reserved.</p>
        <div className="flex gap-5">
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
