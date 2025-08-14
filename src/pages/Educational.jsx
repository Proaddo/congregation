import React from 'react';
import besLogo from '../assets/bes-logo.jpg';
import founderImage from '../assets/founder.jpg';
import member1 from '../assets/formators/sr_lidwin.jpg';
import member2 from '../assets/formators/sr_sharlet.jpg';
import member3 from '../assets/formators/sr_savitha.jpg';
import member4 from '../assets/formators/Sr. Simon BS.jpg';
import expansionMap from '../assets/expansion-map.jpg';
import convention1988 from '../assets/juniorate7.jpg';
import convention2001 from '../assets/Juniorate6.jpg';
import convention2008 from '../assets/Juniorate5.jpg';
import jubileeCelebration from '../assets/convents/convent9.jpg';
import jubileeEvent1 from '../assets/convents/convent10.jpg';
import jubileeEvent2 from '../assets/convents/convent11.jpg';

const Educational = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans bg-amber-50 bg-opacity-20">
      {/* Header */}
      <header className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <img 
            src={besLogo} 
            alt="BES Logo" 
            className="w-40 h-40 object-contain rounded-full border-4 border-amber-300 shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
          Glimpses of Graceful History
        </h1>
        <div className="h-1.5 w-32 bg-amber-400 mx-auto mb-6 rounded-full"></div>
        <p className="text-xl text-blue-800 max-w-3xl mx-auto">
          Celebrating 75 years of transformative education and service
        </p>
      </header>

      {/* Introduction Section */}
      <section className="mb-20 bg-white p-8 rounded-xl shadow-xl border-l-8 border-amber-400">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              <img 
                src={besLogo} 
                alt="BES Institution" 
                className="w-full max-w-md object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute -inset-4 border-2 border-amber-300 rounded-xl -z-10"></div>
            </div>
          </div>
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">The Bethany Educational Society</h2>
            <div className="space-y-5 text-lg text-blue-800">
              <p>
                <span className="font-bold bg-amber-100 px-2 py-1 rounded">Registered on 4th September 1948</span> under the Societies Registration Act, 1860.
              </p>
              <p>
                Located at <span className="font-semibold">Bendur, Kankanady Post, Mangalore 575002 DK, Karnataka India</span>.
              </p>
              <p className="font-medium">
                Imparts value-based education through:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Balwadi Centres",
                  "Pre-Primary, Primary and High Schools",
                  "Pre-University Colleges",
                  "Degree College",
                  "Teachers' Training D El Ed College",
                  "Vocational Training Centres"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="mb-20 bg-white p-10 rounded-xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-blue-800"></div>
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Founder's Vision</h2>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative group">
              <img 
                src={founderImage} 
                alt="Founder Raymond Mascarenhas" 
                className="w-full max-w-md object-cover rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="lg:w-3/5 space-y-6">
            <h3 className="text-2xl font-bold text-blue-900">
              Servant of God, Raymond Francis Camillus Mascarenhas
            </h3>
            <p className="text-lg text-blue-800">
              Responded to the challenges of poverty, illiteracy, and gender disparity by establishing an educational movement focused on:
            </p>
            <ul className="space-y-3">
              {[
                "Creating an egalitarian society",
                "Empowering rural poor and women",
                "Promoting values from the Sermon on the Mount",
                "Using education as a tool for transformation"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-amber-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-lg text-blue-800">{item}</span>
                </li>
              ))}
            </ul>
            <blockquote className="border-l-4 border-amber-400 pl-6 py-3 italic text-xl bg-amber-50 rounded-r-lg">
              "Envisaged a new society built on love, justice, freedom and equality which would enable people to share fullness of life with all."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Founding Members */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Founding Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {img: member1, name: "Sr. M. Clarice AC", role: "Education Pioneer"},
            {img: member2, name: "Sr. M. Benigna AC", role: "Women's Education Advocate"},
            {img: member3, name: "Sr. M. Hyacintha AC", role: "Rural Development Champion"},
            {img: member4, name: "Sr. M. Florentia AC", role: "Community Builder"}
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative pt-8 pb-4 flex justify-center">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-800 to-amber-400"></div>
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg group-hover:border-amber-300 transition-colors duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-blue-700">Dedicated their lives to God and humanity</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Historical Expansion */}
      <section className="mb-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">Historical Expansion</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Timeline */}
              <div className="space-y-10 pl-8 border-l-4 border-amber-400">
                {[
                  {
                    year: "1927",
                    title: "Opened communities in remote villages",
                    description: "First educational outreach in rural Karnataka"
                  },
                  {
                    year: "1937",
                    title: "Extended to Malabar mission in Calicut",
                    description: "Expanded educational services to Kerala region"
                  },
                  {
                    year: "1948",
                    title: "Official registration of BES",
                    description: "Formal establishment under Societies Registration Act"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-11 top-1 w-8 h-8 rounded-full bg-amber-400 border-4 border-blue-800 flex items-center justify-center text-blue-900 font-bold">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <div className="text-2xl font-bold text-amber-300 mb-1">{item.year}</div>
                      <div className="bg-blue-800 bg-opacity-50 p-5 rounded-lg backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                        <p className="text-blue-100">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative group">
              <img 
                src={expansionMap} 
                alt="BES Expansion Map" 
                className="w-full max-w-xl object-contain rounded-xl shadow-2xl border-4 border-white transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Conventions Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-14">BES Conventions</h2>
        
        {/* 1988 Convention */}
        <div className="mb-14 bg-white p-8 rounded-xl shadow-xl border-t-8 border-amber-400 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full"></div>
          <div className="flex flex-col lg:flex-row items-start gap-10 relative z-10">
            <div className="flex items-center lg:w-1/4">
              <div className="text-6xl font-bold text-amber-400 mr-6">I</div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">1988 Convention</h3>
                <p className="text-blue-700">40th Anniversary Celebration</p>
              </div>
            </div>
            <div className="lg:w-3/4">
              <blockquote className="border-l-4 border-amber-400 pl-6 italic text-xl py-3 mb-8 bg-amber-50 rounded-r-lg">
                "Our goal in education is an all-round development of the human person with respect to one's ultimate goal..."
              </blockquote>
              <div className="flex justify-center">
                <div className="relative group max-w-md">
                  <img 
                    src={convention1988} 
                    alt="1988 Convention" 
                    className="w-full rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2001 Convention */}
        <div className="mb-14 bg-white p-8 rounded-xl shadow-xl border-t-8 border-blue-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-800 rounded-bl-full"></div>
          <div className="flex flex-col lg:flex-row items-start gap-10 relative z-10">
            <div className="flex items-center lg:w-1/4">
              <div className="text-6xl font-bold text-blue-800 mr-6">II</div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">2001 Convention</h3>
                <p className="text-blue-700 font-medium">Theme: Education for Fullness of Life</p>
              </div>
            </div>
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "Vision",
                    content: "To Promote the Glory of God by the Holiness of its members and the Service of the Kingdom of God"
                  },
                  {
                    title: "Goal",
                    content: "Transformative Education for Fullness of life for all specially the marginalized, the poor and the girls"
                  },
                  {
                    title: "Core Values",
                    items: ["God Experience", "Compassionate Love", "Communion & Collaboration"]
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-3 text-lg">{item.title}</h4>
                    {item.content ? (
                      <p className="text-blue-800">{item.content}</p>
                    ) : (
                      <ul className="list-disc pl-5 space-y-1 text-blue-800">
                        {item.items?.map((value, i) => (
                          <li key={i}>{value}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="relative group max-w-md">
                  <img 
                    src={convention2001} 
                    alt="2001 Convention" 
                    className="w-full rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2008 Convention */}
        <div className="bg-white p-8 rounded-xl shadow-xl border-t-8 border-blue-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-800 rounded-bl-full"></div>
          <div className="flex flex-col lg:flex-row items-start gap-10 relative z-10">
            <div className="flex items-center lg:w-1/4">
              <div className="text-6xl font-bold text-blue-800 mr-6">III</div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">2008 Convention</h3>
                <p className="text-blue-700 font-medium">Theme: Transformative Education for Fullness of Life</p>
              </div>
            </div>
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h4 className="font-bold text-blue-900 mb-4 text-lg">Priorities:</h4>
                <div className="flex flex-wrap gap-4">
                  {['Education for Peace', 'Girl Child Empowerment', 'Harmonious Relationships'].map((item, index) => (
                    <span 
                      key={index}
                      className="bg-amber-100 px-6 py-2 rounded-full font-medium border border-amber-300 text-blue-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative group max-w-md">
                  <img 
                    src={convention2008} 
                    alt="2008 Convention" 
                    className="w-full rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platinum Jubilee */}
      <section className="mb-20 bg-gradient-to-br from-amber-100 to-blue-100 p-10 rounded-2xl shadow-2xl border-4 border-amber-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-blue-800"></div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-2">Platinum Jubilee Celebration</h2>
          <p className="text-xl text-blue-800">75 Years of Educational Excellence (1948-2023)</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative group">
              <img 
                src={jubileeCelebration} 
                alt="Platinum Jubilee" 
                className="w-full max-w-xl rounded-xl shadow-2xl border-4 border-white transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="lg:w-3/5">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Theme: "Transformative Education for Fullness of Life towards Human Fraternity"
            </h3>
            
            <h4 className="font-bold text-blue-900 text-lg mb-4">Priorities:</h4>
            <ul className="space-y-3 mb-10">
              {[
                "Upholding Justice, Liberty, Equality and Fraternity",
                "Promotion of Peace and Harmony",
                "Caring for Mother Earth",
                "Education for Excellence & Self Reliance"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-amber-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-lg text-blue-800">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={jubileeEvent1} 
                    alt="Jubilee Event" 
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-center mt-3 font-medium text-blue-800">Students' Cultural Program</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={jubileeEvent2} 
                    alt="Jubilee Event" 
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-center mt-3 font-medium text-blue-800">Award Ceremony</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions Summary */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">BES Institutions at a Glance</h2>
        
        <div className="overflow-x-auto rounded-xl shadow-2xl mb-8">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="py-5 px-6 text-left font-bold text-lg">Province</th>
                <th className="py-5 px-6 text-left font-bold text-lg">Number of Institutions</th>
                <th className="py-5 px-6 text-left font-bold text-lg">States Covered</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {[
                {province: "Mangalore Province", count: "34", states: "Karnataka"},
                {province: "Bangalore Province", count: "32", states: "Karnataka"},
                {province: "Western Province", count: "24", states: "Karnataka, Goa, Maharashtra"},
                {province: "Northern Province", count: "9", states: "Punjab, Haryana"}
              ].map((row, index) => (
                <tr key={index} className="hover:bg-blue-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-blue-900">{row.province}</td>
                  <td className="py-4 px-6 text-blue-800">{row.count}</td>
                  <td className="py-4 px-6 text-blue-800">{row.states}</td>
                </tr>
              ))}
              <tr className="bg-blue-900 bg-opacity-10 font-bold">
                <td className="py-4 px-6 text-blue-900">Total Institutions</td>
                <td className="py-4 px-6 text-blue-900">150+</td>
                <td className="py-4 px-6 text-blue-900">Across 15+ Indian States</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center text-xl bg-amber-100 py-5 rounded-xl border-2 border-amber-300 shadow-lg">
          <p className="font-bold text-blue-900">
            Serving over <span className="text-2xl text-blue-800">50,000</span> students annually with <span className="text-2xl text-blue-800">2,500+</span> dedicated staff members
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 border-t-4 border-amber-400 bg-white rounded-2xl shadow-2xl">
        <div className="flex justify-center mb-8">
          <img 
            src={besLogo} 
            alt="BES Logo" 
            className="h-28 w-auto rounded-full border-4 border-amber-300 shadow-md"
          />
        </div>
        <div className="mb-10">
          <h3 className="text-3xl font-bold text-blue-900 mb-4">The Bethany Educational Society</h3>
          <p className="max-w-3xl mx-auto text-lg text-blue-800 leading-relaxed">
            Dedicated to fostering a transformative learning environment that empowers individuals to reach their full potential and build human fraternity.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-10">
          {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((platform) => (
            <a 
              key={platform}
              href="#" 
              className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-amber-500 transition-colors shadow-md"
              aria-label={platform}
            >
              <span className="sr-only">{platform}</span>
              <span className="text-lg font-bold">{platform.charAt(0)}</span>
            </a>
          ))}
        </div>
        
        <address className="not-italic text-lg text-blue-800 mb-4">
          Bendur, Kankanady Post, Mangalore 575002 DK, Karnataka India
        </address>
        <p className="text-blue-700">
          © {new Date().getFullYear()} Bethany Educational Society. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Educational;