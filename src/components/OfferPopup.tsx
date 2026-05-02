import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Smartphone, User, Sparkles } from 'lucide-react';

export default function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const shown = sessionStorage.getItem('popupShown');
        if (!shown) {
          setIsOpen(true);
          sessionStorage.setItem('popupShown', 'true');
        }
      } catch (e) {
        // Fallback if sessionStorage is blocked
        console.warn('sessionStorage is blocked, showing popup once per session fallback');
        setIsOpen(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-ink/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-[40px] overflow-hidden max-w-lg w-[95%] md:w-full relative shadow-2xl border border-brand-border"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-brand-offwhite text-brand-ink flex items-center justify-center hover:bg-brand-pink hover:text-white transition-all duration-300"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <div className="p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mb-10"
                >
                  <div className="w-16 h-16 bg-brand-pink/10 text-brand-pink rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-brand-ink mb-3 italic">20% OFF on First Visit</h3>
                  <p className="text-brand-grey text-sm tracking-wide">Book your appointment today and get a special discount</p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="relative">
                       <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-pink" />
                       <input 
                        required
                        type="text" 
                        placeholder="Your Name"
                        className="input-luxury !pl-12"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="relative">
                       <Smartphone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-pink" />
                       <input 
                        required
                        type="tel" 
                        placeholder="Mobile Number"
                        className="input-luxury !pl-12"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <select required className="input-luxury appearance-none">
                      <option value="">Select Service</option>
                      <option>Haircut</option>
                      <option>Hair Styling</option>
                      <option>Hair Coloring</option>
                      <option>Facial</option>
                      <option>Cleanup</option>
                      <option>Bridal Makeup</option>
                      <option>Party Makeup</option>
                      <option>Waxing</option>
                      <option>Threading</option>
                      <option>Manicure / Pedicure</option>
                    </select>
                  </motion.div>

                  <motion.button 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={isLoading}
                    className="w-full btn-accent !py-4 flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      "Book Appointment"
                    )}
                  </motion.button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
              >
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-serif text-brand-ink mb-4 italic">Request Sent!</h3>
                <p className="text-brand-grey text-base leading-relaxed mb-8">
                  Thanks! We will contact you soon.
                </p>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="btn-primary"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
