import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { landingContent } from '../data/landing-content';

export const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const { title, subtitle, phone, email, instagram, instagramLink, location, serviceLocations } = landingContent.contact;

  return (
    <section ref={containerRef} id="contact" className="py-32 px-6 bg-zinc-50 text-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="font-cinzel text-3xl md:text-4xl mb-8 tracking-wide font-light">{title}</h2>
            <p className="font-josefin text-lg text-gray-500 mb-16 font-light">{subtitle}</p>
            
            <div className="space-y-10">
              {[
                { label: "Call / WhatsApp", value: phone },
                { label: "Email", value: email },
                { label: "Instagram", value: instagram, link: instagramLink },
                { label: "Location", value: location },
              ].map((item, index) => (
                <div key={index} className="border-l border-tertiary/30 pl-6">
                  <p className="font-josefin text-xs text-gray-400 uppercase tracking-widest mb-2">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-cinzel text-xl text-primary hover:text-tertiary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-cinzel text-xl text-primary">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-12 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="font-cinzel text-2xl mb-8 text-tertiary tracking-wide">Service Locations</h3>
            <p className="font-josefin text-lg leading-relaxed mb-12 font-light text-gray-600">
              {serviceLocations}
            </p>
            
            <div className="w-full h-80 bg-gray-100 relative overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               <img 
                 src="https://pixabay.com/get/g492d37a9d6798aa9d606d11885f9d2b8a7ae76e1cf46653acad75ff0bf1ac11286743e3c96400240ccf927de44d76a41_1280.jpg" 
                 alt="Map Background" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
