import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 bg-black border-t border-white/5 text-center">
      <div className="space-y-4">
        {/* Branding */}
        <p className="font-bona text-[#7a6f40] text-[10px] uppercase tracking-[0.5em]">
          Athens Luxury Transfer
        </p>
        
        {/* Copyright - Το κείμενο που σου άρεσε */}
        <p className="font-noto text-white/20 text-[11px] uppercase tracking-widest">
          © 2026 Premium Mobility Solutions | All Rights Reserved
        </p>
        
        {/* Small Credits ή Links αν θες */}
        <div className="pt-4 flex justify-center gap-6 opacity-30">
           <a href="/privacy" className="text-white text-[10px] uppercase tracking-tighter hover:opacity-100 transition-opacity">Privacy Policy</a>
           <a href="/terms" className="text-white text-[10px] uppercase tracking-tighter hover:opacity-100 transition-opacity">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;