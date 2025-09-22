import React from 'react';
import socialHeroImage from '../assets/social/social-hero.jpg';
import Mission1 from '../assets/social/mission1.jpg';
import missionImage from '../assets/social/mission.jpg';
import empowermentImage from '../assets/social/empowerment.jpg';
import communityImage from '../assets/social/community.jpg';
import { Link } from 'react-router-dom';

const Social = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 md:h-screen max-h-[800px] overflow-hidden">
        <img
          src={socialHeroImage}
          alt="Social Apostolate Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Social Apostolate
            </h1>
            <blockquote className="text-xl md:text-2xl text-white italic mb-8">
              "He sent me to bring good news to the poor, to proclaim liberty to the captives and to declare the year of God's favour..."
              <footer className="mt-2 text-lg not-italic">— Luke 4:16ff</footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            This prophecy of Isaiah was fulfilled in Jesus, and it beckons us to embrace our mission mandate to continue His mission on earth. The Servant of God, Mgr RFC Mascarenhas the Founder, was inspired by this mission mandate of Jesus and the birth of Bethany is an eloquent testimony of his response to this divine call.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            Founder's passion for mission and compassion for the people transformed many lives. He brought the Good News to the poor, through his missionary activities and set an example for us the Bethany Sisters, to champion the cause of those on the fringes of the society, very specially the girl children and women. He gave us an impetus to search for the faceless, voiceless and powerless.
          </p>
        </div>
      </section>

      {/* Founder's Legacy */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 ">
              <img
                src={Mission1}
                alt="Servant of God RFC Mascarenhas"
                className="w-full h-auto rounded-xl shadow-2xl object-contain 
               transition-transform duration-300 ease-in-out hover:scale-90"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Founder's Legacy</h2>
              <p className="text-lg mb-6">
                This verse from Isaiah re-echoed in Jesus, reminds us today that our mission is a continuation of Jesus' mission on earth. Jesus calls us not only to come to him but to go for him.
              </p>
              <p className="text-lg mb-6">
                Founder's sense of mission transformed many lives. He brought the Good News not only to the poor in his parish but he also set an example for us, the Bethany sisters. He wants us to champion the cause of the poor.
              </p>
              <p className="text-lg">
                The Founder, founding members, and the sisters of yester years are indeed the living Gospels of Christ, who have championed the cause of those on the fringes of the society discarded, valueless and powerless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={missionImage}
              alt="Our Mission"
              className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                Restoration of human dignity through a process of empowerment of the poor and the marginalized.
              </p>
              <p className="text-gray-700">
                Bethany is challenged to participate prophetically in this sacred mission with great diligence and incarnate ourselves in the culture of silence of the oppressed poor.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={empowermentImage}
              alt="Our Vision"
              className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                A just and humane society where the compassionate love of God is manifested especially to the poor and the marginalized.
              </p>
              <p className="text-gray-700 mt-4">
                Inspired by the spirit of the Founder, and in response to the clarion call of the XVI General Chapter Bethany re-commits to bring the Good News of liberation to all especially to the victims of human trafficking and helpless migrants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Current Initiatives</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={communityImage}
                alt="Community Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Community Development</h3>
                <p className="text-gray-700">
                  Working in remote areas to uplift marginalized communities through education, healthcare, and livelihood programs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={empowermentImage}
                alt="Women Empowerment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Women Empowerment</h3>
                <p className="text-gray-700">
                  Focusing on education and skill development for women and girl children to break the cycle of poverty.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={missionImage}
                alt="Anti-Trafficking"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Anti-Trafficking</h3>
                <p className="text-gray-700">
                  Rescuing and rehabilitating victims of human trafficking with focus on prevention and legal advocacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-16 px-4 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Goal</h2>
          <p className="text-xl mb-8">
            Fullness of life for all especially the poor, the marginalized and the socially backward sections of the society with the primary focus on women and children.
          </p>
          <div className="bg-white text-blue-900 rounded-lg p-6 max-w-2xl mx-auto shadow-lg">
            <p className="text-lg">
              "The mission of social liberation has been the prime concern of the Congregation of the Sisters of the Little Flower of Bethany since its inception."
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-700 mb-8">
            Inspired by the spirit of the Founder, Bethany continues to bring the Good News of liberation to all even beyond the centenary.
          </p>
          <Link to ="/contact"><button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
            Get Involved
          </button> </Link>
        </div>
      </section>
    </div>
  );
};

export default Social;