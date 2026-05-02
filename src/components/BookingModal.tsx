import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import BookingForm from './BookingForm';

export default function BookingModal({ isOpen, onClose, source }: { isOpen: boolean, onClose: () => void, source: string }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-brand-ink/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-[40px] overflow-hidden max-w-lg w-full relative shadow-2xl border border-brand-border"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-brand-offwhite text-brand-ink flex items-center justify-center hover:bg-brand-pink hover:text-white transition-all duration-300"
            >
              <X size={20} />
            </button>
            <div className="p-2">
              <BookingForm source={source} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
