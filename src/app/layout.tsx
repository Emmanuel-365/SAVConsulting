import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileDock } from "@/components/layout/MobileDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://sav-consulting.fr";

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "SAV Consulting | Externalisation Comptable & Paie en Marque Blanche",
  description: "Libérez votre cabinet d'expertise comptable des tâches à faible valeur ajoutée. Externalisation saisie, lettrage et paie. Solution flexible et sécurisée.",
  keywords: ["externalisation comptable", "marque blanche", "saisie comptable", "gestion de la paie", "cabinet expertise comptable", "back-office comptable", "SAV Consulting"],
  authors: [{ name: "SAV Consulting" }],
  metadataBase: new URL(domain),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SAV Consulting | Externalisation Comptable Marque Blanche",
    description: "La solution de back-office pour les cabinets comptables modernes. Gagnez en rentabilité.",
    url: domain,
    siteName: "SAV Consulting",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "SAV Consulting - Externalisation Comptable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAV Consulting | Externalisation Comptable",
    description: "Libérez votre cabinet des tâches à faible valeur ajoutée.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Données structurées pour Google (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SAV Consulting",
    "description": "Services d'externalisation comptable et sociale en marque blanche pour les cabinets d'expertise comptable.",
    "url": domain,
    "telephone": "06 59 24 44 51",
    "email": "contact.savconsulting@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Douala",
      "addressCountry": "CM"
    },
    "serviceType": ["Comptabilité", "Paie", "Fiscalité"],
    "offers": {
      "@type": "Offer",
      "description": "Audit gratuit et phase pilote sur un dossier"
    }
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
        <MobileDock />
        <Footer />
      </body>
    </html>
  );
}
