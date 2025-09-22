import React from 'react';
import founderPortrait from '../assets/founder/portrait.jpg';
import memorialExterior from '../assets/founder/exterior.jpg';
import founderStatue from '../assets/founder/statue.jpg';
import museumDisplay from '../assets/founder/museum.jpg';
import prayerArea from '../assets/founder/prayer.jpg';
import historical1 from '../assets/founder/historical1.jpg';
import historical2 from '../assets/founder/historical2.jpg';
import historical3 from '../assets/founder/historical3.jpg';
import historical4 from '../assets/founder/historical4.jpg';
import visitors from '../assets/founder/visitors.jpg';
import { Link } from 'react-router-dom';

const FounderMemorial = () => {
  // All 10 images are now properly imported above
  
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section - Image 1 */}
      <div className="relative h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
        <img
          src={memorialExterior}
          alt="Founder's Memorial Building Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Servant of God RFC Mascarenhas
            </h1>
            <p className="text-xl md:text-2xl text-white">
              Founder of the Sisters of the Little Flower of Bethany
            </p>
          </div>
        </div>
      </div>

      {/* Introduction - Image 2 */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-[400px]">
              <img
                src={founderPortrait}
                alt="Portrait of Founder"
                className="w-full h-full object-contain bg-gray-100 p-4"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Life and Legacy</h2>
            <p className="text-lg text-gray-700 mb-4">
              Raymond Francis Camillus Mascarenhas (1875-1960) was a visionary priest who dedicated his life to serving the poor and marginalized.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="italic text-blue-800">
                "My only desire is to do the will of God and work for His glory until my last breath."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Memorial Features - Images 3-5 */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Memorial Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 - Image 3 */}
            <div className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-xl h-full transform transition-transform duration-300 hover:scale-90">
              <div className="h-64 bg-gray-100 flex items-center justify-center ">
                <img
                  src={museumDisplay}
                  alt="Memorial Museum"
                  className="h-full w-full object-contain p-4 "
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Historical Museum</h3>
                <p>Documenting the Founder's life through artifacts and photographs.</p>
              </div>
            </div>

            {/* Feature 2 - Image 4 */}
            <div className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-xl h-full transform transition-transform duration-300 hover:scale-90">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={founderStatue}
                  alt="Founder's Statue"
                  className="h-full w-full object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Bronze Statue</h3>
                <p>Life-sized sculpture capturing the Founder's compassionate spirit.</p>
              </div>
            </div>

            {/* Feature 3 - Image 5 */}
            <div className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-xl h-full transform transition-transform duration-300 hover:scale-90">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={prayerArea}
                  alt="Prayer Garden"
                  className="h-full w-full object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Meditation Garden</h3>
                <p>Serene space for quiet reflection and prayer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Images 6-9 */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Historical Gallery</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <div className="bg-white p-2 rounded-lg shadow h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-90">
              <img src={historical1} alt="Historical Photo 1" className="h-full w-full object-contain" />
            </div>
            <div className="bg-white p-2 rounded-lg shadow h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-90">
              <img src={historical2} alt="Historical Photo 2" className="h-full w-full object-contain" />
            </div>
            <div className="bg-white p-2 rounded-lg shadow h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-90">
              <img src={historical3} alt="Historical Photo 3" className="h-full w-full object-contain" />
            </div>
            <div className="bg-white p-2 rounded-lg shadow h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-90">
              <img src={historical4} alt="Historical Photo 4" className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Visit Information - Image 10 */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 h-[400px] bg-gray-100 flex items-center justify-center">
              <img
                src={visitors}
                alt="Visitors at Memorial"
                className="h-full w-full object-contain p-4"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan Your Visit</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800">Hours</h3>
                  <p>Monday-Saturday: 9AM-5PM<br/>Sunday: 12PM-4PM</p>
                </div>
                <Link to ="/contact"> <button className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-4">
                  Request Guided Tour
                </button> </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderMemorial;