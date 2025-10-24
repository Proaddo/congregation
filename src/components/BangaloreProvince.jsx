// src/components/BangaloreProvince.jsx
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Search, SlidersHorizontal, MapPin, Phone, Calendar, Mail,} from 'lucide-react';
import { User } from "lucide-react";
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
import Krnagar1 from  '../assets/St. Joseph’s Convent, K.R.Nagar/Krnagar1.jpg';
import Krnagar2 from  '../assets/St. Joseph’s Convent, K.R.Nagar/Krnagar2.jpg';
import Krnagar3 from  '../assets/St. Joseph’s Convent, K.R.Nagar/Krnagar3.jpg';
import Krnagar4 from  '../assets/St. Joseph’s Convent, K.R.Nagar/Krnagar4.jpg';
import Krnagar5 from  '../assets/St. Joseph’s Convent, K.R.Nagar/Krnagar5.jpg';
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
import  KRNagarFoundation from '../assets/Joseph-Convent-KRNagar/KRNagar-FoundationDay.jpg';
import KRNagarComty from '../assets/Joseph-Convent-KRNagar/KRNagar-ComtyPic.jpg';
import Bogadi1 from '../assets/Bethany-Bogadi-Mysore/Bogadi1.jpg';
import Bogadi2 from '../assets/Bethany-Bogadi-Mysore/Bogadi2.jpg';
import Bogadi3 from '../assets/Bethany-Bogadi-Mysore/Bogadi3.jpg';
import Ashram1 from '../assets/Jeevan-Jyothi-Ashram/Ashram1.jpg';
import Ashram2 from '../assets/Jeevan-Jyothi-Ashram/Ashram2.jpg';
import Ashram3 from '../assets/Jeevan-Jyothi-Ashram/Ashram3.jpg';
import Jyoti1 from '../assets/Jyothi-Nilaya/Jyoti1.jpeg';
import Jyoti2 from '../assets/Jyothi-Nilaya/Jyoti2.jpeg';
import Jyoti3 from '../assets/Jyothi-Nilaya/Jyoti3.jpeg';
import Fatima1 from '../assets/Fatima-Convent/Fatima1.jpg';
import Fatima2 from '../assets/Fatima-Convent/Fatima2.jpg';
import Fatima3 from '../assets/Fatima-Convent/Fatima3.jpg';


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
                            <p className="text-gray-600 leading-relaxed whitespace-pre-wrap" style={{textAlign:"justify"}}>{convent.history}</p>

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

                                    <div className="flex items-start">
                                        <User className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">Superior</h4>
                                            <p className="text-gray-600">{convent.User}</p>
                                        </div>
                                    </div>
                                    
                                
                                    {(convent.Email || convent.MailID) && (
                                        <div className="flex items-start">
                                            <Mail className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold">Email</h4>
                                                <p className="text-gray-600">{convent.Email || convent.MailID}</p>
                                            </div>
                                        </div>
                                    )}
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
                { id: 1, title: "Bethany Provincial House Bangalore", description: "The provincial house serves as the administrative center...", history: `Way back in the 1970s Bangalore and Belgaum regions were set up for better animation and administration. Sr M Theresia was the first regional superior of Bangalore Region and Sr M Lucina that of Belgaum. Sisters Medela, Hyacinth and Esperie were subsequent regional superiors of Bangalore region. In 1980 Bangalore and Belgaum regions were merged to form the East Karnataka Region with Sr M Agnella as the regional superior. 
                    
                The decision in XI General Chapter of the Congregation saw the birth of 5 Provinces (3 Provinces and 2 Vice Provinces). So Bangalore Province came into existence on 8th June 1986 with Sr M. Dymphna as the first Provincial Superior assisted by four councillors. It had a strength of 286 members in 24 communities. As the membership of Sisters, and the number of communities increased, Western Province was carved out of Bangalore Province in May 2006 taking out 22 communities with 162 members. Bangalore Province retained 19 communities with 170 members, spreading out in the dioceses of Chikmagalur, Shimoga, Mysore and Bangalore. The members are involved in educational, pastoral and social apostolates as well as hostel ministry and health care. Employment opportunities through vocational training centres are provided by Higher Education through P.U colleges. Centre for the differently abled and holistic health centres are the new initiatives. There are 4 PU Colleges, 11 High Schools, 16 Primary Schools, and 14 K.G Schools, one Non-formal education centre, 5 Hostels, 3 Vocational Training Centers, one Pilgrim Center, one Registered Trust 1, run by the Bangalore Province. Sisters serve in 3 Diocesan Schools.  Sr Bonita is the present Provincial Superior assisted by Sr Susan, Sr Sahana, Sr Prescilla  Fernandes and Sr Sharlet Rodrigues.  Sr Therese is the Province Procurator. The Province is dedicated to the Sacred Heart of Jesus.` , image: convent1, address: "123 Church Road, Bangalore", contact: "080-12345678", established: "1950" },

                { id: 2, title: "St. Joseph’s Convent, Sagar", description: "Located in the serene town of Sagar...", history: `In the edges of the Western Ghats, in the district of Shimoga in Karnataka state, is a small tranquil town named Sagar.  It was in 1950, the grace-filled year of the twin jubilee of the Founder, namely, the platinum jubilee of his birth and golden jubilee of his priestly ordination that Bethany made an entry into Sagar in the district of his birth place, Shimoga, in the diocese of Mysore. 
                    Mother Petra, the Superior General, requested the permission of the Bishop of the diocese of Mysuru to open a community in Sagar.  Most Rev Rene Feuga was happy to have the presence of the Bethany Sisters at Sagar. The five sisters – Sr Lazarus, the first Superior of the community, Sr Rita, Sr Clemence, Sr Gemma, Sr Presenta and Ms Maggi Bai, the helper, landed in Sagar on 16th May 1950.  Rev. Fr Fulgence Lopez was the Parish Priest. The administration of St Joseph’s Primary School comprising standard I to IV was handed over to the Bethany Sisters on 23rd March 1950, Sr Lazarus as the Headmistress. In 1954 during the the Marian Year, Nirmala High School was started. Sr. Bertha was the first Headmistress of the school`, image: convent2, address: "St. Joseph's Road, Sagar", contact: "08183-234567", established: "1965" },

                { id: 3, title: "Mother of Mercy Convent, Gadenahally", description: "This convent is known for its healthcare initiatives...", history: `Gadenahalli is a vibrant village in Hassan District. Way back in 1950s Fr. KJ Thayil wrote to Mgr Raymond FC Mascarenhas, the Founder, of the possibilities of Bethany Sisters working in Gadenahalli. Mother Petra, the Superior General of Bethany, sought the permission from Most Rev Victor R Fernandes, the Bishop of Mangalore, to open a convent in Gadenahalli in the diocese of Mysuru. Most Rev. Bishop Rene Feuga in 1950 on 24th February invited the founder and the sisters to begin their mission. 
                    In the beginning they took up the primary school and dispensary.  Sr Philomen was appointed as Superior, Sr Louise, Sr Lucretia, Sr Philomelle, and Pullu Bai- helper, were the pioneers. Sr Genevieve who joined the community later, was appointed as Headmistress of the Primary school. In 1960 New convent chapel and dispensary were built and blessed by Auxiliary Bishop Albert V. D’Souza. 
                    The dream of having a high school came true and Loyola High school was started on 4th July 1984 with 82 students. Sr Celesta was the High School Headmistress. In 2002 Karuna Matha Hostel was opened for the girls. On 21 November 2003 Loyola composite Pre-University College was opened; Sr Louisia was the Principal of the college.`, image: convent3, address: "Mercy Lane, Gadenahally", contact: "080-87654321", established: "1972" },


                { id: 4, title: "Fatima Convent, Dornahally", description: "Situated in the countryside, Fatima Convent operates...", history: `Dornahalli Parish is locally known as Christian Koppalu. Rev Fr R. F C Mascarenhas, the Founder of the Congregation, was in touch with the compassionate Pastor Rev. Fr I. H. Lobo, the Parish Priest of Dornahalli. He invited the Bethany Sisters to serve the people in their pastoral and economic needs. The Superior General, Mother Priscilla sent three sisters to open a a community on 21st May 1957. Sr Annunciata was appointed as Superior and Headmistress, and the members of the community were Sr Clare, one of the pioneers, Sr Xavier and Maggi bai. Fr Founder named the Convent as Fatima Convent in commemoration of the fortieth anniversary of Mother Mary’s apparition in Fatima on May 13th1917 a historic event
                    Sisters started their Pastoral and Educational activities. Sr Azella and Sr Venera were in charge of the St Antony’s Shrine and stall. Dispensary was opened in 1958 and Sr Mida was in-charge of the dispensary. Rev. Fr Founder visited this rural area for the first time on 5thJuly in 1959. He made it holy by his presence. Good and genuine vocations have bloomed to Religious and Diocesan clergy due to the witnessing life of the Sisters. At present Sr Lorna is the Superior and Sr Madhu, Sr Lisia, Sr Mariline, Sr Canute, Sr Shanthi Clare, Sr Cecilia, Sr Shilpa Bakhita Menezes are the members.  Sisters continue their pastoral and educational apostolate with much zeal and vigour.`, images: [convent4,Fatima1,Fatima2, Fatima3], address: "Dornahally (v) K.r.Nagara Tq,Mysore Dist Dornahally Post -571602", contact: "8296437795", established: "11.05.1957", Email:"jfatimaconvent1957@gmail.com", User:" Sister Savitha "},


                { id: 5, title: "St. Martha’s Convent, Mudigere", description: "This convent manages a boarding school...", history: `Surrounded by dense green forest with tall and majestic trees, a third convent in Mysore diocese was opened on May 24th 1953 on the request of Fr Eduardo B Noronha, the parish priest of Mudigere, who contacted Mgr Raymond Mascarenhas. Mother Petra, Superior General of Bethany, obtained the permission to open the Convent from   Most  Rev. Bishop Rene Feuga, the Bishop of Mysore.   The convent was a memorial to Mother Martha, the first Superior General. The pioneering members were Sr Francis, Sr Bartholomea, Sr Paupera and Sr Laura. The house served as a classroom and boarding house as well as the residence to the sisters. Sr Francis was appointed as superior for a short period. Sr Pauline continued as superior. There were no catholic educational institutions for the education of the children of the poor estate labourers in and around Mudigere. So the institution began with a nursery class in Kannada medium on 1st June 1953 with 20 children. Permission was granted to commence the primary school on 30th May 1953.  Sr. Sylvia was appointed the headmistress. A boarding house was started with two children in 1953. St Martha’s High School was inaugurated on 1st June 1989 by Most Rev. John Baptist Sequeira, the Bishop of Chikmagaluru.  Sr Louisia was the High School Headmistress.  On July 1st 2006 Pre-University College was inaugurated by Sr Wilberta, the Superior General. Sr Trina was the first principal.`, image: convent5, address: "Martha Road, Mudigere", contact: "08263-456789", established: "24.05.1953" },

                { id: 6, title: "Bethany Convent, Bangalore", description: "Located in the heart of Bangalore...", history: `Mgr Raymond FC Mascarenhas, the founder, was keen on having a house of the congregation in Bangalore to serve as a nodal centre to facilitate transactions in government departments involving schools and property. During one of his visits in 1955 he met his friend most Rev. Thomas Pothacamury, the Archbishop of Bangalore, along with Sr Priscilla, the Superior General. Fr Mascarenhas presented his desire to have a convent for the sisters in Bangalore and requested the Archbishop for necessary permission and assistance in identifying a suitable site for the mission of the sisters.
                    Mother Macrina secured permission from the Archbishop of Bangalore and four pioneers Sr Anysia, Sr Lourdes, Sr Julitta, and Ms Dulcine D’Souza the helper arrived in Bangalore on 18th March 1960. They lived in a rented building until the new convent building was constructed. The first community in Bangalore was named “Villa Teresa”. Sr Anysia was appointed as the first Superior of the community and Headmistress of the school. On 15th April 1961 the primary school started functioning with the name Gulabi Primary School under the patronage of St Therese of the Child Jesus. Sr Avia was appointed as Superior and Headmistress. It was upgraded to High School on June 4th 1967 and Sr Therese was appointed as the teacher. New convent building was blessed and inaugurated by Archbishop Arokiaswamy on 3rd December 1977. The convent was renamed “BETHANY CONVENT”.`, image: convent6, address: "45 Convent Street, Bangalore", contact: "080-98765432", established: "19.03.1960" },

                { id: 7, title: "St. Mary’s Convent, Arsikere", description: "This convent operates a well-known educational institution...", history: `As per the expressed need of the people of Arsikere for an English Medium School through Rotary Club, Mother Macrina, the then Superior General of the Congregation, responded positively and opened its branch at Arsikere on December 31, 1963 with Sr Mida as the Superior and Sr Lourdes, one of the four Founding members of Bethany Congregation, Sr Dora and Sr Olinda being part of this team.  They started in a rented building sharing the space as residence as well as the kindergarten started on January 2nd 1964. Sisters were welcomed by Rev. Fr Augustine D Souza, the parish priest, parishioners and local leaders.   A new convent building was constructed for them and was blessed on 16 May 1976. An additional block was constructed and inaugurated on 28 December 2001, in view of accommodating the guests and to provide adequate space for sisters. 
                    As of now, Sisters render their services in the educational apostolate from K G to PUC. Apart from this, they also devote their time for the pastoral and social apostolate as per the Charism of the Congregation. They serve in the parish church during the liturgical and para-liturgical services. They visit families of the sick and old, students and youth, continuing their service with love and commitment.`, image: convent7, address: "Mary Road, Arsikere", contact: "08173-567890", established: " 02.01.1964" },

                
                { id: 8, title: "Sacred Heart Convent, Basrikatte", description: "Nestled in the hills, this convent runs a retreat center...", history: `Sacred Heart Convent was opened at Basrikatte amidst the lush green hills and valleys, coffee and tea estates and silvery streams, by Mother Macrina, the then Superior General, at the request of Rev Fr Edwin Pinto, the then parish priest of Basrikatte, and Rev. Alphonsus Mathias, Bishop of Chickmagalur. The main purpose of starting the Convent was to cater to the educational needs of the children, to catechize people of estates and sub- station. Sister Clemence was the first Superior. Sr Euphrasia, Sr Peace and Sr Flavia were the pioneers.  On 30th April 1965 Fr Edwin Pinto blessed the renovated building and it was named Sacred Heart Convent after the patron of the parish.
                    On 1st June 1965 the sisters began classes in English Medium as well as in Kannada medium. The school was recognized and admitted to grant-in-aid in 1968 only with Kannada medium school. Besides education, they had a dispensary run by Sr Colette, who was also a trained teacher and trained nurse; she became the Superior and Headmistress of the School.`, image: convent8, address: "Sacred Heart Circle, Basrikatte", contact: "08262-678901", established: "24.04.1965" },

                { id: 9, title: "St. Joseph’s Convent, K.R.Nagar", description: "This convent is known for its innovative farming techniques...", history: `St Joseph’s Convent, K. R. Nagar took root in 1968 in response to the divine call through Rev. Fr. Felix Tauro, Parish Priest of Dornahalli to have Christian presence in K.R.Nagar. At the request of Fr.Felix Tauro, the then Superior General, Mother Macrina, requested the Bishop of Mysore Rt Rev Mathias Fernandes and permission was granted to erect a community in K.R.Nagar. Sr.Laeta the first Superior along with Sr Myrrah, Sr Celine & Sr.Dancilla began living in a rented house availed by Mr.Y.K Ramachandra Rao. Wherein the Nursery class began on May 22nd 1967. The Primary English Medium School was opened on May 22nd 1968 with 135 children.Sr. Laeta was the Headmistress. A residence was built for sisters, blessed and inaugurated by Bishop Mathias Fernandes in 1976 and foundation for school building was also laid to cater to the educational needs of the people. In 1969 Bishop blessed the school building too, providing space for classes 2nd to 7th as the number of students too increased. To cater to the needs of less privileged children Kannada Medium Primary School was opened in 1988 headed by Sr.Tina. Sisters not only engaged in Educational apostolate but extended their service in the Parish, teaching Catechism, Prison ministry & other pastoral and social work. Sr M Simon BS is at present Superior,`, images: [convent9, KRNagarFoundation, KRNagarComty], address: "KR Nagar Post, Silver Road, Mysore 571 602", contact: "08223-295696", established: "09.07.1989", Superior:"Sr Reema BS ", MailID:"krnconvent@gmail.com"},

                { id: 10, title: "Jyothi Nilaya, Bangalore", description: "Jyothi Nilaya serves as a home for senior sisters...", history: `Mother Macrina, the Superior General...`, images: [convent10,Jyoti1,Jyoti2,Jyoti3], address: "Nehru Road Kacharkanahalli,St Thomas Town Post,Bangalore North Karnataka 560084", contact: "9448245128", established: "1990", Email:"jyothiconvent70@gmail.com", User:"Sr Precilla Fernandes"},


                { id: 11, title: "Holy Cross Convent, Arsikere", description: "This convent specializes in healthcare...", history: `In 1966 Fr Mathias Noronha...`, image: convent11, address: "Cross Road, Arsikere", contact: "08173-890123", established: "15.05.1974" },

                { id: 12, title: "St. Antony’s Convent, Ponnampet", description: "Located in a coffee-growing region...", history: `Ponnampet is a beautiful village with sweet scented coffee estates and cascading waterfalls in South Kodagu District. Most Rev. Mathias Fernandez, the Bishop of Mysuru invited the Bethany Sisters to Ponnampet to impart education to the children of the locality.  Mother Gemma, the Superior General, Mother Macrina, the former Superior General and Sr Verena, the Procurator General, accompanied the pioneers, Sr Eliza, Sr Clita, Sr Prabha, Sr Elize D’Souza and Sr Jessy Leena to Ponnampet on 21st May 1979.  The school started functioning from 22nd May 1979.  Most Rev. Mathias Fernandes blessed and laid the foundation stone for the convent building on 30th August 1979.  Sr Prabha was the Headmistress. The Convent building was blessed and inaugurated on 28th January 1981 by Most Rev. Mathias Fernandes. Mother Sylvine, the Superior General, Sr. Ann Teresa and Sr Noreen, her Councillors graced the occasion. The construction of the new convent building was blessed by Bishop Rt. Rev. Thomas Vazhapilly and inaugurated by Sr Lilitta, the Provincial Superior on 27th August 2015. At present Sr Tina is the superior, Sr Melvina, Sr Gratina, Sr Marie Amy, Sr Arogya Fernandes and Sr Bhakthi Prabha are the members. `, image: convent12, address: "Antony Street, Ponnampet", contact: "08272-901234", established: "01.06.1979" },

                { id: 13, title: "St. Mary’s Convent, Kutta", description: "This convent manages an eco-friendly farm...", history: `The little town of Kutta is in Kodagu, covered with coffee estates all over. Most Rev. Mathias Fernandes, the Bishop of Mysore requested Mother Gemma to open a convent at Kutta in 1979, for the educational as well as pastoral apostolate. Sr Eliza, Sr Mathutina and Sr Josia were the pioneers. Sr Josia was appointed as the headmistress of St Mary’s School Kutta. On November 29th 1981 Most Rev. Bishop Mathias Fernandes blessed and inaugurated the convent building. In 1983 a new school building was constructed. Sr Prudentia was appointed as Superior of the community and Headmistress of the school. 
                    The presence of Sisters has helped in the faith formation of the people of Kutta and also to improve their educational standard. The school is a real boon to the poor people of this place. At present Sr Margaret Pannakar is the Superior and Headmistress.  Sr Elizabeth, Sr Rita Zita Alva, Sr Reshma  Lynet D’ Souza, and  Sr Clarita are the members.`, image: convent13, address: "Mary Garden, Kutta", contact: "08272-012345", established: "02.07.1979" },

                { id: 14, title: "Bethany Convent, Bogadi", description: "Specializing in special education...", history: `Mother Sylvine, the then Superior General, and Sr Dymphna, the then Provincial Superior of Bangalore Province, felt the need to open a study house in Mysore Diocese for the Sisters to pursue their studies in various disciplines, in the Manasa Gangothri University Mysore.  Most Rev. Francis Michealappa, the Bishop of Mysore, blessed the building on 9 July 1989. Sr Leata and Sr Misericors became the pioneers of this new community, engaging themselves in the socio-pastoral ministry in the surrounding area. The house served the needs of the sisters for their spiritual and academic pursuits 
                    Another purpose of establishing Bethany Convent, Bogadi, was to provide for the formation of various groups of Sisters. From 1993-2007 the house accommodated the formation of ‘Come and See’ candidates.
                    Sr Jyoti, the Superior General, Sr Bonita, the Provincial Superior of Bangalore Province, Sr Rose Ann, the Provincial Superior of Western Province with their councillors were present. 13 novices were initiated to the Novitiate on 15th June 2007. Bethany Novitiate community from 2007- 2016 has catered to 8 batches of novices, numbering 100 of them, under the guidance of  Sr Clarina, the Novice Directress and Sr Sharlet Mendonca, Sr Precilla Braggs, Sr Ranjitha, Sr Simprose and Sr Veena Laveena as assistant directresses successively. 
`, images: [convent14,Bogadi1,Bogadi2,Bogadi3], address: "Bethany Convent,Bogadi,Mysore 570026", contact: "8660330935", established: "09.07.1989", Email:"bnovmysore@gmail.com"},

                { id: 15, title: "Bethany Convent, Kable", description: "This convent focuses on rural development...", history: `Bethany Convent, Kable, is situated on the Western Ghat slopes along the Sahyadri Mountain ranges of Malnad. It was in 1990 Most Rev Bishop Ignatius Pinto, the Bishop of Shivamogga requested Mother Sylvine to open a convent to serve the parish school, to take up evangelization and social work. On the direction of the Bishop, Fr Philip, the parish priest, constructed the convent building. On 4th August 1990 the new community was opened in the diocese of Shivamogga. Sr Brigitte was appointed as the superior of the community and headmistress of St Francis Xavier’s Primary School, Sr Irene and Sr Madhu were pioneers. Sr Irene was fully engaged in pastoral apostolate.  Free boarding was started on 1st June 1993 by the diocese and the sisters took care of the boarding children. In 2003 the Sisters had their own convent building blessed by Bishop Gerald Isaac Lobo on May 6th 2003 and inaugurated by Sr Virginia, one of the General Councillors.  The Sisters are actively involved in Educational and pastoral as well as hostel ministry in St Francis Xavier’s Church Kable.`, image: convent15, address: "Kable Village Road", contact: "08282-2345678", established: "04.08.1990" },

                { id: 16, title: "Seva Sadan, Doddabelavangala", description: "Seva Sadan serves as a rehabilitation center...", history: `Seva  Sadan  Doddabelavangala is in Doddaballapur Taluk, a bustling town in Bangalore rural district in the State of Karnataka. In response to the XI General Chapter of the Congregation held in 1986, sisters ventured into social action. Mother Sylvine, the Superior General, requested Fr Claude D’Souza S.J to orient the sisters into social action.  On 8th September 1988 Sisters landed at Doddabelavangala, along with Sr Nora, the General Councilor, Fr Joseph Moolkara CMF, the Parish priest of S. Peter’s Church Doddaballpur blessed the residence of the sisters and   offered the Eucharistic celebration.  Sr Agnesia was appointed as the Superior, Sr Susheela, Sr Praveen,  Ms Leena D’Mello, and Ms Mabel  were the pioneers of the new Mission. 
                    New house was blessed on 10th June 1992.  It was named as Seva Sadan.  The Sisters were actively involved in pastoral work in the parish at Doddaballapur. As the years rolled by Seva Sadan became a motivating and guiding force in Bangalore rural District. Religious and social activists began to come to Seva Sadan to experience life in a village. They extended the programmes to 60 villages.  Sisters organized   programmes for the persons with disability, women empowerment through self help groups and vocational skills. In addition to these, they also started mobile clinic and special school for the mentally challenged children. The Seva Sadan sisters adapted to the changing scenario and responded to the present needs of the target groups.  They took up Skill`, image: convent16, address: "Service Road, Doddabelavangala", contact: "08151-3456789", established: "08.09.1988" },

                { id: 17, title: "Bethany Convent, Shimoga", description: "Affiliated with St. Joseph's in Sagar...", history: `Father Founder loved Shimoga, his birth place. Bethany had a dream of having a community in the birth place of the Founder. Sr Jyoti, the Superior General, had expressed this desire to Most Rev Gerald Isaac Lobo who was installed as Bishop of Shiomga on 20th March 2004. Bishop invited the Sisters to take   charge of   RC Boy’s School in Sacred Heart Cathedral Shimoga. In 2005 a community was established at Bapuji Nagar in a rented house.  Sr Molly was appointed as the Superior of the community and Headmistress of RC Boy’s School and Sr Evelyn was the Headmistress of Sacred Heart English Medium School and  Sr Maxim took up the pastoral work in the parish.  In 2006 Sr Prescilla  Fernandes was appointed as  the  Coordinator for Women Commission of the Diocese and social apostolate at  Chaitanya  Diocesan Social Work Centre (SMSSS). 
                    The community was shifted to Vidyanagar to another rented house in 2015. At present Sr Evelyn is   in- charge of the community.  Sr Flora and Sr Anthony Mary are the members. The convent was affiliated to St Joseph Convent Sagar in the year 2015.  Sisters are actively engaged in prayer ministry, pastoral apostolate of family visits, teaching catechism in the parish and cultivate the land of the community.`, image: convent17, address: "Convent Road, Shimoga", contact: "08182-4567890", established: "30.05.2005" },


                { id: 18, title: "Jeevan Jyothi Ashram", description: "This ashram serves as a spiritual retreat center...", history: `Mgr Raymond F C Mascarenhas was enraptured by the vision of preaching the gospel to the poor. Sr Medela as Regional Superior and  Superior of St Joseph’s Convent, Sagar, was instrumental in procuring land at Mankale. Most Rev. Alphonsus Mathias, the Bishop of Chikmagalur, blessed the land and laid the foundation stone. Later Fr Augustine Fernandez blessed the building. It was named Jeevan Jyothi Ashram, a home for the poor children, to facilitate free accommodation and education. Sr Bernadette, Sr Nives and Sr Gonzaga were the pioneers. 25 children were accommodated. On 5th June 2004 Bethany Vocational Training Centre with hostel facility was blessed by Bishop Gerald Isaac Lobo and inaugurated by Sr Jyoti, the Superior General. On 6th September 2005, the Jeevan Jyothi community was canonically erected as an independent community. Bishop Gerald Isaac Lobo celebrated the Eucharist. Sr Winnifred, Sr Eucharia, Sr Flora and Sr Elvira were the members. Bethany Nursery School was started in 2006 to facilitate the English medium education of the local children. St Joseph’s High School was inaugurated on 14th September 2015 by Sr Lillis, the Asst Superior General. Bishop Francis Serrao of Shimoga blessed the building. Sr Ivilla was appointed as the Headmistress. At present Sr M Deena BS is the Superior and Sr Merlyn, Sr Priyalatha, Sr Carmelita and Sr Meena are the members.`, images: [convent18,Ashram1,Ashram2,Ashram3], address: "Mankalale, Sagar, Shimoga Dist 577401", contact: "8105028182", established: "05.07.2004", Email: "jeevanjyothimankale@gmail.com", User:"Sr M Deena BS"},

                { id: 19, title: "Bethany Convent, Madikeri", description: "Located in the hill station of Madikeri...", history: `Madikeri is the district headquarters of Kodagu. The Sisters of Northern Province of the Congregation were in search of a base in south-western India for the promotion of vocations to the missionary areas of North India.  Sr Agnella, the Superior General, approached Fr Gregorious Madapilly and Mgr Joseph Thelly, the Administrator of the diocese of Mysore. They cordially welcomed Bethany to Coorg deanery.  On 24th May 1995 Sr Salerine, Sr Mary Pinto, Sr Shirley and Lina along with Sr Agnella, the Superior General, Sr Miriam, the Provincial Superior of Northern Province and Mother Macrina landed in Madikeri to take up the ministry of education.  A building for the convent  was built  and Fr Gregorious, the parish priest of St Michael’s Church blessed the house.

                    Sr Salerine was appointed as Superior and Headmistress of St Michael’s English Primary School. Sisters assisted her in the school. They also took up pastoral activities in the parish church. Most Rev. Joseph Roy Bishop of Mysuru blessed the new convent building on 23rd January 1998.   Fr Arogyasamy requested the Superior General to take up the Kannada Medium School as well. Sr Arun Cutinha was appointed as Headmistress of the Kannada Medium School. In 2006 this convent was transferred to Bangalore Province. Sr Smitha was appointed Superior and Headmistress of the English Medium School. In 2007 the “Come and See” programme was started in Madikeri. Sr Lorna was the Directress. At present Sr Praveen BS is the Superior and Sr Ida, Sr Gliseria, and Sr Carmen are the members of the community.                    `, image: convent19, address: "Hill View Road, Madikeri", contact: "08272-6789012", established: "24.05.1995" },
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
                    history: ` “A Tribute to Talent and Success”
                    The much awaited Zonal Level sports Meet brought together young
athletes filled with enthusiasm, determination and team spirit. It was a true
celebration of sportsmanship, discipline and hard work.
“The harder the battle, the greater the Victory”. The words perfectly mirror
the success of St.Joseph’s English Medium Higher Primary School K.R.Nagar,
which emerged victorious at the Zonal Level championship which was held on
21 st August 2025. Every game turned into a platform for our students to
showcase their skills, confidence and dedication, as 90 participants represented
our school at the zonal level. The athletes displayed remarkable skills and hard
work and their dedication paid off as the boys secured 1 st place in Volley ball
and Discus Throw and 2 nd place in Long Jump and High Jump followed by 400
meters running 3 rd place. The girls team proudly claimed 1 st place in High
Jump, Volley ball, Throw ball and Kabaddi, along with second place finishes
Kho – Kho. Adding to this success, our athletes left a lasting mark by winning
numerous individual awards, establishing a legacy of achievement that will be
treasured within our institution.
Noteworthy performances came from Chinmayi H.Y and Prarthana
Pramod, two talented Grade VII students who brought great honour to our
school. Chinmayi secured first place in both the 400 meters and 600 meters
races, while Prarthana Pramod claimed first place in the 100 meters and 200
meters events. Both earned the individual Championship Title and qualified for
the Taluk Level.`,
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
