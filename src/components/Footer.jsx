import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">QurbaniHat</h3>
            <p className="text-sm leading-relaxed">
              Bangladesh's premium marketplace for Qurbani livestock. We connect verified farms with buyers to ensure a hassle-free and spiritual experience for the holy sacrifice.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><Link to="/animals" className="hover:text-emerald-500 transition-colors">All Animals</Link></li>
              <li><Link to="/login" className="hover:text-emerald-500 transition-colors">Login</Link></li>
              <li><Link to="/register" className="hover:text-emerald-500 transition-colors">Register</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-emerald-500 shrink-0 mt-1" />
                <span className="text-sm">Monnafer More, Raninagar, Boalia, Rajshahi</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <span className="text-sm">+880 1871 528249</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <span className="text-sm">firozahmedshoykot44@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Usecjh</h4>
            <div className="flex space-x-4">
              <a href="https//facebook.com/firoz.ahmed5678" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-all">
                <X size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
