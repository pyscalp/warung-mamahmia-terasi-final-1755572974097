import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ imageSrc, title, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover object-center" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-secondary text-lg font-bold">{price}</span>
          <div className="flex items-center text-accent">
            <Star size={18} fill="currentColor" className="mr-1" />
            <Star size={18} fill="currentColor" className="mr-1" />
            <Star size={18} fill="currentColor" className="mr-1" />
            <Star size={18} fill="currentColor" className="mr-1" />
            <Star size={18} className="text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;