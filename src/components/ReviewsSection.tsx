import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: number;
  text: string;
  author: string;
  role: string;
  company: string;
}

interface VideoReview {
  id: number;
  url: string;
  author: string;
  role: string;
  company: string;
  thumbnail: string;
}

const textReviews: Review[] = [
  {
    id: 1,
    text: "The strategic insights and execution capabilities have transformed our digital presence. Exceptional results!",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc"
  },
  {
    id: 2,
    text: "Their data-driven approach and creative solutions helped us achieve 3x growth in just six months.",
    author: "Michael Rodriguez",
    role: "CEO",
    company: "Innovate AI"
  },
  {
    id: 3,
    text: "The team's dedication to our success and their innovative strategies exceeded our expectations.",
    author: "Emily Watson",
    role: "Growth Lead",
    company: "Scale Labs"
  },
  {
    id: 4,
    text: "A game-changing partnership that delivered measurable results and sustainable growth.",
    author: "David Kim",
    role: "Founder",
    company: "NextGen Solutions"
  },
  {
    id: 5,
    text: "Their holistic approach to growth and attention to detail sets them apart from other agencies.",
    author: "Lisa Thompson",
    role: "COO",
    company: "Digital Dynamics"
  }
];

const videoReviews: VideoReview[] = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=0fB0gr_M7Pw",
    author: "Alex Morgan",
    role: "Founder & CEO",
    company: "Morgan Enterprises",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400"
  },
  {
    id: 2,
    url: "https://player.vimeo.com/external/552661584.sd.mp4?s=f2545c3c9b4e36a37f4256c6e7b76e756c53f21c&profile_id=165",
    author: "Jessica Lee",
    role: "Marketing Director",
    company: "Innovate Digital",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=400&h=400"
  },
  {
    id: 3,
    url: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165",
    author: "Robert Chen",
    role: "Growth Strategist",
    company: "Future Scale",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=400&h=400"
  }
];

const ReviewsSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoTransitioning, setIsVideoTransitioning] = useState(false);

  const nextVideo = () => {
    setIsVideoTransitioning(true);
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videoReviews.length);
      setIsVideoTransitioning(false);
    }, 500);
  };

  const prevVideo = () => {
    setIsVideoTransitioning(true);
    setTimeout(() => {
      setCurrentVideo((prev) => (prev - 1 + videoReviews.length) % videoReviews.length);
      setIsVideoTransitioning(false);
    }, 500);
  };

  // Double the reviews for seamless infinite scroll
  const doubledReviews = [...textReviews, ...textReviews];

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4DC035]/10 rounded-full blur-[128px] translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Client Success Stories
        </h2>
        <p className="text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto">
          Hear directly from our clients about their transformative growth journey
        </p>

        <div className="reviews-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Text Reviews */}
          <div className="testimonial-sliders flex flex-col md:flex-row gap-6">
            {/* Upward Sliding Reviews */}
            <div className="slider-up flex-1 h-[400px] overflow-hidden relative">
              <div className="slider-content animate-slideUp flex flex-col gap-6">
                {doubledReviews.map((review, index) => (
                  <div
                    key={`${review.id}-${index}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl
                      transform transition-all duration-300 hover:bg-white/10 hover:border-white/20
                      hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <Quote className="w-8 h-8 text-[#4DC035] mb-4 opacity-50" />
                    <p className="text-white/90 mb-4">{review.text}</p>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-white font-medium">{review.author}</p>
                        <p className="text-white/60 text-sm">{review.role}, {review.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Downward Sliding Reviews */}
            <div className="slider-down flex-1 h-[400px] overflow-hidden relative">
              <div className="slider-content animate-slideDown flex flex-col gap-6">
                {[...doubledReviews].reverse().map((review, index) => (
                  <div
                    key={`${review.id}-${index}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl
                      transform transition-all duration-300 hover:bg-white/10 hover:border-white/20
                      hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <Quote className="w-8 h-8 text-[#4DC035] mb-4 opacity-50" />
                    <p className="text-white/90 mb-4">{review.text}</p>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-white font-medium">{review.author}</p>
                        <p className="text-white/60 text-sm">{review.role}, {review.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Video Reviews */}
          <div className="video-showcase">
            <div className="video-container relative aspect-video rounded-2xl overflow-hidden
              border-2 border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              {videoReviews.map((video, index) => (
                <div
                  key={video.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentVideo ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  } ${isVideoTransitioning ? 'transition-opacity duration-500' : ''}`}
                >
                  <video
                    className="w-full h-full object-cover"
                    src={video.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              ))}
            </div>

            {/* Video Controls */}
            <div className="video-controls flex items-center justify-center gap-4">
              <button
                onClick={prevVideo}
                className="control-btn w-12 h-12 rounded-full bg-white/5 border border-white/10
                  text-white/70 transition-all duration-300 hover:bg-white/10 hover:border-white/20
                  hover:text-white hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 mx-auto" />
              </button>
              <button
                onClick={nextVideo}
                className="control-btn w-12 h-12 rounded-full bg-white/5 border border-white/10
                  text-white/70 transition-all duration-300 hover:bg-white/10 hover:border-white/20
                  hover:text-white hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 mx-auto" />
              </button>
            </div>

            {/* Client Info */}
            <div className="client-info mt-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                {videoReviews[currentVideo].author}
              </h3>
              <p className="text-white/60">
                {videoReviews[currentVideo].role} at {videoReviews[currentVideo].company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;