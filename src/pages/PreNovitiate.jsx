// src/components/PreNovitiate.jsx
import React from 'react';

// Importing images from assets folder
import introImage from '../assets/pre-novitiate-intro.jpg';
import community1 from '../assets/candidates/community-life1.jpg';
import community2 from '../assets/candidates/community-life2.jpg';
import community3 from '../assets/candidates/community-life3.jpg';
import community4 from '../assets/candidates/community-life4.jpg';
import mariaTheresa from '../assets/formators/sr_sharlet.jpg';
import clare from '../assets/formators/Sr Hilda Dias BS.jpg';
import magdalene from '../assets/formators/Sr Hilda Dias BS.jpg';
import agnes from '../assets/formators/sr_lidwin.jpg';
import bernadette from '../assets/formators/sr_savitha.jpg';
import catherine from '../assets/formators/Sr. Simon BS.jpg';

const PreNovitiate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-emerald-50 font-serif">
      {/* Header Section */}
      <header className="relative bg-emerald-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-32 md:py-40 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Pre-Novitiate Formation</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto italic">
            "A sacred journey of discernment and preparation for religious life"
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-center">Understanding the Pre-Novitiate</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="bg-white w-full h-64 md:h-96 flex items-center justify-center rounded-xl overflow-hidden">
                <img 
                  src={introImage} 
                  alt="Pre-Novitiate community gathering" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <p className="text-lg mb-6 leading-relaxed">
                The period of <span className="font-bold text-emerald-700">Pre-Novitiate</span> is a gradual transition from lay life to the life proper to the Novitiate. It is a time in which the Institute and the <span className="font-bold text-emerald-700">pre-novice</span> begin to learn to know each other (Const. 76).
              </p>
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-emerald-600">
                <p className="italic text-emerald-800">
                  "This sacred time allows both the community and the pre-novice to discern God's call together in mutual discovery and growth."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Goal Section */}
        <div className="bg-emerald-800 text-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Goal</h2>
          <p className="text-xl text-center max-w-4xl mx-auto">
            A Pre-Novice confirms her desire to be a true follower of Jesus, acquaints herself with the life and mission of the Congregation, and prepares herself for the Novitiate formation.
          </p>
        </div>
      </section>

      {/* Pre-Novices Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-800 mb-12 text-center">Our Pre-Novices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pre-Novice 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-white w-full h-64 flex items-center justify-center">
              <img 
                src={mariaTheresa} 
                alt="Sister Maria Theresa" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Sister Maria Theresa</h3>
              <p className="text-gray-600 italic mb-4">Pre-Novice since 2023</p>
              <p className="text-gray-700">
                "The Pre-Novitiate has helped me deepen my relationship with Christ through daily prayer and community life."
              </p>
            </div>
          </div>
          
          {/* Pre-Novice 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-white w-full h-64 flex items-center justify-center">
              <img 
                src={clare} 
                alt="Sister Clare" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Sister Clare</h3>
              <p className="text-gray-600 italic mb-4">Pre-Novice since 2023</p>
              <p className="text-gray-700">
                "Learning the Bethany charism has given me a new perspective on serving Christ through serving others."
              </p>
            </div>
          </div>
          
          {/* Pre-Novice 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-white w-full h-64 flex items-center justify-center">
              <img 
                src={magdalene} 
                alt="Sister Magdalene" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Sister Magdalene</h3>
              <p className="text-gray-600 italic mb-4">Pre-Novice since 2024</p>
              <p className="text-gray-700">
                "The guidance of our formators has been invaluable in helping me discern my vocation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formators Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-emerald-50 rounded-2xl mb-16">
        <h2 className="text-3xl font-bold text-emerald-800 mb-12 text-center">Our Formators</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Formator 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-white w-full h-64 flex items-center justify-center">
              <img 
                src={agnes} 
                alt="Mother Agnes" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Mother Agnes</h3>
              <p className="text-gray-600 font-semibold mb-2">Director of Pre-Novitiate Formation</p>
              <p className="text-gray-700 mb-4">
                25 years of formation experience in guiding pre-novices on their spiritual journey.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">✉️ agnes@bethanysisters.org</span>
              </div>
            </div>
          </div>
          
          {/* Formator 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-white w-full h-64 flex items-center justify-center">
              <img 
                src={bernadette} 
                alt="Sister Bernadette" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Sister Bernadette</h3>
              <p className="text-gray-600 font-semibold mb-2">Spiritual Director</p>
              <p className="text-gray-700 mb-4">
                Specializes in Ignatian spirituality with 15 years of experience in vocational discernment.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">✉️ bernadette@bethanysisters.org</span>
              </div>
            </div>
          </div>
          
          {/* Formator 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-white w-full h-64 flex items-center justify-center">
              <img 
                src={catherine} 
                alt="Sister Catherine" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Sister Catherine</h3>
              <p className="text-gray-600 font-semibold mb-2">Formation Advisor</p>
              <p className="text-gray-700 mb-4">
                Focus on community living and apostolic service with expertise in the Bethany charism.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">✉️ catherine@bethanysisters.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Experience */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Community Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                The Pre-Novitiate period includes meaningful community experiences where pre-novices get to know the community and the apostolic life of Bethany Sisters.
              </p>
              <p className="text-lg">
                Through shared prayer, communal living, and participation in the congregation's mission, pre-novices gradually integrate into the rhythm of religious life while discerning their vocation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl overflow-hidden flex items-center justify-center h-48">
                <img 
                  src={community1} 
                  alt="Community prayer" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-white rounded-xl overflow-hidden flex items-center justify-center h-48">
                <img 
                  src={community2} 
                  alt="Group study" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-white rounded-xl overflow-hidden flex items-center justify-center h-48">
                <img 
                  src={community3} 
                  alt="Apostolic work" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-white rounded-xl overflow-hidden flex items-center justify-center h-48">
                <img 
                  src={community4} 
                  alt="Community meal" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Remains unchanged */}
    </div>
  );
};

export default PreNovitiate;