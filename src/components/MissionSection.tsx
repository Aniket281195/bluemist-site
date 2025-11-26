import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { missionContent } from "../data/landing-content";

export const MissionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const { title, text } = landingContent.mission;

  return (
    <section ref={containerRef} className="py-40 px-6 bg-primary text-center relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2 
          className="font-cinzel text-tertiary text-sm md:text-base tracking-[0.3em] uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="font-josefin text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
};
