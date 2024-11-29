import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Heart } from 'lucide-react';

// Importações de estilo do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const photoData = [
  {
    id: 1,
    thumbnail: require('../assets/images/gato2.jpg'),
    fullImage: require('../assets/images/gato2.jpg'),
    title: '1',
    description: 'Titulo',
    fullDescription: 'Descrição'
  },
  {
    id: 2,
    thumbnail: require('../assets/images/gato2.jpg'),
    fullImage: require('../assets/images/gato2.jpg'),
    title: '2',
    description: 'Titulo',
    fullDescription: 'Descrição'
  },
  {
    id: 3,
    thumbnail: require('../assets/images/gato2.jpg'),
    fullImage: require('../assets/images/gato2.jpg'),
    title: '3',
    description: 'Titulo',
    fullDescription: 'Descrição'
  },
  {
    id: 4,
    thumbnail: require('../assets/images/gato2.jpg'),
    fullImage: require('../assets/images/gato2.jpg'),
    title: '4',
    description: 'Titulo',
    fullDescription: 'Descrição'
  },
  {
    id: 5,
    thumbnail: require('../assets/images/gato2.jpg'),
    fullImage: require('../assets/images/gato2.jpg'),
    title: '5',
    description: 'Titulo',
    fullDescription: 'Descrição'
  },
  {
    id: 6,
    thumbnail: require('../assets/images/gato2.jpg'),
    fullImage: require('../assets/images/gato2.jpg'),
    title: '6',
    description: 'Titulo',
    fullDescription: 'Descrição'
  }
];

const LoveAlbumCarousel = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 py-8 px-4">
      <h1 className="text-4xl text-center text-rose-600 font-bold mb-12">
        Título
      </h1>
      
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ 
              clickable: true,
              dynamicBullets: true, 
              renderBullet: (index, className) => {
                return `<span class="${className} bg-rose-500"></span>`;
              }
            }}
            className="love-carousel pb-10"
          >
            {photoData.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div 
                  className="cursor-pointer transform transition-all hover:scale-105"
                  onClick={() => openPhotoModal(photo)}
                >
                  <img 
                    src={photo.thumbnail} 
                    alt={photo.title} 
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-center mt-2 text-rose-700 absolute bottom-[-20px] w-full">{photo.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Modal de Foto Expandida */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full grid grid-cols-2 relative">
              <div className="p-8 overflow-y-auto max-h-[600px] pr-12">
                <h2 className="text-3xl text-rose-600 mb-4">{selectedPhoto.title}</h2>
                <p className="text-lg text-gray-700 mb-4">{selectedPhoto.fullDescription}</p>
              </div>
              <div className="relative">
                <img 
                  src={selectedPhoto.fullImage} 
                  alt={selectedPhoto.title} 
                  className="w-full h-[600px] object-cover"
                />
                <button 
                  onClick={closePhotoModal}
                  className="absolute bottom-4 right-4 bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveAlbumCarousel;