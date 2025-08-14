// src/pages/Tertiate.jsx
import React from 'react';

// ✅ Go up one folder before accessing /assets
import TerrianshipImage1 from '../assets/tertain/terrianship.jpg';
import TerrianshipImage2 from '../assets/tertain/terrianship2.jpg';
import TerrianshipImage3 from '../assets/tertain/terrianship3.jpg';

const Tertiate = () => {
  const images = [TerrianshipImage1, TerrianshipImage2, TerrianshipImage3];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header with Multiple Images */}
      <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative h-80 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={img}
              alt={`Terrianship ${index + 1}`}
              className="w-full h-full object-contain object-center bg-gray-100"
            />
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-2">
          Terrianship
        </h1>

        <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-10 border-b pb-4">
          Tertianship – Year of Preparation for Perpetual Profession
        </h2>

        <p className="text-gray-700 mb-8">
          The Juniorate finds its culmination in a serious preparation for perpetual commitment. Therefore, an extended period of time, in the last year of the Juniorate is set aside during which further deepening and integration of all the elements can take place.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <li className="bg-indigo-50 p-4 rounded-lg">
            A deepening of the appreciation of consecrated life and the mission of Christ
          </li>
          <li className="bg-indigo-50 p-4 rounded-lg">
            Providing time of quiet and prayer to be more docile to the Holy Spirit
          </li>
          <li className="bg-indigo-50 p-4 rounded-lg">
            Guiding sisters to interiorize Gospel values and the Constitutions
          </li>
          <li className="bg-indigo-50 p-4 rounded-lg">
            Enabling re-ordering of value systems according to Christ's values
          </li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-10">
          <strong className="block text-xl font-semibold text-gray-900 mb-2">Goal:</strong>
          <p className="text-gray-800">
            Experiencing deeper intimacy with Jesus leading to self-transformation culminating in perpetual commitment to Christ in the Congregation
          </p>
        </div>

        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Objectives:</h3>
        <ol className="list-decimal pl-8 space-y-4 mb-10">
          <li className="pb-2 border-b border-gray-100">
            To arrive at a deeper experience of God through growth in prayer leading to total commitment to Jesus
          </li>
          <li className="pb-2 border-b border-gray-100">
            To deepen love for the Institute and grow in creative fidelity to Bethany's Charism and Spirituality
          </li>
          <li className="pb-2 border-b border-gray-100">
            To experience deeper community life reflecting Trinitarian culture
          </li>
          <li className="pb-2 border-b border-gray-100">
            To be effective in mission for a just and humane society
          </li>
          <li>
            To re-order and integrate dimensions of consecrated life with Jesus' values
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Tertiate;
