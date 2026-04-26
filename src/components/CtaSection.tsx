'use client';

import { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from './BookingModal'; 

const CtaSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <>
      <section className="relative w-full bg-black border-none min-h-[100px] flex items-center">
        
        <div className="max-w-[1500px] mx-auto w-full px-6 md:pl-16 md:pr-0 flex justify-center md:justify-end">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="-mt-[180px] md:-mt-[170px] relative z-30"
          >
            {/* Αλλαγές:
                1. bg-[#7a6f40] (Το χρυσό σου)
                2. hover:bg-[#8b7f4d] (Ελαφρώς πιο ανοιχτό χρυσό στο hover)
                3. hover:shadow-[#7a6f40]/20 (Χρυσή σκιά στο hover)
            */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 md:px-12 md:py-6 bg-[#7a6f40] hover:bg-[#8b7f4d] border border-white/10 rounded-sm transition-all duration-500 ease-in-out shadow-2xl cursor-pointer overflow-hidden"
            >
              {/* Εφέ λάμψης που περνάει πάνω από το κουμπί στο hover */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

              <span 
                className="relative z-10 font-bona font-bold text-xs md:text-sm tracking-[0.3em] uppercase transition-colors duration-500 text-white group-hover:text-black pointer-events-none"
              >
                Book Your Ride Now
              </span>
            </motion.button>
          </motion.div>

        </div>
      </section>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default CtaSection;