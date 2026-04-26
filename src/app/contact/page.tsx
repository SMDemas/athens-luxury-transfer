'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Modal from '@/components/Modal';
import { Phone, Mail, MapPin, MessageCircle, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [modalContent, setModalContent] = useState<{ title: string, content: React.ReactNode } | null>(null);
  const phoneNumber = "306988959293"; 

  const policies = {
    privacy: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>At Athens Luxury Transfer, we prioritize your privacy. We collect only the necessary information to provide our premium chauffeur services.</p>
          <p>Personal data such as your name, email, and phone number are used strictly for bookings and communication.</p>
          <p>Your transaction details are encrypted and handled through secure payment gateways.</p>
        </div>
      )
    },
    terms: {
      title: "Terms & Conditions",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>All bookings are subject to availability. Our chauffeur will wait for up to 60 minutes for airport pickups and 15 minutes for other locations.</p>
          <p>Smoking and illegal substances are strictly prohibited inside our vehicles.</p>
          <p>Athens Luxury Transfer is not responsible for items left in the vehicles.</p>
        </div>
      )
    },
    cancellation: {
      title: "Cancellation Policy",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>Cancellations made more than 24 hours before the scheduled pickup time are free of charge.</p>
          <p>Cancellations made between 12-24 hours before the pickup will incur a 50% charge.</p>
          <p>No-shows or cancellations within 12 hours are non-refundable.</p>
        </div>
      )
    }
  };

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-bona text-[#7a6f40] text-[11px] uppercase tracking-[0.6em] mb-4 block">
            Available 24/7
          </span>
          <h1 className="font-bona text-5xl md:text-7xl text-white uppercase tracking-tighter mb-6">
            Get In <span className="opacity-40">Touch</span>
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#7a6f40] transition-colors">
                  <Phone className="w-5 h-5 text-[#7a6f40]" />
                </div>
                <div>
                  <h4 className="font-bona text-white/30 text-[10px] uppercase tracking-[0.2em]">Direct Call</h4>
                  <p className="font-noto text-white text-sm tracking-wider">+30 698 895 9293</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#7a6f40] transition-colors">
                  <Mail className="w-5 h-5 text-[#7a6f40]" />
                </div>
                <div>
                  <h4 className="font-bona text-white/30 text-[10px] uppercase tracking-[0.2em]">Email Us</h4>
                  <p className="font-noto text-white text-sm tracking-wider">athensluxurytransfer@gmail.com</p>
                </div>
              </div>

              <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all duration-500">
                  <MessageCircle className="w-5 h-5 text-[#7a6f40] group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bona text-white/30 text-[10px] uppercase tracking-[0.2em]">WhatsApp</h4>
                  <p className="font-noto text-white text-sm tracking-wider group-hover:text-[#25D366] transition-colors">Chat Live</p>
                </div>
              </a>

              <a href={`viber://chat?number=%2B${phoneNumber}`} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#7360f2] group-hover:border-[#7360f2] transition-all duration-500">
                  <MessageSquare className="w-5 h-5 text-[#7a6f40] group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bona text-white/30 text-[10px] uppercase tracking-[0.2em]">Viber</h4>
                  <p className="font-noto text-white text-sm tracking-wider group-hover:text-[#7360f2] transition-colors">Message Us</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#7a6f40] transition-colors">
                  <MapPin className="w-5 h-5 text-[#7a6f40]" />
                </div>
                <div>
                  <h4 className="font-bona text-white/30 text-[10px] uppercase tracking-[0.2em]">Location</h4>
                  <p className="font-noto text-white text-sm tracking-wider">Athens, Greece</p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-[40px] shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative py-20 bg-black border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left items-start">
            
            {/* Column 1: Logo & Info */}
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <div className="relative w-48 h-20">
                <Image src="/logo.webp" alt="Logo" fill className="object-contain" priority />
              </div>
              <p className="font-noto text-white/40 text-[11px] leading-relaxed tracking-wider max-w-xs mx-auto md:mx-0">
                Premium chauffeur services and bespoke travel experiences in Athens and throughout Greece. Available 24/7 for your convenience.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-6">
              <h4 className="font-bona text-[#7a6f40] text-[12px] tracking-[0.3em] uppercase font-bold">Information</h4>
              <ul className="space-y-3">
                {Object.entries(policies).map(([key, policy]) => (
                  <li key={key}>
                    <button 
                      onClick={() => setModalContent(policy)}
                      className="font-noto text-white/50 text-[10px] uppercase tracking-widest hover:text-white transition-all duration-300 border-b border-transparent hover:border-white/20 pb-1"
                    >
                      {policy.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Socials */}
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <h4 className="font-bona text-[#7a6f40] text-[12px] tracking-[0.3em] uppercase font-bold">Contact</h4>
              <ul className="space-y-3 font-noto text-white/50 text-[10px] tracking-[0.1em] text-center md:text-left">
                <li className="uppercase tracking-[0.2em]">Phone: +30 698 895 9293</li>
                <li className="uppercase tracking-[0.2em]">Email: athensluxurytransfer@gmail.com</li>
                <li className="uppercase tracking-[0.2em] text-white/20 italic">Athens, Greece</li>
              </ul>
              
              {/* Social Icons (Inline SVGs to avoid import errors) */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://www.instagram.com/athensluxurytransfer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#7a6f40] hover:border-[#7a6f40] transition-all duration-500 hover:-translate-y-1"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a 
                  href="https://www.facebook.com/sdathensluxurytransfer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#7a6f40] hover:border-[#7a6f40] transition-all duration-500 hover:-translate-y-1"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Strip */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left space-y-1">
               <p className="font-bona text-[#7a6f40] text-[10px] uppercase tracking-[0.4em]">© 2026 Athens Luxury Transfer</p>
               <p className="font-noto text-white/20 text-[9px] uppercase tracking-[0.2em]">Premium Mobility Solutions</p>
            </div>
            <div className="flex space-x-4 opacity-20">
               <span className="text-[9px] text-white border border-white/20 px-2 py-1">VISA</span>
               <span className="text-[9px] text-white border border-white/20 px-2 py-1">MASTERCARD</span>
               <span className="text-[9px] text-white border border-white/20 px-2 py-1">AMEX</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal for Policies */}
      <Modal 
        isOpen={!!modalContent} 
        onClose={() => setModalContent(null)} 
        title={modalContent?.title || ""} 
        content={modalContent?.content} 
      />
    </main>
  );
}