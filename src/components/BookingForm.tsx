import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, ArrowRight } from 'lucide-react';

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl relative z-10 border border-brand-border">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-serif text-brand-ink mb-6 text-center italic"
            >
              Quick Booking
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: "Full Name", type: "text", placeholder: "Enter your name" },
                { label: "Phone Number", type: "tel", placeholder: "+91 00000 00000" },
              ].map((field, idx) => (
                <motion.div
                  key={field.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx + 0.2 }}
                >
                  <label className="block text-[10px] uppercase tracking-widest text-brand-grey mb-1 font-bold">{field.label}</label>
                  <input 
                    required
                    type={field.type} 
                    placeholder={field.placeholder}
                    className="input-luxury"
                  />
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-[10px] uppercase tracking-widest text-brand-grey mb-1 font-bold">Select Service</label>
                <div className="relative">
                  <select className="input-luxury appearance-none">
                    <option>Hair Styling & Cut</option>
                    <option>Skin Treatment</option>
                    <option>Bridal Makeup</option>
                    <option>Manicure & Pedicure</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-brand-gold">
                    <ArrowRight size={14} className="rotate-90" />
                  </div>
                </div>
              </motion.div>

              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isLoading}
                className="w-full btn-accent !py-4 shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Book Appointment</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
            <p className="text-center text-[10px] text-brand-grey mt-6 uppercase tracking-tighter">
              Or call us directly: <span className="text-brand-pink font-bold">+91 98765 43210</span>
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-3xl font-serif mb-4">Appointment Requested!</h3>
            <p className="text-brand-ink/60 mb-8 leading-relaxed">
              Thanks for choosing RK Salon. Our team will contact you shortly to confirm your slot.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-brand-gold font-medium hover:underline"
            >
              Request another booking
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
