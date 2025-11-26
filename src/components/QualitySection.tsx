import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import { landingContent } from '../data/landing-content';

export const QualitySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const { title, description, items, tagline } = landingContent.quality;

  return (
    <section ref={containerRef} className="py-32 px-6 bg-white text-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="font-cinzel text-3xl md:text-4xl mb-8 tracking-wide font-light">{title}</h2>
            <p className="font-josefin text-lg text-gray-600 mb-10 leading-relaxed font-light">{description}</p>
            
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-8 h-8 rounded-full border border-tertiary/30 flex items-center justify-center group-hover:border-tertiary transition-colors">
                    <Check className="w-4 h-4 text-tertiary" />
                  </div>
                  <span className="font-josefin text-lg text-gray-800 font-light">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-12 border-t border-gray-100">
              <p className="font-cinzel text-lg text-tertiary tracking-widest uppercase">{tagline}</p>
            </div>
          </motion.div>
          
          <motion.div
            className="relative aspect-[4/5] bg-gray-100"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
             <img 
               src="https://pixabay.com/get/g9194527509cb35ccf234b3d0bcce7fe36b66df6a69fb20ed20196de91238a042727b2014af6cf8ae370ce7a0aa5659916864cf6f2fa9e92ba5b63a63c7d2e239_1280.jpg" 
               alt="Quality Water" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
             />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
