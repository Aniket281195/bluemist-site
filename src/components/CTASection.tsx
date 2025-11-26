import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { landingContent } from '../data/landing-content';
import { EnquiryModal } from './EnquiryModal';

export const CTASection: React.FC = () => {
  const { title, button } = landingContent.ctaSection;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-40 px-6 bg-primary text-white text-center relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2 
          className="font-cinzel text-4xl md:text-6xl font-light mb-16 leading-tight tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h2>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsModalOpen(true)}
          className="group inline-flex items-center px-12 py-5 border border-tertiary text-tertiary font-cinzel text-sm tracking-[0.2em] hover:bg-tertiary hover:text-primary transition-all duration-500 uppercase"
        >
          {button} <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
