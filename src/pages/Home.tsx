import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Check, ArrowRight, Instagram, MessageCircle } from 'lucide-react';
import BookingForm from '../components/BookingForm';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row overflow-hidden border-b border-brand-border">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center relative z-10 bg-brand-offwhite">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-serif italic text-xl mb-4 block">Your Beauty, Our Passion</span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-ink leading-[1.1] mb-8 tracking-tight">
              Enhance Your <br/>
              <span className="text-brand-pink italic">Beauty</span> with RK Salon
            </h1>
            <p className="text-lg text-brand-grey mb-10 leading-relaxed max-w-md font-light">
              Experience luxury treatments from professional stylists in a serene, hygienic environment.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-brand-ink text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-black transition-colors uppercase tracking-widest text-xs">
                View Services
              </Link>
              <a href="https://wa.me/919876543210" className="btn-secondary !py-4">
                WhatsApp Us
              </a>
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

        {/* Right Visual / Form */}
        <div className="w-full lg:w-1/2 relative bg-[#FCE4EC] flex items-center justify-center p-8 md:p-12 overflow-hidden min-h-[500px]">
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-40 h-40 border-8 border-white/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-brand-gold/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 rounded-full rotate-45"></div>
          
          <div className="max-w-md w-full relative z-10">
            <BookingForm />
          </div>
        </div>

        {/* Bottom Recent Work Strip (Theme Specific) */}
        <div className="absolute bottom-0 w-full h-24 bg-white/80 backdrop-blur-md border-t border-brand-border hidden lg:flex items-center px-12 gap-8 z-20">
          <div className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink border-r border-brand-border pr-8">Recent Work</div>
          <div className="flex-1 flex gap-4 overflow-hidden">
            {['Hair Cut', 'Bridal', 'Facial', 'Nails', 'Makeup'].map((work) => (
              <div key={work} className="px-6 h-12 bg-brand-offwhite rounded-xl border border-brand-border flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-brand-grey whitespace-nowrap hover:bg-brand-pink/5 hover:border-brand-pink/20 transition-colors cursor-default">
                {work}
              </div>
            ))}
            <Link to="/gallery" className="px-6 h-12 bg-white rounded-xl border border-brand-gold/30 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-brand-gold italic font-serif">View All</Link>
          </div>
          <div className="flex items-center gap-4 pl-8 border-l border-brand-border grow-0 shrink-0">
            <div className="flex -space-x-3">
              <div className="w-9 h-9 rounded-full border-2 border-white bg-pink-100 shadow-sm"></div>
              <div className="w-9 h-9 rounded-full border-2 border-white bg-pink-200 shadow-sm"></div>
              <div className="w-9 h-9 rounded-full border-2 border-white bg-pink-300 shadow-sm"></div>
            </div>
            <div className="text-[10px] font-bold text-brand-grey uppercase tracking-widest">500+ Happy Clients</div>
          </div>
        </div>
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
      <section className="section-padding">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif mb-6">Our Magic Touch</h2>
          <p className="max-w-xl mx-auto text-brand-ink/60 leading-relaxed">
            From expert hair styling to rejuvenating skincare, we offer a wide range of services designed to make you shine.
          </p>
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
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] overflow-hidden group border border-brand-pink/10"
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
      <section className="bg-brand-ink text-white">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">The RK Experience</span>
            <h2 className="text-5xl font-serif mb-8 leading-tight italic">Why Discriminating Women Choose Us</h2>
            <div className="space-y-8">
              {[
                { title: "Expert Stylists", desc: "Our team consists of internationally trained beauty professionals." },
                { title: "Hygienic Environment", desc: "We maintain medical-grade sterilization for all our tools." },
                { title: "Premium Products", desc: "We only use world-class luxury beauty brands for your skin and hair." },
                { title: "Personalized Care", desc: "Every service is tailored strictly to your unique beauty needs." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Check size={24} className="text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-brand-gold">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[40px] overflow-hidden border-[20px] border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000" 
                alt="Salon Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-gold p-10 rounded-[40px] hidden md:block">
              <div className="text-black font-serif">
                <span className="text-6xl block leading-none">10+</span>
                <span className="text-sm uppercase tracking-widest font-bold">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-white relative overflow-hidden border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-serif italic text-xl mb-2 block">Client Stories</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-ink italic">Voices of Elegance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", text: "The best bridal makeup session I could have ever asked for. They made my day unforgettable!", role: "Happy Bride" },
              { name: "Ananya Mehta", text: "Professional, hygienic, and extremely talented staff. Their hair spa is a must-try!", role: "Regular Client" },
              { name: "Sneha Kapoor", text: "I've been coming here for 3 years. The quality of products they use is simply unmatchable.", role: "Fashion Blogger" }
            ].map((review, idx) => (
              <motion.div 
                 key={idx}
                 whileHover={{ y: -5 }}
                 className="bg-brand-offwhite p-10 rounded-[32px] border border-brand-border flex flex-col h-full shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />)}
                </div>
                <p className="text-brand-ink/70 italic text-base mb-8 leading-relaxed flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-brand-border/50">
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink font-bold text-xs border border-brand-pink/10">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-brand-ink">{review.name}</h4>
                    <p className="text-[9px] uppercase tracking-wider text-brand-grey font-bold">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { name: "Riya Iyer", text: "Their global hair coloring is next level. Zero damage and the shade is exactly what I wanted.", role: "Influencer" },
              { name: "Meera Das", text: "The facial treatments here are so relaxing. I always leave with a glow that lasts for weeks.", role: "Corporate Professional" },
              { name: "Ishani Roy", text: "Very premium feel but very friendly staff. They really care about the health of your hair.", role: "Regular Customer" }
            ].map((review, idx) => (
              <motion.div 
                 key={idx + 3}
                 whileHover={{ y: -5 }}
                 className="bg-brand-offwhite p-10 rounded-[32px] border border-brand-border flex flex-col h-full shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />)}
                </div>
                <p className="text-brand-ink/70 italic text-base mb-8 leading-relaxed flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-brand-border/50">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold text-xs border border-brand-gold/10">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-brand-ink">{review.name}</h4>
                    <p className="text-[9px] uppercase tracking-wider text-brand-grey font-bold">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-offwhite">
        <div className="bg-brand-pink/10 rounded-[60px] p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border border-brand-pink/20">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Ready to Reveal Your <span className="italic block gold-gradient-text">Best Self?</span></h2>
            <p className="text-xl text-brand-ink/60 mb-10 leading-relaxed">
              Book your appointment now and join thousands of satisfied customers who trust RK Salon for their beauty transformation.
            </p>
            <div className="flex gap-8">
               <div className="flex flex-col">
                  <span className="text-2xl font-serif text-brand-ink">5k+</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-ink/50 font-bold">Happy Clients</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-2xl font-serif text-brand-ink">10+</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-ink/50 font-bold">Awards Won</span>
               </div>
            </div>
          </div>
          <BookingForm />
        </div>
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
