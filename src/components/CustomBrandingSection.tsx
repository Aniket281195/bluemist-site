import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { landingContent } from '../data/landing-content';

export const CustomBrandingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const { title, subtitle, privateLabel } = landingContent.customBranding;

  return (
    <section ref={containerRef} className="py-32 px-6 bg-zinc-900 relative overflow-hidden">
      {/* Minimal Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="font-cinzel text-3xl md:text-5xl text-white mb-8 tracking-wide font-light leading-tight">
              {title}
            </h2>
            <p className="font-josefin text-lg text-gray-400 font-light leading-relaxed mb-12">
              {subtitle}
            </p>
            <div className="w-20 h-[1px] bg-tertiary" />
          </motion.div>

          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div>
              <h3 className="font-cinzel text-xl text-tertiary mb-6 tracking-widest uppercase">{privateLabel.title}</h3>
              <p className="font-josefin text-white/80 mb-8 font-light">{privateLabel.description}</p>
              
              <div className="flex flex-wrap gap-3">
                {privateLabel.items.map((item, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 border border-white/20 rounded-full font-josefin text-sm text-white/70 hover:border-white/50 hover:text-white transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="font-cinzel text-lg text-white tracking-widest italic opacity-80">
              "{privateLabel.tagline}"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
