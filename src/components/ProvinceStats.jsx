// src/components/ProvinceStats.jsx
import React from 'react';
import { FiUsers, FiHome, FiCalendar, FiMapPin } from 'react-icons/fi';

const ProvinceStats = ({ convents }) => {
  // Calculate statistics
  const totalConvents = convents.length;
  const oldestYear = convents.reduce((min, c) => Math.min(min, parseInt(c.established)), 3000);
  const districtsCovered = new Set(convents.map(c => c.address.split(', ').pop())).size;
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Province Overview</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-indigo-50 rounded-lg p-4 flex items-center">
          <div className="bg-indigo-100 p-3 rounded-full mr-4">
            <FiHome className="text-indigo-600 text-xl" />
          </div>
          <div>
            <p className="text-2xl font-bold text-indigo-800">{totalConvents}</p>
            <p className="text-sm text-gray-600">Convents</p>
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4 flex items-center">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <FiCalendar className="text-purple-600 text-xl" />
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-800">{oldestYear}</p>
            <p className="text-sm text-gray-600">Oldest Convent</p>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4 flex items-center">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <FiMapPin className="text-blue-600 text-xl" />
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-800">{districtsCovered}</p>
            <p className="text-sm text-gray-600">Districts</p>
          </div>
        </div>
        
        <div className="bg-teal-50 rounded-lg p-4 flex items-center">
          <div className="bg-teal-100 p-3 rounded-full mr-4">
            <FiUsers className="text-teal-600 text-xl" />
          </div>
          <div>
            <p className="text-2xl font-bold text-teal-800">250+</p>
            <p className="text-sm text-gray-600">Sisters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvinceStats;