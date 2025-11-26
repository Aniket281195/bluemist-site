import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { landingContent } from '../data/landing-content';
import { EnquiryModal } from './EnquiryModal';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-black/70 z-10" /> {/* Darker overlay for better readability */}
        <img 
          src="https://pixabay.com/get/g614f0b5ed343de6d4dbde3745c72e563ecb3327c71db0fcfac185c9f44c3a19f41f46cf2de2e9b9339e79b7b0f816af77441c2547f131d7e679299a669a76310_1280.jpg" 
          alt="Luxury Water Background" 
          className="w-full h-full object-cover scale-105"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-widest leading-tight drop-shadow-lg">
            {landingContent.hero.title}
          </h1>
          
          <div className="space-y-6">
            <h2 className="font-josefin text-base md:text-lg text-tertiary tracking-[0.3em] uppercase font-light drop-shadow-md">
              {landingContent.hero.subtitle}
            </h2>
            <p className="font-josefin text-sm md:text-base text-white/80 max-w-lg mx-auto leading-relaxed font-light drop-shadow-md">
              {landingContent.hero.description}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="mt-10 px-8 py-3 border border-white/30 text-white font-cinzel text-xs tracking-[0.2em] hover:border-white transition-all duration-500 uppercase backdrop-blur-sm"
          >
            {landingContent.hero.cta}
          </motion.button>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </motion.div>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
