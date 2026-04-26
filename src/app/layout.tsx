import { Noto_Sans, Bona_Nova } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const noto = Noto_Sans({
  subsets: ["latin", "greek"],
  variable: "--font-noto",
  weight: ["300", "400", "600", "700"],
  display: 'swap',
});

const bona = Bona_Nova({
  subsets: ["latin"], // Η Bona Nova συχνά έχει καλύτερη υποστήριξη έτσι, αν δεις θέμα με τα ελληνικά βάλε "greek"
  variable: "--font-bona",
  weight: ["400", "700"],
  display: 'swap',
});

// --- SEO & GEO CONFIGURATION ---
export const metadata: Metadata = {
  title: {
    default: "Athens Luxury Transfer | Premium Chauffeur & VIP Tours Greece",
    template: "%s | Athens Luxury Transfer"
  },
  description: "Experience the epitome of Greek hospitality with Athens Luxury Transfer. Specialized in VIP airport transfers, professional chauffeur services, and bespoke private tours to Delphi, Sounio, and Peloponnese.",
  keywords: ["Athens Luxury Transfer", "VIP Transfer Athens", "Private Chauffeur Greece", "Athens Airport Pickup", "Luxury Tours Athens", "Cape Sounio Private Tour", "Delphi Luxury Trip"],
  authors: [{ name: "Athens Luxury Transfer" }],
  creator: "Athens Luxury Transfer",
  metadataBase: new URL('https://athensluxurytransfer.gr'), 
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://athensluxurytransfer.gr",
    title: "Athens Luxury Transfer | Premium Chauffeur Services",
    description: "Professional, reliable, and luxury transportation services in Athens and all over Greece.",
    siteName: "Athens Luxury Transfer",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Athens Luxury Transfer Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athens Luxury Transfer | VIP Services",
    description: "Luxury private transfers and tours in Athens, Greece.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Athens Luxury Transfer",
    "description": "High-end chauffeur and private tour services in Athens, Greece. Specializing in airport transfers and multi-day luxury excursions.",
    "url": "https://athensluxurytransfer.gr",
    "telephone": "+306988959293",
    "email": "athensluxurytransfer@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Athens",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.9838",
      "longitude": "23.7275"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "City", "name": "Athens" },
      { "@type": "City", "name": "Piraeus" },
      { "@type": "State", "name": "Peloponnese" },
      { "@type": "City", "name": "Delphi" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Luxury Transfer Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport VIP Transfer" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Private Sightseeing Tours" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Chauffeur Service" } }
      ]
    }
  };

  return (
    <html lang="en" className={`${noto.variable} ${bona.variable}`}>
      <body className="antialiased bg-black text-white flex flex-col min-h-screen">
        {/* Το script μπορεί να μπει εδώ, το Next.js το κάνει optimize αυτόματα */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
