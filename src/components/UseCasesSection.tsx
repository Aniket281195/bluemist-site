import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { landingContent } from '../data/landing-content';

export const UseCasesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const { title, items, tagline } = landingContent.perfectFor;

  return (
    <section ref={containerRef} className="py-32 px-6 bg-primary text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="font-cinzel text-3xl md:text-4xl mb-6 tracking-widest font-light">{title}</h2>
          <p className="font-josefin text-tertiary text-sm tracking-[0.2em] uppercase">{tagline}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-primary p-12 text-center hover:bg-white/[0.02] transition-colors duration-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-cinzel text-lg font-light tracking-wide text-white/90">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
