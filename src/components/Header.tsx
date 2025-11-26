import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { EnquiryModal } from './EnquiryModal';
import logo from '../assets/logo2.svg';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Premium Glass Effect
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(14, 14, 14, 0.2)", "rgba(14, 14, 14, 0.8)"]
  );

  const headerBackdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(8px)", "blur(16px)"]
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0.05)", "rgba(255, 255, 255, 0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Product Range', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        style={{ 
          backgroundColor: headerBackground, 
          backdropFilter: headerBackdropBlur,
          borderColor: headerBorder
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="BlueMist Logo" 
              className="h-20 w-20 object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-josefin text-xs text-white/70 hover:text-tertiary transition-colors uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 border border-white/20 text-white font-cinzel text-xs tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-500 uppercase"
            >
              Enquire
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 absolute top-full left-0 right-0 p-8"
          >
            <nav className="flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-josefin text-sm text-white/80 hover:text-tertiary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="px-8 py-3 border border-tertiary text-tertiary font-cinzel text-xs tracking-widest hover:bg-tertiary hover:text-primary transition-all duration-300 uppercase"
              >
                Enquire Now
              </button>
            </nav>
          </motion.div>
        )}
      </motion.header>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
