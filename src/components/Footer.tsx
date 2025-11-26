import React from 'react';
import { landingContent } from '../data/landing-content';
import { Instagram } from 'lucide-react';
import logo from '../assets/logo2.svg';

export const Footer: React.FC = () => {
  const { text } = landingContent.footer;

  return (
    <footer className="py-16 px-6 bg-primary text-white border-t border-white/5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left flex items-center gap-4">
          <img 
            src={logo} 
            alt="BlueMist Logo" 
            className="h-24 w-24 object-contain"
          />
        </div>
        
        <div className="flex items-center space-x-8 text-xs font-josefin text-gray-500 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>

        <p className="font-josefin text-xs text-gray-600 font-light">
          &copy; 2025
        </p>
      </div>
    </footer>
  );
};
