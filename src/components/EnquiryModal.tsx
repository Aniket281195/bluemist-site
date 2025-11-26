import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'General Enquiry'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const subject = `Enquiry from ${formData.name} - ${formData.interest}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AInterest: ${formData.interest}%0D%0AMessage: ${formData.message}`;
    
    window.location.href = `mailto:workwithbluemist@.com?subject=${subject}&body=${body}`;
    
    // Optional: Close modal after a delay or show success message
    setTimeout(onClose, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-zinc-900 border border-white/10 p-8 md:p-10 rounded-sm shadow-2xl z-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="font-cinzel text-2xl md:text-3xl text-white mb-2">Enquire Now</h2>
            <p className="font-josefin text-gray-400 mb-8 font-light">Let's create a luxurious experience for your brand.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-cinzel text-xs text-tertiary uppercase tracking-widest mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 p-3 text-white font-josefin focus:border-tertiary focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-cinzel text-xs text-tertiary uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 p-3 text-white font-josefin focus:border-tertiary focus:outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block font-cinzel text-xs text-tertiary uppercase tracking-widest mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 p-3 text-white font-josefin focus:border-tertiary focus:outline-none transition-colors"
                    placeholder="+91 0000000000"
                  />
                </div>
              </div>

              <div>
                <label className="block font-cinzel text-xs text-tertiary uppercase tracking-widest mb-2">Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 p-3 text-white font-josefin focus:border-tertiary focus:outline-none transition-colors"
                >
                  <option value="General Enquiry" className="bg-zinc-900">General Enquiry</option>
                  <option value="Private Label" className="bg-zinc-900">Private Label</option>
                  <option value="Bulk Order" className="bg-zinc-900">Bulk Order</option>
                </select>
              </div>

              <div>
                <label className="block font-cinzel text-xs text-tertiary uppercase tracking-widest mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 p-3 text-white font-josefin focus:border-tertiary focus:outline-none transition-colors"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-tertiary text-primary font-cinzel font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300"
              >
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
