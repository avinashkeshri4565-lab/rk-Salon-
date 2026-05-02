import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, MessageCircle, ArrowUpRight, Sparkles, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzP9YJTZozRXfkWJLkNAnoBChXT2V-WrkAlUQ0azefrbHzgdujzFldox7ZMjLmKmZBc/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'General Inquiry',
          source: 'Footer Form'
        }),
      });

      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', mobile: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setIsLoading(false);
      alert('There was an error. Please try again.');
    }
  };

  return (
    <footer className="bg-brand-ink text-white overflow-hidden">
      {/* Footer CTA / Form Section */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 border-b border-white/5">
         <div className="bg-white/5 rounded-[40px] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/10 relative overflow-hidden group">
            <div className="relative z-10 lg:max-w-md">
               <h3 className="text-3xl font-serif mb-4 italic">Quick Appointment</h3>
               <p className="text-white/40 text-sm leading-relaxed">Fill your details and our experts will call you back within 30 minutes to confirm your slot.</p>
            </div>
            
            <div className="w-full lg:max-w-md relative z-10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input 
                      required
                      type="text" 
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-brand-pink outline-none transition-colors"
                    />
                    <input 
                      required
                      type="tel" 
                      placeholder="Mobile"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-brand-pink outline-none transition-colors"
                    />
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="bg-brand-pink text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-pink/80 md:w-auto w-full transition-all flex items-center justify-center gap-2"
                    >
                      {isLoading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Submit"}
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-4 text-green-400 bg-green-400/10 p-5 rounded-2xl border border-green-400/20"
                  >
                    <CheckCircle size={24} />
                    <span className="text-sm font-medium">Thanks for submitting! Our team will contact you soon.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/5 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full"></div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 group">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/5 pb-20">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Link to="/" className="text-3xl font-serif tracking-widest uppercase flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-black font-serif italic text-xl">RK</div>
              RK <span className="text-brand-gold italic font-normal">Salon</span>
            </Link>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-sm leading-relaxed font-light"
            >
              Elevating beauty standards through expert care, premium products, and a sanctuary of relaxation. Your transformation journey starts here.
            </motion.p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, color: '#E1306C', href: '#' },
                { Icon: MessageCircle, color: '#25D366', href: 'https://wa.me/919876543210' },
                { Icon: Mail, color: '#C5A059', href: 'mailto:contact@rksalon.com' }
              ].map((social, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ scale: 1.1, backgroundColor: social.color, color: '#fff' }}
                  href={social.href}
                  target={social.Icon === MessageCircle ? "_blank" : undefined}
                  rel={social.Icon === MessageCircle ? "noreferrer" : undefined}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all"
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.h4 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-lg mb-8 text-brand-gold italic"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-4">
              {[
                { name: "Our Story", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Pricing", path: "/pricing" },
                { name: "Book Appointment", path: "/contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-white/40 text-sm hover:text-brand-pink transition-colors flex items-center gap-2 group/item">
                    <ArrowUpRight size={12} className="opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.h4 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-serif text-lg mb-8 text-brand-gold italic"
            >
              Our expertise
            </motion.h4>
            <ul className="space-y-4">
              {["Hair Styling", "Skincare & Facials", "Bridal Makeup", "Manicure & Pedicure", "Waxing & Threading"].map((service, idx) => (
                <li key={idx}>
                  <Link to="/services" className="text-white/40 text-sm hover:text-brand-pink transition-colors flex items-center gap-2 group/item">
                    <span className="w-1 h-1 rounded-full bg-brand-pink opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <motion.h4 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="font-serif text-lg mb-8 text-brand-gold italic"
            >
              Visit Sanctuary
            </motion.h4>
            <div className="flex gap-4 group/box">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/box:border-brand-pink transition-colors">
                <MapPin size={18} className="text-brand-pink" />
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                123 Beauty Lane, Glamour District, Mumbai, India
              </p>
            </div>
            <div className="flex gap-4 group/box">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/box:border-brand-gold transition-colors">
                <Phone size={18} className="text-brand-gold" />
              </div>
              <a href="tel:+919876543210" className="text-sm text-white/50 hover:text-white transition-colors">
                +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase font-bold tracking-[0.4em]">
            &copy; 2024 RK Salon. Crafted with luxury in mind.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 text-[10px] uppercase font-bold tracking-[0.2em] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 text-[10px] uppercase font-bold tracking-[0.2em] hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
