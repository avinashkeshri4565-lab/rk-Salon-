import { motion } from 'motion/react';
import { Check, Star, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding pt-32 text-center overflow-hidden">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Our Story</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-10 italic">Essence of RK Salon</h1>
          <p className="max-w-2xl mx-auto text-xl text-brand-ink/60 leading-relaxed font-light">
            Founded on the belief that beauty is an art form, we've dedicated over a decade to perfecting the salon experience.
          </p>
        </motion.div>
      </section>

      {/* Intro Grid */}
      <section className="section-padding pt-0 grid grid-cols-1 md:grid-cols-2 gap-16 items-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group overflow-hidden rounded-[60px] aspect-[4/5] shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" 
            alt="Salon Story" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-ink/10 group-hover:opacity-0 transition-opacity"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif italic text-brand-ink leading-tight">Experience & Expertise <br/> That Speaks for Itself</h2>
          <p className="text-brand-ink/60 leading-loose text-lg font-light">
            RK Salon started as a small boutique with a big dream: to bring world-class beauty standards to our community. Today, we are proud to be one of the most trusted names in the luxury beauty industry.
          </p>
          <p className="text-brand-ink/60 leading-loose text-lg font-light">
            Our journey is paved with satisfied smiles and thousands of glow-ups. We don't just provide services; we craft confidence.
          </p>
          
          <div className="grid grid-cols-2 gap-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-4xl font-serif text-brand-gold mb-1">10+</h4>
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/50">Years of Luxury</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-4xl font-serif text-brand-gold mb-1">15k+</h4>
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/50">Happy Transformations</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="bg-brand-ink text-white py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20">
          {[
            { Icon: Star, title: "Friendly Staff", desc: "Our professionals aren't just experts; they're your beauty partners. We listen before we style." },
            { Icon: Shield, title: "Hygienic Standard", desc: "Safety first. We maintain strict hygiene protocols and medical-grade sterilization for all tools." },
            { Icon: Heart, title: "Premium Products", desc: "We never compromise. Only the world's finest beauty products touch your hair and skin." }
          ].map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="space-y-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold mb-8 group-hover:bg-brand-gold group-hover:text-black transition-all">
                <val.Icon size={32} />
              </div>
              <h3 className="text-2xl font-serif italic text-brand-gold">{val.title}</h3>
              <p className="text-white/50 leading-relaxed font-light">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Owner Intro */}
      <section className="section-padding">
        <div className="bg-white rounded-[60px] p-12 md:px-24 md:py-20 flex flex-col md:flex-row items-center gap-20 border border-brand-pink/10 shadow-sm">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[10px] border-brand-offwhite shrink-0">
             <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" 
              alt="Owner" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6">
            <span className="text-brand-gold italic font-serif text-2xl">A Message from the Visionary</span>
            <h2 className="text-5xl font-serif text-brand-ink">Radhika Kapoor</h2>
            <p className="text-xl text-brand-ink/60 italic leading-relaxed">
              "Beauty isn't just about looking good; it's about feeling powerful. At RK Salon, we strive to give every woman the 'Main Character' energy she deserves through artful styling and heartfelt care."
            </p>
            <div className="pt-6">
              <img 
                src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=200" 
                alt="Signature Placeholder" 
                className="h-16 opacity-30 grayscale invert"
                referrerPolicy="no-referrer"
              />
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-ink/40 mt-4">Founder & Lead Aesthetician</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Images */}
      <section className="section-padding pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <img 
            src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600" 
            alt="Interior 1" 
            className="rounded-[32px] h-[400px] w-full object-cover shadow-md"
            referrerPolicy="no-referrer"
          />
           <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=600" 
            alt="Interior 2" 
            className="rounded-[32px] h-[500px] w-full object-cover md:-mt-20 shadow-lg"
            referrerPolicy="no-referrer"
          />
           <img 
            src="https://images.unsplash.com/photo-1595475253545-0675711b7481?auto=format&fit=crop&q=80&w=600" 
            alt="Interior 3" 
            className="rounded-[32px] h-[400px] w-full object-cover shadow-md"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
}
