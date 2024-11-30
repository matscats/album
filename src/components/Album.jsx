import React, { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Heart, X, ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const LoveTitle = ({ children }) => (
  <h1 className="text-4xl text-center text-rose-600 font-bold mb-4">
    {children}
  </h1>
);

const LoveSubtitle = ({ children }) => (
  <p className="text-xl text-center text-rose-500 mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
    {children}
  </p>
);

const PhotoModal = ({ photo, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2 relative shadow-2xl">
      {/* Text Section */}
      <div className="p-8 overflow-y-auto max-h-[700px] pr-12 bg-rose-50">
        <h2 className="text-3xl text-rose-600 mb-4 font-semibold">{photo.title}</h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">{photo.fullDescription}</p>
        <div className="flex items-center mt-6">
          <Heart className="text-rose-500 mr-3" size={24} />
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

const Album = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photoData = [
    {
      id: 1,
      thumbnail: require('../assets/images/1.jpg'),
      fullImage: require('../assets/images/1.jpg'),
      title: 'Início',
      description: 'Início',
      fullDescription: 'No dia em que você chegou eu estava ausente das minhas emoções relacionadas ao amor. Não havia vontade, desejo ou interesse por ninguém. Via todos como pontos no céu, distantes, pequenas estrelas. Foi aí que você apareceu, como um cometa que rasga o céu, que ilumina uma noite: Forte, lindo, sobrenatural.'
    },
    {
      id: 2,
      thumbnail: require('../assets/images/2.jpg'),
      fullImage: require('../assets/images/2.jpg'),
      title: 'Conhecer',
      description: 'Conhecer',
      fullDescription: 'Não tinha como ser de outra maneira, logo me apaixonei por você. Era tão engraçado sentir um frio na barriga tão grande quando chegava alguma mensagem sua, quando saíamos para encontros, quando víamos filmes online porque queríamos ter algum momento juntos na semana. Descobrir você, cada história e vivência que te compõem, seus jeitos e sonhos foi umas das experiências mais bonitas que eu já tive.'
    },
    {
      id: 3,
      thumbnail:  require('../assets/images/7.jpg'),
      fullImage:  require('../assets/images/7.jpg'),
      title: 'Amar',
      description: 'Amar',
      fullDescription: 'E desse apaixonar surgiu o amor. Sempre me perguntava, como canta Academia da Berlinda, qual era "a forma mais bonita de dizer eu te amo". Pensei tanto em como falar isso mas você simplesmente quebrou o silêncio com um sussurro espontâneo: "eu te amo". Pra mim, aquele sussurro foi a forma mais bonita de dizer eu te amo.'
    },
    {
      id: 5,
      thumbnail: require('../assets/images/11.jpg'),
      fullImage: require('../assets/images/11.jpg'),
      title: 'Cotidiano',
      description: 'Cotidiano',
      fullDescription: 'Finalmente parece que tenho deitado ao seu lado cem anos seguidos. Em toda madrugada de terça a plenitude de você deitada no meu peito. Em cada amanhecer de quarta o seu abraço em forma de preguiça. O amor finalmente (ou a beleza do cotidiano).'
    },
    {
      id: 6,
      thumbnail: require('../assets/images/10.jpg'),
      fullImage: require('../assets/images/10.jpg'),
      title: 'Futuro',
      description: 'Futuro',
      fullDescription: 'Após nos vermos as primeiras vezes ficou na minha mente a frase do livro noites brancas: "Um minuto inteiro de felicidade! Mas será isso bastante para uma vida toda?". Doze meses não foram o bastante para toda uma vida, por isso quero continuar vivendo, espero que por toda a vida.'
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