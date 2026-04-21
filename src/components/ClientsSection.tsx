import React from 'react';
import saEducation from '../assets/images_(9).png';
import shopify from '../assets/images_(7).png';
import ria from '../assets/images_(8).png';
import masdar from '../assets/GiIlvS3I_400x400.png';
import indrive from '../assets/Indrive-Logo-PNG-SVG-Vector.png';
import logo4 from '../assets/images_(4).png';
import logo5 from '../assets/images_(5).png';
import logo6 from '../assets/images_(6).png';
import logo34 from '../assets/images_(34).jpeg';

const ClientsSection = () => {
  const stats = [
    { number: '200+', label: 'Clients' },
    { number: '500+', label: 'Leads Generated' },
    { number: '16+', label: 'Average ROAS' }
  ];

  const logos = [
    { id: 1, name: 'SA Education Consultant', src: saEducation },
    { id: 2, name: 'Shopify', src: shopify },
    { id: 3, name: 'Ria Money Transfer', src: ria },
    { id: 4, name: 'Masdar Free Zone', src: masdar },
    { id: 5, name: 'inDrive', src: indrive },
    { id: 6, name: 'Brand Logo 4', src: logo4 },
    { id: 7, name: 'Brand Logo 5', src: logo5 },
    { id: 8, name: 'Brand Logo 6', src: logo6 },
    { id: 9, name: 'Brand Logo 34', src: logo34 },
  ];

  return (
    <section className="relative bg-black pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/5 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-16">
          We Proudly Partner With Leading Brands
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left Side - Logo Marquees */}
          <div className="flex flex-col items-center justify-center gap-12">
            {/* Top Row - Right to Left */}
            <div className="w-full overflow-hidden">
              <div className="flex gap-8 animate-marquee-rtl">
                {logos.map((logo) => (
                  <div
                    key={`top-${logo.id}`}
                    className="flex-shrink-0 w-32 h-24 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer p-3"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row - Left to Right */}
            <div className="w-full overflow-hidden">
              <div className="flex gap-8 animate-marquee-ltr">
                {logos.map((logo) => (
                  <div
                    key={`bottom-${logo.id}`}
                    className="flex-shrink-0 w-32 h-24 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer p-3"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Right Side - Stats */}
          <div className="flex items-center justify-center lg:pl-12">
            <div className="space-y-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:text-[#4DC035] transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xl text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;