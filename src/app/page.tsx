'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CtaSection from "@/components/CtaSection";
import Features from "@/components/Features";
import FleetSection from "@/components/FleetSection";
import ToursSection from "@/components/ToursSection";
import Newsletter from "@/components/Newsletter";
import InstantBooking from "@/components/InstantBooking";
import Modal from "@/components/Modal";

export default function Home() {
  const [modalContent, setModalContent] = useState<{ title: string, content: React.ReactNode } | null>(null);

  // --- JSON-LD FOR LOCAL BUSINESS (Συγχρονισμένο με το .gr domain) ---
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService", 
    "name": "Athens Luxury Transfer",
    "image": "https://athensluxurytransfer.gr/og-image.jpg", 
    "@id": "https://athensluxurytransfer.gr",
    "url": "https://athensluxurytransfer.gr",
    "telephone": "+306988959293",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Athens",
      "addressLocality": "Athens",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.9838,
      "longitude": 23.7275
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.instagram.com/athensluxurytransfer/",
      "https://www.facebook.com/sdathensluxurytransfer"
    ],
    "priceRange": "$$"
  };

  const policies = {
    privacy: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>At Athens Luxury Transfer, we prioritize your privacy. We collect only necessary information to provide our premium chauffeur services.</p>
          <p>Your data is used strictly for booking management and is never shared with third parties.</p>
        </div>
      )
    },
    terms: {
      title: "Terms & Conditions",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>All bookings are subject to availability. Our chauffeur will wait for up to 60 minutes for airport pickups.</p>
          <p>The client is responsible for any damage caused to the vehicle during the transfer.</p>
        </div>
      )
    },
    cancellation: {
      title: "Cancellation Policy",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>Cancellations made more than 24 hours before the scheduled pickup time are free of charge.</p>
          <p>Cancellations within 12-24 hours incur a 50% fee, while no-shows are non-refundable.</p>
        </div>
      )
    }
  };

  return (
    <main className="relative min-h-screen bg-black border-none overflow-x-hidden">
      {/* Schema Injection για την Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      
      <Header />
      <Hero />
      <CtaSection />
      <Features />
      <FleetSection />
      <ToursSection />
      <Newsletter />
      <InstantBooking />

      {/* FOOTER */}
      <footer className="relative py-20 bg-black border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left items-start">
            
            {/* Branding */}
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <div className="relative w-48 h-20">
                <Image
                  src="/logo.webp"
                  alt="Athens Luxury Transfer - Professional Chauffeur Services"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="font-noto text-white/40 text-[11px] leading-relaxed tracking-wider max-w-xs mx-auto md:mx-0 uppercase">
                Premium chauffeur services and bespoke travel experiences in Athens and throughout Greece. Available 24/7.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-6">
              <h4 className="font-bona text-[#7a6f40] text-[12px] tracking-[0.3em] uppercase font-bold">
                Information
              </h4>
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

            {/* Contact */}
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <h4 className="font-bona text-[#7a6f40] text-[12px] tracking-[0.3em] uppercase font-bold">
                Contact
              </h4>
              <ul className="space-y-3 font-noto text-white/50 text-[10px] tracking-[0.1em] text-center md:text-left uppercase">
                <li>Phone: +30 698 895 9293</li>
                <li>Email: athensluxurytransfer@gmail.com</li>
                <li className="text-white/20 italic">Athens, Greece</li>
              </ul>

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

          {/* Bottom Strip */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left space-y-1">
               <p className="font-bona text-[#7a6f40] text-[10px] uppercase tracking-[0.4em]">
                 © 2026 Athens Luxury Transfer.
               </p>
            </div>
            
            <div className="flex space-x-4 opacity-20">
              <span className="text-[9px] text-white border border-white/20 px-2 py-1 uppercase">Visa</span>
              <span className="text-[9px] text-white border border-white/20 px-2 py-1 uppercase">Mastercard</span>
              <span className="text-[9px] text-white border border-white/20 px-2 py-1 uppercase">Amex</span>
            </div>
          </div>
        </div>
      </footer>

      <Modal 
        isOpen={!!modalContent} 
        onClose={() => setModalContent(null)} 
        title={modalContent?.title || ""} 
        content={modalContent?.content} 
      />
    </main>
  );
}
