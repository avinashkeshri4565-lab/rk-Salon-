import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-4 border-b border-brand-border' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-serif italic text-xl shadow-md group-hover:scale-110 transition-transform">RK</div>
          <span className="text-2xl font-serif tracking-widest text-brand-ink uppercase">
            RK <span className="text-brand-gold">Salon</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx + 0.5 }}
            >
              <Link
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-brand-pink relative py-2 ${
                  location.pathname === link.path 
                  ? 'text-brand-pink after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-pink' 
                  : 'text-brand-grey'
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="flex bg-brand-ink/5 rounded-full p-1 border border-brand-ink/5 shrink-0 ml-4"
          >
             <button className="px-3 py-1 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">EN</button>
             <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-ink/40 hover:text-brand-ink transition-colors">HI</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            <Link to="/contact" className="btn-primary !py-2.5 !px-8 hover:scale-105 active:scale-95 transition-transform">
              Book Now
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-ink"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[60] lg:hidden overflow-hidden"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-serif italic text-xl">RK</div>
                  <span className="text-2xl font-serif tracking-widest text-brand-ink uppercase">RK Salon</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-brand-ink">
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-serif italic ${
                        location.pathname === link.path ? 'text-brand-pink underline decoration-brand-pink/30' : 'text-brand-ink'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-6">
                 <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center !py-5 text-sm"
                >
                  Book Appointment
                </Link>
                <div className="flex justify-center gap-4 text-brand-grey text-xs uppercase tracking-widest font-bold">
                  <span>Instagram</span>
                  <span>Facebook</span>
                  <span>WhatsApp</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
