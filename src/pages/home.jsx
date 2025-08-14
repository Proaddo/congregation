import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiX, FiMail, FiPhone, FiMapPin, FiBookOpen, FiCalendar, FiShare2, FiArrowUp } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPrayingHands } from 'react-icons/fa';

// Hero images
import hero1 from '../images/hero/hero1.png';
import hero2 from '../images/hero/hero2.jpg';
import hero3 from '../images/hero/hero3.jpg';

// Story images
import story1 from '../images/stories/story1.jpg';
import story2 from '../images/stories/story2.jpg';
import story3 from '../images/stories/story3.jpg';

// Ministry images
import vocation from '../images/ministries/vocation.jpg';
import education from '../images/ministries/education.jpg';
import pastoral from '../images/ministries/pastoral.jpg';
import social from '../images/ministries/social.jpg';
import healthcare from '../images/ministries/healthcare.jpg';
import hostel from '../images/ministries/hostel.jpg';
import elderly from '../images/ministries/elderly.jpg';
import youth from '../images/ministries/youth.jpg';

// News images
import news1 from '../images/news/news1.jpg';
import news2 from '../images/news/news2.jpg';
import news3 from '../images/news/news3.jpg';

// Publication images
import pub1 from '../images/publications/pub1.jpg';
import pub2 from '../images/publications/pub2.jpg';
import pub3 from '../images/publications/pub3.jpg';

// Gallery images
import img1 from '../images/galleries/img1.jpg';
import img2 from '../images/galleries/img2.jpg';
import img3 from '../images/galleries/img3.jpg';
import img4 from '../images/galleries/img4.jpg';
import img5 from '../images/galleries/img5.jpg';
import img6 from '../images/galleries/img6.jpg';
import img7 from '../images/galleries/img7.jpg';
import img8 from '../images/galleries/img8.jpg';
import img9 from '../images/galleries/img9.jpg';
import img10 from '../images/galleries/img10.jpg';
import img11 from '../images/galleries/img11.jpg';
import img12 from '../images/galleries/img12.jpg';
import img13 from '../images/galleries/img13.jpg';
import img14 from '../images/galleries/img14.jpg';
import img15 from '../images/galleries/img15.jpg';
import img16 from '../images/galleries/img16.jpg';
import img17 from '../images/galleries/img17.jpg';
import img18 from '../images/galleries/img18.jpg';
import img19 from '../images/galleries/img19.jpg';
import img20 from '../images/galleries/img20.jpg';
import img21 from '../images/galleries/img21.jpg';
import img22 from '../images/galleries/img22.jpg';
import img23 from '../images/galleries/img23.jpg';
import img24 from '../images/galleries/img24.jpg';
import img25 from '../images/galleries/img25.jpg';
import img26 from '../images/galleries/img26.jpg';
import img27 from '../images/galleries/img27.jpg';
import img28 from '../images/galleries/img28.jpg';
import img29 from '../images/galleries/img29.jpg';
import img30 from '../images/galleries/img30.jpg';
import img31 from '../images/galleries/img31.jpg';
import img32 from '../images/galleries/img32.jpg';

const localImages = [
  { src: img1, alt: 'Image 1' },
  { src: img2, alt: 'Image 2' },
  { src: img3, alt: 'Image 3' },
  { src: img4, alt: 'Image 4' },
  { src: img5, alt: 'Image 5' },
  { src: img6, alt: 'Image 6' },
  { src: img7, alt: 'Image 7'},
  { src: img8, alt: 'Image 8' },
  { src: img9, alt: 'Image 9' },
  { src: img10, alt: 'Image 10' },
  { src: img11, alt: 'Image 11' },
  { src: img12, alt: 'Image 12' },
  { src: img13, alt: 'Image 13' },
  { src: img14, alt: 'Image 14'},
  { src: img15, alt: 'Image 15' },
  { src: img16, alt: 'Image 16' },
  { src: img17, alt: 'Image 17' },
  { src: img18, alt: 'Image 18' },
  { src: img19, alt: 'Image 19' },
  { src: img20, alt: 'Image 20' },
  { src: img21, alt: 'Image 21'},
  { src: img22, alt: 'Image 22' },
  { src: img23, alt: 'Image 23' },
  { src: img24, alt: 'Image 24' },
  { src: img25, alt: 'Image 25' },
  { src: img26, alt: 'Image 26' },
  { src: img27, alt: 'Image 27' },
  { src: img28, alt: 'Image 28'},
  { src: img29, alt: 'Image 29' },
  { src: img30, alt: 'Image 30' },
  { src: img31, alt: 'Image 31' },
  { src: img32, alt: 'Image 32' }
];

const SLIDES = [
  { 
    img: hero1,
    title: 'Welcome to Bethany Congregation',
    desc: 'A life of service, compassion, and prayer'
  },
  { 
    img: hero2,
    title: 'Serving Communities Worldwide',
    desc: 'Dedicated to uplifting those in need'
  },
  { 
    img: hero3,
    title: 'Join Our Spiritual Journey',
    desc: 'Experience faith, hope and love'
  }
];

const TOP_STORIES_DATA = [
  { 
    img: story1,
    title: 'Annual Retreat 2025', 
    desc: 'Join us for our annual spiritual retreat in the mountains of Kerala', 
    date: 'Oct 15-22, 2025',
    category: 'Events'
  },
  { 
    img: story2,
    title: 'New Education Initiative', 
    desc: 'Launching free education programs for underprivileged children', 
    date: 'Sep 1, 2025',
    category: 'Ministries'
  },
  { 
    img: story3,
    title: 'Charity Mission in Nepal', 
    desc: 'Our sisters provided aid to earthquake victims in remote villages', 
    date: 'Aug 28, 2025',
    category: 'Outreach'
  }
];

// Create more stories for pagination
const ALL_STORIES = [
  ...TOP_STORIES_DATA,
  { 
    img: story1,
    title: 'Community Outreach Program', 
    desc: 'Expanding our services to rural communities in Karnataka', 
    date: 'Jul 15, 2025',
    category: 'Outreach'
  },
  { 
    img: story2,
    title: 'Education Scholarship Awards', 
    desc: 'Awarding scholarships to 50 deserving students this year', 
    date: 'Jun 20, 2025',
    category: 'Education'
  },
  { 
    img: story3,
    title: 'New Chapel Inauguration', 
    desc: 'Blessing of our new chapel in Bangalore diocese', 
    date: 'May 5, 2025',
    category: 'Events'
  }
];

const APOSTOLATE_DATA = [
  { name: 'Vocation Animation', img: vocation, desc: 'Guiding youth in discovering their spiritual calling' },
  { name: 'Educational Apostolate', img: education, desc: 'Providing quality education to all communities' },
  { name: 'Pastoral Apostolate', img: pastoral, desc: 'Spiritual guidance and pastoral care services' },
  { name: 'Social Apostolate', img: social, desc: 'Community development and social empowerment' },
  { name: 'Health Care', img: healthcare, desc: 'Medical services for underserved communities' },
  { name: 'Hostel Ministry', img: hostel, desc: 'Safe accommodations for students and workers' },
  { name: 'Elderly Care', img: elderly, desc: 'Compassionate care for senior citizens' },
  { name: 'Youth Ministry', img: youth, desc: 'Engaging and empowering young people' }
];

const NEWS_IMAGES = [
  { src: news1, alt: "Chronicle Bulletin" },
  { src: news2, alt: "Compassionate Pastor" },
  { src: news3, alt: "Province Level Bulletin" }
];

const PUBLICATIONS_IMAGES = [
  { src: pub1, alt: "An Indian Pearl" },
  { src: pub2, alt: "A Shepherd's Heart" },
  { src: pub3, alt: "Waves of Mercy" }
];

const EVENTS = [
  { title: 'Annual Retreat', date: 'Oct 15-22, 2025', location: 'Bethany Retreat Center, Kerala' },
  { title: 'Charity Gala Dinner', date: 'Nov 5, 2025', location: 'Grand Hyatt, Mumbai' },
  { title: 'Christmas Carol Service', date: 'Dec 20, 2025', location: 'St. Mary Cathedral, Bangalore' },
  { title: 'Youth Leadership Camp', date: 'Jan 10-15, 2026', location: 'Bethany Youth Center, Goa' },
  { title: 'Easter Celebration', date: 'Apr 12, 2026', location: 'Bethany Mother House, Mangalore' },
  { title: 'Founder\'s Day', date: 'Mar 8, 2026', location: 'All Bethany Institutions' }
];

const videoIds = [
  '5Me4Xnul6vc',
  '8nVdntjOLk8',
  'L70cUYYVJxU',
  'qNYRe0gd0h4',
  'YdDqMHueWak',
  'BsH5ecREiOY',
  'cQUWFPez62I',
  'Ff03RvIbJf0',
  'ew_Y5Ui66Ts'
];

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[1000] p-4" onClick={onClose}>
      <div className="relative bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10" onClick={onClose}>
          <FiX size={28} />
        </button>
        {children}
      </div>
    </div>
  );
};

const SectionTitle = ({ children, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-maroon-800 mb-2">{children}</h2>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1 bg-red-700 mx-auto mt-4 rounded-full"></div>
  </div>
);

const Card = ({ img, title, desc, date, category, onClick }) => (
  <div 
    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out group cursor-pointer"
    onClick={onClick}
  >
    <div className="relative">
      <img src={img} alt={title} className="w-full h-56 object-cover" />
      {category && (
        <div className="absolute top-4 right-4 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </div>
      )}
    </div>
    <div className="p-6">
      {date && <p className="text-red-700 text-sm mb-1 flex items-center"><FiCalendar className="mr-1" /> {date}</p>}
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-700 transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
      <button className="mt-4 text-red-700 font-medium flex items-center group-hover:underline">
        Read more <FiChevronRight className="ml-1" />
      </button>
    </div>
  </div>
);

const Button = ({ children, variant = 'primary', icon, className, ...props }) => {
  const variants = {
    primary: 'bg-red-700 hover:bg-red-800 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border-2 border-red-700 text-red-700 hover:bg-red-50'
  };
  
  return (
    <button 
      className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => {
    setCurrent(current === SLIDES.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? SLIDES.length - 1 : current - 1);
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [current]);
  
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {SLIDES.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={slide.img} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        <div className={`transition-transform duration-1000 ${current === 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{SLIDES[current].title}</h1>
          <p className="text-xl text-white max-w-2xl mb-8">{SLIDES[current].desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button icon={<FiBookOpen />}>Learn More</Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Join Us
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-20 transition-all"
      >
        <FiChevronLeft size={28} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-20 transition-all"
      >
        <FiChevronRight size={28} />
      </button>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full animate-scrollIndicator"></div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Founded in 1921 by Msgr Raymond Francis Camillus Mascarenhas">
          About Bethany Congregation
        </SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={pub1}
                alt="Bethany Sisters" 
                className="w-full h-auto"
              />   
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-700 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">100+</div>
              <div className="text-sm">Years of Service</div>
            </div>
          </div>
          
          <div>
            <p className="text-gray-700 text-lg mb-4">
              The Congregation of the Sisters of the Little Flower of Bethany is dedicated to participating in the mission of the Church by responding to the pressing needs of the time through pastoral care, education, social work, and healthcare across the globe.
            </p>
            <p className={`text-gray-600 mb-6 ${showMore ? 'block' : 'hidden md:block'}`}>
              Our mission is to spread the love of Christ through compassionate service to all, especially the poor and marginalized. We strive to build communities of faith, hope and love where every person is respected and valued. With over 2,000 sisters serving in 15 countries, we continue to expand our outreach and impact.
            </p>
            <p className={`text-gray-600 mb-6 ${showMore ? 'block' : 'hidden'}`}>
              Our founder, Msgr Raymond Francis Camillus Mascarenhas, envisioned a congregation that would be a beacon of hope in a troubled world. Today, we honor his legacy through our commitment to education, healthcare, and social justice initiatives that transform lives and communities.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button icon={<FiBookOpen />}>Our History</Button>
              <Button variant="outline" onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Show Less' : 'Read More'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TopStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [storiesToShow, setStoriesToShow] = useState(3);
  
  const loadMoreStories = () => {
    setStoriesToShow(prev => prev + 3);
  };
  
  return (
    <section id="stories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Latest news and inspiring stories from our community">
          Top Stories
        </SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_STORIES.slice(0, storiesToShow).map((story, index) => (
            <Card 
              key={index} 
              {...story} 
              onClick={() => setSelectedStory(story)}
            />
          ))}
        </div>
        
        {storiesToShow < ALL_STORIES.length && (
          <div className="text-center mt-12">
            <Button variant="outline" onClick={loadMoreStories}>
              View All Stories
            </Button>
          </div>
        )}
        
        <Modal isOpen={!!selectedStory} onClose={() => setSelectedStory(null)}>
          {selectedStory && (
            <div className="p-8">
              <img 
                src={selectedStory.img} 
                alt={selectedStory.title} 
                className="w-full h-80 object-cover rounded-xl mb-6"
              />
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">{selectedStory.category}</span>
                <span className="mx-4">|</span>
                <FiCalendar className="mr-1" />
                {selectedStory.date}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedStory.title}</h3>
              <p className="text-gray-600 mb-6">
                {selectedStory.desc} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
              </p>
              <p className="text-gray-600 mb-6">
                Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.
              </p>
              <div className="flex justify-between items-center mt-8">
                <Button>Read Full Story</Button>
                <div className="flex space-x-3">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <FaFacebook className="text-blue-600" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <FaTwitter className="text-blue-400" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <FiShare2 className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

const MinistriesSection = () => {
  const [selectedApostolate, setSelectedApostolate] = useState(null);
  
  return (
    <section id="ministries" className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Our diverse ministries serving communities worldwide">
          Our Apostolates
        </SectionTitle>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {APOSTOLATE_DATA.map((apostolate, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out group cursor-pointer"
              onClick={() => setSelectedApostolate(apostolate)}
            >
              <div className="relative">
                <img 
                  src={apostolate.img} 
                  alt={apostolate.name} 
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-center w-full group-hover:text-red-300 transition-colors">
                    {apostolate.name}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm text-center">{apostolate.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Modal isOpen={!!selectedApostolate} onClose={() => setSelectedApostolate(null)}>
          {selectedApostolate && (
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-start">
                <img 
                  src={selectedApostolate.img} 
                  alt={selectedApostolate.name} 
                  className="w-full md:w-1/3 h-64 object-cover rounded-xl"
                />
                <div className="md:ml-8 flex-1 mt-6 md:mt-0">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{selectedApostolate.name}</h3>
                  <p className="text-gray-600 mb-6">
                    {selectedApostolate.desc} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                    Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button>Learn More</Button>
                    <Button variant="outline">Support This Ministry</Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={`https://picsum.photos/300/200?random=${item}`} 
                        alt={`Activity ${item}`} 
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <p className="text-sm font-medium text-gray-800">Activity Title {item}</p>
                        <p className="text-xs text-gray-500">Location, Date</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

const MediaSection = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryPage, setGalleryPage] = useState(1);
  const itemsPerPage = 12;
  
  const allGalleryImages = [...NEWS_IMAGES, ...PUBLICATIONS_IMAGES, ...localImages];
  const paginatedImages = allGalleryImages.slice(0, galleryPage * itemsPerPage);
  
  return (
    <section id="media" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Explore our visual journey through photos and videos">
          Media Gallery
        </SectionTitle>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${activeTab === 'gallery' ? 'bg-red-700 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => setActiveTab('gallery')}
            >
              Photo Gallery
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${activeTab === 'videos' ? 'bg-red-700 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => setActiveTab('videos')}
            >
              Videos
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${activeTab === 'publications' ? 'bg-red-700 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => setActiveTab('publications')}
            >
              Publications
            </button>
          </div>
        </div>
        
        {activeTab === 'gallery' && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {paginatedImages.map((img, index) => (
                <div 
                  key={index} 
                  className="aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer transform hover:scale-105 transition-transform"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            {paginatedImages.length < allGalleryImages.length && (
              <div className="text-center mt-8">
                <Button variant="outline" onClick={() => setGalleryPage(prev => prev + 1)}>
                  View More
                </Button>
              </div>
            )}
          </>
        )} 
        
        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoIds.map((id) => (
              <div key={id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Bethany Congregation Video ${id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Bethany Congregation Video</h3>
                  <p className="text-gray-600 text-sm">Your description here.</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'publications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PUBLICATIONS_IMAGES.map((pub, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={pub.src} 
                    alt={pub.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">{pub.alt}</h3>
                  <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="flex justify-between">
                    <Button variant="outline" className="text-sm py-2 px-4">Preview</Button>
                    <Button className="text-sm py-2 px-4">Purchase</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
          <div className="p-4">
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-full max-h-[80vh] object-contain"
            />
          </div>
        </Modal>
      </div>
    </section>
  );
};

const EventsSection = () => {
  const [activeEvents, setActiveEvents] = useState(EVENTS);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const filterEvents = (filter) => {
    setActiveEvents(EVENTS);
  };
  
  return (
    <section id="events" className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Join us for our upcoming events and gatherings">
          Events Calendar
        </SectionTitle>
        
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="inline-flex bg-white rounded-full shadow-sm">
            <button 
              className="px-4 sm:px-6 py-2 rounded-l-full border-r border-gray-200 hover:bg-gray-50"
              onClick={() => filterEvents('all')}
            >
              All Events
            </button>
            <button 
              className="px-4 sm:px-6 py-2 border-r border-gray-200 hover:bg-gray-50"
              onClick={() => filterEvents('retreats')}
            >
              Retreats
            </button>
            <button 
              className="px-4 sm:px-6 py-2 border-r border-gray-200 hover:bg-gray-50"
              onClick={() => filterEvents('charity')}
            >
              Charity
            </button>
            <button 
              className="px-4 sm:px-6 py-2 rounded-r-full hover:bg-gray-50"
              onClick={() => filterEvents('youth')}
            >
              Youth
            </button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {activeEvents.map((event, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md mb-6 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="p-6 flex items-start">
                <div className="bg-red-100 text-red-800 rounded-xl p-4 flex flex-col items-center justify-center mr-6">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm">OCT</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <FiCalendar className="mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiMapPin className="mr-2" />
                    {event.location}
                  </div>
                </div>
                <button className="bg-red-700 text-white p-2 rounded-full hover:bg-red-800">
                  <FiChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button>View Full Calendar</Button>
        </div>
        
        <Modal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
          {selectedEvent && (
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-start">
                <div className="bg-red-100 text-red-800 rounded-xl p-6 flex flex-col items-center justify-center mr-0 md:mr-8 mb-6 md:mb-0">
                  <div className="text-4xl font-bold">15</div>
                  <div className="text-lg">OCT</div>
                  <div className="text-sm mt-2">2025</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{selectedEvent.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FiCalendar className="mr-2" />
                    {selectedEvent.date} | 9:00 AM - 5:00 PM
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <FiMapPin className="mr-2" />
                    {selectedEvent.location}
                  </div>
                  <p className="text-gray-700 mb-6">
                    Join us for our annual retreat in the beautiful mountains of Kerala. This spiritual gathering will focus on finding inner peace and strengthening our connection to God through prayer, meditation, and community activities. All are welcome to attend this transformative experience.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button icon={<FiCalendar />}>Add to Calendar</Button>
                    <Button variant="outline">Share Event</Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Event Gallery</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[1,2,3,4].map(item => (
                    <div key={item} className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={`https://picsum.photos/300/300?random=${item}`} 
                        alt={`Event ${item}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
            <FaPrayingHands className="text-red-700 text-xl" />
          </div>
          <span className="text-xl font-bold">Bethany Congregation</span>
        </div>
        <p className="text-red-200 mb-6 max-w-2xl mx-auto">
          Serving humanity with compassion and dedication since 1921. Spreading the love of Christ through service and community.
        </p>
        
        <div className="border-t border-red-800 pt-8 pb-6 text-center text-red-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Bethany Congregation. All rights reserved.</p>
          <p className="mt-2">Designed with love and prayer</p>
        </div>
      </div>
    </footer>
  );
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <FiArrowUp size={24} />
    </button>
  );
};

export default function Home() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <main>
        <HeroSlider />
        <AboutSection />
        <TopStories />
        <MinistriesSection />
        <MediaSection />
        <EventsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}