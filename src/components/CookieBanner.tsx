'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5'; // Σιγουρέψου ότι έχεις κάνει npm install react-icons

// Το Modal Component που μου έστειλες
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, content }: ModalProps) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10001]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl max-h-[80vh] bg-[#111] border border-white/10 rounded-[30px] z-[10002] overflow-hidden flex flex-col"
        >
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h2 className="font-montserrat text-white font-bold uppercase tracking-widest text-sm">{title}</h2>
            <button onClick={onClose} className="text-white/50 hover:text-white transition-colors text-2xl">
              <IoClose />
            </button>
          </div>
          <div className="p-8 overflow-y-auto text-white/60 font-poppins text-sm leading-relaxed space-y-4 custom-scrollbar">
            {content}
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

// Το Κύριο Cookie Banner
const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (status: 'accepted' | 'declined') => {
    localStorage.setItem('cookie-consent', status);
    setIsVisible(false);
  };

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 md:bottom-8 md:left-1/2 md:-translate-x-1/2 w-full md:w-auto md:min-w-[650px] z-[10000] p-4 md:p-0"
          >
            <div className="bg-[#111]/90 border border-white/10 p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-montserrat text-[10px] text-white/40 uppercase tracking-[0.3em] mb-2 font-bold">
                  GDPR & Privacy
                </h4>
                <p className="font-poppins text-white/70 text-[12px] md:text-[13px]">
                  We use essential cookies for the best experience. 
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="text-white font-semibold underline decoration-white/20 hover:decoration-white ml-1"
                  >
                    View Privacy Policy
                  </button>
                </p>
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                <button onClick={() => handleAction('declined')} className="flex-1 md:px-8 py-4 text-white/40 font-montserrat text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                  Decline
                </button>
                <button onClick={() => handleAction('accepted')} className="flex-1 md:px-10 py-4 bg-white text-black font-montserrat text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all">
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Privacy Policy" 
        content={
          <div className="space-y-4">
            <h3 className="text-white font-bold">1. Data Collection</h3>
            <p>We collect only the necessary information to provide our luxury transfer services, such as your name and contact details for bookings.</p>
            <h3 className="text-white font-bold">2. Cookies</h3>
            <p>We use essential cookies to maintain your session and security. No tracking cookies are used without your explicit consent.</p>
            <h3 className="text-white font-bold">3. Contact</h3>
            <p>For any questions regarding your data, contact us at info@athensluxurytransfer.gr</p>
          </div>
        }
      />
    </>
  );
};

export default CookieBanner;