'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  IoTimeOutline, 
  IoPeopleOutline 
} from 'react-icons/io5';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import Header from '@/components/Header';
import NewsletterSection from '@/components/Newsletter';
import Modal from '@/components/Modal';

// --- SEO & GEO DATA ---
const toursData = [
  {
    title: "Ancient Splendors",
    subtitle: "Temple of Olympian Zeus",
    duration: "Approximately 4 hours",
    group: "4 to 20 persons",
    description: "Unveil the marvels of ancient Athens with our Temple of Olympian Zeus Tour. Immerse yourself in history, culture, and architectural splendors that have shaped this iconic city.",
    image: "/tour1.webp",
    location: "Athens, Greece"
  },
  {
    title: "Mythology & Nature",
    subtitle: "Cape Sounio",
    duration: "Approximately 5 hours",
    group: "4 to 20 persons",
    description: "Allow the allure of Cape Sounio to enrapture your senses. Let it transport you to a realm where mythology and nature intertwine at the edge of the Aegean.",
    image: "/tour2.webp",
    location: "Sounio, Greece"
  },
  {
    title: "The Oracle's Path",
    subtitle: "Delphi – Arachova",
    duration: "Approximately 8 hours",
    group: "4 to 20 persons",
    description: "Embark on this extraordinary expedition through time and culture. From the ancient mystique of Delphi to the timeless charm of Arachova.",
    image: "/tour5.webp",
    location: "Delphi, Greece"
  },
  {
    title: "The Great Heritage",
    subtitle: "Peloponnese Experience",
    duration: "Approximately 8-9 hours",
    group: "4 to 20 persons",
    description: "Immerse yourself in Greece’s past, from Corinth’s engineering marvel to Mycenae’s legendary gates and Nafplio’s coastal allure.",
    image: "/tour4.webp",
    location: "Peloponnese, Greece"
  }
];

export default function ToursPage() {
  const [modalContent, setModalContent] = useState<{ title: string, content: React.ReactNode } | null>(null);

  // --- JSON-LD FOR GEO (AI & SEARCH ENGINES) ---
  const toursSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": toursData.map((tour, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TouristTrip",
        "name": tour.subtitle,
        "description": tour.description,
        "touristType": "VIP / Private",
        "itinerary": {
          "@type": "ItemList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "item": { "@type": "Place", "name": tour.location } }
          ]
        },
        "provider": {
          "@type": "LocalBusiness",
          "name": "Athens Luxury Transfer"
        }
      }
    }))
  };

  const policies = {
    privacy: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>At Athens Luxury Transfer, we prioritize your privacy. We collect only the necessary information to provide our premium services.</p>
        </div>
      )
    },
    terms: {
      title: "Terms & Conditions",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>All bookings are subject to availability. Our chauffeur will wait for up to 15 minutes for tour pickups.</p>
        </div>
      )
    },
    cancellation: {
      title: "Cancellation Policy",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>Cancellations made more than 24 hours before the scheduled time are free of charge.</p>
        </div>
      )
    }
  };

  return (
    <main className="bg-black min-h-screen relative">
      {/* Schema Injection for GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toursSchema) }}
      />
      
      <Header />

      {/* --- STICKY WRAPPER --- */}
      <div className="relative" style={{ height: `${(toursData.length + 2) * 100}vh` }}>
        
        {/* THE STICKY BACKGROUND */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
          <Image 
            src="/tour3.webp" 
            alt="Luxury Private Tours Athens Greece Background" 
            fill 
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        </div>

        {/* THE CONTENT THAT SCROLLS OVER IT */}
        <div className="relative z-10 -mt-[100vh]">
          
          {/* HERO SLIDE */}
          <div className="h-screen flex items-end justify-center pb-24 px-6">
            <div className="text-center max-w-5xl">
              <h1 className="font-bona text-3xl md:text-5xl text-white tracking-tight uppercase mb-4 leading-tight">
                History, breathtaking sights, <br />
                and the endless sea <span className="text-white/60">await you!</span>
              </h1>
              <div className="w-12 h-[1px] bg-[#7a6f40] mx-auto mb-6" />
              <p className="font-noto text-white/90 text-[10px] md:text-xs uppercase tracking-[0.6em] font-bold">
                Experience an unforgettable private tour
              </p>
            </div>
          </div>

          {/* INTRO SLIDE */}
          <div className="h-[70vh] flex items-center justify-center px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-bona text-white text-4xl md:text-8xl tracking-[0.1em] leading-tight uppercase italic opacity-90">
                Where Fun <br /> 
                <span className="text-[#7a6f40] not-italic">Meets History</span>
              </h2>
            </div>
          </div>

          {/* TOURS LOOP */}
          <div className="pb-[20vh]">
            {toursData.map((tour, index) => (
              <div key={index} className="h-screen flex items-center justify-center px-6 md:px-[100px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-[1500px] mx-auto w-full">
                  <div className={`relative h-[300px] md:h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-white/10 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                    <Image src={tour.image} alt={`Private Tour to ${tour.subtitle}`} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>

                  <div className="space-y-6 md:space-y-8 py-8">
                    <div className="flex gap-6 items-center">
                      <div className="flex items-center gap-2 text-[#7a6f40] font-noto text-[10px] uppercase tracking-widest font-bold">
                        <IoTimeOutline size={16} /> {tour.duration}
                      </div>
                      <div className="flex items-center gap-2 text-white/40 font-noto text-[10px] uppercase tracking-widest font-bold">
                        <IoPeopleOutline size={16} /> {tour.group}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="block text-xs text-[#7a6f40] tracking-[0.4em] uppercase font-bold">{tour.title}</span>
                      <h3 className="font-bona text-3xl md:text-6xl text-white tracking-tight uppercase leading-none">{tour.subtitle}</h3>
                    </div>
                    <div className="w-20 h-[1px] bg-[#7a6f40]" />
                    <p className="font-noto text-white/80 text-sm md:text-lg leading-relaxed font-light max-w-xl">{tour.description}</p>
                    <div className="pt-4">
                      <Link href="/contact" className="inline-block bg-[#7a6f40] text-white py-4 px-12 rounded-full font-bona font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500">
                        Book This Experience
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-30 bg-black shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
        <section className="py-32 flex justify-center">
          <div className="w-24 h-[1px] bg-white/10" />
        </section>

        <NewsletterSection />

        <footer className="py-20 border-t border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left items-start">
              
              {/* Logo & Description */}
              <div className="space-y-6 flex flex-col items-center md:items-start">
                <img 
                  src="/logo.webp" 
                  alt="Athens Luxury Transfer Logo" 
                  className="w-48 h-20 object-contain" 
                />
                <p className="font-noto text-white/40 text-[11px] leading-relaxed tracking-wider max-w-xs mx-auto md:mx-0 uppercase">
                  Premium private tours and travel experiences in Greece.
                </p>
              </div>

              {/* Information Links */}
              <div className="space-y-6">
                <h4 className="font-bona text-[#7a6f40] text-[12px] tracking-[0.3em] uppercase font-bold">Information</h4>
                <ul className="space-y-3">
                  {Object.entries(policies).map(([key, policy]) => (
                    <li key={key}>
                      <button onClick={() => setModalContent(policy)} className="font-noto text-white/50 text-[10px] uppercase tracking-widest hover:text-white transition-all duration-300">
                        {policy.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact, Socials & Partner Link */}
              <div className="space-y-6 flex flex-col items-center md:items-start">
                <h4 className="font-bona text-[#7a6f40] text-[12px] tracking-[0.3em] uppercase font-bold">Contact</h4>
                <ul className="space-y-3 font-noto text-white/50 text-[10px] tracking-[0.1em] text-center md:text-left">
                  <li className="uppercase tracking-[0.2em]">Phone: +30 698 895 9293</li>
                  <li className="uppercase tracking-[0.2em]">Email: athensluxurytransfer@gmail.com</li>
                </ul>

                {/* Social Containers & Partner Badge */}
                <div className="flex flex-col items-center md:items-start gap-6 pt-2">
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/athensluxurytransfer/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white/40 hover:text-[#7a6f40] transition-colors"
                    >
                      <FaInstagram size={20}/>
                    </a>
                    <a 
                      href="https://www.facebook.com/sdathensluxurytransfer" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white/40 hover:text-[#7a6f40] transition-colors"
                    >
                      <FaFacebookF size={18}/>
                    </a>
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
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left space-y-1">
                 <p className="font-bona text-[#7a6f40] text-[10px] uppercase tracking-[0.4em]">© 2026 Athens Luxury Transfer</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <Modal 
        isOpen={!!modalContent} 
        onClose={() => setModalContent(null)} 
        title={modalContent?.title || ""} 
        content={modalContent?.content} 
      />
    </main>
  );
}