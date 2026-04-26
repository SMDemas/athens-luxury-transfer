'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const FleetSection = () => {
  return (
    <section className="relative py-24 bg-black w-full flex justify-center border-none overflow-hidden">
      <div className="w-full max-w-[1500px] px-6 md:px-16 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* IMAGE SIDE (Αριστερά - Με κλίση καρτ ποστάλ) */}
        <motion.div 
          initial={{ opacity: 0, x: -100, rotate: 0 }}
          whileInView={{ opacity: 1, x: 0, rotate: -3 }} 
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-1/2 flex justify-center md:justify-start"
        >
          <div className="relative group">
            {/* Η Καρτ Ποστάλ */}
            <div className="p-3 bg-white shadow-2xl transform transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105">
              <div className="relative aspect-[4/3] w-[300px] sm:w-[420px] lg:w-[500px] overflow-hidden">
                <Image 
                  src="/ourfleet1.webp" 
                  alt="THE ATHENS LUXURY TRANSFER FLEET"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 300px, 500px"
                />
              </div>
              {/* Ο ΝΕΟΣ ΤΙΤΛΟΣ ΦΩΤΟΓΡΑΦΙΑΣ */}
              <div className="pt-4 pb-2 px-1 text-center">
                <p className="font-bona text-black/80 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]">
                  THE ATHENS LUXURY TRANSFER FLEET
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEXT SIDE (Δεξιά - Απόλυτα Κάθετο) */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-full md:w-1/2 space-y-8" 
        >
          <div className="space-y-3">
            <h2 className="font-bona text-[#7a6f40] text-[13px] uppercase tracking-[0.3em] font-bold">
              Uncompromising Standards
            </h2>
            <h3 className="font-bona text-white text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wider">
              Where Elegance <br /> Meets the Road.
            </h3>
          </div>

          <p className="font-noto text-[#e1e1e1] text-[15px] leading-relaxed tracking-wide opacity-80 max-w-xl">
            At Athens Luxury Transfer, we believe the journey is as important as the destination. Our fleet consists of meticulously maintained, high-end vehicles designed to offer a sanctuary of calm amidst the vibrant energy of Athens. 
          </p>

          <ul className="grid grid-cols-1 gap-5 font-noto text-[#e1e1e1] text-[13px] tracking-wide opacity-80 pt-2">
            {[
              "Executive aesthetics with spacious, climate-controlled interiors",
              "On-board Wi-Fi and premium refreshments for every guest",
              "Tailored amenities and child safety seats on demand",
              "Discreet, multilingual chauffeurs with expert local knowledge"
            ].map((item, i) => (
              <li key={i} className="flex items-start space-x-4">
                <div className="w-1.5 h-1.5 bg-[#7a6f40] mt-1.5 shrink-0" /> 
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>

          {/* ΤΟ ΧΕΙΡΟΓΡΑΦΟ ΣΤΥΛ ΣΤΟ ΤΕΛΟΣ */}
          <div className="pt-6 font-bona text-[#7a6f40] text-sm md:text-base tracking-widest italic opacity-70 border-t border-white/5 inline-block">
            — We accompany you in a true experience.
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FleetSection;