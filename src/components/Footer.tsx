import React from 'react';
import Image from 'next/image'; // Εισαγωγή του Image component για σωστό optimization

const Footer = () => {
  return (
    <footer className="py-16 bg-black border-t border-white/5 text-center">
      <div className="space-y-6 flex flex-col items-center justify-center">
        
        {/* Branding */}
        <p className="font-bona text-[#7a6f40] text-[10px] uppercase tracking-[0.5em]">
          Athens Luxury Transfer
        </p>
        
        {/* Copyright */}
        <p className="font-noto text-white/20 text-[11px] uppercase tracking-widest">
          © 2026 Premium Mobility Solutions | All Rights Reserved
        </p>
        
        {/* Links */}
        <div className="pt-2 flex justify-center gap-6 opacity-30">
           <a href="/privacy" className="text-white text-[10px] uppercase tracking-tighter hover:opacity-100 transition-opacity">Privacy Policy</a>
           <a href="/terms" className="text-white text-[10px] uppercase tracking-tighter hover:opacity-100 transition-opacity">Terms of Service</a>
        </div>

        {/* ---------------------------------------------------- */}
        {/* [Placeholder] Εδώ θα μπουν τα Social Icons σου μελλοντικά */}
        {/* ---------------------------------------------------- */}

        {/* Η εικόνα adv01 από τον φάκελο public */}
        <div className="pt-4 max-w-[150px] sm:max-w-[200px] opacity-60 hover:opacity-100 transition-opacity duration-300">
          <Image 
            src="/adv01.webp" // Αν η κατάληξη είναι .jpg ή .webp, άλλαξέ το ανάλογα (π.χ. /adv01.jpg)
            alt="Athens Luxury Transfer Badge"
            width={200} 
            height={80}
            className="w-full h-auto object-contain mx-auto"
            priority={false}
          />
        </div>

      </div>
    </footer>
  );
};

export default Footer;