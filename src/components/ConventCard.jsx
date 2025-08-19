// src/components/ConventCard.jsx
import React from 'react';

const ConventCard = ({ convent, onClick }) => {
  const displayImage = convent.image || (convent.images && convent.images[0]);

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100"
      onClick={onClick}
    >
      <div className="relative h-48">
        {displayImage ? (
          <img 
            src={displayImage} 
            alt={convent.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center">
            <span className="text-white text-5xl font-bold opacity-20">{convent.id}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{convent.title}</h3>
          <div className="flex items-center mt-1">
            <span className="text-xs bg-black bg-opacity-30 text-white px-2 py-1 rounded-full">
              Est. {convent.established}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-gray-600 line-clamp-3 mb-4">
          {convent.description}
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {convent.address.split(',')[0]}
        </div>
        
        <button className="mt-4 w-full py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium hover:bg-indigo-100 transition-colors flex items-center justify-center">
          View History & Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ConventCard;
