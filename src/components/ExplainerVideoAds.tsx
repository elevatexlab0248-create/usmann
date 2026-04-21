import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  videoUrl: string;
}

const videos: Video[] = [
  { id: 1, title: 'Explainer Video 1', videoUrl: 'https://drive.google.com/file/d/1Ef2L6G-8WD2c9Yd3OmUWQ6u8UsIdSg0p/preview' },
  { id: 2, title: 'Explainer Video 2', videoUrl: 'https://drive.google.com/file/d/1AUjJeloJkeoNmLsSUF_U31XvqO886duh/preview' },
  { id: 3, title: 'Explainer Video 3', videoUrl: 'https://drive.google.com/file/d/1a3AOorp4UAHohlrXSPhJ6Q0NRNtBwcPt/preview' },
  { id: 4, title: 'Explainer Video 4', videoUrl: 'https://drive.google.com/file/d/1uWaj1ne93JxU2TsTuwpguH7t9GEqqapm/preview' },
  { id: 5, title: 'Explainer Video 5', videoUrl: 'https://drive.google.com/file/d/15T6LHJ8KT3jWCHYITY9K4o8GGzOKIUXZ/preview' },
];

const ExplainerVideoAds: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const scrollAmount = 400;
    const maxIndex = videos.length - 1;

    if (direction === 'right') {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

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
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />

          {/* Videos Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth no-scrollbar"
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex-shrink-0 w-60 md:w-72 lg:w-80"
              >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black">
                  <iframe
                    src={video.videoUrl}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    className="w-full h-full border-none"
                    title={video.title}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Left Navigation Button */}
          <button
            onClick={() => scrollCarousel('left')}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-20 p-3 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={() => scrollCarousel('right')}
            disabled={currentIndex >= videos.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-20 p-3 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2.5 bg-[#4DC035]'
                  : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplainerVideoAds;
