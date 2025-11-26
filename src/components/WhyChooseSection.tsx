import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import { features } from "../data/landing-content";

export const WhyChooseSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const { title, items } = landingContent.whyChoose;

  return (
    <section ref={containerRef} className="py-32 px-6 bg-white text-primary">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="font-cinzel text-3xl md:text-4xl text-center mb-20 tracking-widest font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h2>

        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-6 group border-b border-gray-100 pb-8 last:border-0"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="font-cinzel text-tertiary text-sm">0{index + 1}</span>
              <p className="font-josefin text-xl text-gray-800 font-light group-hover:translate-x-2 transition-transform duration-500">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
