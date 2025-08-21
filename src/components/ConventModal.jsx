// src/components/ConventModal.jsx
import React from 'react';
import { FiX, FiMapPin, FiPhone, FiCalendar, FiBook, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import GalleryComponent from './GalleryComponent'; // ✅ STEP 1: Import added


const ConventModal = ({ convent, onClose, currentImageIndex, onNextImage, onPrevImage }) => {
  if (!convent) return null;

  const hasMultipleImages = convent.images && convent.images.length > 1;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="h-64 relative">
            {hasMultipleImages ? (
              <img 
                src={convent.images[currentImageIndex]} 
                alt={`${convent.title} ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              convent.image ? (
                <img 
                  src={convent.image} 
                  alt={convent.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-white text-center px-4">{convent.title}</h2>
                </div>
              )
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 flex items-end p-6">
              <h2 className="text-3xl font-bold text-white">{convent.title}</h2>
            </div>
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              <FiX className="text-gray-700 text-xl" />
            </button>
            {hasMultipleImages && (
              <>
                <button 
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  onClick={onPrevImage}
                >
                  <FiChevronLeft className="text-gray-700 text-xl" />
                </button>
                <button 
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  onClick={onNextImage}
                >
                  <FiChevronRight className="text-gray-700 text-xl" />
                </button>
              </>
            )}
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                    <FiCalendar className="text-indigo-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Established</h3>
                    <p className="text-lg font-semibold text-gray-800">{convent.established}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">About This Convent</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {convent.description}
                </p>
                
                {convent.history && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <FiBook className="mr-2 text-indigo-600" />
                      Convent History
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-indigo-500">
                      {convent.history.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-gray-600 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* ✅ STEP 2: Add gallery if thumbnails exist */}
                {convent.thumbnails && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Photo Gallery</h3>
                    <GalleryComponent images={convent.thumbnails} />
                  </div>
                )}
              </div>
              
              <div className="space-y-6">
                <div className="bg-indigo-50 rounded-lg p-5">
                  <h4 className="font-semibold text-indigo-800 mb-3">Convent Details</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FiMapPin className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h5 className="text-sm font-medium text-gray-700">Address</h5>
                        <p className="text-gray-600">{convent.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FiPhone className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h5 className="text-sm font-medium text-gray-700">Contact</h5>
                        <p className="text-gray-600">{convent.contact}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FiCalendar className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h5 className="text-sm font-medium text-gray-700">Established</h5>
                        <p className="text-gray-600">{convent.established}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-5 text-white">
                  <h4 className="font-semibold mb-3">Get Involved</h4>
                  <p className="mb-4">Support our mission through volunteering, donations, or prayers.</p>
                  <button className="bg-white text-indigo-700 font-medium py-2 px-4 rounded-lg hover:bg-indigo-50 transition-colors w-full">
                    Contact This Convent
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConventModal;
