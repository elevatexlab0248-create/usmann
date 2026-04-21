import React, { useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
}

const videos: Video[] = [
  { id: 1, title: 'Video Ad 1', thumbnail: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, title: 'Video Ad 2', thumbnail: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, title: 'Video Ad 3', thumbnail: 'https://images.pexels.com/photos/3714901/pexels-photo-3714901.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, title: 'Video Ad 4', thumbnail: 'https://images.pexels.com/photos/3747465/pexels-photo-3747465.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, title: 'Video Ad 5', thumbnail: 'https://images.pexels.com/photos/3975517/pexels-photo-3975517.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, title: 'Video Ad 6', thumbnail: 'https://images.pexels.com/photos/3848382/pexels-photo-3848382.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const VISIBLE_DESKTOP = 3;
const VISIBLE_MOBILE = 1;

const ExplainerVideoAds: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = () => window.innerWidth < 768;

  const getMaxIndex = useCallback(() => {
    return isMobile()
      ? videos.length - VISIBLE_MOBILE
      : videos.length - VISIBLE_DESKTOP;
  }, []);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const itemWidth = carouselRef.current.querySelector('[data-video-item]')?.clientWidth || 0;
    const gap = 16;
    const scrollAmount = itemWidth + gap;
    const maxIndex = getMaxIndex();

    if (direction === 'right') {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const maxIndex = videos.length - VISIBLE_DESKTOP;

  return (
    <section className="relative bg-black pt-16 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-3">
          Explainer Video Ads
        </h2>
        <p className="text-center text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Discover our premium video ad library showcasing creative storytelling and compelling visuals
        </p>

        <div className="relative">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />

          {/* Videos Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-hidden scroll-smooth no-scrollbar"
          >
            {videos.map((video) => (
              <div
                key={video.id}
                data-video-item
                className="flex-shrink-0 w-[75vw] md:w-[calc(33.333%-11px)] max-w-[260px] md:max-w-none"
              >
                <div className="group relative">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-black transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_24px_rgba(77,192,53,0.12)]">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                        <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white font-semibold text-xs md:text-sm">{video.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Side Navigation */}
          <button
            onClick={() => scrollCarousel('left')}
            disabled={currentIndex === 0}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-20 p-2.5 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollCarousel('right')}
            disabled={currentIndex >= maxIndex}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-20 p-2.5 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation Below */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-5">
          <button
            onClick={() => scrollCarousel('left')}
            disabled={currentIndex === 0}
            className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1.5">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const diff = index - currentIndex;
                  if (diff !== 0) scrollCarousel(diff > 0 ? 'right' : 'left');
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-6 h-2 bg-[#4DC035]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => scrollCarousel('right')}
            disabled={currentIndex >= videos.length - VISIBLE_MOBILE}
            className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop Indicators */}
        <div className="hidden md:flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: Math.max(0, videos.length - VISIBLE_DESKTOP + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-7 h-2 bg-[#4DC035]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to carousel item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplainerVideoAds;
