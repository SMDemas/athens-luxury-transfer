'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { FaWhatsapp, FaViber, FaPhoneAlt } from 'react-icons/fa';
import Header from '@/components/Header';
import Modal from '@/components/Modal';

// --- SEO METADATA ---
// Σημείωση: Σε Next.js App Router, αν η σελίδα είναι 'use client', 
// τα metadata συνήθως μπαίνουν σε ένα ξεχωριστό layout ή page.ts.
// Αν αυτή είναι η page.tsx, ο τίτλος θα εμφανίζεται βάσει του template στο layout.tsx.

const serviceHighlights = [
  "Spacious, modern premium fleet & SUVs",
  "Climate control & high-speed Wi-Fi access",
  "Complimentary bottled water & premium amenities",
  "Available child seats & booster seats upon request",
  "Professional chauffeurs with discreet presence"
];

const InstantBooking = () => {
  const phoneNumber = "306988959293"; 
  const whatsappMessage = encodeURIComponent("Hello! I would like to inquire about a luxury transfer in Athens.");

  const bookingOptions = [
    {
      id: 1,
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      link: `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      color: 'text-[#25D366]',
      bg: 'bg-[#25D366]/10',
      label: 'Chat with us'
    },
    {
      id: 2,
      name: 'Viber',
      icon: <FaViber />,
      link: `viber://chat?number=%2B${phoneNumber}`,
      color: 'text-[#7360f2]',
      bg: 'bg-[#7360f2]/10',
      label: 'Message us'
    },
    {
      id: 3,
      name: 'Direct Call',
      icon: <FaPhoneAlt />,
      link: `tel:+${phoneNumber}`,
      color: 'text-white',
      bg: 'bg-white/10',
      label: 'Speak with us'
    }
  ];

  return (
    <section className="relative pt-4 pb-24 bg-black overflow-hidden border-t border-white/5">
      <div className="w-full max-w-[1440px] px-[20px] md:px-[50px] mx-auto">
        <div className="flex flex-col items-center text-center space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="font-bona text-[12px] text-[#7a6f40] uppercase tracking-[0.6em] block font-semibold">
              Available 24/7
            </span>
            <h2 className="font-bona text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
              Instant <span className="opacity-40">Booking</span>
            </h2>
            <p className="font-noto text-white/50 text-sm md:text-lg max-w-xl mx-auto font-light leading-relaxed">
              Experience seamless coordination. Choose your preferred method for an immediate response from our concierge team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {bookingOptions.map((option, index) => (
              <motion.a
                key={option.id}
                href={option.link}
                target={option.name !== 'Direct Call' ? "_blank" : "_self"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative flex flex-col items-center p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-[#7a6f40]/50 transition-all duration-500"
              >
                <div className={`w-24 h-24 rounded-full ${option.bg} flex items-center justify-center text-4xl ${option.color} mb-6 transition-all duration-500 group-hover:scale-110 shadow-2xl`}>
                  {option.icon}
                </div>
                <span className="font-bona text-[15px] text-white font-bold uppercase tracking-[0.2em]">
                  {option.name}
                </span>
                <p className="mt-2 font-noto text-[13px] text-white/40 group-hover:text-white/70 transition-colors">
                  {option.label}
                </p>
                <div className={`absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10 ${option.bg}`} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function VIPServicesPage() {
  const [modalContent, setModalContent] = useState<{ title: string, content: React.ReactNode } | null>(null);

  // --- GEO/SCHEMA DATA ---
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "VIP Chauffeur Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Athens Luxury Transfer",
      "image": "https://athensluxurytransfer.gr/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Athens",
        "addressCountry": "GR"
      }
    },
    "areaServed": "Athens, Greece",
    "description": "Executive chauffeur services, airport VIP meet and greet, and high-end event transportation in Athens."
  };

  const policies = {
    privacy: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>At Athens Luxury Transfer, we prioritize your privacy. We collect only the necessary information to provide our premium chauffeur services.</p>
          <p>Personal data such as your name, email, and phone number are used strictly for bookings and communication.</p>
        </div>
      )
    },
    terms: {
      title: "Terms & Conditions",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>All bookings are subject to availability. Our chauffeur will wait for up to 60 minutes for airport pickups.</p>
          <p>Smoking and illegal substances are strictly prohibited inside our vehicles.</p>
        </div>
      )
    },
    cancellation: {
      title: "Cancellation Policy",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>Cancellations made more than 24 hours before the scheduled pickup time are free of charge.</p>
          <p>No-shows or cancellations within 12 hours are non-refundable.</p>
        </div>
      )
    }
  };

  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      {/* GEO Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block h-full w-full relative">
            <Image
              src="/hero3.webp"
              alt="Athens Luxury Chauffeur Service Desktop"
              fill
              className="object-cover object-center opacity-80"
              priority
            />
          </div>
          <div className="block md:hidden h-full w-full relative -mt-[220px]">
            <Image
              src="/hero4.webp"
              alt="Athens Luxury Transfer Mobile Service"
              fill
              className="object-cover object-center opacity-80"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-[50px] w-full pt-[600px] md:pt-64 pb-10 md:pb-20">
          <div className="max-w-3xl">
            <div className="bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-8 md:p-0 rounded-[40px] border border-white/10 md:border-none shadow-2xl md:shadow-none">
              <div className="space-y-2 mb-8">
                 <span className="font-bona text-[#7a6f40] text-[10px] md:text-[12px] uppercase tracking-[0.6em] block">
                    Established Excellence
                 </span>
                 <h1 className="font-bona text-3xl md:text-6xl text-white tracking-tight uppercase leading-[1.1]">
                    Athens <br />
                    <span className="text-white/40 italic font-light">VIP Services</span>
                 </h1>
              </div>
              <div className="space-y-8">
                <p className="font-noto text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl border-l border-[#7a6f40] pl-6">
                  At <span className="text-white font-semibold tracking-wide">Athens Luxury Transfer</span>, we specialize in bespoke mobility solutions. Our commitment is to provide an elite travel experience where <span className="text-white font-semibold text-base md:text-xl">refined luxury meets uncompromising safety</span>.
                </p>
                <div className="grid grid-cols-1 gap-4 pt-2">
                  {serviceHighlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <IoCheckmarkCircleOutline className="text-[#7a6f40] shrink-0" size={18} />
                      <span className="font-noto text-[11px] md:text-[13px] uppercase tracking-[0.15em] text-white/70 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SECTION */}
      <section className="relative z-20 py-24 bg-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10">
            <div className="flex flex-col space-y-6 group">
              <h3 className="font-bona text-lg text-white tracking-[0.1em] uppercase min-h-[40px] flex items-center">Airport & Ports</h3>
              <div className="w-10 h-[2px] bg-[#7a6f40] group-hover:w-full transition-all duration-700" />
              <p className="font-noto text-white/50 text-[14px] leading-relaxed">Reliable 24/7 transfers for Athens International Airport (ATH) and Piraeus Port.</p>
            </div>
            <div className="flex flex-col space-y-6 group">
              <h3 className="font-bona text-lg text-white tracking-[0.1em] uppercase min-h-[40px] flex items-center">Executive Chauffeur</h3>
              <div className="w-10 h-[2px] bg-[#7a6f40] group-hover:w-full transition-all duration-700" />
              <p className="font-noto text-white/50 text-[14px] leading-relaxed">Professional chauffeurs for corporate meetings and executive transport.</p>
            </div>
            <div className="flex flex-col space-y-6 group">
              <h3 className="font-bona text-lg text-white tracking-[0.1em] uppercase min-h-[40px] flex items-center">Private Tours</h3>
              <div className="w-10 h-[2px] bg-[#7a6f40] group-hover:w-full transition-all duration-700" />
              <p className="font-noto text-white/50 text-[14px] leading-relaxed">Explore Cape Sounio or Delphi with tailor-made luxury itineraries.</p>
            </div>
            <div className="flex flex-col space-y-6 group">
              <h3 className="font-bona text-lg text-white tracking-[0.1em] uppercase min-h-[40px] flex items-center">VIP Events</h3>
              <div className="w-10 h-[2px] bg-[#7a6f40] group-hover:w-full transition-all duration-700" />
              <p className="font-noto text-white/50 text-[14px] leading-relaxed">Logistics for weddings and gala events, managed with meticulous attention.</p>
            </div>
          </div>
        </div>
      </section>

      <InstantBooking />

      {/* FOOTER */}
      <footer className="relative py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
            
            {/* Logo & Description */}
            <div className="flex flex-col items-center md:items-start space-y-6">
              <img 
                src="/logo.webp" 
                alt="Athens Luxury Transfer" 
                className="w-48 h-20 object-contain" 
              />
              <p className="font-noto text-white/40 text-[11px] max-w-xs uppercase tracking-widest">Premium Chauffeur Services. Available 24/7.</p>
            </div>

            {/* Information Links */}
            <div className="space-y-6">
              <h4 className="font-bona text-[#7a6f40] text-[12px] tracking-[0.3em] uppercase font-bold">Information</h4>
              <ul className="space-y-3">
                {Object.entries(policies).map(([key, policy]) => (
                  <li key={key}>
                    <button onClick={() => setModalContent(policy)} className="font-noto text-white/50 text-[10px] uppercase hover:text-white transition-all tracking-widest">{policy.title}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect, Socials & Partner Link */}
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <h4 className="font-bona text-[#7a6f40] text-[12px] tracking-[0.3em] uppercase font-bold">Connect</h4>
              <p className="font-noto text-white/50 text-[10px] tracking-widest uppercase">+30 698 895 9293</p>
              
              {/* Social Icons Container */}
              <div className="flex flex-col items-center md:items-start gap-6 pt-2">
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/athensluxurytransfer/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#7a6f40] transition-colors"><FaWhatsapp size={20}/></a>
                  <a href="https://www.facebook.com/sdathensluxurytransfer" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#7a6f40] transition-colors"><FaPhoneAlt size={18}/></a>
                </div>

                {/* Η εικόνα adv01.webp ως Link με απλό HTML tag */}
                <a 
                  href="https://athenianseatizens.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-56 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <img 
                    src="/adv01.webp" 
                    alt="Athenian Seatizens Partner"
                    className="w-full h-auto object-contain object-center md:object-left"
                  />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Strip */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="font-bona text-[#7a6f40] text-[10px] uppercase tracking-[0.4em]">© 2026 Athens Luxury Transfer</p>
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