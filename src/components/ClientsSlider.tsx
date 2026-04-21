import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Client } from './types';

interface ClientsSliderProps {
  clients: Client[];
}

const ClientsSlider: React.FC<ClientsSliderProps> = ({ clients }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getPlatformIcon = (platform: string) => {
    const iconClasses = "w-5 h-5";
    
    switch (platform.toLowerCase()) {
      case 'youtube':
        return (
          <svg className={iconClasses} viewBox="0 0 24 24" fill="none">
            <path d="M23.5 6.507a2.786 2.786 0 0 0-2.008-2.008C19.777 4 12 4 12 4s-7.777 0-9.492.499A2.786 2.786 0 0 0 .5 6.507C0 8.222 0 12 0 12s0 3.778.499 5.493a2.786 2.786 0 0 0 2.008 2.008C4.223 20 12 20 12 20s7.777 0 9.492-.499a2.786 2.786 0 0 0 2.008-2.008C24 15.778 24 12 24 12s0-3.778-.499-5.493z" fill="#FF0000"/>
            <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className={iconClasses} viewBox="0 0 24 24" fill="none">
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" fill="url(#instagram-gradient)"/>
            <defs>
              <linearGradient id="instagram-gradient" x1="0" y1="0" x2="24" y2="24">
                <stop offset="0%" stopColor="#833AB4"/>
                <stop offset="50%" stopColor="#FD1D1D"/>
                <stop offset="100%" stopColor="#FCB045"/>
              </linearGradient>
            </defs>
          </svg>
        );
      case 'tiktok':
        return (
          <svg className={iconClasses} viewBox="0 0 24 24" fill="none">
            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="#00F2EA"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="relative group">
                {/* Purple glow effect */}
                <div className="absolute -inset-0.5 bg-purple-600/30 
                  rounded-2xl opacity-30 blur group-hover:opacity-100 
                  transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="relative bg-black/90 rounded-2xl p-8 
                  border border-white/10 backdrop-blur-sm
                  transform transition-all duration-500
                  group-hover:border-purple-400/20
                  group-hover:shadow-[0_0_25px_rgba(147,51,234,0.2)]">
                  
                  {/* Avatar, Tagline, and Followers in one row */}
                  <div className="flex items-start justify-between">
                    {/* Avatar and Platform Icon */}
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden 
                        ring-2 ring-purple-400/30 group-hover:ring-purple-400/70
                        transition-all duration-300">
                        <img
                          src={client.avatar}
                          alt={client.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 p-2 bg-black/80 
                        rounded-full border border-purple-400/30
                        group-hover:border-purple-400/70 transition-all duration-300">
                        {getPlatformIcon(client.platform)}
                      </div>
                    </div>

                    {/* Tagline in middle - Hidden on mobile */}
                    <div className="flex-1 hidden md:flex justify-center px-4">
                      <div className="bg-purple-900/90 px-6 py-2 rounded-full border border-purple-500/30
                        transform transition-all duration-300 group-hover:scale-105
                        group-hover:border-purple-500/50">
                        <p className="text-sm text-purple-200 whitespace-nowrap">{client.tagline}</p>
                      </div>
                    </div>
                    
                    {/* Followers Count */}
                    <div className="text-right">
                      <div className="text-3xl font-bold text-purple-400 mb-1">
                        {client.followers}
                      </div>
                      <div className="text-sm text-gray-400">Followers</div>
                    </div>
                  </div>

                  {/* Name and Link */}
                  <div className="text-center mt-8">
                    <h3 className="text-xl font-bold text-white mb-4">{client.name}</h3>
                    <a
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 
                        bg-purple-600/10 border border-purple-400/30 rounded-lg 
                        text-purple-400 transition-all duration-300 
                        hover:border-purple-400/50
                        hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                    >
                      <span>View Profile</span>
                      {getPlatformIcon(client.platform)}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 transform
          w-12 h-12 rounded-full bg-black/50 border border-purple-500/30
          text-purple-400 transition-all duration-300
          hover:bg-purple-400/10 hover:border-purple-400
          hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]
          focus:outline-none focus:ring-2 focus:ring-purple-400/50"
      >
        <ChevronLeft className="w-8 h-8 mx-auto" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform
          w-12 h-12 rounded-full bg-black/50 border border-purple-500/30
          text-purple-400 transition-all duration-300
          hover:bg-purple-400/10 hover:border-purple-400
          hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]
          focus:outline-none focus:ring-2 focus:ring-purple-400/50"
      >
        <ChevronRight className="w-8 h-8 mx-auto" />
      </button>
    </div>
  );
};

export default ClientsSlider;