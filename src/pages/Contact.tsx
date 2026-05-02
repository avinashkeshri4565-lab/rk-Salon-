import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Share2 } from 'lucide-react';
import BookingForm from '../components/BookingForm';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding pt-32 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-serif mb-10 italic"
          >
            Visit the Sanctuary
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto text-xl text-brand-ink/60 leading-relaxed font-light"
          >
            Step into our luxury space and let us pamper you. We are located in the heart of the glamour district.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding pt-0 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-10 rounded-[32px] border border-brand-pink/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h4 className="text-xl font-serif mb-2 italic">Address</h4>
              <p className="text-sm text-brand-ink/50 leading-relaxed">
                123 Beauty Lane, <br/> Glamour District, Mumbai, <br/> Maharashtra 400001
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-10 rounded-[32px] border border-brand-pink/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-6">
                <MessageCircle size={24} />
              </div>
              <h4 className="text-xl font-serif mb-2 italic">WhatsApp</h4>
              <p className="text-sm text-brand-ink/50 leading-relaxed mb-4">
                Chat with our front desk instantly for queries.
              </p>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-sm font-bold text-[#25D366] hover:underline">
                Chat Now
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-10 rounded-[32px] border border-brand-pink/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-ink/5 text-brand-ink flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h4 className="text-xl font-serif mb-2 italic">Call Us</h4>
              <p className="text-sm text-brand-ink/50 leading-relaxed mb-4">
                Direct bookings over call are available 10am-8pm.
              </p>
              <a href="tel:+919876543210" className="text-sm font-bold text-brand-ink hover:underline">
                +91 98765 43210
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-10 rounded-[32px] border border-brand-pink/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-pink/10 text-brand-pink flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h4 className="text-xl font-serif mb-2 italic">Email</h4>
              <p className="text-sm text-brand-ink/50 leading-relaxed mb-4">
                For corporate inquiries and job opportunities.
              </p>
              <a href="mailto:info@rksalon.com" className="text-sm font-bold text-brand-pink hover:underline">
                info@rksalon.com
              </a>
            </motion.div>
          </div>

          {/* Map Embed Holder */}
          <div className="h-96 rounded-[40px] overflow-hidden bg-brand-ink shadow-lg relative group">
             {/* Mock Map with high-res styling */}
             <div className="absolute inset-0 bg-brand-ink/80 flex items-center justify-center text-center p-12">
                <div className="space-y-6">
                   <MapPin size={48} className="mx-auto text-brand-gold animate-bounce" />
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl font-serif text-white italic"
                    >
                      Find Us In Mumbai
                    </motion.h3>
                   <p className="text-white/40 text-sm max-w-xs mx-auto">Click below to open our location in Google Maps for real-time navigation.</p>
                   <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-primary inline-block !py-3 bg-brand-gold !text-black !rounded-xl"
                   >
                    Open Google Maps
                   </a>
                </div>
             </div>
             <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" alt="Map Area" className="w-full h-full object-cover opacity-20 transition-transform duration-[20s] group-hover:scale-125" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Booking Form Side */}
        <div className="sticky top-32 h-fit">
           <BookingForm source="Contact Form" />
        </div>
      </section>
    </div>
  );
}
