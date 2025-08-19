// src/components/BangaloreProvince.jsx
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Search, SlidersHorizontal, MapPin, Phone, Calendar } from 'lucide-react';
import convent1 from '../assets/convents/convent1.jpg';
import convent2 from '../assets/convents/convent2.jpg';
import convent3 from '../assets/convents/convent3.jpg';
import convent4 from '../assets/convents/convent4.jpg';
import convent5 from '../assets/convents/convent5.jpg';
import convent6 from '../assets/convents/convent6.jpg';
import convent7 from '../assets/convents/convent7.jpg';
import convent8 from '../assets/convents/convent8.jpg';
import convent9 from '../assets/convents/convent9.jpg';
import convent10 from '../assets/convents/convent10.jpg';
import convent11 from '../assets/convents/convent11.jpg';
import convent12 from '../assets/convents/convent12.jpg';
import convent13 from '../assets/convents/convent13.jpg';
import convent14 from '../assets/convents/convent14.jpg';
import convent15 from '../assets/convents/convent15.jpg';
import convent16 from '../assets/convents/convent16.jpg';
import convent17 from '../assets/convents/convent17.jpg';
import convent18 from '../assets/convents/convent18.jpg';
import convent19 from '../assets/convents/convent19.jpg';
import arisikare1 from '../assets/Bethany School Arsikare/arisikare1.jpg';
import arisikare2 from '../assets/Bethany School Arsikare/arisikare2.jpg';
import arisikare3 from '../assets/Bethany School Arsikare/arisikare3.jpg';
import arisikare4 from '../assets/Bethany School Arsikare/arisikare4.jpg';
import arisikare5 from '../assets/Bethany School Arsikare/arisikare5.jpg';
import arisikare6 from '../assets/Bethany School Arsikare/arisikare6.jpg';
import arisikare7 from '../assets/Bethany School Arsikare/arisikare7.jpeg';
import Krnagar1 from  '../assets/St. Joseph’s Convent, K.R.Nagar/krnagar1.jpg';
import Krnagar2 from  '../assets/St. Joseph’s Convent, K.R.Nagar/krnagar2.jpg';
import Krnagar3 from  '../assets/St. Joseph’s Convent, K.R.Nagar/krnagar3.jpg';
import Krnagar4 from  '../assets/St. Joseph’s Convent, K.R.Nagar/krnagar4.jpg';
import Krnagar5 from  '../assets/St. Joseph’s Convent, K.R.Nagar/krnagar5.jpg';
import Kannada_Arsikare1 from '../assets/Kannada_Higher_School_Arsikere/kannada_arsikare1.jpg';
import Kannada_Arsikare2 from '../assets/Kannada_Higher_School_Arsikere/kannada_arsikare2.jpg';
import Kannada_Arsikare3 from '../assets/Kannada_Higher_School_Arsikere/kannada_arsikare3.jpg';
import Kannada_Arsikare4 from '../assets/Kannada_Higher_School_Arsikere/kannada_arsikare4.jpg';
import Kannada_Arsikare5 from '../assets/Kannada_Higher_School_Arsikere/kannada_arsikare5.jpg';
import Kannada_Arsikare6 from '../assets/Kannada_Higher_School_Arsikere/kannada_arsikare6.jpg';
import Kannada_sagar1 from '../assets/Kannada_Higher_School_Sagar/kannada_sagar1.jpg';
import Kannada_sagar2 from '../assets/Kannada_Higher_School_Sagar/kannada_sagar2.jpg';
import Kannada_sagar3 from '../assets/Kannada_Higher_School_Sagar/kannada_sagar3.jpg';
import Kannada_sagar4 from '../assets/Kannada_Higher_School_Sagar/kannada_sagar4.jpg';
import Kannada_sagar5 from "../assets/Kannada_Higher_School_Sagar/kannada_sagar5.jpg";
import Kannada_sagar6 from '../assets/Kannada_Higher_School_Sagar/kannada_sagar6.jpg';
import Kannada_sagar7 from '../assets/Kannada_Higher_School_Sagar/kannada_sagar7.jpg';
import Kannada_sagar8 from '../assets/Kannada_Higher_School_Sagar/kannada_sagar8.jpg';
import sports6 from '../assets/LOYOLA_COLLEGE/sports6.jpg';
import fundation from '../assets/LOYOLA_COLLEGE/sports6.jpg';
import generalvisitt from '../assets/LOYOLA_COLLEGE/generalvisitt.jpg';
import generalvisitation from '../assets/LOYOLA_COLLEGE/generalvisitation.jpg';
import presidentvisitation from '../assets/LOYOLA_COLLEGE/presidentvisitation.jpg';
import principal1 from '../assets/LOYOLA_COLLEGE/principal1.jpg';
import sports2 from '../assets/LOYOLA_COLLEGE/sports2.jpg';
import staff from '../assets/LOYOLA_COLLEGE/staff.jpg';
import Foundation from '../assets/CISCE/Foundation.jpg';
import Onthestage from '../assets/CISCE/Onthestage.jpg';
import Prize from '../assets/CISCE/Prize.jpg';
import SchoolBuilding from '../assets/CISCE/SchoolBuilding.jpg';
import Staffstudent from '../assets/CISCE/Staffstudent.jpg';
import Teachersmeet from '../assets/CISCE/Teachersmeet.jpg';
import Visitation_welcoming from '../assets/CISCE/Visitation_welcoming.jpg';
import Visitation from '../assets/CISCE/Visitation.jpg';


// --- MOCK COMPONENTS TO FIX IMPORT ERRORS ---
// In a real application, these would be in separate files.

const ConventCard = ({ convent, onClick }) => (
    <div 
        className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group transform hover:-translate-y-2 transition-transform duration-300"
        onClick={onClick}
    >
        <img src={convent.image || convent.images[0]} alt={convent.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">{convent.title}</h3>
            <p className="text-gray-600 line-clamp-3">{convent.description}</p>
        </div>
    </div>
);

const ConventModal = ({ convent, onClose, currentImageIndex, onNextImage, onPrevImage, onImageSelect }) => {
    const images = convent.images || [convent.image];
    const [isZoomed, setIsZoomed] = useState(false);
    
    // const ZoomedImageView = ({ src, onClose }) => (
    //     <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
    //         <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50">
    //             <X size={32} />
    //         </button>
    //         <img src={src} alt="Zoomed view" className="max-w-[90vw] max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
    //     </div>
    // );


    const ZoomedImageView = ({ src, onClose, onNext, onPrev, showNavButtons }) => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50">
            <X size={32} />
        </button>
        
     {showNavButtons && (
         <>
             <button 
                 onClick={(e) => { e.stopPropagation(); onPrev(); }} 
                 className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors z-50"
             >
                 <ChevronLeft size={32} />
             </button>
             <button 
                 onClick={(e) => { e.stopPropagation(); onNext(); }}                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors z-50"
             >
                  <ChevronRight size={32} />
              </button>
          </>
      )}

        <img src={src} alt="Zoomed view" className="max-w-[90vw] max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
    </div>
);
    
    // New handler for gallery thumbnail clicks to directly zoom the image
    const handleThumbnailClick = (index) => {
        onImageSelect(index); // Set the selected image
        setIsZoomed(true);    // Open the zoom view
    };


    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-2xl font-bold text-gray-800">{convent.title}</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-800"><X size={28} /></button>
                    </div>
                    <div className="flex-grow overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="relative mb-6">
                                <img 
                                    src={images[currentImageIndex]} 
                                    alt={convent.title} 
                                    className="w-full h-auto max-h-[50vh] object-contain rounded-lg cursor-zoom-in"
                                    onClick={() => setIsZoomed(true)}
                                />
                                {images.length > 1 && (
                                    <>
                                        <button onClick={onPrevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"><ChevronLeft /></button>
                                        <button onClick={onNextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"><ChevronRight /></button>
                                    </>
                                )}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">About This Convent</h3>
                            <p className="text-gray-600 mb-6">{convent.description}</p>
                            
                            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Convent History</h3>
                            <p className="text-gray-600 whitespace-pre-wrap">{convent.history}</p>

                            {/* Gallery inside Modal for any convent with multiple images */}
                            {convent.images && convent.images.length > 1 && (
                                <div className="mt-8">
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4 border-t pt-4">Gallery</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                        {convent.images.map((imgSrc, index) => (
                                            <div
                                                key={index}
                                                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === index ? 'border-blue-500' : 'border-transparent hover:border-blue-300'}`}
                                                onClick={() => handleThumbnailClick(index)}
                                            >
                                                <img src={imgSrc} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Sidebar Details */}
                        <div className="lg:col-span-1">
                             <div className="bg-gray-100 p-6 rounded-lg sticky top-0">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Convent Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <MapPin className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">Address</h4>
                                            <p className="text-gray-600">{convent.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">Contact</h4>
                                            <p className="text-gray-600">{convent.contact}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Calendar className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">Established</h4>
                                            <p className="text-gray-600">{convent.established}</p>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            {isZoomed && (
                <ZoomedImageView
                    src={images[currentImageIndex]}
                    onClose={() => setIsZoomed(false)}
                    onNext={() => {
                        onNextImage();
                    }}
                    onPrev={() => {
                        onPrevImage();
                    }}
                    showNavButtons={images.length > 1}
                />
            )}
        </>
    );
};

const SearchBar = ({ searchTerm, setSearchTerm, activeFilter, setActiveFilter }) => (
    <div className="my-8 p-6 bg-white rounded-2xl shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-grow w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search for a convent by name or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>
            <div className="flex items-center gap-2">
                <SlidersHorizontal className="text-gray-500" />
                {['all', 'education', 'healthcare', 'social'].map(filter => (
                    <button 
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-full font-medium capitalize transition-colors ${activeFilter === filter ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    </div>
);

const ProvinceHeader = () => (
    <div className="text-center py-12">
        <h1 className="text-5xl font-extrabold text-gray-800">Bangalore Province</h1>
        <p className="text-xl text-gray-500 mt-2">Serving communities with dedication and compassion.</p>
    </div>
);

const ProvinceStats = ({ convents }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg"><p className="text-4xl font-bold text-blue-600">{convents.length}</p><p className="text-gray-600">Communities</p></div>
        <div className="bg-white p-6 rounded-2xl shadow-lg"><p className="text-4xl font-bold text-green-600">195+</p><p className="text-gray-600">Sisters</p></div>
        <div className="bg-white p-6 rounded-2xl shadow-lg"><p className="text-4xl font-bold text-purple-600">4</p><p className="text-gray-600">Dioceses</p></div>
        <div className="bg-white p-6 rounded-2xl shadow-lg"><p className="text-4xl font-bold text-red-600">70+</p><p className="text-gray-600">Years of Service</p></div>
    </div>
);

const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
    </div>
);


// --- MAIN COMPONENT ---
const BangaloreProvince = () => {
    const [convents, setConvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedConvent, setSelectedConvent] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Simulating API fetch with timeout
        setTimeout(() => {
            // Using placeholder URLs instead of local imports
             
            
            setConvents([
                { id: 1, title: "Bethany Provincial House Bangalore", description: "The provincial house serves as the administrative center...", history: `Way back in the 1970s...`, image: convent1, address: "123 Church Road, Bangalore", contact: "080-12345678", established: "1950" },
                { id: 2, title: "St. Joseph’s Convent, Sagar", description: "Located in the serene town of Sagar...", history: `In the edges of the Western Ghats...`, image: convent2, address: "St. Joseph's Road, Sagar", contact: "08183-234567", established: "1965" },
                { id: 3, title: "Mother of Mercy Convent, Gadenahally", description: "This convent is known for its healthcare initiatives...", history: `Gadenahalli is a vibrant village...`, image: convent3, address: "Mercy Lane, Gadenahally", contact: "080-87654321", established: "1972" },
                { id: 4, title: "Fatima Convent, Dornahally", description: "Situated in the countryside, Fatima Convent operates...", history: `Dornahalli Parish is locally known...`, image: convent4, address: "Fatima Street, Dornahally", contact: "08185-345678", established: "1980" },
                { id: 5, title: "St. Martha’s Convent, Mudigere", description: "This convent manages a boarding school...", history: `Surrounded by dense green forest...`, image: convent5, address: "Martha Road, Mudigere", contact: "08263-456789", established: "1975" },
                { id: 6, title: "Bethany Convent, Bangalore", description: "Located in the heart of Bangalore...", history: `Way back in the 1970s...`, image: convent6, address: "45 Convent Street, Bangalore", contact: "080-98765432", established: "1960" },
                { id: 7, title: "St. Mary’s Convent, Arsikere", description: "This convent operates a well-known educational institution...", history: `As per the expressed need...`, image: convent7, address: "Mary Road, Arsikere", contact: "08173-567890", established: "1958" },
                { id: 8, title: "Sacred Heart Convent, Basrikatte", description: "Nestled in the hills, this convent runs a retreat center...", history: `Sacred Heart Convent was opened...`, image: convent8, address: "Sacred Heart Circle, Basrikatte", contact: "08262-678901", established: "1985" },
                { id: 9, title: "St. Joseph’s Convent, K.R.Nagar", description: "This convent is known for its innovative farming techniques...", history: `St. Joseph’s Convent, K.R. Nagar took root...`, image: convent9, address: "Joseph Lane, K.R.Nagar", contact: "08223-789012", established: "1978" },
                { id: 10, title: "Jyothi Nilaya, Bangalore", description: "Jyothi Nilaya serves as a home for senior sisters...", history: `Mother Macrina, the Superior General...`, image: convent10, address: "Light Street, Bangalore", contact: "080-23456789", established: "1990" },
                { id: 11, title: "Holy Cross Convent, Arsikere", description: "This convent specializes in healthcare...", history: `In 1966 Fr Mathias Noronha...`, image: convent11, address: "Cross Road, Arsikere", contact: "08173-890123", established: "15.05.1974" },
                { id: 12, title: "St. Antony’s Convent, Ponnampet", description: "Located in a coffee-growing region...", history: `Ponnampet is a beautiful village...`, image: convent12, address: "Antony Street, Ponnampet", contact: "08272-901234", established: "01.06.1979" },
                { id: 13, title: "St. Mary’s Convent, Kutta", description: "This convent manages an eco-friendly farm...", history: `The little town of Kutta...`, image: convent13, address: "Mary Garden, Kutta", contact: "08272-012345", established: "02.07.1979" },
                { id: 14, title: "Bethany Convent, Bogadi", description: "Specializing in special education...", history: `Mother Sylvine, the then Superior General...`, image: convent14, address: "Bogadi Road, Mysore", contact: "0821-1234567", established: "09.07.1989" },
                { id: 15, title: "Bethany Convent, Kable", description: "This convent focuses on rural development...", history: `Bethany Convent, Kable, is situated...`, image: convent15, address: "Kable Village Road", contact: "08282-2345678", established: "04.08.1990" },
                { id: 16, title: "Seva Sadan, Doddabelavangala", description: "Seva Sadan serves as a rehabilitation center...", history: `Seva Sadan, Doddabelavangala, is located...`, image: convent16, address: "Service Road, Doddabelavangala", contact: "08151-3456789", established: "08.09.1988" },
                { id: 17, title: "Bethany Convent, Shimoga", description: "Affiliated with St. Joseph's in Sagar...", history: `Father Founder had a deep love...`, image: convent17, address: "Convent Road, Shimoga", contact: "08182-4567890", established: "30.05.2005" },
                { id: 18, title: "Jeevan Jyothi Ashram, Mankale", description: "This ashram serves as a spiritual retreat center...", history: `Mgr Raymond F. C. Mascarenhas was deeply inspired...`, image: convent18, address: "Peace Lane, Mankale", contact: "08282-5678901", established: "05.07.2004" },
                { id: 19, title: "Bethany Convent, Madikeri", description: "Located in the hill station of Madikeri...", history: `Madikeri, the district headquarters...`, image: convent19, address: "Hill View Road, Madikeri", contact: "08272-6789012", established: "24.05.1995" },
                {
                    id: 20,
                    title: "Bethany Central School (CISCE), Arsikere",
                    description: "Located in Opp Court B H Road near Taluk Office Henjagondanahalli Arsikere",
                    history: `Bethany Central School, Arsikere, established under the Bethany Educational Society, has been committed to providing quality education that blends academic excellence with moral values. Since its inception, the school has grown into a vibrant centre of learning, fostering holistic development in every child.At Bethany Central School, we believe education is a journey towards the fullness of life, rooted in truth, love, and service. We strive to nurture every child’s potential, instill strong values, and equip them with the knowledge and skills to face the future with confidence. Together, as a family of learners, we work to create a joyful, disciplined, and inspiring environment where each student can grow into a compassionate and responsible citizen.`,
                    images: [
                        arisikare1,
                        arisikare2,
                        arisikare3,
                        arisikare4,
                        arisikare5,
                        arisikare6,
                        arisikare7,
                       
                    ],
                    address: "Opp Court B H Road near Taluk Office Henjagondanahalli Arsikere",
                    contact: "8123482401",
                    established: "02-01-1963",
                    activities: ["academics and co-curricular activities", "music and drama,", "sports and art. "]
                },
                {
                    id: 21,
                    title: "St.Joseph's Eng.Med.Hr.Pry.School, K.R.Nagar ",
                    description: " Theme: “Beat Plastic Pollution.” :Located in Opp Court B H Road near Taluk Office Henjagondanahalli Arsikere",
                    history: `St. Joseph&#39;s English Medium Higher Primary School, K.R. Nagar Celebrated
&quot;The world Environment Day&quot; on 05th June 2025. Spoorthy a student from 10 th
std extended a warm welcome to the school correspondent Sr. Pushpa and the
Headmistresses of three schools. A song &quot;Manegondu mara uurigondu vana&quot; was
melodiously sung by the High school students. Annvika from class 10th spoke
about Environmental conservation, the importance of a plastic -free Environment
and it&#39;s significance in our campus. To signify the importance of the day all the
staff and students were dressed in green colour. Each one, Plant one and many
other slogans were proudly uttered by the students as we moved on a rally. This
was indeed a meaningful celebration.`,
                    images: [
                        Krnagar2,
                        Krnagar1,
                        Krnagar3,
                        Krnagar4,
                        Krnagar5,
                    
                    ],
                    address: "Opp Court B H Road near Taluk Office Henjagondanahalli Arsikere",
                    contact: "8210856536",
                    established: "02-01-1963",
                    activities: ["academics and co-curricular activities", "music and drama,", "sports and art. "]
                },
                {
                    id: 22,
                    title: "St.Mary’s Kannada Higher Primary School, Arsikere.",
                    description: "Located in OChurch Colony, Arsikeree 573103, Hassan Dt.",
                    history: `St.Mary’s Kannada Hr Pry School, Arsikere
St.Mary’s Kannada Higher Primary School was established in the year 1939 by the Parish
Priest of St.Mary’s Church Originally as a Tamil medium school to educate the children of
railway employers. In 1967 the medium of instruction was, changed to Kannada . Later
in 1974 the school was handed over to the Bethany Educational Society by Fr S R Peter the
then Parish priest of St.Mary’s Church. Since then , the school has been committed to
providing value based education, especially to the poor and the marginalized children of the
locality.
The school offers classes from grade I to VII . The school strives to offer students
opportunities for holistic development integrating academic values and co- curricular
activities.. The core values of Bethany Educational society are emphasized during school
assemblies, helping students internalize and practice them in daily life.
Sr.A.Jacintha Serves as Headmistress of the school and Tina Bartholomea as the correspondent.`,
                    images: [
                        Kannada_Arsikare1,
                        Kannada_Arsikare2,
                        Kannada_Arsikare3,
                        Kannada_Arsikare4,
                        Kannada_Arsikare5,
                        Kannada_Arsikare6,
                    ],
                    address: "OChurch Colony, Arsikeree 573103, Hassan Dt.",
                    contact: "8722689877",
                    established: "02-01-1963",
                    activities: ["academics and co-curricular activities", "music and drama,", "sports and art. "]
                },
                {
                    id: 23,
                    title: "St.Joseph’s Kannada Higher Primary School Sagar",
                    description: "Located in Sagar Taluk Shivmoga Dist -577401.",
                    history: `Education is one of the basic needs of children and St.Joseph’s Kannada Higher
Primary School started in the year 1927 to fulfill this fundamental need of the poor
children of this locality. Beginning the Parochial school was under the management
of Parish it was started by Fr.PS Fernades the parish priest. It was recognized by the
government in 1933 and was admitted to grant in aid in 1934 responding to the
invitation of Fr.Fugenes Lopez on 16 May 1950 five sisters landed in Sagar.
The administration of St.Joseph’s primary School comprising standard 1 to 4 th was
handed over to the Bethany sisters by an agreement between the Bishop and the
superior general on 23 March 1950 and Sr.Lazarus was the first headmistress .The
nursery school was begun by the sisters on 15 June 1950 at the request of the Public.
It was recognized by the educational department and received partial financial aid
from the government the same year. Mother Gemma was in charge of the nursery
school. By their dedicated and loving approach the sisters gained confidence of the
people department and the school flourished. The middle school was opened on 22
may 1954 Sr.Azella was the first headmistress. Since the Kannada primary school had
2 sections the first floor of the English Medium School was generously given for our
use in 1985. The existing Kannada Medium building was built in the year 1993. It was
blessed and inaugurated by most Rev.Fr.Ignatious Pinto on 14 th December under the
leadership of Sr.Tressy the headmistress. When the number of students increasing in
English Medium school, in 2015 Kannada Medium all the sections were shifted to the
new building. There was a dire need to have a auditorium for our school, amidst
many hurdles it was put up. Much of the school credit has to go to the headmistress
and management who with close co-operation have made the school what it is
today. In recent years school alumni has been a great help and support towards the
betterment of the school mention may be made of a few works undertaken with
their co-operation i.e water purifier, smart board, steel sink for children, furnishing
office and staff room by fixing tiles and painting. 
 Over all the academic performance of the students is good. Innovative
methods are used by our teachers in their teaching methods.

 Remedial classes are held for slow learners and evaluate the progress. Various
opportunities are provided for our students for their all-round development.
School assemblies are conducted meaningfully.
 Through school cabinet leadership qualities are developed in students.
 To raise scientific temper and mathematical skills arranged exhibition for 1 to
7 th .Students participated actively and prepared various science and
mathematics working models science and mathematics teaching aid under the
guidance of their class teachers
 Vanmahostava was celebrated with due preparation in the school planting few
saplings in the school garden and in the surrounding. Enacting skit , singing
awareness songs. It really created among students love for the nature and
sense of responsibility to keep our surroundings clean. Constitution day was
conducted by our teacher meaningfully.
 Preamble of the constitution and its significance was explained to our students
creatively. Preamble of the constitution has become the part of our daily
assembly, students recite this meaningfully with a sense of patriotism and love
for our nation.
 Yoga day was conducted by our PE teacher Mr.Basavaraj and Mr.Panduranga
the senior student of our school. Some of the yoga tips were shared about
yoga in the context of our Indian culture and to maintain good health through
Yoga.
 Poshan Abiana was conducted in our school with much enthusiasm. Mrs
Philomin teacher Mrs.Sharavanthi nurse from the government health
department and Mrs.Vani local Asha worker spoke on health and hygiene and
the disadvantages of eating junk food. Students and teachers participated
actively and made this day a memorable one.
 According to the yearly plan various competitions are conducted every month
to develop the talents as well as to bring out best in each students such as
drawing, pick and speech, action song, singing, quiz debate. etc.
 Computer education is imparted to fit to modern world to all our students
 Students are trained in sports and games and encouraged to participate in
various activities conducted by other organizations and by the educational
department
 Seminar on core values, use of mass media, good and bad touch, and personal
development was conducted for our students by Sr. Tresa Lidiya and NTC
students Makalale. It was very meaningful and useful for our students.
 Students Everyday repeat core values during school assembly, enact skits,
arrange bulletin board depicting the core values. Even in our teaching we
highlight Core values and given importance.
 Government scholarships are availed for students. Poor students are helped
with, fee concession and BES scholarship Teachers are given ample
opportunities to develop their talents by preparing the students to participate
in various activities conducted in the school as well as by the department.
Teachers work hard with dedication and share their talents and abilities for the

good of the students and the institution. Timely guidance and support from the
management enable us to be effective in our mission.`,
                    images: [
                        Kannada_sagar1,
                        Kannada_sagar2,
                        Kannada_sagar3,
                        Kannada_sagar4,
                        Kannada_sagar5,
                        Kannada_sagar6,
                        Kannada_sagar7,
                        Kannada_sagar8,
                    ],
                    address: "Sagar Taluk Shivmoga Dist -577401.",
                    contact: "6363647761",
                    // established: "02-01-1963",
                    activities: ["academics and co-curricular activities", "music and drama,", "sports and art. "]
                },
                {
                    id: 24,
                    title: "LOYOLA P U COLLEGE",
                    description: "Located in Gadenahally village and post, Dudda Hobli, Hassan Taluk, Hassan District.",
                    history: `Loyola PU College at Gadenahally was started in the Year 2003, keeping in mind the rural poor.
The students, especially the girls, did not have the privilege of continuing higher education after
their SSLC, through the farsightedness of Sr. Jyothi, then the Superior General and with the
collaboration of Sr. Bonita, the Provincial. Sr. Jyothi, Superior General’s, the dream of starting P.U
College was actualized on 18 th June 2003 with 37 students. Sr. Louisia was chosen as the first
Principal of the College for this new venture. This College is awarded every year a certificate of
appreciation for 100% result from the Pre-University Board and for their meritorious performance at
the Taluk Level by the Education Department.`,
                    images: [
                        fundation,
                        generalvisitation,
                        generalvisitt,
                        presidentvisitation,
                        principal1,
                        sports2,
                        sports6,
                        staff
                       
                    ],
                    address: "Gadenahally village and post, Dudda Hobli, Hassan Taluk, Hassan District.",
                    contact: "8123174967",
                    // established: "02-01-1963",
                    activities: ["academics and co-curricular activities", "music and drama,", "sports and art. "]
                },
                {
                    id: 25,
                    title: "St.Joseph's School (CISCE)",
                    description: "Located in Mankalale Sagar Shimoga Dist - 577401",
                    history: `St.Joseph’s School, Mankalale, Sagar having a people of educational temper desired to have their children study in an CISCE School, and as a response to the repeated request of the public the Management ventured to start St.Joseph’s School, at Mankalale. As per the Govt. norms a new school had to follow state syllabus atleast for two years, after which it could be affiliated to ICSE board. Accordingly St.Joseph’s School was established under the patronage of St.Joseph on 01.08.2018 with the strength of 89 students from I-V, affiliated to state syllabus. The school was affiliated to CISCE Board on 29th June 2022. Presently the strength 726 from Grade 1st to 10th. This year the third batch of grade X will be answering their Board exams. For consecutive two years the school got 100% result.
                    The friendly, caring ambience of the school, as well as the team spirit and smart work of the staff, at its infancy has attracted the people who sought admission of their children to our Institution. There is a rapid increase in the number of admissions.
                    We have dedicated and smart teaching staff. We cater to the all round development of every child under our care, bringing alive the goal of Bethany educational Society, “Education for fullness of life for all”. Students are smart, innovative and excel in curricular and Co-curricular activities.
                    Thanks to our Founder Late Rev.Msgr. R.F.C Mascarenhas for his sighted vision in starting this Bethany Educational Society that caters to the Educational thirst of the students according to the signs of the time to the era of information technology. `,
                    images: [
                        Foundation,
                        Onthestage,
                        Prize,
                        SchoolBuilding,
                        Staffstudent,
                        Teachersmeet,
                        Visitation_welcoming,
                        Visitation,
                       
                    ],
                    address: "Mankalale Sagar Shimoga Dist - 577401",
                    contact: "7349475456",
                   
                    activities: ["academics and co-curricular activities", "music and drama,", "sports and art. "]
                },
            ]);
            setIsLoading(false);
        }, 1000);
    },
     []);
 
    const filteredConvents = convents.filter(convent => {
        const matchesSearch = convent.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              convent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              (convent.history && convent.history.toLowerCase().includes(searchTerm.toLowerCase()));
        
        if (activeFilter === 'all') return matchesSearch;
        if (activeFilter === 'education') return matchesSearch && (convent.activities?.some(a => a.toLowerCase().includes('education')) || convent.title.toLowerCase().includes('school'));
        if (activeFilter === 'healthcare') return matchesSearch && convent.activities?.some(a => a.toLowerCase().includes('health'));
        if (activeFilter === 'social') return matchesSearch && convent.activities?.some(a => a.toLowerCase().includes('social'));
        
        return matchesSearch;
    });

    const handleNextImage = () => {
        const images = selectedConvent.images || [selectedConvent.image];
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        const images = selectedConvent.images || [selectedConvent.image];
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
                <ProvinceHeader />
                <ProvinceStats convents={convents} />
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
                
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        {filteredConvents.length === 0 ? (
                            <div className="text-center py-12">
                                <h3 className="text-xl font-medium text-gray-700">No convents found matching your search</h3>
                                <p className="text-gray-500 mt-2">Try different search terms or filters</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                {filteredConvents.map(convent => (
                                    <ConventCard
                                        key={convent.id}
                                        convent={convent}
                                        onClick={() => {
                                            setSelectedConvent(convent);
                                            setCurrentImageIndex(0);
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                )}
                
                {selectedConvent && (
                    <ConventModal
                        convent={selectedConvent}
                        onClose={() => setSelectedConvent(null)}
                        currentImageIndex={currentImageIndex}
                        onNextImage={handleNextImage}
                        onPrevImage={handlePrevImage}
                        onImageSelect={setCurrentImageIndex}
                    />
                )}
            </div>
            <footer className="mt-16 text-center text-white font-medium text-sm py-11 border-t bg-[#b71c1c]">
                <p>© {new Date().getFullYear()} Bangalore Province, Bethany Congregation</p>
                <p className="mt-2">All information is for educational purposes only</p>
            </footer>
        </div>
    );
};

export default BangaloreProvince;
