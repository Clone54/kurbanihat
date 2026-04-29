import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Weight, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const AnimalCard = ({ animal }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
      id={`animal-card-${animal.id}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {animal.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            ৳ {animal.price.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
            {animal.name}
          </h3>
          <p className="text-sm text-gray-500 font-medium">{animal.breed}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 pb-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Weight size={16} className="text-emerald-500" />
            <span className="text-xs">{animal.weight} kg</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar size={16} className="text-emerald-500" />
            <span className="text-xs">{animal.age} years</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 col-span-2">
            <MapPin size={16} className="text-emerald-500" />
            <span className="text-xs">{animal.location}</span>
          </div>
        </div>

        <Link
          to={`/details-page/${animal.id}`}
          className="w-full bg-gray-50 text-gray-900 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 group-hover:bg-emerald-600 group-hover:text-white transition-all"
          id={`view-details-${animal.id}`}
        >
          <span>View Details</span>
          <ChevronRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
};

export default AnimalCard;
