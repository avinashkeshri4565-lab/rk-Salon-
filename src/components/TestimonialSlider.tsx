import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { name: "Priya Sharma", text: "The best bridal makeup session I could have ever asked for. They made my day unforgettable!", role: "Happy Bride" },
  { name: "Ananya Mehta", text: "Professional, hygienic, and extremely talented staff. Their hair spa is a must-try!", role: "Regular Client" },
  { name: "Sneha Kapoor", text: "I've been coming here for 3 years. The quality of products they use is simply unmatchable.", role: "Fashion Blogger" },
  { name: "Riya Iyer", text: "Their global hair coloring is next level. Zero damage and the shade is exactly what I wanted.", role: "Influencer" },
  { name: "Meera Das", text: "The facial treatments here are so relaxing. I always leave with a glow that lasts for weeks.", role: "Corporate Professional" },
  { name: "Ishani Roy", text: "Very premium feel but very friendly staff. They really care about the health of your hair.", role: "Regular Customer" }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="relative max-w-4xl mx-auto h-[400px] flex items-center justify-center overflow-hidden px-4">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 }
          }}
          className="w-full bg-brand-offwhite p-10 md:p-16 rounded-[40px] border border-brand-pink/10 shadow-xl flex flex-col items-center text-center"
        >
          <div className="flex gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-brand-gold fill-brand-gold" />
            ))}
          </div>
          
          <p className="text-xl md:text-2xl text-brand-ink/80 italic font-serif leading-relaxed mb-10">
             "{testimonials[index].text}"
          </p>

          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-ink">{testimonials[index].name}</h4>
            <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{testimonials[index].role}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-6 pb-2 md:pb-0 md:bottom-auto md:inset-y-0 md:justify-between md:items-center pointer-events-none px-4">
        <button 
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg border border-brand-pink/10 flex items-center justify-center text-brand-ink hover:bg-brand-pink hover:text-white transition-all active:scale-90"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg border border-brand-pink/10 flex items-center justify-center text-brand-ink hover:bg-brand-pink hover:text-white transition-all active:scale-90"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-2 h-2 rounded-full transition-all ${index === i ? 'w-8 bg-brand-gold' : 'bg-brand-gold/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
