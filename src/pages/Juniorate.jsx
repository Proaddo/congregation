// src/pages/Juniorate.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

// Import all juniorate images
import juniorate1 from "../assets/juniorate1.jpg";
import juniorate2 from "../assets/juniorate2.jpg";
import juniorate3 from "../assets/juniorate3.jpg";
import juniorate4 from "../assets/juniorate4.jpg";
import juniorate5 from "../assets/juniorate5.jpg";
import juniorate6 from "../assets/juniorate6.jpg";
import juniorate7 from "../assets/juniorate7.jpg";

const Juniorate = () => {
  const navigate = useNavigate();

  // Hero images
  const heroImages = [juniorate1, juniorate2, juniorate3];

  // Objective images
  const objectiveImages = [
    { img: juniorate4, title: "Spiritual Development", desc: "Deepen spiritual life through prayer, study, and reflection on the vows and Constitutions", link: "/spiritual-development" },
    { img: juniorate5, title: "Ecclesial Integration", desc: "Foster a sense of belonging and active participation in the local and universal Church", link: "/ecclesial-integration" },
    { img: juniorate6, title: "Professional Formation", desc: "Develop professional skills and engage in apostolate according to the needs of the Church", link: "/professional-formation" },
    { img: juniorate7, title: "Human Maturity", desc: "Cultivate emotional balance, healthy relationships, and personal growth within community", link: "/human-maturity" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-6">
          Juniorate Formation
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            The Juniorate is a vital period of temporary commitment where junior sisters deepen
            their consecration to God and integration into the Bethany community. It is a time for
            ongoing formation, both human and spiritual, and for active participation in the mission
            of the Congregation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {heroImages.map((img, i) => (
              <div key={i} className="w-full h-64 rounded-xl overflow-hidden shadow-md">
                <img
                  src={img}
                  alt={`Juniorate ${i + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Goal Section */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 mb-16 border-l-8 border-amber-600 shadow-sm">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">Our Goal</h2>
        <p className="text-lg text-slate-700">
          To enable junior sisters to grow in their vocation as Handmaids of the Lord, rooted in the
          Charism of Bethany, preparing them for perpetual profession through deeper integration
          into community life and mission.
        </p>
      </div>

      {/* Objectives Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">
          Formation Objectives
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {objectiveImages.map((obj, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="w-full h-52 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={obj.img}
                    alt={obj.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-amber-700 mb-2">
                    {obj.title}
                  </h3>
                  <p className="text-slate-600">{obj.desc}</p>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Formation Pillars */}
      <div className="bg-amber-800 text-white rounded-3xl p-10 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Pillars of Juniorate Formation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Spiritual Life", content: "Deepening prayer life and sacramental participation" },
            { title: "Intellectual Growth", content: "Theological study and vocational understanding" },
            { title: "Community Life", content: "Living the charism through sisterly communion" },
            { title: "Apostolic Mission", content: "Service to the Church through various ministries" },
          ].map((pillar, index) => (
            <div key={index} className="bg-amber-700 p-6 rounded-xl text-center">
              <div className="text-4xl font-light mb-4">{index + 1}</div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p>{pillar.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-slate-800 mb-6">
          Journey of Transformation
        </h3>
        <p className="text-slate-600 mb-8 leading-relaxed">
          During the Juniorate period, sisters progressively assume responsibilities in community
          life and mission. This transitional phase includes guided experiences in various
          ministries, ongoing discernment, and preparation for perpetual profession through
          mentorship and theological reflection.
        </p>
        
      </div>
    </div>
  );
};

export default Juniorate;
