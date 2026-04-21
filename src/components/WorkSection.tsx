import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { videos } from './videoData';

const WorkSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextVideo = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const prevVideo = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <section className="our-work-section relative bg-black py-24 overflow-hidden">
      
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Our Client Work
        </h2>
        <p className="text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto">
          We help real estate professionals stand out with high-quality, done-for-you content that drives growth.
        </p>

        <div className="phone-container relative max-w-[320px] mx-auto">
          {/* Desktop Navigation Buttons */}
          <div className="nav-buttons hidden md:flex absolute inset-y-0 -left-20 -right-20 items-center justify-between pointer-events-none">
            <button
              onClick={prevVideo}
              className="w-12 h-12 rounded-full bg-black/50 border border-white/10 
                text-white/70 transition-all duration-300 transform
                hover:scale-110 hover:bg-white/10 hover:border-white/30 
                hover:text-white pointer-events-auto
                focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <ChevronLeft className="w-8 h-8 mx-auto" />
            </button>
            <button
              onClick={nextVideo}
              className="w-12 h-12 rounded-full bg-black/50 border border-white/10 
                text-white/70 transition-all duration-300 transform
                hover:scale-110 hover:bg-white/10 hover:border-white/30 
                hover:text-white pointer-events-auto
                focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <ChevronRight className="w-8 h-8 mx-auto" />
            </button>
          </div>

          {/* Phone Frame */}
          <div className="phone-frame relative w-full aspect-[9/16] rounded-[3rem] border-8 border-[#1a1a1a] bg-black shadow-2xl overflow-hidden">
            {/* Notch Area */}
            <div className="notch-area absolute top-0 w-1/2 h-6 bg-[#1a1a1a] left-1/2 -translate-x-1/2 rounded-b-2xl z-20">
              {/* Navigation Dots */}
              <div className="nav-dots absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                {videos.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1 h-1 rounded-full transition-all duration-300 ${
                      index === currentVideo ? 'bg-white/90 w-2' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Video Container */}
            <div className="video-container relative w-full h-full">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`video-slide absolute inset-0 transition-opacity duration-500 ${
                    index === currentVideo ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  } ${isTransitioning ? 'transition-opacity duration-500' : ''}`}
                >
                  <iframe
                    className="w-full h-full object-cover"
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 'none' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Video Title */}
          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold text-white">
              {videos[currentVideo].title}
            </h3>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="md:hidden flex justify-center gap-4 mt-4">
            <button
              onClick={prevVideo}
              className="w-12 h-12 rounded-full bg-black/50 border border-white/10 
                text-white/70 transition-all duration-300 transform
                hover:scale-110 hover:bg-white/10 hover:border-white/30 
                hover:text-white
                focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <ChevronLeft className="w-8 h-8 mx-auto" />
            </button>
            <button
              onClick={nextVideo}
              className="w-12 h-12 rounded-full bg-black/50 border border-white/10 
                text-white/70 transition-all duration-300 transform
                hover:scale-110 hover:bg-white/10 hover:border-white/30 
                hover:text-white
                focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <ChevronRight className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;