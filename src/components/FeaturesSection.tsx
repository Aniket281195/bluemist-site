import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Droplets, ShieldCheck, Gem, Leaf, Stamp, Recycle } from 'lucide-react';
import { landingContent } from '../data/landing-content';

export const FeaturesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  
  const { title, features } = landingContent.premiumFeatures;
  
  const icons = [
    <Droplets className="w-6 h-6" />,
    <ShieldCheck className="w-6 h-6" />,
    <Gem className="w-6 h-6" />,
    <Leaf className="w-6 h-6" />,
    <Stamp className="w-6 h-6" />,
    <Recycle className="w-6 h-6" />,
  ];

  return (
    <section ref={containerRef} id="features" className="py-32 px-6 bg-primary relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="font-cinzel text-3xl md:text-4xl text-white tracking-widest font-light">
            {title}
          </h2>
          <div className="w-12 h-[1px] bg-tertiary mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.a
              href={feature.link}
              key={index}
              className="block text-center group p-10 border border-white/10 hover:border-tertiary/50 transition-all duration-500 rounded-sm bg-white/[0.02] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center text-tertiary/80 group-hover:text-tertiary transition-colors duration-500">
                {icons[index] || <Gem className="w-6 h-6" />}
              </div>
              <h3 className="font-cinzel text-lg text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="font-josefin text-sm text-gray-400 leading-relaxed font-light">
                {feature.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
