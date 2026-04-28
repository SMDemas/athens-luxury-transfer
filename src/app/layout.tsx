import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

// Ρύθμιση των fonts για να ταιριάζουν με το banner
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Athens Luxury Transfer | VIP Chauffeur Services",
  description: "Premium limousine and private transfer services in Athens, Greece.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="antialiased overflow-x-hidden">
        {/* Εδώ εμφανίζεται το περιεχόμενο όλου του site */}
        {children}

        {/* Το CookieBanner μπαίνει στο τέλος. 
            Θα εμφανιστεί μόνο αν δεν υπάρχει η επιλογή στο localStorage.
        */}
        <CookieBanner />
      </body>
    </html>
  );
}
