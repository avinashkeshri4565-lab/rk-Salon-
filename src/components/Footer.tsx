import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-bottom border-white/10 pb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
            RK <span className="text-brand-gold italic font-normal">Salon</span>
          </Link>
          <p className="text-white/60 text-sm leading-loose">
            Your beauty is our passion. Experience premium salon services that make you look and feel your absolute best.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-brand-gold">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-brand-gold">Services</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><Link to="/services" className="hover:text-white transition-colors">Hair Styling</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Skincare & Facials</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Bridal Makeup</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Manicure & Pedicure</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Waxing & Threading</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-serif text-lg mb-6 text-brand-gold">Visit Us</h4>
          <div className="flex gap-3 text-sm text-white/70">
            <MapPin size={18} className="shrink-0 text-brand-gold" />
            <p>123 Beauty Lane, Glamour District, Mumbai, India</p>
          </div>
          <div className="flex gap-3 text-sm text-white/70">
            <Phone size={18} className="shrink-0 text-brand-gold" />
            <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
          </div>
          <div className="flex gap-3 text-sm text-white/70">
            <Mail size={18} className="shrink-0 text-brand-gold" />
            <a href="mailto:info@rksalon.com" className="hover:text-white">info@rksalon.com</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 text-center border-t border-white/5 mt-10">
        <p className="text-white/30 text-xs tracking-widest uppercase">
          &copy; 2024 RK Salon. All rights reserved. Designed with luxury in mind.
        </p>
      </div>
    </footer>
  );
}
