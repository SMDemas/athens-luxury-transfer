'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Local Mastery',
    description: 'Expert navigation through Athens’ most exclusive routes and landmarks.',
  },
  {
    title: 'Total Discretion',
    description: 'Professionalism and privacy prioritized for every high-profile transfer.',
  },
  {
    title: 'Unstopable Support',
    description: 'A 24/7 dedicated concierge approach to your transportation needs.',
  },
  {
    title: 'Premium Fleet',
    description: 'The highest standards of comfort maintained in every luxury vehicle.',
  },
];

const Features = () => {
  return (
    <section className="relative py-24 bg-black w-full flex justify-center border-none overflow-hidden">
      <div className="w-full max-w-[1500px] px-6 md:px-16">
        
        {/* DESKTOP VIEW */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                ease: [0.22, 1, 0.36, 1], 
                delay: index * 0.15 
              }}
              className="flex flex-col"
            >
              <h3 className="font-bona text-[14px] font-bold text-[#7a6f40] mb-4 uppercase tracking-[0.3em]">
                {feature.title}
              </h3>
              <p className="font-noto text-[#e1e1e1] text-[12px] leading-relaxed tracking-wide opacity-80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden flex justify-center -mt-[90px]"> {/* Συνολικό ανέβασμα 90px */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            /* WebkitMaskImage: Το gradient ξεκινά το σβήσιμο στο 60%, 
               άρα το 40% δεξιά είναι fade out.
            */
            className="w-[85%] bg-[#0d0d0d] border-l border-y border-[#7a6f40]/20 p-8 relative overflow-visible"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
              maskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
            }}
          >
            <h2 className="font-bona text-[#7a6f40] text-lg uppercase tracking-widest mb-8 border-b border-[#7a6f40]/10 pb-4">
              Why Us
            </h2>
            
            <ul className="space-y-8">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.6 + (index * 0.15), ease: [0.215, 0.61, 0.355, 1] }}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#7a6f40]" /> 
                    <h3 className="font-bona text-[#7a6f40] text-[12px] font-bold uppercase tracking-widest">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-noto text-[#e1e1e1] text-[11px] leading-relaxed pl-4 opacity-70">
                    {feature.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Features;