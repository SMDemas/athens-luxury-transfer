'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Παρακολούθηση του scroll για να αλλάζει το στυλ του Header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Τα links του μενού - Ενημερώθηκε το FAQ για να οδηγεί στη σελίδα /faqs
  const navLinks = [
    { name: 'VIP SERVICES', href: '/services' },
    { name: 'TOURS', href: '/tours' },
    { name: 'FAQ', href: '/faqs' }, // Εδώ άλλαξε από '#faq' σε '/faqs'
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-16 border-none ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md py-4 shadow-xl' 
          : 'bg-transparent py-8 shadow-none'
      }`}
    >
      <div className="max-w-[1500px] mx-auto flex justify-between items-center">
        
        {/* LOGO Area */}
        <Link href="/" className="relative z-[110]">
          <Image 
            src="/logo.webp" 
            alt="Athens Luxury Transfer"
            width={500} 
            height={150}
            priority
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled ? 'h-10 md:h-12' : 'h-20 md:h-24'
            }`} 
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="py-2 inline-block group">
                  <span 
                    className="font-bona text-[13px] font-normal uppercase tracking-[0.25em] transition-colors duration-500 cursor-pointer text-[#e1e1e1] group-hover:text-[#7a6f40]"
                  >
                    {link.name}
                  </span>
                  <span className="block h-[1px] w-0 bg-[#7a6f40] transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* MOBILE TOGGLE BUTTON */}
        <button 
          className="md:hidden z-[110] p-2 outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }} 
              className="w-full h-[1px] bg-[#e1e1e1] block origin-center"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }} 
              className="w-full h-[1px] bg-[#e1e1e1] block"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }} 
              className="w-full h-[1px] bg-[#e1e1e1] block origin-center"
            />
          </div>
        </button>

        {/* MOBILE MENU DRAWER */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
              />
              
              <motion.div 
                initial={{ x: '100%' }} 
                animate={{ x: 0 }} 
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-screen w-[80%] max-w-[400px] bg-[#0a0a0a] border-l border-white/5 z-[100] flex flex-col items-center justify-center shadow-2xl"
              >
                <ul className="space-y-10 text-center">
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={() => setIsOpen(false)}
                        className="text-[#e1e1e1] text-xl font-bona uppercase tracking-[0.3em] transition-colors duration-300 hover:text-[#7a6f40]"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="absolute bottom-12 text-center space-y-2 opacity-40">
                  <p className="font-bona text-[10px] uppercase tracking-widest text-white">+30 698 895 9293</p>
                  <p className="font-bona text-[10px] uppercase tracking-widest text-white">Athens Luxury Transfer</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;