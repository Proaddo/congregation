import React from 'react';
import medicalHero from '../assets/medical/hero.jpg';
import founderHealing from '../assets/medical/founder-healing.jpg';
import hospitalCare from '../assets/medical/hospital-care.jpg';
import communityHealth from '../assets/medical/community-health.jpg';
import elderlyCare from '../assets/medical/elderly-care.jpg';
import prayerHealing from '../assets/medical/prayer-healing.jpg';

const Medical= () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
        <img
          src={medicalHero}
          alt="Medical Apostolate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-teal-900/60 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Healing Ministry
            </h1>
            <blockquote className="text-xl md:text-2xl text-white italic mb-8">
              "I will restore health to you, and your wounds I will heal"
              <footer className="mt-2 text-lg not-italic">— Jeremiah 30:17</footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Jesus the compassionate healer went about doing good bringing health and wholeness to the lives of those who suffered. Healing ministry is an opportunity to build a better, healthy and wholesome world.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            After the example of Jesus the great healer, our Founder was inspired to initiate the sisters for this healing ministry. From the very early beginnings of the Congregation he had a vision for the uplift of the sick, the poor, depressed and downtrodden.
          </p>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-2xl w-full max-w-md">
                <img
                  src={founderHealing}
                  alt="Founder's Healing Ministry"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="lg:w-3/5">
              <h2 className="text-3xl font-bold mb-6">Founder's Inspiration</h2>
              <div className="space-y-6 text-lg">
                <p>
                  With this in mind he encouraged and trained the sisters to undertake healing ministry in the remotest villages and dispense medicine. He desired that through this ministry we aim at the total well-being and wholeness of the person.
                </p>
                <blockquote className="border-l-4 border-teal-400 pl-6 py-2 italic bg-teal-700/30 rounded-r-lg">
                  "The diseases are cured as much by prayer, soft and cheering words and devoted attention of those attending on the patients as by medicines"
                </blockquote>
                <p>
                  The contemplation of Christ in the healing ministry is the source of energy to those engaged in this apostolate. The medical apostolate is distinguished not only by efficiency but also by spiritual fervor and love that we bring to the sick.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">Our Healing Approach</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img
                src={hospitalCare}
                alt="Comprehensive Care"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Holistic Care</h3>
              <p className="text-gray-700">
                Combining medical expertise with spiritual care for complete healing of body, mind and spirit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img
                src={communityHealth}
                alt="Community Health"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Community Health</h3>
              <p className="text-gray-700">
                Bringing healthcare to remote villages and underserved communities.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img
                src={prayerHealing}
                alt="Spiritual Healing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Prayer & Compassion</h3>
              <p className="text-gray-700">
                Healing through prayer, kind words and devoted attention to each patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={elderlyCare}
                  alt="Elderly Care"
                  className="w-full h-full object-cover min-h-[400px]"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-teal-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Providing comprehensive health care to the rural poor and sick to create healthy communities around.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      1
                    </div>
                    <p className="text-gray-700">
                      <strong>Compassion:</strong> Going where it hurts, entering into places of pain and anguish of those who suffer.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      2
                    </div>
                    <p className="text-gray-700">
                      <strong>Knowledge:</strong> Equipping ourselves with the latest medical knowledge and ethical practices.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      3
                    </div>
                    <p className="text-gray-700">
                      <strong>Presence:</strong> Bringing Christ's soothing presence wherever physical suffering is manifested.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Goals */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-teal-800 text-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg">
              To provide compassionate and loving care to the sick and the suffering, following Christ's example as the Divine Healer.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-teal-100">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">Our Goals</h2>
            <ol className="list-decimal pl-6 space-y-4 text-gray-700">
              <li>To witness Christian values of respect and dignity by showing special love and care to the poor</li>
              <li>To promote prevention of disease, diagnosis and efficient treatment of the sick</li>
              <li>Overall improvement of health standards of the underprivileged and marginalised</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Join Our Healing Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Taking inspiration from the Founder, we offer our services whether small or great, institutional or non-institutional.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-teal-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
              Volunteer
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
              Donate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Medical;