import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle } from 'lucide-react';

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
            <h3 className="text-3xl font-serif text-brand-ink mb-6 text-center italic">Quick Booking</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-brand-grey mb-1 font-bold">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Enter your name"
                  className="input-luxury"
                />
              </div>
              
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-brand-grey mb-1 font-bold">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="input-luxury"
                />
              </div>
              
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-brand-grey mb-1 font-bold">Select Service</label>
                <select className="input-luxury appearance-none">
                  <option>Hair Styling & Cut</option>
                  <option>Skin Treatment</option>
                  <option>Bridal Makeup</option>
                  <option>Manicure & Pedicure</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full btn-accent !py-4 shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Book Appointment</span>
                    <Send size={18} />
                  </>
                )}
              </button>
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
