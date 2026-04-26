'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const Hero = () => {
  const dropIn: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-start overflow-hidden bg-black border-none -mb-[2px]">
      
      {/* 1. Background Container */}
      <div className="absolute inset-0 z-0 h-full w-full border-none">
        
        {/* Desktop View */}
        <div className="hidden md:block h-full w-full relative">
          <Image
            src="/hero1.webp" 
            alt="Athens Luxury Transfer Desktop"
            fill priority quality={100}
            className="object-cover object-center -mt-[55px] scale-105" 
          />
        </div>

        {/* Mobile View */}
        <div className="block md:hidden h-full w-full relative">
          <Image
            src="/hero2.webp" 
            alt="Athens Luxury Transfer Mobile"
            fill priority quality={90}
            className="object-cover object-center" 
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10" />
      </div>

      {/* 2. Content Section */}
      {/* pt-56 στο mobile για να κατέβει κι άλλο ο τίτλος (~32px κάτω από το pt-48) */}
      <div className="relative z-20 text-center flex flex-col items-center px-4 pt-56 md:pt-64 lg:pt-[280px]"> 
        
        <motion.h1 
          className="font-bona font-bold text-3xl md:text-5xl lg:text-[65px] tracking-[0.15em] uppercase leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
          style={{ color: '#e1e1e1' }}
          initial="hidden" animate="visible" variants={dropIn}
        >
          ATHENS LUXURY <br className="md:hidden" /> TRANSFER
        </motion.h1>

        {/* Divider Line */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "60px", opacity: 0.3 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-[1px] bg-[#B8A99A] mt-8 mb-8"
        ></motion.div>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="font-noto font-normal text-[11px] md:text-[16px] text-white/90 uppercase w-full max-w-[85vw] leading-loose drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] tracking-[0.2em] md:tracking-[0.7em]"
        >
          Elevating the Standards in Luxury Transfer
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;