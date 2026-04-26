'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        // Επαναφορά του μηνύματος μετά από 5 δευτερόλεπτα
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorData = await response.json();
        console.error('Brevo API Error:', errorData);
        setStatus('error');
      }
    } catch (err) {
      console.error('Connection Error:', err);
      setStatus('error');
    }
  };

  return (
    <section className="relative py-32 md:py-48 bg-black overflow-hidden border-t border-white/5">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/newsletter1.webp"
          alt="Newsletter Background"
          fill
          className="object-cover opacity-75"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="font-bona text-[#7a6f40] text-[13px] md:text-[14px] uppercase tracking-[0.5em] font-bold drop-shadow-md">
              Stay Connected
            </h2>
            <h3 className="font-bona text-white text-3xl md:text-5xl lg:text-6xl leading-tight tracking-[0.15em] uppercase drop-shadow-2xl">
              SUBSCRIBE TO OUR <br className="hidden md:block" /> NEWSLETTER
            </h3>
          </div>

          <p className="font-noto text-white text-sm md:text-base max-w-xl mx-auto leading-relaxed tracking-wide drop-shadow-md">
            Be the first to receive exclusive travel itineraries, luxury destination updates and special offers from Athens Luxury Transfer.
          </p>

          <form 
            onSubmit={handleSubmit}
            className="relative mt-12 max-w-md mx-auto group"
          >
            <div className="relative flex items-center border-b border-white/60 focus-within:border-[#7a6f40] transition-colors duration-500 pb-3">
              <input
                type="email"
                required
                disabled={status === 'loading'}
                placeholder="ENTER YOUR EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-none text-white font-noto text-[11px] md:text-xs tracking-[0.2em] py-2 focus:ring-0 placeholder:text-white/50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="ml-4 font-bona text-[#7a6f40] text-[11px] uppercase tracking-[0.3em] font-bold hover:text-white transition-all duration-300 disabled:opacity-50 drop-shadow-sm"
              >
                {status === 'loading' ? 'JOINING...' : 'JOIN NOW'}
              </button>
            </div>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 right-0 mt-6 font-bona text-[#7a6f40] text-[10px] tracking-[0.3em] uppercase drop-shadow-md"
                >
                  Welcome to our inner circle.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 right-0 mt-6 font-bona text-red-500 text-[10px] tracking-[0.3em] uppercase drop-shadow-md"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;