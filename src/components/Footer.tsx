import React from 'react';
import { Rocket } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="relative bg-black py-12 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4DC035]/10 via-black to-black" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Rocket className="w-6 h-6 text-[#4DC035]" />
              <span className="text-xl font-semibold">
                <span className="text-white">Prestige 
</span>{" "}
                <span className="text-[#4DC035]">Media</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Create Video Ads based on Data that brings real ROI and scales your business predictably
            </p>
          </div>

          {/* Social Links */}
          <div className="relative">
            {/* Decorative gradient behind social icons */}
            <div className="absolute -inset-4 bg-gradient-radial from-[#4DC035]/5 to-transparent 
              rounded-full blur-xl" />
            <div className="relative">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Bottom Border with Gradient */}
        <div className="mt-12 pt-8 border-t border-[#4DC035]/10">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Prestige Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;