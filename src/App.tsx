import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Circle, Hexagon, Triangle, Plus, X, Rocket, Menu } from 'lucide-react';
import PricingSection from './components/PricingSection';
import ClientsSection from './components/ClientsSection';
import ScrollProgress from './components/ScrollProgress';
import WorkSection from './components/WorkSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ExplainerVideoAds from './components/ExplainerVideoAds';
import AIAdsSection from './components/AIAdsSection';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Work', href: 'work' },
    { name: 'Services', href: 'services' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'FAQs', href: 'faqs' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ScrollProgress />
      
      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1200px] px-6 md:px-8">
        <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-full px-6 md:px-12 py-4 shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(77,192,53,0.5)]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 text-[#4DC035] transition-transform duration-300 hover:scale-105"
            >
              <Rocket className="w-6 h-6" />
              <span className="font-bold text-lg">Prestige Media</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`/#${link.href}`}
                  className="relative text-white/90 hover:text-white transition-colors duration-300 group text-sm font-medium"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4DC035] to-[#4DC035] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <Link
                to="/portfolio"
                className="relative text-white/90 hover:text-white transition-colors duration-300 group text-sm font-medium"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4DC035] to-[#4DC035] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <button className="px-6 py-2 bg-[#4DC035]/10 border border-[#4DC035]/30 rounded-full text-[#4DC035] text-sm font-medium transition-all duration-300 hover:bg-[#4DC035] hover:text-black hover:border-transparent">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 py-4 border-t border-white/10">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`/#${link.href}`}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Link
                  to="/portfolio"
                  className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <button className="px-6 py-2 bg-[#4DC035]/10 border border-[#4DC035]/30 rounded-full text-[#4DC035] text-sm font-medium transition-all duration-300 hover:bg-[#4DC035] hover:text-black hover:border-transparent">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6">
        <div ref={parallaxRef} className="absolute inset-0 pointer-events-none overflow-hidden">
          <Circle className="absolute top-20 left-20 w-24 h-24 text-[#0A1931] opacity-20 animate-float" />
          <Plus className="absolute top-96 left-12 w-12 h-12 text-[#4DC035] opacity-10 animate-float" />
          <Triangle className="absolute bottom-32 left-36 w-20 h-20 text-[#0A1931] opacity-15 animate-float-delayed" />
          <Hexagon className="absolute top-40 right-32 w-32 h-32 text-[#4DC035] opacity-10 animate-float" />
          <X className="absolute bottom-48 right-40 w-12 h-12 text-[#0A1931] opacity-20 animate-float" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-10">
          {/* Horizontal Video */}
          <div className="w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(77,192,53,0.08)] animate-fade-in">
            <div className="w-full aspect-video">
              <iframe
                src="https://drive.google.com/file/d/14aHOV8nW8v28TOMwpKu_syWZHUapyC1J/preview"
                width="100%"
                height="100%"
                allow="autoplay"
                className="w-full h-full"
                title="Featured Video"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight animate-fade-in-delayed">
            <span className="text-white">Scale Your Business With </span>
            <span className="text-[#4DC035]">Data-Driven High Quality Ads</span>
          </h1>

          {/* CTA Button */}
          <div className="animate-fade-in-delayed-2">
            <button className="group px-10 py-4 bg-gradient-to-r from-[#4DC035] to-[#4DC035] rounded-full text-black font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/30 hover:scale-105 flex items-center gap-3 animate-jiggle">
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      {/* Explainer Video Ads Section */}
      <ExplainerVideoAds />

      {/* AI Ads Section */}
      <AIAdsSection />

      {/* Work Section */}
      <section id="work">
        <WorkSection />
      </section>
      
      {/* Services Section */}
      {/* <section id="services">
        <PricingSection />
      </section> */}
      
      {/* Testimonials Section */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      
      {/* FAQs Section */}
      <section id="faqs">
        <FAQSection />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;