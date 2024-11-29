import React, { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Heart, X, ArrowLeft, ArrowRight } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Simple Title Component
const LoveTitle = ({ children }) => (
  <h1 className="text-4xl text-center text-rose-600 font-bold mb-4">
    {children}
  </h1>
);

// Subtitle Component
const LoveSubtitle = ({ children }) => (
  <p className="text-xl text-center text-rose-500 mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
    {children}
  </p>
);

// Individual Photo Modal Component
const PhotoModal = ({ photo, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2 relative shadow-2xl">
      {/* Text Section */}
      <div className="p-8 overflow-y-auto max-h-[700px] pr-12 bg-rose-50">
        <h2 className="text-3xl text-rose-600 mb-4 font-semibold">{photo.title}</h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">{photo.fullDescription}</p>
        <div className="flex items-center mt-6">
          <Heart className="text-rose-500 mr-3" size={24} />
          <span className="text-gray-600 italic">A moment we shared</span>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="relative">
        <img 
          src={photo.fullImage} 
          alt={photo.title} 
          className="w-full h-[500px] md:h-[700px] object-cover"
        />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-rose-500 text-white p-2 rounded-full hover:bg-rose-600 transition"
          aria-label="Close"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  </div>
);

// Main Carousel Component
const Album = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Improved photo data with more meaningful content
  const photoData = [
    {
      id: 1,
      thumbnail: require('../assets/images/1.jpg'),
      fullImage: require('../assets/images/1.jpg'),
      title: 'Primeira foto',
      description: 'Primeira foto',
      fullDescription: 'From the first moment we met, I knew something special was beginning. This photo captures the magic of our first date, the nervous excitement, and the spark that would grow into our love.'
    },
    {
      id: 2,
      thumbnail: require('../assets/images/2.jpg'),
      fullImage: require('../assets/images/2.jpg'),
      title: 'Namoro',
      description: 'Namoro',
      fullDescription: 'Every journey is better when shared with you. This moment reminds me of our spontaneous trips, laughing, and creating memories that will last a lifetime.'
    },
    {
      id: 3,
      thumbnail:  require('../assets/images/3.jpg'),
      fullImage:  require('../assets/images/2.jpg'),
      title: 'Dia comum',
      description: 'Dia comum',
      fullDescription: 'Sometimes the most beautiful moments are the quiet ones. Just being together, no words needed, feeling complete and loved.'
    },
    {
      id: 4,
      thumbnail:  require('../assets/images/4.jpg'),
      fullImage: require('../assets/images/4.jpg'),
      title: 'Celebration of Us',
      description: 'Marking milestones together',
      fullDescription: 'Every celebration, big or small, is a testament to our journey. This photo captures the joy of being together and the love we continue to build.'
    },
    {
      id: 5,
      thumbnail: require('../assets/images/5.jpg'),
      fullImage: require('../assets/images/5.jpg'),
      title: 'Unexpected Moments',
      description: 'Finding joy in the unexpected',
      fullDescription: 'Life is full of surprises, and I\'m grateful to face them with you. This moment captures the spontaneity and fun that defines our relationship.'
    },
    {
      id: 6,
      thumbnail: require('../assets/images/6.jpg'),
      fullImage: require('../assets/images/6.jpg'),
      title: 'Unexpected Moments',
      description: 'Finding joy in the unexpected',
      fullDescription: 'Life is full of surprises, and I\'m grateful to face them with you. This moment captures the spontaneity and fun that defines our relationship.'
    },
    {
      id: 7,
      thumbnail: require('../assets/images/7.jpg'),
      fullImage: require('../assets/images/7.jpg'),
      title: 'Unexpected Moments',
      description: 'Finding joy in the unexpected',
      fullDescription: 'Life is full of surprises, and I\'m grateful to face them with you. This moment captures the spontaneity and fun that defines our relationship.'
    },
    {
      id: 8,
      thumbnail: require('../assets/images/8.jpg'),
      fullImage: require('../assets/images/8.jpg'),
      title: 'Unexpected Moments',
      description: 'Finding joy in the unexpected',
      fullDescription: 'Life is full of surprises, and I\'m grateful to face them with you. This moment captures the spontaneity and fun that defines our relationship.'
    },
    {
      id: 9,
      thumbnail: require('../assets/images/9.jpg'),
      fullImage: require('../assets/images/9.jpg'),
      title: 'Unexpected Moments',
      description: 'Finding joy in the unexpected',
      fullDescription: 'Life is full of surprises, and I\'m grateful to face them with you. This moment captures the spontaneity and fun that defines our relationship.'
    },
    {
      id: 10,
      thumbnail: require('../assets/images/10.jpg'),
      fullImage: require('../assets/images/10.jpg'),
      title: 'Unexpected Moments',
      description: 'Finding joy in the unexpected',
      fullDescription: 'Life is full of surprises, and I\'m grateful to face them with you. This moment captures the spontaneity and fun that defines our relationship.'
    },
    {
      id: 11,
      thumbnail: require('../assets/images/11.jpg'),
      fullImage: require('../assets/images/11.jpg'),
      title: 'Unexpected Moments',
      description: 'Finding joy in the unexpected',
      fullDescription: 'Life is full of surprises, and I\'m grateful to face them with you. This moment captures the spontaneity and fun that defines our relationship.'
    },
    {
      id: 12,
      thumbnail: require('../assets/images/12.jpg'),
      fullImage: require('../assets/images/12.jpg'),
      title: 'Unexpected Moments',
      description: 'Finding joy in the unexpected',
      fullDescription: 'Life is full of surprises, and I\'m grateful to face them with you. This moment captures the spontaneity and fun that defines our relationship.'
    }
  ];

  const openPhotoModal = useCallback((photo) => {
    setSelectedPhoto(photo);
  }, []);

  const closePhotoModal = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 py-12 px-4 relative">
      {/* Decorative hearts */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 opacity-20">
          <Heart size={100} className="text-rose-300 animate-float" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Heart size={100} className="text-rose-300 animate-float-reverse" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <LoveTitle>Nossa história</LoveTitle>
        <LoveSubtitle>
          Um pouco de cada momento que vivemos nos nossos primeiros doze meses até aqui
        </LoveSubtitle>
        
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next'
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true, 
              renderBullet: (index, className) => {
                return `<span class="${className} bg-rose-500"></span>`;
              }
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            loop
            className="love-carousel pb-16"
          >
            {photoData.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div 
                  className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => openPhotoModal(photo)}
                >
                  <img 
                    src={photo.thumbnail} 
                    alt={photo.title} 
                    className="w-full h-64 object-cover rounded-xl shadow-md"
                  />
                  <p className="text-center mt-3 text-rose-700 font-medium">{photo.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white/50 hover:bg-white/70 rounded-full p-2 transition">
            <ArrowLeft className="text-rose-500" size={24} />
          </div>
          <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white/50 hover:bg-white/70 rounded-full p-2 transition">
            <ArrowRight className="text-rose-500" size={24} />
          </div>
        </div>

        {/* Photo Modal */}
        {selectedPhoto && (
          <PhotoModal 
            photo={selectedPhoto} 
            onClose={closePhotoModal} 
          />
        )}
      </div>
    </div>
  );
};

export default Album;