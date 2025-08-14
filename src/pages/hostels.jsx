import React from 'react';
import hostel1 from '../assets/hostel/hostel-1.jpg';
import hostel2 from '../assets/hostel/hostel-2.jpg';
import hostel3 from '../assets/hostel/hostel-3.jpg';
import hostel4 from '../assets/hostel/hostel-4.jpg';
import hostel5 from '../assets/hostel/hostel-5.jpg';

const Hostel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-amber-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src={hostel1} 
          alt="Girls hostel" 
          className="w-full h-full object-cover absolute"
        />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hostel Ministry</h1>
            <p className="text-xl md:text-2xl mb-8">Empowering girls through education and holistic formation since 1922</p>
            <button className="bg-white text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-amber-100 transition duration-300">
              Learn About Our Hostels
            </button>
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-amber-800 mb-6">Mgr RFC Mascarenhas' Vision</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              The compassionate pastor that he was, Mgr RFC Mascarenhas strove that girls should receive education on an equal footing with boys as the neglect of their education was a great concern of his heart.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              To provide this facility to the children from the remote villages he opened boarding houses and hostels for girls. Bethany opened its first boarding house in 1922 and Sister Gertrude was appointed the first boarding mistress.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={hostel2} 
              alt="Founder's vision" 
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Holistic Formation */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <img 
                src={hostel3} 
                alt="Holistic education" 
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">Holistic Formation</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Together with the secular knowledge, he desired to give special attention to their moral and spiritual formation.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                The founder encouraged the sisters to pay special attention and to give maternal care to the children.
              </p>
              <blockquote className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600 italic">
                "Let the sisters remember that it is in their schools and boarding houses particularly that the seeds of the growth and prosperity of their Congregation are sown..."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Orphanages Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">Extending Care to the Underprivileged</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Eventually for the benefit of the poorer children he opened orphanages at Kinnigoli, Taccode, Kinnikambla and Kulshekar attached to the schools which continue even today as children's homes.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              The sisters carried on this mission so effectively that these boarding houses and orphanages became the seedbeds for many vocations to religious life.
            </p>
          </div>
          <div>
            <img 
              src={hostel4} 
              alt="Orphanage children" 
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img 
                src={hostel5} 
                alt="Children learning" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Founder's Words</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                "Let the sisters remember that it is in their schools and boarding houses particularly that the seeds of the growth and prosperity of their Congregation are sown and out of those whom they form therein will in great part be drawn those sisters whom in future our Lord will associate with them or give them as successors in the work they do for His love and service" (Const)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-amber-700 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-xl">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-xl">Orphanages Established</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1922</div>
              <div className="text-xl">First Boarding House Opened</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-amber-100 p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">Support Our Mission</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Help us continue providing quality education and care to girls from remote villages.
              </p>
              
            </div>
            <div className="md:w-1/2">
              <img 
                src={hostel3} 
                alt="Support our mission" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Bethany Hostel Ministry</h3>
              <p className="text-gray-400 max-w-md">
                Continuing the legacy of educating and empowering girls since 1922.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Our Hostels</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">hostels@bethany.org</li>
                  <li className="text-gray-400">+91 9876543210</li>
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
            <p>&copy; {new Date().getFullYear()} Bethany Hostel Ministry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hostel;