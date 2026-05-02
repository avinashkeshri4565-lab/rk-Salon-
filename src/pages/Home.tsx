import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Check, ArrowRight, Instagram, MessageCircle, Scissors, Sparkles, User, Zap } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import TestimonialSlider from '../components/TestimonialSlider';
import BookingModal from '../components/BookingModal';
import { useState } from 'react';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="pt-20">
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        source="Hero Form" 
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row overflow-hidden border-b border-brand-border bg-brand-offwhite">
        
        {/* Animated Pink Liquid Effects (Background Layer) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Top-Right Drip Shape */}
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
              borderRadius: ["45% 55% 74% 26% / 30% 65% 35% 70%", "58% 42% 38% 62% / 51% 53% 47% 49%", "45% 55% 74% 26% / 30% 65% 35% 70%"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-80 h-96 bg-gradient-to-br from-[#f8b4c8] via-[#ec4899] to-transparent opacity-30 blur-3xl"
          />

          {/* Bottom-Left Flowing Shape */}
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ 
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 33% 67% / 55% 27% 73% 45%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-[#f8b4c8] via-[#fff7f9] to-transparent opacity-25 blur-3xl"
          />

          {/* Behind Text Subtle Drip */}
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-10 w-64 h-64 bg-[#f8b4c8] opacity-15 blur-[100px] rounded-full hidden lg:block"
          />
        </div>

        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center relative z-10 order-1 lg:order-1 bg-transparent">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-brand-gold font-serif italic text-xl mb-4 block"
            >
              Your Beauty, Our Passion
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif text-brand-ink leading-[1.1] mb-8 tracking-tight drop-shadow-sm"
            >
              Enhance Your <br/>
              <motion.span 
                animate={{ 
                  textShadow: ["0 0 0px rgba(236, 72, 153, 0)", "0 0 20px rgba(236, 72, 153, 0.4)", "0 0 0px rgba(236, 72, 153, 0)"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-brand-pink italic drop-shadow-sm"
              >
                Beauty
              </motion.span> with RK Salon
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-lg text-brand-grey mb-10 leading-relaxed max-w-md font-light"
            >
              Experience luxury treatments from professional stylists in a serene, hygienic environment.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="btn-accent px-10 !py-4 shadow-xl flex items-center gap-2 group"
                >
                  Book Now <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <a href="https://wa.me/919876543210" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-500/20 uppercase tracking-widest text-xs">
                   <MessageCircle size={18} fill="white" />
                   WhatsApp
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to="/services" className="bg-brand-ink text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-black transition-colors uppercase tracking-widest text-[10px]">
                  Services
                </Link>
              </motion.div>
            </div>
            
            {/* Offer Banner */}
            <div className="mt-16 bg-white p-5 rounded-2xl border border-brand-border flex items-center gap-5 max-w-xs shadow-sm group hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-offwhite text-brand-pink rounded-xl flex items-center justify-center font-bold text-xl border border-brand-pink/10">
                20%
              </div>
              <div>
                <p className="font-bold text-brand-ink">Flat 20% OFF</p>
                <p className="text-xs text-brand-grey uppercase tracking-wider">On your first visit!</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content / Image Side */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center p-8 md:p-12 lg:p-16 bg-transparent order-2 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0] 
            }}
            transition={{ 
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-full h-full max-w-2xl"
          >
            <div className="relative rounded-[16px] overflow-hidden shadow-soft group w-full h-full border border-brand-border bg-white">
              <img 
                src="https://5.imimg.com/data5/SELLER/Default/2024/11/469542645/AV/IG/KX/66460478/salon-interior-designing-service-1000x1000.png" 
                alt="Luxury RK Salon Interior" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                referrerPolicy="no-referrer"
              />
              
              {/* Optional Subtle Overlay to ensure consistent premium feel */}
              <div className="absolute inset-0 bg-brand-ink/5 pointer-events-none"></div>
            </div>

            {/* Float badge for extra premium feel */}
            <div className="absolute -bottom-4 -right-4 bg-white px-6 py-4 rounded-xl shadow-xl border border-brand-border z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-pink animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink">Luxury Studio</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Recent Work Strip (Theme Specific) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-0 w-full h-24 bg-white/80 backdrop-blur-md border-t border-brand-border hidden lg:flex items-center px-12 gap-8 z-20"
        >
          <div className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink border-r border-brand-border pr-8">Recent Work</div>
          <div className="flex-1 flex gap-4 overflow-hidden">
            {['Hair Cut', 'Bridal', 'Facial', 'Nails', 'Makeup'].map((work, i) => (
              <motion.div 
                key={work} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + (i * 0.1) }}
                className="px-6 h-12 bg-brand-offwhite rounded-xl border border-brand-border flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-brand-grey whitespace-nowrap hover:bg-brand-pink/5 hover:border-brand-pink/20 transition-colors cursor-default"
              >
                {work}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <Link to="/gallery" className="px-6 h-12 bg-white rounded-xl border border-brand-gold/30 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-brand-gold italic font-serif">View All</Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            className="flex items-center gap-4 pl-8 border-l border-brand-border grow-0 shrink-0"
          >
            <div className="flex -space-x-3">
              <div className="w-9 h-9 rounded-full border-2 border-white bg-pink-100 shadow-sm"></div>
              <div className="w-9 h-9 rounded-full border-2 border-white bg-pink-200 shadow-sm"></div>
              <div className="w-9 h-9 rounded-full border-2 border-white bg-pink-300 shadow-sm"></div>
            </div>
            <div className="text-[10px] font-bold text-brand-grey uppercase tracking-widest">500+ Happy Clients</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Booking Quick CTA */}
      <section className="bg-white border-b border-brand-border py-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8"
        >
           <div className="md:max-w-md text-center md:text-left">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-serif text-brand-ink mb-2 italic"
              >
                Ready for your transformation?
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-sm text-brand-grey font-light"
              >
                Book your slot online in seconds. Our experts are waiting to serve you.
              </motion.p>
           </div>
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
           >
             <Link to="/contact" className="btn-accent whitespace-nowrap shadow-xl !px-12">
                Book Your Appointment
             </Link>
           </motion.div>
        </motion.div>
      </section>

      {/* Offer Banner */}
      <section className="bg-brand-ink py-4 overflow-hidden relative">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="flex whitespace-nowrap gap-12"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-brand-gold font-bold uppercase tracking-[0.3em] text-sm italic">
              <span>Flat 20% OFF on First Visit</span>
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span>Premium Salon Magic</span>
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="section-padding overflow-hidden">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30, letterSpacing: "-0.05em" }}
            whileInView={{ opacity: 1, y: 0, letterSpacing: "normal" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-serif mb-6"
          >
            Our Magic Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-xl mx-auto text-brand-ink/60 leading-relaxed"
          >
            From expert hair styling to rejuvenating skincare, we offer a wide range of services designed to make you shine.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Hair Couture",
              desc: "Experience the art of styling with our expert hair designers.",
              img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
              category: "Hair"
            },
            {
              title: "Skin Radiance",
              desc: "Glow from within with our premium facial and skin treatments.",
              img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
              category: "Skin"
            },
            {
              title: "Bridal Elegance",
              desc: "Making your special day even more beautiful with bespoke makeup.",
              img: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80&w=800",
              category: "Bridal"
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-[32px] overflow-hidden group border border-brand-pink/10 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 glass-pill px-4 py-1 text-[10px] uppercase tracking-widest font-bold">
                  {service.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
                <p className="text-brand-ink/50 text-sm mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="text-brand-gold font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  View Service <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-ink text-white overflow-hidden">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block"
            >
              The RK Experience
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-serif mb-8 leading-tight italic"
            >
              Why Discriminating Women Choose Us
            </motion.h2>
            <div className="space-y-8">
              {[
                { title: "Expert Stylists", desc: "Our team consists of internationally trained beauty professionals." },
                { title: "Hygienic Environment", desc: "We maintain medical-grade sterilization for all our tools." },
                { title: "Premium Products", desc: "We only use world-class luxury beauty brands for your skin and hair." },
                { title: "Personalized Care", desc: "Every service is tailored strictly to your unique beauty needs." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="flex gap-6 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-black transition-colors">
                    <Check size={24} className="group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-brand-gold">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden border-[20px] border-white/5 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000" 
                alt="Salon Interior" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-brand-gold p-10 rounded-[40px] hidden md:block shadow-2xl"
            >
              <div className="text-black font-serif">
                <span className="text-6xl block leading-none">10+</span>
                <span className="text-sm uppercase tracking-widest font-bold">Years of Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-white relative overflow-hidden border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-gold font-serif italic text-xl mb-2 block"
            >
              Client Stories
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-brand-ink italic"
            >
              Voices of Elegance
            </motion.h2>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-offwhite overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-brand-pink/10 rounded-[60px] p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border border-brand-pink/20"
        >
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-serif mb-8 leading-tight"
            >
              Ready to Reveal Your <motion.span 
                animate={{ 
                  textShadow: ["0 0 0px rgba(212, 175, 55, 0)", "0 0 20px rgba(212, 175, 55, 0.4)", "0 0 0px rgba(212, 175, 55, 0)"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="italic block gold-gradient-text"
              >
                Best Self?
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-brand-ink/60 mb-10 leading-relaxed"
            >
              Book your appointment now and join thousands of satisfied customers who trust RK Salon for their beauty transformation.
            </motion.p>
            <div className="flex gap-8">
               <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col"
               >
                  <span className="text-2xl font-serif text-brand-ink">5k+</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-ink/50 font-bold">Happy Clients</span>
               </motion.div>
               <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col"
               >
                  <span className="text-2xl font-serif text-brand-ink">10+</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-ink/50 font-bold">Awards Won</span>
               </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <BookingForm source="Appointment Section" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

function Quote({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3 15C3 18.3137 5.68629 21 9 21H10V18C10 16.8954 9.10457 16 8 16H5C4.44772 16 4 15.5523 4 15V9C4 8.44772 4.44772 8 5 8H8C9.10457 8 10 7.10457 10 6V3H3V15Z" />
    </svg>
  )
}
