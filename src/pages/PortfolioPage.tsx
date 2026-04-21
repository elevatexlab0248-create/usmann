import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Menu, X, Play, Clock, User, ArrowLeft } from 'lucide-react';
import { portfolioVideos, categories, Category } from '../components/portfolioData';
import Footer from '../components/Footer';

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    activeCategory === 'All'
      ? portfolioVideos
      : portfolioVideos.filter((v) => v.category === activeCategory);

  const navLinks = [
    { name: 'Work', href: '/#work' },
    { name: 'Services', href: '/#services' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'FAQs', href: '/#faqs' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1200px] px-6 md:px-8">
        <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-full px-6 md:px-12 py-4 shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(77,192,53,0.5)]">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-[#4DC035] transition-transform duration-300 hover:scale-105"
            >
              <Rocket className="w-6 h-6" />
              <span className="font-bold text-lg">Prestige Media</span>
            </Link>

            <button
              className="md:hidden text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-white/90 hover:text-white transition-colors duration-300 group text-sm font-medium"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4DC035] to-[#4DC035] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <Link
                to="/portfolio"
                className="relative text-[#4DC035] text-sm font-medium"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#4DC035] to-[#4DC035]" />
              </Link>
              <button className="px-6 py-2 bg-[#4DC035]/10 border border-[#4DC035]/30 rounded-full text-[#4DC035] text-sm font-medium transition-all duration-300 hover:bg-[#4DC035] hover:text-black hover:border-transparent">
                Contact
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-6 py-4 border-t border-white/10">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Link
                  to="/portfolio"
                  className="text-[#4DC035] text-sm font-medium"
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

      {/* Hero Banner */}
      <section className="relative pt-40 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4DC035]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#4DC035]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Our <span className="text-[#4DC035]">Portfolio</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            A curated showcase of our best video work — from AI-powered ads to brand films that drive real results.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { value: '120+', label: 'Videos Produced' },
              { value: '80+', label: 'Happy Clients' },
              { value: '4', label: 'Video Categories' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#4DC035]">{stat.value}</div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-24 z-30 px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-1.5 flex flex-wrap gap-1.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#4DC035] text-black shadow-[0_0_20px_rgba(77,192,53,0.3)]'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
                <span className={`ml-2 text-xs ${activeCategory === cat ? 'text-black/60' : 'text-white/30'}`}>
                  {cat === 'All' ? portfolioVideos.length : portfolioVideos.filter((v) => v.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((video) => (
              <div
                key={video.id}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black/50 transition-all duration-400 group-hover:border-[#4DC035]/30 group-hover:shadow-[0_0_30px_rgba(77,192,53,0.1)]">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#4DC035]/20 border border-[#4DC035]/30 text-[#4DC035] backdrop-blur-sm">
                      {video.category}
                    </span>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/10">
                    <Clock className="w-3 h-3 text-white/60" />
                    <span className="text-xs text-white/60">{video.duration}</span>
                  </div>

                  {/* Play button */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      hoveredId === video.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#4DC035] flex items-center justify-center shadow-[0_0_30px_rgba(77,192,53,0.5)] transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 text-black fill-black ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-sm leading-tight mb-1.5">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-white/50 text-xs">
                      <User className="w-3 h-3" />
                      <span>{video.client}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/40">
              No videos found in this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-[#4DC035]/20 bg-gradient-to-br from-[#4DC035]/10 via-black to-black p-10 md:p-14 text-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4DC035]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4DC035]/5 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to create your <span className="text-[#4DC035]">next video?</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Let's bring your vision to life. Book a free strategy call and see how we can grow your brand.
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-[#4DC035] to-[#4DC035] rounded-full text-black font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#4DC035]/30 hover:scale-105">
                Book a Free Call
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
