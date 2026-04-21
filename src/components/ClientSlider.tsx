import React, { useEffect, useRef, useState } from 'react';
import { User } from 'lucide-react';
import { TestimonialData } from './types';

interface ClientSliderProps {
  testimonials: TestimonialData[];
}

const ClientSlider: React.FC<ClientSliderProps> = ({ testimonials }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    let lastTimestamp = 0;
    const scrollSpeed = 1; // pixels per frame

    const scroll = (timestamp: number) => {
      if (!isPaused) {
        if (lastTimestamp !== 0) {
          const delta = timestamp - lastTimestamp;
          if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = 0;
          } else {
            slider.scrollLeft += scrollSpeed;
          }
        }
        lastTimestamp = timestamp;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-zinc-900 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-zinc-900 to-transparent" />
      
      <div 
        ref={sliderRef}
        className="flex gap-8 overflow-x-hidden whitespace-nowrap py-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Double the items for seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="flex-none w-[300px] bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-[#4DC035]/10
              transform transition-all duration-300 hover:scale-105 hover:border-[#4DC035]/30
              hover:shadow-[0_0_25px_rgba(77,192,53,0.2)]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#4DC035]/20 flex items-center justify-center">
                <User className="w-6 h-6 text-[#4DC035]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm whitespace-normal">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSlider;