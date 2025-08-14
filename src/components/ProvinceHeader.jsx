// src/components/ProvinceHeader.jsx
import React from 'react';

const ProvinceHeader = () => {
  return (
    <header className="text-center py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
        Bangalore Province
      </h1>
      <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        The Bangalore Province of the Bethany Congregation comprises 19 convents 
        serving communities across Karnataka through education, healthcare, and social outreach.
      </p>
      <div className="mt-8 flex justify-center">
        <div className="relative w-full max-w-2xl h-64 rounded-xl overflow-hidden shadow-xl border-2 border-white">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-800 opacity-90"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Serving with Compassion Since 1921</h2>
              <p className="max-w-lg">Rooted in faith and committed to service, the sisters of Bangalore Province continue their mission of love and transformation.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProvinceHeader;