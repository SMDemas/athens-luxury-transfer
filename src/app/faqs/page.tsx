'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import NewsletterSection from '@/components/Newsletter';
import Modal from '@/components/Modal';
import { IoChevronDownOutline, IoSearchOutline } from 'react-icons/io5';

const faqsData = [
  {
    category: "Bookings & Payments",
    questions: [
      {
        q: "What happens if my flight is delayed?",
        a: "We monitor all flight arrivals in real-time using specialized tracking software. Your chauffeur will be waiting for you at the actual arrival time, regardless of the delay, at no extra cost to you."
      },
      {
        q: "How do I find my driver at the airport?",
        a: "Your chauffeur will be waiting in the arrivals hall, immediately after the luggage claim area, holding a clear electronic sign with your name or company logo."
      },
      {
        q: "What is your cancellation policy?",
        a: "Cancellations made more than 24 hours before the scheduled pickup time are free of charge. Cancellations between 12-24 hours incur a 50% charge, while no-shows or cancellations under 12 hours are non-refundable."
      }
    ]
  },
  {
    category: "Services & Fleet",
    questions: [
      {
        q: "Are the prices per person or per vehicle?",
        a: "All our private transfer and tour prices are quoted per vehicle, not per person. This ensures a more private and cost-effective experience for families and small groups."
      },
      {
        q: "Do you provide child or baby seats?",
        a: "Safety is our priority. We provide high-quality baby seats and boosters upon request. Please ensure you mention the age and weight of the children in the booking comments."
      },
      {
        q: "Is smoking allowed in the vehicles?",
        a: "To maintain the pristine condition of our fleet and for the comfort of future guests, smoking (including e-cigarettes and vaping) is strictly prohibited inside all vehicles."
      }
    ]
  },
  {
    category: "Tours & Experiences",
    questions: [
      {
        q: "What is included in the tour price?",
        a: "Prices include luxury transportation, fuel, all road tolls, and an English-speaking driver. They do not include entrance fees to archaeological sites, meals, or the services of a licensed tour guide."
      },
      {
        q: "Can I customize the tour itinerary?",
        a: "Absolutely. While we offer expertly curated suggested routes, we specialize in bespoke experiences. You can tailor any journey to your specific interests during the booking process."
      },
      {
        q: "Will the driver enter the archaeological sites with us?",
        a: "Our chauffeurs provide historical context during the drive. However, by Greek law, only 'Licensed Tour Guides' are permitted to accompany you inside monuments. We can arrange a professional guide for an additional fee."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<{ title: string, content: React.ReactNode } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // Logic for filtering FAQs based on search input
  const filteredFaqs = useMemo(() => {
    return faqsData.map(category => ({
      ...category,
      questions: category.questions.filter(
        faq => 
          faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
          faq.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.questions.length > 0);
  }, [searchTerm]);

  // --- JSON-LD FOR FAQ SCHEMA ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.flatMap(category => 
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    )
  };

  const policies = {
    privacy: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>At Athens Luxury Transfer, we prioritize your privacy. We collect only the necessary information to provide our premium chauffeur services.</p>
        </div>
      )
    },
    terms: {
      title: "Terms & Conditions",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>All bookings are subject to availability. Our chauffeur will wait for up to 60 minutes for airport pickups.</p>
        </div>
      )
    },
    cancellation: {
      title: "Cancellation Policy",
      content: (
        <div className="space-y-4 font-noto text-white/70 text-sm leading-relaxed">
          <p>Cancellations made more than 24 hours before the scheduled pickup time are free of charge.</p>
        </div>
      )
    }
  };

  return (
    <main className="bg-black min-h-screen relative overflow-x-hidden text-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Header />

      {/* HERO SECTION WITH SEARCH */}
      <section className="relative pt-44 pb-20 px-6 border-b border-white/5 bg-gradient-to-b from-black via-zinc-900/10 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-bona text-[#7a6f40] text-[11px] uppercase tracking-[0.6em] mb-4 block">
            Information Center
          </span>
          <h1 className="font-bona text-5xl md:text-7xl uppercase tracking-tighter mb-8">
            How Can We <span className="opacity-40 italic">Help?</span>
          </h1>
          
          <div className="max-w-2xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Search for answers (e.g. airport, tour, payment)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-10 font-noto text-sm focus:outline-none focus:border-[#7a6f40] transition-all placeholder:text-white/20"
            />
            <IoSearchOutline className="absolute right-8 top-1/2 -translate-y-1/2 text-[#7a6f40]" size={22} />
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-24 px-6 relative z-10 min-h-[400px]">
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((cat, catIdx) => (
              <div key={catIdx} className="mb-16">
                <h2 className="font-bona text-[#7a6f40] text-[13px] uppercase tracking-[0.4em] mb-10 border-b border-[#7a6f40]/20 pb-4">
                  {cat.category}
                </h2>
                <div className="space-y-4">
                  {cat.questions.map((faq, faqIdx) => {
                    const id = `${catIdx}-${faqIdx}`;
                    const isOpen = openIndex === id;
                    return (
                      <div 
                        key={id} 
                        className={`border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 ${isOpen ? 'bg-white/[0.03] border-white/10' : 'hover:border-white/20'}`}
                      >
                        <button 
                          onClick={() => toggleFAQ(id)}
                          className="w-full flex items-center justify-between p-7 text-left group"
                          aria-expanded={isOpen}
                        >
                          <span className="font-bona text-lg md:text-xl tracking-tight pr-8 group-hover:text-[#7a6f40] transition-colors">{faq.q}</span>
                          <IoChevronDownOutline 
                            className={`text-[#7a6f40] transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} 
                            size={20} 
                          />
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <p className="p-7 pt-0 font-noto text-white/50 text-sm md:text-base leading-relaxed border-t border-white/5 mt-2 pt-6">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-[1px] bg-[#7a6f40] mx-auto mb-6 opacity-30" />
              <p className="font-bona text-white/30 text-xl italic tracking-widest uppercase">
                No results found for "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </section>

      <NewsletterSection />

      {/* FOOTER */}
      <footer className="relative py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left items-start">
            
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <div className="relative w-48 h-20">
                <Image src="/logo.webp" alt="Athens Luxury Transfer" fill className="object-contain" priority />
              </div>
              <p className="font-noto text-white/40 text-[11px] leading-relaxed tracking-wider max-w-xs mx-auto md:mx-0 uppercase">
                Premium chauffeur services and bespoke travel experiences in Athens.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="font-bona text-[#7a6f40] text-[12px] tracking-[0.3em] uppercase font-bold">Information</h4>
              <ul className="space-y-3">
                {Object.entries(policies).map(([key, policy]) => (
                  <li key={key}>
                    <button 
                      onClick={() => setModalContent(policy)}
                      className="font-noto text-white/50 text-[10px] uppercase tracking-widest hover:text-white transition-all duration-300"
                    >
                      {policy.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 flex flex-col items-center md:items-start">
              <h4 className="font-bona text-[#7a6f40] text-[12px] tracking-[0.3em] uppercase font-bold">Contact</h4>
              <ul className="space-y-3 font-noto text-white/50 text-[10px] tracking-[0.1em] text-center md:text-left uppercase">
                <li>Phone: +30 698 895 9293</li>
                <li>Email: athensluxurytransfer@gmail.com</li>
                <li className="text-white/20 italic">Athens, Greece</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-bona text-[#7a6f40] text-[10px] uppercase tracking-[0.4em]">© 2026 Athens Luxury Transfer</p>
            <div className="flex space-x-4 opacity-20">
               <span className="text-[9px] text-white border border-white/20 px-2 py-1">VISA</span>
               <span className="text-[9px] text-white border border-white/20 px-2 py-1">MASTERCARD</span>
               <span className="text-[9px] text-white border border-white/20 px-2 py-1">AMEX</span>
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