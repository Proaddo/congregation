import React from 'react';
import elderlyCare1 from '../assets/elder/elderlycare1.jpg';
import elderlyCare2 from '../assets/elder/elderlycare2.jpg';
import elderlyCare3 from '../assets/elder/elderlycare3.jpg';
import elderlyCare4 from '../assets/elder/elderlycare4.jpg';
import elderlyCare5 from '../assets/elder/elderlycare5.jpg';


const CareElderly = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src={elderlyCare1} 
          alt="Elderly care" 
          className="w-full h-full object-cover absolute"
        />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Compassionate Care for the Elderly</h1>
            <p className="text-xl md:text-2xl mb-8">Continuing the mission of Bethany to serve the most vulnerable in society with love and dignity</p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
              Learn About Our Homes
            </button>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Mission Inspired by Christ</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              In its constitutions the Founder had made it mandatory for Bethany to be open to the signs of the time and attend to the needs of the Church and society. 
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Responding to the invitation of the Bishops in Germany, Bethany accepted to render service in three parishes from the year 1973.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={elderlyCare2} 
              alt="Elderly care mission" 
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Elderly Care Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img 
                src={elderlyCare3} 
                alt="Residential care" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Residential Care</h3>
                <p className="text-gray-600">
                  Safe and comfortable homes for seniors who need assistance with daily living activities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img 
                src={elderlyCare4} 
                alt="Medical support" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Medical Support</h3>
                <p className="text-gray-600">
                  Professional healthcare services tailored to the needs of each resident.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img 
                src={elderlyCare5} 
                alt="Spiritual care" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Spiritual Care</h3>
                <p className="text-gray-600">
                  Nurturing the spiritual needs of our residents through prayer and fellowship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Responding to the Signs of the Times</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              The XII General Chapter of the Congregation held in the year 1992 reading the signs of the time perceived the need to open old age homes in India too to cater to the needs of the elderly who have no one to care for them in their homes.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              This need arose due to the evils that have shot up in the modern society where the elderly have become a burden to the younger generation.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Hence Bethany has launched into this new avenue of service to humanity and renders service in 3 homes for the elderly in India.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Serving the Elderly</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support helps us continue Christ's mission of compassion and care for our elderly brothers and sisters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
              Donate Now
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition duration-300">
              Volunteer
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Bethany Elderly Care</h3>
              <p className="text-gray-400 max-w-md">
                Continuing the legacy of compassionate service inspired by Jesus Christ's care for the elderly.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">info@bethanyelderly.org</li>
                  <li className="text-gray-400">+91 1234567890</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* Add other social icons as needed */}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bethany Elderly Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareElderly;