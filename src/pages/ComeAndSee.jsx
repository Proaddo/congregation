// src/components/ComeAndSee.jsx
import React from 'react';

// Import images from assets folder
import SrSavitha from '../assets/formators/sr_savitha.jpg';
import SrLidwin from '../assets/formators/sr_lidwin.jpg';
import SrSharlet from '../assets/formators/sr_sharlet.jpg';

import Candidate1 from '../assets/candidates/candidate1.jpg';
import Candidate2 from '../assets/candidates/candidate2.jpg';
import Candidate3 from '../assets/candidates/candidate3.jpg';
import Candidate4 from '../assets/candidates/candidate4.jpg';
import Candidate5 from '../assets/candidates/candidate5.jpg';
import Candidate6 from '../assets/candidates/candidate6.jpg';

const ComeAndSee = () => {
  // Formators data
  const formators = [
    {
      id: 1,
      name: "Sr M Savitha BS",
      role: "Formation Director",
      image: SrSavitha,
      description: "Responsible for guiding candidates through their spiritual journey and formation process."
    },
    {
      id: 2,
      name: "Sr M Lidwin Veera Rebello BS",
      role: "Spiritual Director",
      image: SrLidwin,
      description: "Provides spiritual direction and helps candidates deepen their prayer life."
    },
    {
      id: 3,
      name: "Sr Sharlet Rodrigues BS",
      role: "Academic Coordinator",
      image: SrSharlet,
      description: "Oversees the academic formation and language development of candidates."
    }
  ];

  // Candidates data
  const candidates = [
    {
      id: 1,
      image: Candidate1,
      testimony: "The Come and See program helped me discern my vocation to religious life."
    },
    {
      id: 2,
      image: Candidate2,
      testimony: "I discovered my call to follow Jesus through this beautiful program."
    },
    {
      id: 3,
      image: Candidate3,
      testimony: "Learning to live in community has been a transformative experience."
    },
    {
      id: 4,
      image: Candidate4,
      testimony: "The program helped me develop my potentialities and know myself better."
    },
    {
      id: 5,
      image: Candidate5,
      testimony: "The spiritual guidance I received has deepened my relationship with Christ."
    },
    {
      id: 6,
      image: Candidate6,
      testimony: "I've grown in prayer and discovered the beauty of religious life."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-12 mt-8">
          <div className="inline-block bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-3xl md:text-5xl font-bold px-8 py-4 rounded-2xl mb-6 transform rotate-1 shadow-lg">
            'Come & See'
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-800 mb-6">
            ‘Come and See’ Candidacy
          </h2>
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-3xl mx-auto border border-indigo-100">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-indigo-700 text-4xl">✝</span>
              </div>
            </div>
            <blockquote className="text-xl italic text-gray-700 border-l-4 border-indigo-500 pl-4 py-1 text-center">
              “Rabbi, where do you live”?...“Come and See” (Jn 1:39).
            </blockquote>
            <p className="mt-6 text-gray-600 text-center">
              Those who seek admission to our Institute must have a true vocation to the religious state, 
              a right and supernatural intention, and qualities required by our Constitutions for the mission 
              of the Church entrusted to our Institute (Const. 70).
            </p>
          </div>
        </header>

        {/* Goal and Objectives Section */}
        <section className="mb-16 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-indigo-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-indigo-800 mb-2">Program Overview</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="mb-8 bg-indigo-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center">
              <span className="bg-indigo-700 text-white h-10 w-10 rounded-full flex items-center justify-center mr-3 text-lg">G</span>
              <span className="border-b-2 border-indigo-300 pb-1">Goal:</span>
            </h3>
            <p className="text-lg text-gray-700 pl-14">
              The candidate discovers her call to follow Jesus in Bethany through human and Christian 
              formation and by getting acquainted with the Institute.
            </p>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center">
              <span className="bg-indigo-700 text-white h-10 w-10 rounded-full flex items-center justify-center mr-3 text-lg">O</span>
              <span className="border-b-2 border-indigo-300 pb-1">Objectives:</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-14">
              {[
                "To deepen the Christian faith and to lead the candidate to know and love Jesus",
                "To initiate the candidate into prayer",
                "To grow in the knowledge of the Institute and its mission",
                "To know the candidate and to arrive at clarity of her call to Bethany",
                "To introduce the formee to community living",
                "To help the candidate know herself and to develop her potentialities",
                "To acquire communicative skills in English language."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-2 mt-1.5">›</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formators Section */}
          <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-indigo-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-indigo-800 mb-2">Our Formators</h2>
              <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-md mx-auto">
                Experienced guides dedicated to nurturing spiritual growth and discernment.
              </p>
            </div>

            <div className="space-y-8">
              {formators.map((formator) => (
                <div key={formator.id} className="flex flex-col md:flex-row gap-6 items-center p-5 border border-indigo-100 rounded-xl bg-gradient-to-r from-white to-indigo-50 shadow-sm hover:shadow-md transition-all">
                  <div className="relative">
                    <img 
                      src={formator.image} 
                      alt={formator.name} 
                      className="w-32 h-32 object-cover rounded-xl shadow-lg border-4 border-white"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Formator
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-bold text-indigo-800">{formator.name}</h4>
                    <p className="text-indigo-600 font-medium">{formator.role}</p>
                    <p className="mt-3 text-gray-600">{formator.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Candidates Section */}
          <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-indigo-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-indigo-800 mb-2">Our Candidates</h2>
              <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-md mx-auto">
                Women discerning their vocation and growing in faith through the program.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="flex flex-col items-center p-5 border border-indigo-100 rounded-xl bg-gradient-to-b from-white to-indigo-50 shadow-sm hover:shadow-md transition-all">
                  <div className="relative mb-4">
                    <img 
                      src={candidate.image} 
                      alt="Candidate" 
                      className="w-24 h-24 object-cover rounded-full shadow-lg border-4 border-white"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Candidate
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600 text-center text-sm italic">"{candidate.testimony}"</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Program Timeline */}
        <section className="mt-16 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-indigo-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-indigo-800 mb-2">Program Timeline</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
            
            {/* Timeline items */}
            {[
              {id: 1, title: "Orientation", time: "1 Month", desc: "Introduction to community life and prayer"},
              {id: 2, title: "Spiritual Formation", time: "3 Months", desc: "Deepening prayer life and relationship with Christ"},
              {id: 3, title: "Academic Study", time: "4 Months", desc: "Theology, scripture, and language studies"},
              {id: 4, title: "Apostolic Experience", time: "2 Months", desc: "Practical ministry and service opportunities"},
              {id: 5, title: "Discernment", time: "1 Month", desc: "Personal reflection and vocational discernment"}
            ].map((item, index) => (
              <div key={item.id} className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                <div className="flex-1 px-4 py-2">
                  <div className={`bg-white border-2 ${index % 2 === 0 ? 'border-indigo-500' : 'border-purple-500'} rounded-xl p-5 shadow-md`}>
                    <h3 className="text-xl font-bold text-indigo-800 mb-2">{item.title}</h3>
                    <p className="text-indigo-600 font-medium mb-2">{item.time}</p>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg z-10">
                  {item.id}
                </div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </section>

        
       {/* Footer */}
       <footer className="mt-16 py-8 text-center text-white border-t border-blue-200 bg-[#b71c1c]">
  {/* Removed "Come & See" block */}
  
  <p>© {new Date().getFullYear()} Come & See Candidacy Program</p>
  <p className="mt-2 text-sm">Bethany Convent, 123 Religious Avenue, Spiritville</p>
  <div className="mt-4 flex justify-center space-x-4">
    <a href="#" className="text-white hover:text-blue-100">
      Contact Us
    </a>
    <span className="text-white">•</span>
    <a href="#" className="text-white hover:text-blue-100">
      Vocation Resources
    </a>
    <span className="text-white">•</span>
    <a href="#" className="text-white hover:text-blue-100">
      Prayer Request
    </a>
  </div>
</footer>
 </div>
    </div>
  );
};

export default ComeAndSee;




