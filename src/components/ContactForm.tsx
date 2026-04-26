'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      serviceType: `Contact Form Inquiry: ${formData.get('subject')}`,
      pickup: 'N/A',
      dropoff: 'N/A',
      date: 'N/A',
      time: 'N/A',
      adults: '0',
      kids: '0',
      suitcases: '0',
      bags: '0',
      phone: 'N/A'
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
        <h3 className="font-bona text-2xl text-white mb-4 uppercase tracking-widest">Message Sent!</h3>
        <p className="font-noto text-white/50 mb-8 tracking-wide">
          Thank you for reaching out. We will get back to you at <br />
          <span className="text-[#7a6f40]">athensluxurytransfer@gmail.com</span>
        </p>
        <button onClick={() => setStatus('idle')} className="text-white underline uppercase text-[10px] tracking-widest hover:text-[#7a6f40] transition-colors">
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] text-white/40 uppercase tracking-[0.3em] ml-4 font-bona">Full Name</label>
          <input name="fullName" required type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white focus:border-[#7a6f40]/50 outline-none transition-all font-noto text-sm" placeholder="Your full name" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] text-white/40 uppercase tracking-[0.3em] ml-4 font-bona">Email Address</label>
          <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white focus:border-[#7a6f40]/50 outline-none transition-all font-noto text-sm" placeholder="email@example.com" />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-[10px] text-white/40 uppercase tracking-[0.3em] ml-4 font-bona">Subject</label>
        <div className="relative">
          <select name="subject" className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white outline-none appearance-none font-noto text-sm cursor-pointer focus:border-[#7a6f40]/50" style={{ backgroundColor: '#0a0a0a' }}>
            <option>General Inquiry</option>
            <option>Private Tour Customization</option>
            <option>Wedding & Special Events</option>
            <option>Corporate Accounts</option>
          </select>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">▼</div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] text-white/40 uppercase tracking-[0.3em] ml-4 font-bona">Your Message</label>
        <textarea name="message" required rows={5} className="w-full bg-white/5 border border-white/10 rounded-[30px] px-8 py-5 text-white focus:border-[#7a6f40]/50 outline-none resize-none transition-all font-noto text-sm" placeholder="Tell us how we can assist you..."></textarea>
      </div>

      <button type="submit" disabled={status === 'sending'} className="w-full bg-[#7a6f40] hover:bg-[#8b7f4d] text-white font-bold py-6 rounded-full uppercase text-[10px] tracking-[0.4em] transition-all duration-500 disabled:opacity-50 shadow-xl">
        {status === 'sending' ? 'Sending Request...' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-center text-xs tracking-widest uppercase">Something went wrong. Please try again.</p>
      )}
    </form>
  );
};

export default ContactForm;