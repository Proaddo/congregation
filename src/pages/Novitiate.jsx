// novitiate.jsx
import React from 'react';
import novitiate1 from '../assets/novitiate1.jpg';
import novitiate2 from '../assets/novitiate2.jpg';
import novitiate3 from '../assets/novitiate3.jpg';

const Novitiate = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Novitiate
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            The Novitiate in its real meaning is the beginning of a spiritual journey in religious life 
            and of a new and renewed 'yes' to God. Thus it is the beginning of a process of surrender 
            to the Lord that will continue all through one's life (Const. 79).
          </p>
        </div>
        <div className="md:w-1/2 bg-white rounded-xl shadow-lg flex items-center justify-center p-4">
          <img 
            src={novitiate1} 
            alt="Novitiate spiritual journey" 
            className="max-h-96 object-contain"
          />
        </div>
      </div>

      {/* Goal Section */}
      <div className="bg-amber-50 rounded-2xl p-8 mb-16 border-l-4 border-amber-400">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Goal</h2>
        <p className="text-slate-700">
          The Novice grows into the knowledge of and intimacy with Jesus, through a process of inner 
          transformation leading her to make a whole hearted commitment to Jesus through the evangelical 
          counsels as the handmaid of the Lord for God's work according to the Charism and Spirituality 
          of the Congregation.
        </p>
      </div>

      {/* Objectives Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          Objectives
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-white rounded-lg mb-4 w-full h-48 flex items-center justify-center">
              <img 
                src={novitiate2} 
                alt="Trinitarian Spirituality" 
                className="max-h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Trinitarian Foundation
            </h3>
            <p className="text-slate-600">
              To live one's spiritual journey on the foundation of Trinitarian Spirituality
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Personal Attachment to Christ
            </h3>
            <p className="text-slate-600 mb-4">
              To grow in prayer and personal attachment to the person of Jesus Christ
            </p>
            <div className="bg-white rounded-lg w-full h-48 flex items-center justify-center">
              <img 
                src={novitiate3} 
                alt="Prayer and attachment to Christ" 
                className="max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Objectives List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "To imbibe the Charism and Spirituality of Bethany, and to develop an identity of a Bethany Sister as the handmaid of the Lord in faith-surrender",
          "To understand and live the essential elements of consecrated life, steadily leading to a religious commitment through the community",
          "To develop personal maturity, and to appreciate one's womanhood and grow in interpersonal relationships",
          "To familiarize and participate in the mission of the Church and the Congregation with compassionate love for the poor"
        ].map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
              {index + 1}
            </div>
            <p className="text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novitiate;