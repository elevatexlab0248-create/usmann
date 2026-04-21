import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/abdullah.sajidabbasi?igsh=MTBlMWxoemRxNzR0MA==', label: 'Instagram' },
  { icon: Twitter, href: 'https://x.com/AbdullahAb92243?s=09', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/nexusgrowthh/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com/@abdullahabbasi5743?si=swNup2NvPbGIe3Qi', label: 'YouTube' },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#4DC035] transition-colors duration-300
            hover:shadow-[0_0_15px_rgba(77,192,53,0.3)]"
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;