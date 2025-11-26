import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { landingContent } from '../data/landing-content';

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const { title, description } = landingContent.about;

  return (
    <section ref={containerRef} id="about" className="py-24 px-6 bg-zinc-50 text-primary relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-cinzel text-3xl md:text-4xl mb-8 tracking-widest font-light text-primary">
            {title}
          </h2>
          <div className="w-16 h-[1px] bg-tertiary mx-auto mb-10" />
          <p className="font-josefin text-lg md:text-xl text-gray-700 leading-relaxed font-light text-justify md:text-center">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
