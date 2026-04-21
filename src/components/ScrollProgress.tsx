import React, { useEffect, useRef } from 'react';

const ScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (progressRef.current) {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = (window.scrollY / totalScroll) * 100;
        progressRef.current.style.width = `${currentProgress}%`;
      }
    };

    // Initial call
    handleScroll();

    // Add passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999]">
      <div className="h-full w-full bg-black/10"></div>
      <div 
        ref={progressRef}
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 via-[#4DC035] to-purple-600 
          transition-[width] duration-150 ease-out"
        style={{ boxShadow: '0 0 8px rgba(147, 51, 234, 0.5)' }}
      >
        <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#4DC035] rounded-full 
          shadow-lg shadow-[#4DC035]/50"></div>
      </div>
    </div>
  );
};

export default ScrollProgress;