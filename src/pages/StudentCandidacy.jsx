// src/components/StudentCandidacy.jsx
import React from 'react';

// Import images from assets folder
import SrSavitha from '../assets/formators/Sr. Simon BS.jpg';
import SrLidwin from '../assets/formators/Sr  Pramila Fernandes BS.jpg';
import SrSharlet from '../assets/formators/sr_sharlet.jpg';

import Candidate1 from '../assets/candidates/studentcandidate1.jpg';
import Candidate2 from '../assets/candidates/studentcandidate2.jpg';
import Candidate3 from '../assets/candidates/studentcandidate3.jpg';
import Candidate4 from '../assets/candidates/studentcandidate4.jpg';
import Candidate5 from '../assets/candidates/studentcandidate5.jpg';
import Candidate6 from '../assets/candidates/studentcandidate6.jpg';

const StudentCandidacy = () => {
  // Formators data
  const formators = [
    {
      id: 1,
      name: "Sr M Savitha BS",
      role: "Formation Director",
      image: SrSavitha,
      description: "Guides candidates in their spiritual and academic formation journey."
    },
    {
      id: 2,
      name: "Sr M Lidwin Veera Rebello BS",
      role: "Spiritual Director",
      image: SrLidwin,
      description: "Provides spiritual guidance and fosters prayer life through Bible study."
    },
    {
      id: 3,
      name: "Sr Sharlet Rodrigues BS",
      role: "Academic Coordinator",
      image: SrSharlet,
      description: "Oversees academic development and preparation for apostolate."
    }
  ];

  // Candidates data
  const candidates = [
    {
      id: 1,
      image: Candidate1,
      testimony: "The academic formation has prepared me well for future apostolic work."
    },
    {
      id: 2,
      image: Candidate2,
      testimony: "My prayer life has deepened through regular Bible study and catechism."
    },
    {
      id: 3,
      image: Candidate3,
      testimony: "Community living has taught me the value of shared faith and service."
    },
    {
      id: 4,
      image: Candidate4,
      testimony: "I've discovered my potential through the guidance of our formators."
    },
    {
      id: 5,
      image: Candidate5,
      testimony: "The program has strengthened my relationship with Christ daily."
    },
    {
      id: 6,
      image: Candidate6,
      testimony: "Academic studies are helping me prepare for my future mission."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-12 mt-8">
          <div className="inline-block bg-gradient-to-r from-green-700 to-teal-700 text-white text-3xl md:text-5xl font-bold px-8 py-4 rounded-2xl mb-6 transform rotate-1 shadow-lg">
            Student Candidacy
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-6">
            Deepening the Call to Follow Christ
          </h2>
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-3xl mx-auto border border-green-100">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-green-700 text-4xl">✝</span>
              </div>
            </div>
            <blockquote className="text-xl italic text-gray-700 border-l-4 border-green-500 pl-4 py-1 text-center">
              "Take my yoke upon you and learn from me, for I am gentle and humble in heart" (Mt 11:29).
            </blockquote>
            <p className="mt-6 text-gray-600 text-center">
              The Student Candidacy program focuses on deepening one's awareness of the call to follow Christ 
              through Bethany while acquiring the academic foundation necessary for further formation and apostolic service.
            </p>
          </div>
        </header>

        {/* Goal and Objectives Section */}
        <section className="mb-16 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-green-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-800 mb-2">Program Overview</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="mb-8 bg-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
              <span className="bg-green-700 text-white h-10 w-10 rounded-full flex items-center justify-center mr-3 text-lg">G</span>
              <span className="border-b-2 border-green-300 pb-1">Goal:</span>
            </h3>
            <p className="text-lg text-gray-700 pl-14">
              The candidate grows in the deeper awareness of her call to follow Christ in and through Bethany 
              and acquires academic standard for further formation.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
              <span className="bg-green-700 text-white h-10 w-10 rounded-full flex items-center justify-center mr-3 text-lg">O</span>
              <span className="border-b-2 border-green-300 pb-1">Objectives:</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-14">
              {[
                "To further deepen the Christian faith and to lead her to know and love Jesus",
                "To foster her prayer life through Bible study and catechism",
                "To get acquainted with the knowledge of the Institute and its mission",
                "To give a taste for community living",
                "To know the candidate and to develop her potentialities",
                "To help her pursue academic studies in view of the apostolate of the Institute"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 font-bold mr-2 mt-1.5">›</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formators Section */}
          <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-green-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-2">Our Formators</h2>
              <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-md mx-auto">
                Experienced guides dedicated to spiritual growth and academic formation.
              </p>
            </div>

            <div className="space-y-8">
              {formators.map((formator) => (
                <div key={formator.id} className="flex flex-col md:flex-row gap-6 items-center p-5 border border-green-100 rounded-xl bg-gradient-to-r from-white to-green-50 shadow-sm hover:shadow-md transition-all">
                  <div className="relative">
                    <img 
                      src={formator.image} 
                      alt={formator.name} 
                      className="w-32 h-32 object-cover rounded-xl shadow-lg border-4 border-white"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Formator
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-bold text-green-800">{formator.name}</h4>
                    <p className="text-green-600 font-medium">{formator.role}</p>
                    <p className="mt-3 text-gray-600">{formator.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Candidates Section */}
          <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-green-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-2">Our Candidates</h2>
              <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-md mx-auto">
                Students deepening their faith and preparing for apostolic service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="flex flex-col items-center p-5 border border-green-100 rounded-xl bg-gradient-to-b from-white to-green-50 shadow-sm hover:shadow-md transition-all">
                  <div className="relative mb-4">
                    <img 
                      src={candidate.image} 
                      alt="Candidate" 
                      className="w-24 h-24 object-cover rounded-full shadow-lg border-4 border-white"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Candidate
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600 text-center text-sm italic">"{candidate.testimony}"</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Academic Formation */}
        <section className="mt-16 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-green-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-2">Academic Formation</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our academic program prepares candidates for future apostolic work through comprehensive studies in theology, scripture, and pastoral ministry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Theological Studies",
                description: "Deep exploration of Catholic doctrine, church history, and moral theology",
                icon: "📚"
              },
              {
                title: "Scripture & Catechism",
                description: "In-depth Bible study and understanding of the Catechism of the Catholic Church",
                icon: "✝️"
              },
              {
                title: "Pastoral Formation",
                description: "Practical training for ministry and service in various apostolates",
                icon: "🙏"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-green-50 to-white p-6 rounded-xl border border-green-200 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Journey */}
        <section className="mt-16 bg-gradient-to-br from-green-700 to-teal-800 rounded-2xl shadow-xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">The Spiritual Journey</h2>
              <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-white text-green-700 h-8 w-8 rounded-full flex items-center justify-center mr-3">1</span>
                  Personal Prayer
                </h3>
                <p>
                  Candidates develop a consistent personal prayer life through daily meditation, 
                  Eucharistic adoration, and spiritual reading.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-white text-green-700 h-8 w-8 rounded-full flex items-center justify-center mr-3">2</span>
                  Liturgical Life
                </h3>
                <p>
                  Active participation in the liturgical life of the Church, including daily Mass, 
                  Liturgy of the Hours, and sacramental life.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-white text-green-700 h-8 w-8 rounded-full flex items-center justify-center mr-3">3</span>
                  Spiritual Direction
                </h3>
                <p>
                  Regular meetings with a spiritual director to discern God's will and grow in holiness.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-white text-green-700 h-8 w-8 rounded-full flex items-center justify-center mr-3">4</span>
                  Community Prayer
                </h3>
                <p>
                  Shared prayer experiences that foster unity and communal spiritual growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 py-8 text-center text-gray-600 border-t border-green-200">
          <div className="mb-4">
            <div className="inline-block bg-green-800 text-white text-xl font-bold px-6 py-2 rounded-lg mb-4">
              Student Candidacy
            </div>
          </div>
          <p>© {new Date().getFullYear()} Bethany Institute Student Candidacy Program</p>
          <p className="mt-2 text-sm">123 Formation Road, Spiritual Heights, Faithville</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-green-600 hover:text-green-800">
              Contact Us
            </a>
            <span>•</span>
            <a href="#" className="text-green-600 hover:text-green-800">
              Vocation Resources
            </a>
            <span>•</span>
            <a href="#" className="text-green-600 hover:text-green-800">
              Prayer Request
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StudentCandidacy;