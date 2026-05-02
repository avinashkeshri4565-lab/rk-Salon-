import { motion } from 'motion/react';
import { Scissors, Sparkles, User, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'hair',
    title: 'Hair Couture',
    icon: Scissors,
    services: [
      { name: 'Haircut', desc: 'Precision cuts tailored to your face shape and style preference.', price: '₹200+', img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=400' },
      { name: 'Hair Styling', desc: 'Elegant updos, blowout, and professional styling for any event.', price: '₹400+', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400' },
      { name: 'Hair Coloring', desc: 'Global color, Balayage, and highlights using premium ammonia-free dyes.', price: '₹1500+', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400' },
    ]
  },
  {
    id: 'skin',
    title: 'Skin & Facial',
    icon: Sparkles,
    services: [
      { name: 'Facial', desc: 'Deep cleansing and rejuvenating facials for various skin types.', price: '₹500+', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400' },
      { name: 'Cleanup', desc: 'Quick refresh and dirt removal for a healthy skin glow.', price: '₹300+', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=400' },
      { name: 'Skin Treatment', desc: 'Advanced solutions for acne, pigmentation, and anti-aging.', price: '₹800+', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=400' },
    ]
  },
  {
    id: 'bridal',
    title: 'Bridal & Party',
    icon: User,
    services: [
      { name: 'Bridal Makeup', desc: 'Exquisite, long-lasting makeup for the most important day of your life.', price: '₹5000+', img: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80&w=400' },
      { name: 'Party Makeup', desc: 'Glamorous or subtle looks for parties, festivals, and dinners.', price: '₹1200+', img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=400' },
    ]
  },
  {
    id: 'other',
    title: 'Grooming Essentials',
    icon: Zap,
    services: [
      { name: 'Waxing', desc: 'Hygienic and smooth hair removal for body and face.', price: '₹150+', img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=400' },
      { name: 'Threading', desc: 'Perfectly shaped eyebrows and painless thread work.', price: '₹50+', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400' },
      { name: 'Mani/Pedi', desc: 'Relaxing spa treatment for your hands and feet with premium nail art.', price: '₹600+', img: 'https://images.unsplash.com/photo-1604654894610-df490651e56c?auto=format&fit=crop&q=80&w=400' },
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-brand-ink text-white pt-32 pb-40">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Our Menu</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-10 italic">Exquisite Services</h1>
          <p className="text-xl text-white/50 leading-relaxed font-light">
            Indulge in a curated selection of beauty treatments designed for the modern woman.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 pb-32">
        <div className="space-y-32">
          {categories.map((cat, idx) => (
            <div key={cat.id}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-16"
              >
                <div className="w-16 h-16 rounded-3xl bg-brand-pink/20 text-brand-ink flex items-center justify-center font-bold">
                  <cat.icon size={32} />
                </div>
                <h2 className="text-4xl font-serif text-brand-ink italic tracking-tight">{cat.title}</h2>
                <div className="h-[1px] bg-brand-ink/10 flex-grow"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {cat.services.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-[32px] overflow-hidden border border-brand-pink/10 shadow-sm flex flex-col group hover:shadow-xl transition-all"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-brand-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                         <Link to="/contact" className="bg-white text-brand-ink px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest ">
                            Book This
                         </Link>
                      </div>
                    </div>
                    <div className="p-8 flex-grow space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-serif">{item.name}</h3>
                        <span className="text-brand-gold font-bold">{item.price}</span>
                      </div>
                      <p className="text-brand-ink/50 text-sm leading-relaxed">{item.desc}</p>
                      <Link to="/contact" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-gold hover:gap-4 transition-all pt-4">
                        Book Appointment <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-pink/10 py-32 text-center overflow-hidden relative">
         <div className="max-w-3xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">Can't Find What You're Looking For?</h2>
            <p className="text-lg text-brand-ink/60 mb-10 leading-relaxed">
              We also offer customized beauty packages for groups, weddings, and parties. Gift vouchers are also available for your loved ones.
            </p>
            <Link to="/contact" className="btn-primary">Connect with us</Link>
         </div>
         {/* Decor */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-white/40 blur-3xl -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-pink/30 blur-[100px] translate-x-1/3 translate-y-1/3 rounded-full"></div>
      </section>
    </div>
  );
}
