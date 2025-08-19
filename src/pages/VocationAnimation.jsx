import React, { useState } from 'react';
import { FaPrayingHands, FaQuoteLeft, FaHeart, FaUsers, FaChurch, FaSearch, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import img1 from "../assets/vocation/vocation1.jpg";
import img2 from "../assets/vocation/vocation2.jpg";
import img3 from "../assets/vocation/vocation3.jpg";
import img4 from "../assets/vocation/vocation4.jpg";
import img5 from "../assets/vocation/vocation5.jpg";
import img6 from "../assets/vocation/vocation6.jpg";
import img7 from "../assets/vocation/vocation7.jpg";
import img8 from "../assets/vocation/vocation8.jpg";
import img9 from "../assets/vocation/vocation9.jpg";
import img10 from "../assets/vocation/vocation10.jpg";
import img11 from "../assets/vocation/vocation11.jpg";
import img12 from "../assets/vocation/vocation12.jpg";
import bannerImg from '../vocation/banner.jpg';





const VocationAnimation = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  // Vocation images array
  const vocationImages = [
    { id: 1, title: "Vocation animation at Tanzania – Probable candidates", img: img1 },
    { id: 2, title: "Vocation Camp", img: img2 },
    { id: 3, title: "Bangalore Province", img: img3 },
    { id: 4, title: "Eastern Province Gathering", img: img4 },
    { id: 5, title: "Vocation Workshop", img: img5 },
    { id: 6, title: "Prayer Session", img: img6 },
    { id: 7, title: "Vocation Discernment", img: img7 },
    { id: 8, title: "Community Gathering", img: img8 },
    { id: 9, title: "Youth Retreat", img: img9 },
    { id: 10, title: "Mission Outreach", img: img10 },
    { id: 11, title: "Spiritual Formation", img: img11 },
    { id: 12, title: "Vocation Celebration", img: img12 },
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % vocationImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + vocationImages.length) % vocationImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setLightboxOpen(false)}
          >
            <FaTimes />
          </button>
          <div className="relative max-w-6xl w-full">
            <div className="h-[70vh] flex items-center justify-center">
              <img 
                src={vocationImages[currentImage].img} 
                alt={vocationImages[currentImage].title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xl font-bold text-white">{vocationImages[currentImage].title}</h3>
              <p className="text-white mt-2">Image {currentImage + 1} of {vocationImages.length}</p>
            </div>
          </div>
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
             
{/* Header */}
<div className="relative h-[60vh]">
  {/* Banner image */}
  <img 
    src={bannerImg} 
    alt="Vocation Banner" 
    className="w-full h-full object-cover"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40" />

  {/* Centered text over banner */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Vocation Animation</h1>
    <div className="text-xl text-white max-w-3xl">
      <p className="mb-2 italic">"Vocations are born in prayer and only in prayer can they persevere and bear fruit"</p>
      <p>- Pope Francis</p>
    </div>
    <button 
      className="mt-8 bg-white text-red-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-100 transition-all"
      onClick={() => document.getElementById('content').scrollIntoView({ behavior: 'smooth' })}
    >
      Explore Our Journey
    </button>
  </div>
</div>



      {/* Main Content */}
      <div id="content" className="max-w-6xl mx-auto px-4 py-16">
        {/* Gallery Section */}
        <section className="mb-16">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-6 flex items-center justify-center gap-3">
              {/* <FaSearch className="text-red-600" /> */}
              Vocation Gallery
            </h2>
            <p className="text-gray-700">
              Moments from our vocation animation activities
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {vocationImages.map((img, index) => (
              <div 
                key={img.id}
                className="rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 group"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={img.img} 
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-800">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button 
              className="bg-red-700 hover:bg-red-800 text-white font-medium py-3 px-8 rounded-full transition-colors"
              onClick={() => openLightbox(0)}
            >
              View Full Gallery
            </button>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-red-100 p-4 rounded-full">
              <FaPrayingHands className="text-red-700 text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-red-900">Vocation Animation Journey</h2>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              In the Gospel of Mark 3: 13- we read: Jesus went up the mountain and called to him those whom he wanted and they came to him.
            </p>
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
              <FaQuoteLeft className="text-red-600 text-2xl mb-3" />
              <p className="italic">
                "Vocations are born in prayer and prayer and only in prayer can they persevere and bear fruit: Pope Francis. It is quoted as inspiration for vocation animation in our XVI General Chapter decree. Vocation animation is the goal and summit of all other apostolates. So like the small finger which is closer to God while in prayer, Vocation animation stands out first in all our ministries."
              </p>
            </div>
            <p>
              The master plan of vocational promotion to consecrated life is that which the Lord himself began when he said to the apostles John and Andrew, “Come and see” (Jn1:39). This encounter accompanied by the sharing of life requires that consecrated persons deeply live their consecration in order to become a visible sign of the joy which God gives to those who listen to his call. For this reason, there is a need for communities which are welcoming and able to share the ideal of their life with young people, allowing themselves to be challenged by the demands of authenticity, and willing to accept them. This is what each one of us is called to do.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="bg-gradient-to-br from-red-700 to-red-800 text-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaHeart className="text-red-300 text-xl" />
                  <h3 className="text-xl font-bold">Early Vocation Journey</h3>
                </div>
                <p>
                  I would like to bring to your mind about the first vocations to Bethany. In 1921 Bethany received its first four and just after a year on 16 July 1922, the fifth vocation Sr Margaret arrived. In 1923- Bethany received no vocation. In 1924 Sr Magdeline joined as the sixth member of the Congregation. In 1925, Bethany had three vocations in the person of Sr Catherine, Sr Louise and Sr Beninga. Again in the year 1926 none joined. The membership now reached 9.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaChurch className="text-purple-300 text-xl" />
                  <h3 className="text-xl font-bold">Mother Francis' Story</h3>
                </div>
                <p>
                  Here is the brief summary of the vocation story of Mother Francis who joined Bethany as the 10th member of the Congregation. She wanted to join the convent but not in Apostolic Carmel where she had many relatives and friends. She was looking for a convent where she could love Jesus much. She joined the Novena prayers in honour of St Therese of child Jesus to discern her vocation, at Cloistered Carmel, Kankanady in September 1925.
                </p>
              </div>
            </div>
            
            <p>
              She was resolutely drawn to join Bethany on 30th September the death anniversary of St Therese and the last day of her novena. She disclosed her desire to Rev Fr RFC Mascarenhas, the Founder who told her the same evening, that he too was making a novena to the Little Flower to send him a rose on that day as a sign of confirming his work of founding the Congregation of the Sisters of the Little Flower of Bethany. Rose was Mother Francis' baptismal name. The Rose founder prayed for was planted in Bethany on 01.03.1927.
            </p>
            
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 mt-8 text-center">
              <p className="text-2xl font-bold italic">
                "This is how the vocation story of Bethany unfolds. Now Bethany has grown over a thousand as we cross the Centenary. Yes indeed we have a great vocation story and ours is a great Congregation growing still with more than 400 formees in different stages of formation."
              </p>
            </div>
            
            <p>
              Bethany is like a tree planted by the running waters, ever fresh, green and fruit bearing. Is 52:7- How beautiful on the mountains are the feet of those who bring good news, who proclaim peace, who bring good tidings, who proclaim salvation, who say to Zion, “Your God reigns!” Every religious is a vocation Promoter!
            </p>
            
            <div className="mt-10 p-6 bg-red-50 rounded-xl border border-red-200">
              <h3 className="text-2xl font-bold text-red-900 mb-4">HARVEST IS PLENTIFUL LABOURERS ARE FEW</h3>
              <p className="italic text-red-700 mb-4">
                “Vocations are born in prayer and only prayer can sustain it” – Pope Francis
              </p>
              <p>
                September 28, 2022 is a day exclusively set apart to think together the ways and means to raise vocations to Bethany. “Jesus use me, O Lord don’t refuse me, surely there is a work I can do….” These lines of the opening prayer tell each member of the congregation that each of us has works to do in the vineyard of the Lord.
              </p>
              <p>
                64 sisters from all the provinces and Delegation along with Rev Sr Rose Celine BS, the Superior General and her team attended the session. Sr. Santhosh Maria, the General Coordinator of vocation animation accorded a warm and cheerful welcome to the gathering.
              </p>
              <p>
                “No one can come to me unless the Father who sent me, draws him” (Jn: 6-44). Yes, vocation is a call of God, we are the instruments in His hands to continue the work of the Lord. “Jesus went up to the mountain and called to Him those whom He wanted and they came to him” (Mk:3:13). Enumerating from this word of God Rev. Fr. Rudolph Pinto OCD began the session, placing before the participants the challenges we face today in vocation animation as well as the strategies to be followed in this modern era.
              </p>
              <p>
                The pastoral plan of vocation animation for the coming 6 years, of all the provinces and the delegations, were presented by the respective coordinators for vocation promotion. Sr Santhosh Maria BS, the General coordinator for vocation Promotion was a boost to the participants and organized the day's program well. It was a day wherein we were not only enthused to promote vocation for the Congregation but also examined our personal commitment to the person of Jesus.
              </p>
              <p>
                Each of us was motivated and reminded of our individual responsibility of promoting vocations so as to build the kingdom of God. Rev. Sr. Rose Celine BS our Superior General called upon each bethanites to be joyful religious living a witnessing and holy life attracting many young people to Bethany in the coming Days.
              </p>
            </div>
            
            <div className="mt-10 bg-gradient-to-r from-purple-700 to-indigo-800 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">The Divine Mandate</h3>
              <p className="mb-4">
                "Go, make disciples of all nations Mt 28:19 is the mandate given by our Lord Himself to His disciples and to each one of us."
              </p>
              <p className="mb-4">
                "Vocation is entering into a loving relationship with the Lord and consequently with each other. Fr Joe Mannath in his book 'Happiness Right Now' said: 'We have experienced this love of God and love of one another over the years, now it is our turn to pass the love on'. Loved by God, we make others feel loved! Called by God we become 'callers'. We have made a choice and now we have a responsibility to help others make a choice!"
              </p>
              <p className="italic">
                "As per our XVI Gen Ch Decree 8.1 - Vocation Animation is the significant mission of the Church and every baptized Christian is called to share in this mission of awakening in human hearts a quest for God and sharing His compassionate love"
              </p>
            </div>
            
            <div className="mt-10 bg-white border-2 border-red-200 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Our Responsibility</h3>
              <p className="mb-4">
                "We are responsible for the survival of our Congregation. New members are to come in. But from where? Unless we promote vocations? Pope Francis in 'Amoris Laetitie' clearly indicates that vocations are to come from families. By our life and frequent visits to the families, we should inspire the young members in the families and bring others to Christ. Pope Francis further makes us understand that vocations are born of prayer and in prayer they are preserved and bear fruit. Vocations are fostered through our life's example. Hence it is very clear that we must pray for vocations and that we must build our own families and the families of our parish, families of our students, staff, families of our hostellers. Our Founder looked up to our hostels, as the seed beds of vocations for priestly and religious life. Our schools are really the grain fields of vocations which like Ruth in the OT we should learn to pick up not the left overs but the best ones."
              </p>
              <p className="font-semibold">
                "What is vocation promotion? Helping the young to reflect on their future and make choices in line with God's will which will bring true happiness in their heart. It is helping the young people to see life as God's gift which they should use according to God's plans."
              </p>
              <p className="mt-4">
                "If we begin appreciating our own vocation we will not let it go. We will hold on to it come what may, through thick or thin, thro shine or rain. So those who love Jesus and want to make Him loved, those who have a desire to follow Jesus you may write to:"
              </p>
              
              <div className="mt-6 bg-red-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-red-900 mb-3">Contact Information</h4>
                <p className="font-semibold">Sr Lilitta BS</p>
                <p>General Coordinator for Vocation Animation</p>
                <p>Bethany Generalate</p>
                <p>PB No. 593</p>
                <p>Lower Bendur</p>
                <p>Mangalore 575002</p>
                <p className="mt-2">Contact No – 0824 - 2218923</p>
                <p>Email Id – generalate.bethany@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-red-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Bethany Congregation</h3>
              <p className="text-red-200">
                Founded in 1921 by Rev. Fr. R.F.C. Mascarenhas, we continue a legacy of faith, service, and community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-red-200 hover:text-white">Home</a></li>
                <li><a href="#" className="text-red-200 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-red-200 hover:text-white">Ministries</a></li>
                <li><a href="#" className="text-red-200 hover:text-white">Vocation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Vocation Animation</h3>
              <p className="text-red-200 italic">
                "Vocations are born in prayer and only prayer can sustain it"
              </p>
              <p className="mt-2">- Pope Francis</p>
            </div>
          </div>
          <div className="border-t border-red-800 mt-8 pt-8 text-center text-red-300">
            <p>© {new Date().getFullYear()} Bethany Congregation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VocationAnimation;