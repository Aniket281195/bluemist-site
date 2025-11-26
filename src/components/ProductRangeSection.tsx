import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { landingContent } from '../data/landing-content';

export const ProductRangeSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const { title, items, description } = landingContent.productRange;

  return (
    <section ref={containerRef} className="py-32 px-6 bg-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-6 tracking-widest font-light">{title}</h2>
          <p className="font-josefin text-gray-400 font-light tracking-wide">{description}</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Header Row - Hidden on mobile, visible on md+ */}
          <div className="hidden md:grid grid-cols-4 gap-4 border-b border-white/10 pb-6 mb-6">
            <div className="font-cinzel text-sm text-tertiary uppercase tracking-widest font-normal text-center">Size</div>
            <div className="font-cinzel text-sm text-tertiary uppercase tracking-widest font-normal text-center">Style</div>
            <div className="font-cinzel text-sm text-tertiary uppercase tracking-widest font-normal text-center">Ideal Usage</div>
            <div className="font-cinzel text-sm text-tertiary uppercase tracking-widest font-normal text-center">Packaging</div>
          </div>

          {/* Data Rows */}
          {items.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-300 items-center"
            >
              <div className="text-center">
                <span className="md:hidden font-cinzel text-xs text-tertiary uppercase tracking-widest block mb-2">Size</span>
                <span className="font-josefin text-xl text-white font-light">{item.size}</span>
              </div>
              <div className="text-center">
                <span className="md:hidden font-cinzel text-xs text-tertiary uppercase tracking-widest block mb-2">Style</span>
                <span className="font-josefin text-lg text-white/80 font-light">{item.style}</span>
              </div>
              <div className="text-center">
                <span className="md:hidden font-cinzel text-xs text-tertiary uppercase tracking-widest block mb-2">Ideal Usage</span>
                <span className="font-josefin text-base text-gray-400 font-light">{item.usage}</span>
              </div>
              <div className="text-center">
                <span className="md:hidden font-cinzel text-xs text-tertiary uppercase tracking-widest block mb-2">Packaging</span>
                <span className="font-josefin text-lg text-tertiary/90 font-light">{item.packaging}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
