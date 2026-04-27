import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800', title: 'Luxury Hair Station' },
  { url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800', title: 'Styling Session' },
  { url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800', title: 'Skincare Serenity' },
  { url: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80&w=800', title: 'Bridal Transformation' },
  { url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800', title: 'Elegant Interior' },
  { url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800', title: 'Rejuvenation Lounge' },
  { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800', title: 'Color Mastery' },
  { url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800', title: 'Deep Cleansing' },
  { url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800', title: 'Organic Waxing' },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <section className="section-padding pt-32 text-center">
        <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Visual Journey</span>
        <h1 className="text-6xl md:text-8xl font-serif mb-10 italic">Gallery of Elegance</h1>
        <p className="max-w-2xl mx-auto text-xl text-brand-ink/60 leading-relaxed font-light mb-16">
          Glimpses of our salon, our work, and the magic we create every single day.
        </p>
      </section>

      <section className="section-padding pt-0 pb-32">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-serif italic mb-4">Magic Transformations</h2>
           <p className="text-brand-ink/40 uppercase tracking-widest text-[10px] font-bold">Real results at RK Salon</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="space-y-8">
              <div className="flex bg-white rounded-[40px] overflow-hidden border border-brand-pink/10 shadow-sm relative group cursor-pointer">
                 <div className="w-1/2 relative">
                    <img src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=400" alt="Before" className="w-full h-full object-cover grayscale-[0.5]" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 glass-pill px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Before</div>
                 </div>
                 <div className="w-1/2 relative border-l border-brand-pink/10">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" alt="After" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 right-4 glass-pill px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-gold">After</div>
                 </div>
              </div>
              <p className="text-center italic text-brand-ink/50 text-sm">Signature Hair Styling & Makeup</p>
           </div>

           <div className="space-y-8">
              <div className="flex bg-white rounded-[40px] overflow-hidden border border-brand-pink/10 shadow-sm relative group cursor-pointer">
                 <div className="w-1/2 relative">
                    <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400" alt="Before" className="w-full h-full object-cover grayscale-[0.5]" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 glass-pill px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Before</div>
                 </div>
                 <div className="w-1/2 relative border-l border-brand-pink/10">
                    <img src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=400" alt="After" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 right-4 glass-pill px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-gold">After</div>
                 </div>
              </div>
              <p className="text-center italic text-brand-ink/50 text-sm">Advanced Skin Rejuvenating Facial</p>
           </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <motion.div 
              key={idx}
              layoutId={img.url}
              onClick={() => setSelectedImg(img.url)}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-zoom-in rounded-[32px] overflow-hidden shadow-sm"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Maximize2 size={24} />
                </div>
                <h4 className="font-serif italic text-2xl">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-brand-ink/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
            <button className="absolute top-10 right-10 text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <X size={28} />
            </button>
            <motion.img 
              layoutId={selectedImg}
              src={selectedImg} 
              alt="Full size"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border-4 border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
