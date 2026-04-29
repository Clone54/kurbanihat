import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, Search } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center space-y-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative"
      >
        <div className="w-64 h-64 mx-auto">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-black text-emerald-600/20">404</div>
        </div>
      </motion.div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Oops! Lost in the Hat?</h1>
        <p className="text-gray-500 max-w-md mx-auto">
          The animal or page you're searching for seems to have wandered off to another pasture. Let's get you back home!
        </p>
      </div>

      <Link
        to="/"
        className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold flex items-center space-x-3 hover:bg-emerald-600 transition-all shadow-xl shadow-gray-200"
      >
        <Home size={20} />
        <span>Back to Home</span>
      </Link>
    </div>
  );
};

export default NotFound;
