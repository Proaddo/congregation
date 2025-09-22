import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaChurch, FaUsers, FaSchool,FaHospital ,FaHandsHelping , FaCross,FaBook, FaHeart, FaChartBar, FaStar, FaPrayingHands, FaChevronRight, FaChevronLeft, FaSearch, FaPlus, FaTimes } from 'react-icons/fa';

// Import all images
import aboutHero from '../images/heroimg/about-hero.jpg';

// Founder images 
import founder1 from '../images/founder/founder1.jpg';
import founder2 from '../images/founder/founder2.jpg';
import founder3 from '../images/founder/founder3.jpg';

// History images
import history1 from '../images/history/history1.jpg';
import history2 from '../images/history/history2.jpg';
import history3 from '../images/history/history3.jpg';
import history4 from '../images/history/history4.jpg';

// Institution images
import college from '../images/institutions/college.jpg';
import hospital from '../images/institutions/hospital.jpg';
import school from '../images/institutions/school.jpg';
import orphanage from '../images/institutions/orphanage.jpg';

// Achievement images
import achievement1 from '../images/achievements/achievement1.jpg';
import achievement2 from '../images/achievements/achievement2.jpg';
import achievement3 from '../images/achievements/achievement3.jpg';

// Obituary images
import sister1 from '../images/obituary/sister1.jpg';
import sister2 from '../images/obituary/sister2.jpg';
import sister3 from '../images/obituary/sister3.jpg';
import sister4 from '../images/obituary/sister4.jpg';
import sister5 from '../images/obituary/sister5.jpg';
import sister6 from '../images/obituary/sister6.jpg';

// Formation images
import formation1 from '../images/formation/formation1.jpg';
import formation2 from '../images/formation/formation2.jpg';
import formation3 from '../images/formation/formation3.jpg';
import formation4 from '../images/formation/formation4.jpg';

// Admin images
import admin1 from '../images/admin/admin1.jpg';

// Update the image arrays
const founderImages = [
  { 
    id: 1, 
    title: "Fr. Mascarenhas Portrait", 
    src: founder1,
    desc: "Official portrait of our beloved founder"
  },
  { 
    id: 2, 
    title: "Founder with First Sisters", 
    src: founder2,
    desc: "Founder with the first group of sisters in 1922"
  },
  { 
    id: 3, 
    title: "Historical Document", 
    src: founder3,
    desc: "Historical document showing the founding principles"
  },
  { 
    id: 4, 
    title: "Canonical Erection Ceremony", 
    src: history1,
    desc: "Historical moment of canonical erection"
  },
  { 
    id: 5, 
    title: "Early Community Gathering", 
    src: history2,
    desc: "First sisters gathering in Mangalore"
  },
  { 
    id: 6, 
    title: "Founder's Handwritten Notes", 
    src: history3,
    desc: "Original notes by Fr. Mascarenhas"
  }
];

const historyImages = [
  { id: 1, title: "Early Community", src: history1 },
  { id: 2, title: "First Convent", src: history2 },
  { id: 3, title: "Historical Milestone", src: history3 },
  { id: 4, title: "First Novitiate", src: history4 }
];

const institutionImages = [
  { id: 1, title: "Bethany College", src: college },
  { id: 2, title: "Community Hospital", src: hospital },
  { id: 3, title: "Educational Institution", src: school },
  { id: 4, title: "Orphanage Facility", src: orphanage }
];

const achievementImages = [
  { 
    id: 1, 
    title: "Doctorate Ceremony", 
    src: achievement1,
    
    desc: "Sister receiving doctorate degree in Theology"
  },
  { 
    id: 2, 
    title: "Academic Award", 
    src: achievement2,
    desc: "National award for educational innovation"
  },
  { 
    id: 3, 
    title: "International Recognition", 
    src: achievement3,
    desc: "International recognition ceremony in Rome"
  },
  { 
    id: 4, 
    title: "Research Presentation", 
    src: achievement1,
    desc: "Presenting research at international conference"
  },
  { 
    id: 5, 
    title: "Professional License Ceremony", 
    src: achievement2,
    desc: "Receiving professional licensing credentials"
  },
  { 
    id: 6, 
    title: "Educational Excellence Award", 
    src: achievement3,
    desc: "Award for excellence in education"
  }
];

const formationImages = [
  { id: 1, title: "Novitiate Ceremony", src: formation1 },
  { id: 2, title: "Spiritual Retreat", src: formation2 },
  { id: 3, title: "Academic Formation", src: formation3 },
  { id: 4, title: "Community Life", src: formation4 }
];

const obituaryImages = [
  {
    id: 1,
    name: "Sr. Mary Joseph",
    date: "January 15, 2025",
    bio: "Served for 45 years in educational ministry. Established 12 schools in rural areas. Authored 3 books on spiritual formation.",
    image: sister1
  },
  {
    id: 2,
    name: "Sr. Agnes Theresa",
    date: "December 3, 2024",
    bio: "Pioneered healthcare initiatives in remote regions. Founded 3 hospitals and trained over 200 nurses. Received national recognition for medical service.",
    image: sister2
  },
  {
    id: 3,
    name: "Sr. Clare Francis",
    date: "November 22, 2024",
    bio: "Dedicated 50 years to pastoral care. Developed community programs that served over 10,000 families. Known for her compassionate counseling.",
    image: sister3
  },
  {
    id: 4,
    name: "Sr. Veronica Rose",
    date: "October 5, 2024",
    bio: "Social work pioneer who established shelters for women and children. Her programs helped rehabilitate over 5,000 individuals.",
    image: sister4
  },
  {
    id: 5,
    name: "Sr. Philomena Xavier",
    date: "September 18, 2024",
    bio: "Educational reformer who developed innovative curriculum for disadvantaged youth. Her methods are used in 30+ institutions.",
    image: sister5
  },
  {
    id: 6,
    name: "Sr. Teresa Paul",
    date: "August 7, 2024",
    bio: "Missionary who served in 5 countries. Established cross-cultural exchange programs that continue to benefit communities worldwide.",
    image: sister6
  }
];

const ImageWithFallback = ({ src, alt, className, fallback = "Image not available", pattern = false }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {loading && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}>
          {pattern && (
            <div className="absolute inset-0 opacity-10 bg-repeat" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }}
            />
          )}
        </div>
      )}
      {error ? (
        <div className={`${className} bg-black-100 flex items-center justify-center`}>
          <span className="text-gray-500">{fallback}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
        />
      )}
    </div>
  );
};

const preloadImages = (images) => {
  return Promise.all(
    images.flat().map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = typeof image === 'string' ? image : image.src;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState('history');
  const [founderGalleryIndex, setFounderGalleryIndex] = useState(0);
  const [achievementGalleryIndex, setAchievementGalleryIndex] = useState(0);
  // const [institutionGalleryIndex, setInstitutionGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [expandedObituary, setExpandedObituary] = useState(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Timeline data
  const timelineEvents = [
    { year: "1921", event: "Founded by Rev. Fr. R.F.C. Mascarenhas" },
    { year: "1925", event: "First election of Superior (Mother Martha B.S.)" },
    { year: "1932", event: "Canonical Erection of the Congregation" },
    { year: "1933", event: "First Novitiate opened" },
    { year: "1937", event: "First expansion outside Mangalore (Meppadi)" },
    { year: "1938", event: "Expansion to West Hill, Calicut" },
    { year: "1939", event: "Houses opened in Dharwad and Guledgudd" },
    { year: "1940", event: "First General Chapter" },
    { year: "1959", event: "Mother Macrina elected Superior General" },
    { year: "1960", event: "Expansion to Punjab (Bathinda & Karnal)" },
    { year: "1963", event: "First community in Northeast (Kolasib, Mizoram)" },
    { year: "1970", event: "International expansion (Rome & Germany)" },
    { year: "1977", event: "Mother Gemma elected Superior General" },
    { year: "1980", event: "Sr. Sylvine elected Superior General" },
    { year: "1986", event: "Congregation divided into Provinces" },
    { year: "1992", event: "Sr. Agnella elected Superior General" },
    { year: "1997", event: "First African mission in Mauritania" },
    { year: "1998", event: "Sr. Jyoti elected Superior General" },
    { year: "2010", event: "Sr. Wilberta elected Superior General" },
    { year: "2016", event: "Sr. Rose Celine elected Superior General" },
    { year: "2021", event: "Centenary Jubilee Celebrations" },
    { year: "2022", event: "Sr. Rose Celine re-elected for second term" }
  ];

  // const missions = [
  //   {
  //     title: "Education Ministry",
  //     icon: <FaSchool className="text-purple-600 text-3xl" />,
  //     description: "Operating 150+ educational institutions serving over 100,000 students annually",
  //     stats: "45 Schools, 15 Colleges, 5 Technical Institutes"
  //   },
  //   {
  //     title: "Healthcare Services",
  //     icon: <FaHospital className="text-purple-600 text-3xl" />,
  //     description: "Providing affordable medical care through hospitals, clinics, and mobile health units",
  //     stats: "25 Hospitals, 50 Clinics, 10 Specialized Care Centers"
  //   },
  //   {
  //     title: "Social Welfare",
  //     icon: <FaHandsHelping className="text-purple-600 text-3xl" />,
  //     description: "Empowering marginalized communities through various social initiatives",
  //     stats: "30 Orphanages, 15 Elderly Homes, 20 Community Centers"
  //   },
  //   {
  //     title: "Pastoral Ministry",
  //     icon: <FaCross className="text-purple-600 text-3xl" />,
  //     description: "Nurturing spiritual growth through retreats, counseling, and parish services",
  //     stats: "50 Parishes Served, 15 Retreat Centers, Annual Spiritual Programs"
  //   }
  // ];

  // Preload images on component mount
  useEffect(() => {
    const imagesToPreload = [
      aboutHero,
      ...founderImages.map(img => img.src),
      ...historyImages.map(img => img.src),
      ...institutionImages.map(img => img.src),
      ...achievementImages.map(img => img.src),
      ...obituaryImages.map(img => img.image)
    ];

    preloadImages(imagesToPreload).catch(console.error);
  }, []);

  const openLightbox = (images, index) => {
    setLightboxImage({ images, index });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
  };

  const showNextImage = () => {
    if (!lightboxImage) return;
    const { images, index } = lightboxImage;
    const nextIndex = (index + 1) % images.length;
    setLightboxImage({ images, index: nextIndex });
  };

  const showPrevImage = () => {
    if (!lightboxImage) return;
    const { images, index } = lightboxImage;
    const prevIndex = (index - 1 + images.length) % images.length;
    setLightboxImage({ images, index: prevIndex });
  };

  // Navigate galleries
  const nextImage = (setter, length) => {
    setter((prevIndex) => (prevIndex + 1) % length);
  };

  const prevImage = (setter, length) => {
    setter((prevIndex) => (prevIndex - 1 + length) % length);
  };

  // Toggle obituary details
  const toggleObituary = (id) => {
    setExpandedObituary(expandedObituary === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Lightbox Modal */}
      {lightboxOpen && lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeLightbox}
          >
            <FaTimes />
          </button>
          <div className="relative max-w-6xl w-full">
            <ImageWithFallback
              src={lightboxImage.images[lightboxImage.index].src}
              alt={lightboxImage.images[lightboxImage.index].title}
              className="w-full max-h-[70vh] object-contain mx-auto"
            />
            <div className="text-white text-center mt-4 text-xl">
              {lightboxImage.images[lightboxImage.index].title}
            </div>
            {lightboxImage.images[lightboxImage.index].desc && (
              <div className="text-white text-center mt-2 opacity-80">
                {lightboxImage.images[lightboxImage.index].desc}
              </div>
            )}
          </div>
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
            onClick={showPrevImage}
          >
            <FaChevronLeft />
          </button>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
            onClick={showNextImage}
          >
            <FaChevronRight />
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div
        className="relative h-[70vh]"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient + dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-900 to-maroon-900 opacity-80" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Content */}
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center px-4 max-w-4xl">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Bethany Congregation
            </motion.h1>

            <motion.p
              className="text-xl text-white mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Founded in 1921 by Rev. Fr. R.F.C. Mascarenhas, we continue a legacy
              of faith, service, and community
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button
                className="bg-white text-red-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-200 hover:scale-105 transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("history")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Our Journey
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {[
              { id: 'history', label: 'History' },
              { id: 'founder', label: 'Founder' },
              { id: 'charism', label: 'Charism' },
              { id: 'administration', label: 'Administration' },
              { id: 'formation', label: 'Formation' },
              { id: 'institutions', label: 'Institutions' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'obituary', label: 'Obituary' }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-3 font-medium text-sm md:text-base whitespace-nowrap transition-colors ${
                  activeTab === tab.id 
                    ? 'text-blue-800 border-b-2 border-blue-800' 
                    : 'text-gray-600 hover:text-blue-700'
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  document.getElementById(tab.id).scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* History Section */}
        <motion.section 
          id="history"
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-3">
              <FaBook className="text-purple-600" />
              Our History
            </h2>
            <p className="text-gray-700">
              From humble beginnings to a global presence, our journey spans over a century of faith and service
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <motion.div className="md:w-1/2" variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4">
                {historyImages.map((img, idx) => (
                  <div 
                    key={img.id}
                    className="cursor-pointer"
                    onClick={() => openLightbox(historyImages, idx)}
                  >
                    <ImageWithFallback
                      src={img.src}
                      alt={img.title}
                      className="w-full h-64 object-cover rounded-xl"
                      
                    />
                  </div>
                ))}
              </div>
              {/* <button 
                className="mt-4 text-blue-800 font-medium flex items-center gap-2"
                onClick={() => openLightbox(historyImages[0])}
              >
                <FaSearch /> View Historical Gallery
              </button> */}
            </motion.div>
            
            <motion.div className="md:w-1/2" variants={itemVariants}>
              <p className="text-gray-700 mb-6">
                The Congregation of the Sisters of the Little Flower of Bethany was founded in the year 1921 on 16th July by Rev. Fr RFC Mascarenhas, the then parish priest of St Sebastian Church, Bendur, Mangalore. This indigenous Congregation founded by an Indian priest under the inspiration of the Holy Spirit to cater to the needs of the Church and the society according to the signs of the time, began to spread its branches to the remotest village parishes of the Diocese of Mangalore.
              </p>
              <p className="text-gray-700 mb-6">
                The first members were four lady teachers of St Sebastian School, namely, Flora Mathias (Sr M. Clare B.S.), Marcelline Menezes (Sr M. Martha B.S.), Alice Mathias (Sr M. Lourdes B.S.) and Regina Gertrude Gonsalves (Sr M. Gertrude B.S.). The Congregation was canonically erected on 28th July 1932, eleven years after its inception. The first Novitiate was opened on 15 May 1933. The first General Chapter of the Congregation was held in 1940 during which Sr M. Martha B.S, who was at the helm of the Infant Congregation from 1925, was elected canonically as the Superior General.
              </p>
              
              <div className="relative border-l-2 border-purple-500 pl-12 ml-4 py-4 max-h-[500px] overflow-y-auto pr-4">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="mb-8 relative">
                    <div className="absolute -left-11 w-10 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold">{event.year}</span>
                    </div>
                    <p className="text-gray-800">{event.event}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Founder Section */}
        <motion.section 
          id="founder"
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-3">
              <FaUsers className="text-purple-600" />
              Founder - Raymond Francis Camillus Mascarenhas
            </h2>
            <p className="text-gray-700">
              The visionary who laid the foundation for a century of service and spiritual growth
            </p>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <motion.div className="lg:w-1/2 w-full" variants={itemVariants}>
              <div className="relative">
                <ImageWithFallback
                  src={founderImages[founderGalleryIndex].src}
                  alt={founderImages[founderGalleryIndex].title}
                  className="w-full h-[500px] object-contain rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-blue-500"
                      
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded-lg max-w-md">
                  <h3 className="text-xl font-bold">{founderImages[founderGalleryIndex].title}</h3>
                  <p className="text-sm mt-2">
                    {founderImages[founderGalleryIndex].desc}
                  </p>
                </div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <button 
                    className="bg-white bg-opacity-80 text-gray-800 rounded-full p-3 shadow-lg hover:bg-opacity-100"
                    onClick={() => prevImage(setFounderGalleryIndex, founderImages.length)}
                  >
                    <FaChevronLeft />
                  </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <button 
                    className="bg-white bg-opacity-80 text-gray-800 rounded-full p-3 shadow-lg hover:bg-opacity-100"
                    onClick={() => nextImage(setFounderGalleryIndex, founderImages.length)}
                  >
                    <FaChevronRight />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {founderImages.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-3 h-3 rounded-full ${
                        idx === founderGalleryIndex ? 'bg-white' : 'bg-gray-400'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-2 mt-4">
                {founderImages.slice(0, 4).map((img, idx) => (
                  <div 
                    key={img.id}
                    className={`cursor-pointer relative ${
                      founderGalleryIndex === idx ? 'ring-2 ring-blue-500 rounded-xl' : ''
                    }`}
                    onClick={() => setFounderGalleryIndex(idx)}
                  >
                    <ImageWithFallback
                      src={img.src}
                      alt={img.title}
                      className="w-full h-24 object-cover rounded-xl"
                    />
                    {idx === 3 && founderImages.length > 4 && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center text-white">
                        <span className="text-xs">+{founderImages.length - 4} more</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="lg:w-1/2" variants={itemVariants}>
              <div className="bg-blue-50 p-6 rounded-xl shadow-inner">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Biography</h3>
                <p className="text-gray-700 mb-4">
                  Rev. Fr. R.F.C. Mascarenhas (1875-1960) was born in Shimoga, Karnataka, to devout Catholic parents. 
                  From a young age, he exhibited exceptional spiritual depth and a commitment to serving the marginalized.
                </p>
                <p className="text-gray-700 mb-4">
                  After his ordination in 1900, Fr. Mascarenhas served in various parishes where he witnessed the 
                  struggles of the poor and underprivileged. His vision for an indigenous religious congregation 
                  dedicated to education, healthcare, and spiritual guidance took shape in 1921 with the founding 
                  of Bethany Congregation.
                </p>
                <p className="text-gray-700">
                  Throughout his life, Fr. Mascarenhas emphasized the values of compassion, simplicity, and service. 
                  His famous words, "Let your life be your message," continue to inspire generations of Bethany sisters.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                  <h4 className="font-bold text-blue-900 mb-2">Legacy</h4>
                  <p className="text-gray-700 text-sm">
                    Established 12 educational institutions and 3 hospitals during his lifetime
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                  <h4 className="font-bold text-blue-900 mb-2">Philosophy</h4>
                  <p className="text-gray-700 text-sm">
                    "Service to humanity is the highest form of worship"
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                  <h4 className="font-bold text-blue-900 mb-2">Recognition</h4>
                  <p className="text-gray-700 text-sm">
                    Awarded the "Servant of God" title by the Vatican in 1995
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                  <h4 className="font-bold text-blue-900 mb-2">Writings</h4>
                  <p className="text-gray-700 text-sm">
                    Authored 7 spiritual books and over 100 letters of guidance
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Charism and Spirituality Section */}
        <motion.section 
          id="charism"
          className="mb-24 bg-blue-50 rounded-2xl p-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-3">
              <FaPrayingHands className="text-purple-600" />
              Charism and Spirituality of Bethany
            </h2>
            <p className="text-gray-700">
              Our spiritual foundation is built on compassionate love, Marian devotion, and mission-driven zeal - 
              the spirit of Bethany that calls us to serve with humility and dedication.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Compassionate Love", 
                desc: "We serve with Christ-like compassion for all, especially the marginalized",
                icon: <FaHeart className="text-purple-600 text-2xl" />
              },
              { 
                title: "Marian Devotion", 
                desc: "Mary, our Mother and model, inspires our spiritual journey and service",
                icon: <FaPrayingHands className="text-purple-600 text-2xl" />
              },
              { 
                title: "Mission-Driven Zeal", 
                desc: "We actively respond to God's call through evangelization and service",
                icon: <FaChurch className="text-purple-600 text-2xl" />
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 bg-gradient-to-r from-blue-800 to-purple-800 text-white rounded-2xl p-8"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <ImageWithFallback
                  src={historyImages[0].src}
                  alt="Spiritual Practices"
                  
                  className="w-full h-auto max-h-64 object-contain rounded-xl  
               transition-transform duration-300 ease-in-out 
               hover:scale-105 hover:shadow-lg hover:border-blue-500"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Spiritual Practices</h3>
                <p className="mb-4">
                  Our daily spiritual rhythm includes Eucharistic celebration, meditation on Scripture, 
                  communal prayer, and examination of conscience. These practices nourish our spiritual 
                  lives and strengthen our commitment to service.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Daily Practices</h4>
                    <ul className="list-disc pl-5">
                      <li>Morning Prayer and Meditation</li>
                      <li>Eucharistic Celebration</li>
                      <li>Rosary Devotion</li>
                      <li>Evening Examination</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Annual Retreats</h4>
                    <ul className="list-disc pl-5">
                      <li>8-day Ignatian Retreat</li>
                      <li>Community Renewal Days</li>
                      <li>Spiritual Direction</li>
                      <li>Scripture Study</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* System of Administration */}
        <motion.section 
          id="administration"
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-3">
              <FaChartBar className="text-purple-600" />
              System of Administration
            </h2>
            <p className="text-gray-700">
              Our structured governance ensures effective management and continued growth of our mission worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                title: "Generalate", 
                stats: "1 Central Governing Body",
                desc: "Responsible for overall direction and policy making",
                color: "from-blue-700 to-blue-800"
              },
              { 
                title: "Provinces", 
                stats: "8 Regional Provinces",
                desc: "Managing local communities and institutions",
                color: "from-purple-700 to-purple-800"
              },
              { 
                title: "Delegations", 
                stats: "3 Special Delegations",
                desc: "Overseeing specific missions and projects",
                color: "from-indigo-700 to-indigo-800"
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className={`bg-gradient-to-br ${item.color} text-white p-8 rounded-2xl text-center`}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <div className="text-4xl font-bold mb-4">{item.stats}</div>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 bg-white rounded-xl shadow-lg p-8"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-blue-900">1,200+</div>
                <div className="text-gray-600">Sisters in the Congregation</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-blue-900">28</div>
                <div className="text-gray-600">Dioceses Served</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-blue-900">15</div>
                <div className="text-gray-600">States/Regions Active</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-blue-900">5</div>
                <div className="text-gray-600">Continents with Presence</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 bg-blue-50 rounded-xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Leadership Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-blue-800 mb-3">General Council</h4>
                <p className="text-gray-700 mb-4">
                  The General Council, headed by the Superior General, consists of four councilors who assist 
                  in the administration of the entire congregation. They serve for a term of six years.
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Superior General: Sr. Rose Celine</li>
                  <li>Vicar General: Sr. Maria Joseph</li>
                  <li>Councilor for Formation: Sr. Alphonsa</li>
                  <li>Councilor for Missions: Sr. Theresa</li>
                  <li>Councilor for Finance: Sr. Clare</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-800 mb-3">Provincial Administration</h4>
                <p className="text-gray-700 mb-4">
                  Each province is governed by a Provincial Superior and her council, responsible for implementing 
                  the congregation's vision at the regional level.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <ImageWithFallback
                    src={admin1}
                    alt="Sr. Mary Joseph"
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div>
                    <p className="font-bold">Sr. Mary Joseph</p>
                    <p className="text-gray-600">Provincial Superior, Bangalore Province</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Formation Houses */}
        <motion.section 
          id="formation"
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-3">
              <FaChurch className="text-purple-600" />
              Formation Journey
            </h2>
            <p className="text-gray-700">
              Our formation process nurtures spiritual growth, academic excellence, and practical skills for lifelong service
            </p>
          </motion.div>
          
          <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
            <motion.div className="md:w-1/2" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Stages of Formation</h3>
              
              <div className="space-y-8">
                {[
                  { 
                    title: "Pre-Novitiate (6 months - 1 year)", 
                    desc: "Initial discernment and introduction to community life. Focus on self-discovery and spiritual orientation." 
                  },
                  { 
                    title: "Novitiate (2 years)", 
                    desc: "Intensive spiritual formation, study of congregation's charism, and preparation for temporary vows." 
                  },
                  { 
                    title: "Juniorate (5-6 years)", 
                    desc: "Ongoing formation combined with professional training and academic studies. Temporary vows renewed annually." 
                  },
                  { 
                    title: "Temporary Profession", 
                    desc: "Initial commitment to vows of chastity, poverty, and obedience. Sisters engage in full-time ministry." 
                  },
                  { 
                    title: "Perpetual Profession", 
                    desc: "Final commitment to religious life. Lifelong dedication to the congregation's mission." 
                  },
                  { 
                    title: "Ongoing Formation", 
                    desc: "Continuous spiritual, intellectual, and professional development throughout religious life." 
                  }
                ].map((stage, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-4"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">{stage.title}</h4>
                      <p className="text-gray-700">{stage.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="md:w-1/2" variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4">
                {formationImages.map((img, idx) => (
                  <div 
                    key={img.id}
                    className="cursor-pointer"
                    onClick={() => openLightbox(formationImages, idx)}
                  >
                    <ImageWithFallback
                      src={img.src}
                      alt={img.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between">
                {/* <button 
                  className="text-blue-800 font-medium flex items-center gap-2"
                  onClick={() => openLightbox(formationImages[0])}
                >
                  <FaSearch /> View Formation Gallery
                </button> */}
                {/* <button className="text-blue-800 font-medium flex items-center gap-2">
                  <FaPlus /> See More
                </button> */}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 bg-gradient-to-r from-green-800 to-teal-800 text-white rounded-2xl p-8"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Formation Centers</h3>
                <p className="mb-6">
                  We have 12 formation houses across India and abroad, providing comprehensive training in spiritual, 
                  academic, and practical dimensions of religious life.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Key Centers</h4>
                    <ul className="list-disc pl-5">
                      <li>Bethany Motherhouse, Mangalore</li>
                      <li>St. Ann's Novitiate, Bangalore</li>
                      <li>Sacred Heart Juniorate, Kerala</li>
                      <li>Divine Providence Center, Delhi</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">International</h4>
                    <ul className="list-disc pl-5">
                      <li>Bethany House, Rome</li>
                      <li>St. Joseph Center, Kenya</li>
                      <li>Divine Mercy House, Germany</li>
                      <li>Queen of Peace, USA</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <ImageWithFallback
                  src={formationImages[0].src}
                  alt="Formation Center"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Institutions Section */}
        <motion.section 
          id="institutions"
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-3">
              <FaGraduationCap className="text-purple-600" />
              Our Institutions
            </h2>
            <p className="text-gray-700">
              Through various institutions, we serve communities in education, healthcare, social welfare, 
              and spiritual development
            </p>
          </motion.div>
          
          <div className="mb-12">
            <div className="relative">
              <div className="grid grid-cols-4 gap-4">
                {institutionImages.map((img) => (
                  <div 
                    key={img.id}
                    className="relative cursor-pointer"
                    onClick={() => openLightbox(institutionImages, institutionImages.findIndex(i => i.id === img.id))}
                  >
                    <ImageWithFallback
                      src={img.src}
                      alt={img.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Educational", 
                count: "150+", 
                desc: "Schools, colleges, and training centers",
                details: "Serving over 100,000 students annually with quality education"
              },
              { 
                title: "Healthcare", 
                count: "25+", 
                desc: "Hospitals, clinics, and health centers",
                details: "Providing affordable healthcare to underserved communities"
              },
              { 
                title: "Social Welfare", 
                count: "40+", 
                desc: "Orphanages, elderly care, and community centers",
                details: "Supporting vulnerable populations with shelter and care"
              },
              { 
                title: "Pastoral Centers", 
                count: "30+", 
                desc: "Churches, retreat centers, and counseling services",
                details: "Nurturing spiritual growth and emotional well-being"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-purple-600 mb-3">{item.count}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <p className="text-gray-700 text-sm">{item.details}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 bg-gradient-to-r from-orange-700 to-amber-700 text-white rounded-2xl p-8"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <ImageWithFallback
                  src={institutionImages[0].src}
                  alt="Institution Impact"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Impact Through Institutions</h3>
                <p className="mb-6">
                  Our institutions have made a profound impact on communities worldwide, transforming lives through 
                  education, healthcare, and social empowerment initiatives.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">500,000+</div>
                    <div>Students Educated</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2 Million+</div>
                    <div>Patients Treated</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50,000+</div>
                    <div>Families Supported</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Special Achievements */}
        <motion.section 
          id="achievements"
          className="mb-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-3xl p-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
              <FaStar className="text-yellow-300" />
              Special Achievements
            </h2>
            <p>
              Our sisters have reached remarkable academic and professional milestones, enhancing our capacity 
              to serve communities effectively
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
            {[
              { 
                title: "Academic Excellence", 
                stats: "45 Doctorates, 120+ Masters",
                desc: "In fields of theology, education, healthcare, and social sciences"
              },
              { 
                title: "Professional Licenses", 
                stats: "80+ Professional Licentiates",
                desc: "Including medicine, nursing, counseling, and education"
              },
              { 
                title: "International Recognition", 
                stats: "15 International Awards",
                desc: "For excellence in education and humanitarian work"
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="p-6 rounded-xl shadow-md 
                 transition-transform duration-300 ease-in-out 
                 hover:scale-105 hover:shadow-lg hover:border-blue-500"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <div className="text-2xl font-bold mb-4 text-yellow-300">{item.stats}</div>
                <p className="opacity-90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <div className="relative">
              <ImageWithFallback
                src={achievementImages[achievementGalleryIndex].src}
                alt={achievementImages[achievementGalleryIndex].title}
                className="w-full h-auto max-h-64 object-contain rounded-xl  
               transition-transform duration-300 ease-in-out 
               hover:scale-105 hover:shadow-lg hover:border-blue-500"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded-lg max-w-md">
                <h3 className="text-xl font-bold">{achievementImages[achievementGalleryIndex].title}</h3>
                <p className="text-sm mt-2">
                  {achievementImages[achievementGalleryIndex].desc}
                </p>
              </div>
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button 
                  className="bg-white bg-opacity-80 text-gray-800 rounded-full p-3 shadow-lg hover:bg-opacity-100"
                  onClick={() => prevImage(setAchievementGalleryIndex, achievementImages.length)}
                >
                  <FaChevronLeft />
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button 
                  className="bg-white bg-opacity-80 text-gray-800 rounded-full p-3 shadow-lg hover:bg-opacity-100"
                  onClick={() => nextImage(setAchievementGalleryIndex, achievementImages.length)}
                >
                  <FaChevronRight />
                </button>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                {achievementImages.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-3 h-3 rounded-full ${
                      idx === achievementGalleryIndex ? 'bg-white' : 'bg-gray-400'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Notable Achievements</h3>
              <ul className="space-y-4">
                {[
                  "Sr. Mary Thomas - Awarded Padma Shri for contributions to education",
                  "Sr. Agnes Francis - Published groundbreaking research on community health",
                  "Sr. Clara Joseph - Developed innovative curriculum for rural schools",
                  "Sr. Theresa Paul - Received international humanitarian award",
                  "Sr. Veronica Rose - Recognized by UNESCO for literacy programs",
                  "Sr. Philomena Xavier - Appointed to Vatican commission on education"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Research & Publications</h3>
              <div className="bg-white bg-opacity-10 p-4 rounded-xl">
                <p className="mb-4">Our sisters have authored more than 200 books and research papers on:</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Spirituality", "Education", "Healthcare", "Social Work", 
                    "Theology", "Psychology", "Community Development", "Women's Empowerment"
                  ].map((topic, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-yellow-300 mr-2">›</span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Obituary Section */}
        <motion.section 
          id="obituary"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">In Memoriam</h2>
            <p className="text-gray-700">
              We remember with gratitude our sisters who have completed their earthly journey and now rest in 
              the loving embrace of our Creator
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {obituaryImages.map((sister) => (
              <motion.div 
                key={sister.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-4 mb-4">
                  <ImageWithFallback
                    src={sister.image}
                    alt={sister.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900">{sister.name}</h3>
                    <span className="text-gray-500">{sister.date}</span>
                    <div className="mt-2">
                      <button 
                        className="text-blue-700 text-sm flex items-center gap-1"
                        onClick={() => toggleObituary(sister.id)}
                      >
                        {expandedObituary === sister.id ? 'Show Less' : 'Read More'} 
                        <FaChevronRight className={`text-xs transition-transform ${expandedObituary === sister.id ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {expandedObituary === sister.id && (
                  <motion.div 
                    className="mt-4 pt-4 border-t border-gray-100"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 mb-4">{sister.bio}</p>
                    <div className="text-sm text-gray-600">
                      <div className="font-semibold mb-1">Contributions:</div>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Ministry: Education (45 years)</li>
                        <li>Founded 5 educational institutions</li>
                        <li>Authored 2 books on spiritual formation</li>
                        <li>Mentored over 200 young sisters</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-600 italic">"Well done, good and faithful servant"</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            {/* <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
              View Complete Memorial
            </button> */}
          </motion.div>
        </motion.section>
      </div>

      {/* Back to Top Button */}
      <button 
        className="fixed bottom-6 right-6 bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaChevronRight className="rotate-270" />
      </button>
    </div>
  );
};

export default About;