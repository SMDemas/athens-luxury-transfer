'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const toursImages = [
  { src: '/greece1.webp', alt: 'Athens Acropolis' },
  { src: '/greece2.webp', alt: 'Sounio Temple' },
  { src: '/greece3.webp', alt: 'Delphi Oracle' },
  { src: '/greece4.webp', alt: 'Meteora Rocks' },
  { src: '/greece5.webp', alt: 'Peloponnese Coast' },
];

const duplicatedImages = [...toursImages, ...toursImages, ...toursImages];

const ToursSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-20 lg:py-32 bg-black border-none overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto flex flex-col-reverse lg:flex-row items-center">
        
        {/* ΑΡΙΣΤΕΡΗ ΠΛΕΥΡΑ: Κείμενο (Στο mobile πάει κάτω) */}
        <div className="w-full lg:w-[40%] px-8 md:px-20 lg:pl-24 lg:pr-10 z-30 bg-black mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h2 className="font-bona text-[#7a6f40] text-[12px] md:text-[13px] uppercase tracking-[0.3em] font-bold">
                Luxury Expeditions
              </h2>
              <h3 className="font-bona text-white text-3xl md:text-5xl leading-tight tracking-wider">
                Discover all that <br className="hidden lg:block" /> Greece has to offer.
              </h3>
            </div>

            <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
              <p className="font-noto text-[#e1e1e1] text-[14px] md:text-[15px] leading-relaxed tracking-wide opacity-80">
                Experience the cradle of civilization through our curated VIP tours. We provide more than a ride—we provide a passage through history.
              </p>
              <div className="space-y-2">
                <span className="text-[#7a6f40] font-bold uppercase tracking-widest text-[10px] block">Tailored Destinations</span>
                <p className="font-noto text-[#e1e1e1] text-[14px] md:text-[15px] leading-relaxed tracking-wide opacity-80">
                  Every itinerary is bespoke, designed to match your personal interests and schedule.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ΔΕΞΙΑ ΠΛΕΥΡΑ: Carousel (Στο mobile πάει πάνω) */}
        <div 
          className="w-full lg:w-[60%] relative overflow-hidden h-[350px] md:h-[450px] flex items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Mask μόνο για Desktop (lg) */}
          <div className="hidden lg:block absolute left-0 top-0 w-32 h-full z-20 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />

          <motion.div 
            className="flex gap-6 md:gap-8 px-4 lg:px-8"
            animate={{ x: isPaused ? undefined : ["0%", "-33.33%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {duplicatedImages.map((image, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedImage(image.src)}
                className="flex-shrink-0 p-2 md:p-3 bg-white shadow-2xl cursor-zoom-in transition-transform duration-500 hover:scale-105"
              >
                <div className="relative w-[220px] md:w-[350px] aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="pt-2 md:pt-3 pb-1 text-center border-t border-black/5 mt-2">
                  <span className="font-bona text-black/60 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em]">
                    Athens Luxury Transfer
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-20 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-[4/3] bg-white p-2 md:p-3 shadow-2xl"
            >
              <Image
                src={selectedImage}
                alt="Full View"
                fill
                className="object-cover"
              />
              <button className="absolute -top-10 right-0 text-white font-bona text-[10px] uppercase tracking-widest bg-black/50 px-2 py-1">
                Close [x]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ToursSection;