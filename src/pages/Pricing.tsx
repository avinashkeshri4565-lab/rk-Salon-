import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Scissors, Sparkles, User, Zap } from 'lucide-react';

const pricingCategories = [
  {
    name: 'Essential Beauty',
    icon: Scissors,
    services: [
      { name: 'Haircut (Premium)', price: '₹200', tag: 'Standard' },
      { name: 'Full Facial (Herbal)', price: '₹500', tag: 'Classic' },
      { name: 'Manicure', price: '₹350', tag: 'Expert' },
      { name: 'Cleanup', price: '₹300', tag: 'Fresh' },
    ]
  },
  {
    name: 'Luxury Treatments',
    icon: Sparkles,
    services: [
      { name: 'Hair Global Color', price: '₹1500', tag: 'Popular', highlight: true },
      { name: 'Balayage / Ombre', price: '₹2500', tag: 'Trending' },
      { name: 'Gold Radiance Facial', price: '₹1200', tag: 'Premium' },
      { name: 'O3+ Skincare Therapy', price: '₹1800', tag: 'Best Value' },
    ]
  },
  {
    name: 'Bridal Selection',
    icon: User,
    services: [
      { name: 'Bridal Makeup', price: '₹5000+', tag: 'Elite' },
      { name: 'Reception Look', price: '₹3000', tag: 'Glam' },
      { name: 'Maid of Honor', price: '₹1500', tag: 'Classic' },
      { name: 'Haldi/Mehendi Glow', price: '₹800', tag: 'Organic' },
    ]
  }
];

export default function Pricing() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding pt-32 text-center bg-white border-b border-brand-pink/10 overflow-hidden">
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
            Transparent Value
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-serif mb-10 italic"
          >
            Price Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto text-xl text-brand-ink/60 leading-relaxed font-light"
          >
            Premium services at fair prices. We believe in transparency and the highest standards of luxury.
          </motion.p>
        </motion.div>
      </section>

      {/* Pricing Tables */}
      <section className="section-padding bg-brand-offwhite">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {pricingCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-[40px] p-10 border border-brand-pink/10 shadow-sm relative flex flex-col hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-black transition-colors">
                   <cat.icon size={24} />
                </div>
                <h3 className="text-2xl font-serif">{cat.name}</h3>
              </div>

              <div className="space-y-8 flex-grow">
                {cat.services.map((service, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (sIdx * 0.1) }}
                    className={`pb-6 border-b border-brand-pink/5 last:border-0 ${service.highlight ? 'relative' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="font-medium text-brand-ink">{service.name}</h4>
                       <span className="text-brand-gold font-bold">{service.price}</span>
                    </div>
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded ${service.highlight ? 'bg-brand-gold text-white' : 'bg-brand-pink/10 text-brand-ink/50'}`}>
                       {service.tag}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link to="/contact" className="btn-primary w-full text-center mt-12 flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-transform">
                 <span>Book Now</span>
                 <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="section-padding py-32 text-center">
         <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto space-y-8"
         >
            <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-10 h-10 mx-auto"
            >
              <Star size={40} className="text-brand-gold italic opacity-20" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-serif italic text-brand-ink"
            >
              "Luxury must be comfortable, otherwise it is not luxury."
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-brand-ink/40 uppercase tracking-[0.2em] text-[10px] font-bold"
            >
              Coco Chanel - A philosophy we follow at RK Salon
            </motion.p>
         </motion.div>
      </section>
    </div>
  );
}
