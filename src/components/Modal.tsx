'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl max-h-[80vh] bg-[#111] border border-white/10 rounded-[30px] z-[10001] overflow-hidden flex flex-col"
        >
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h2 className="font-montserrat text-white font-bold uppercase tracking-widest">{title}</h2>
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

export default Modal;