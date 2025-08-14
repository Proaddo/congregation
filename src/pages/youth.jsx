import React from 'react';
import youth1 from '../assets/youth/youth-1.jpg';
import youth2 from '../assets/youth/youth-2.jpg';
import youth3 from '../assets/youth/youth-3.jpg';
import youth4 from '../assets/youth/youth-4.jpg';
import youth5 from '../assets/youth/youth-5.jpg';

const Youth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img 
          src={youth1} 
          alt="Youth group activity" 
          className="w-full h-full object-cover absolute"
        />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Youth Ministry</h1>
            <p className="text-xl md:text-2xl mb-8">Empowering young people to be agents of transformation in Church and society</p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition duration-300">
                Join Our Programs
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Mandate</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We the Bethany Sisters of the Little Flower believe that we have a mandate to enable the young people to be agents of transformation in the church and society.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            It is an opportunity to work with young people, help them to develop their relationship with God and nurture their faith, and collectively help the wider Catholic community through different associations like YSM, YCS and ICYM and Jesus Youth.
          </p>
        </div>
      </section>

      {/* Ministry Approach */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Our Ministry Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-purple-700 mb-3">Faith Formation</h3>
              <p className="text-gray-600 text-center">
                Nurturing spiritual growth through prayer, scripture study, and sacramental life
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-purple-700 mb-3">Leadership Development</h3>
              <p className="text-gray-600 text-center">
                Training young leaders for service in Church and society
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-purple-700 mb-3">Community Building</h3>
              <p className="text-gray-600 text-center">
                Creating vibrant Catholic communities through YSM, YCS, ICYM and Jesus Youth
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src={youth2} 
                alt="Youth group discussion" 
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Consecrated for Youth</h3>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                As persons consecrated to God, it is a privilege to share our faith, spiritual experience and Word of God with the youth and be a leaven in their life.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Through youth ministry we respond to the spiritual, catechetical and social needs of the people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Our Programs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src={youth3} 
              alt="Youth training program" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Youth Training Programme</h3>
              <p className="text-gray-600 mb-4">
                Faith formation is given importance. Leadership skills are inculcated. They are prepared for Christian and political leadership.
              </p>
              <button className="text-purple-700 font-semibold hover:underline">
                Learn more →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src={youth4} 
              alt="Vocational training" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Youth Development with Vocational Training</h3>
              <p className="text-gray-600 mb-4">
                Umpteen opportunities are created for youth leadership in the parish, Church wards and secular organizations as well.
              </p>
              <button className="text-purple-700 font-semibold hover:underline">
                Learn more →
              </button>
            </div>
          </div>
        </div>

        <div className="bg-purple-800 text-white rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">The Vital Strength of the Church</h3>
              <p className="mb-4 text-lg leading-relaxed">
                The youth are the vital strength of the parish/church. They participate actively in the liturgy and spiritual celebrations.
              </p>
              <p className="text-lg leading-relaxed">
                Indeed it is an opportunity to share our God given gifts and wisdom with the youngsters and prepare them for a life of integrity, credibility and witness to the Gospel.
              </p>
            </div>
            <div className="md:w-1/3">
              <img 
                src={youth5} 
                alt="Youth in liturgy" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Youth Voices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-700 italic mb-4">
                "The youth ministry helped me grow in my faith and discover my calling to serve the Church."
              </p>
              <div className="font-semibold text-purple-700">- Maria, YCS Leader</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-700 italic mb-4">
                "Through the leadership training, I gained confidence to take active roles in my parish community."
              </p>
              <div className="font-semibold text-purple-700">- John, ICYM Member</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-700 italic mb-4">
                "The sisters' guidance helped me understand how to live my faith in daily life and at work."
              </p>
              <div className="font-semibold text-purple-700">- Anita, Jesus Youth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Youth Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of a vibrant community growing in faith, leadership, and service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition duration-300">
              Register Now
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Bethany Youth Ministry</h3>
              <p className="text-gray-400 max-w-md">
                Forming young people to be agents of transformation in Church and society.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-4">Programs</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">YSM</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">YCS</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">ICYM</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Jesus Youth</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">youth@bethany.org</li>
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
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748 1.15.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bethany Youth Ministry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Youth;