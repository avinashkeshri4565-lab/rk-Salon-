import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white overflow-hidden">
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
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Elevating beauty standards through expert care, premium products, and a sanctuary of relaxation. Your transformation journey starts here.
            </p>
            <div className="flex gap-4">
              {[Instagram, MessageCircle, Mail].map((Icon, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ scale: 1.1, backgroundColor: '#d4af37', color: '#000' }}
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all"
                >
                  <Icon size={18} />
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
            <h4 className="font-serif text-lg mb-8 text-brand-gold italic">Quick Links</h4>
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
            <h4 className="font-serif text-lg mb-8 text-brand-gold italic">Our expertise</h4>
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
            <h4 className="font-serif text-lg mb-8 text-brand-gold italic">Visit Sanctuary</h4>
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
