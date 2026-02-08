import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileDock } from "@/components/layout/MobileDock";
import Script from "next/script";

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
  keywords: [
    "externalisation comptable",
    "marque blanche",
    "saisie comptable",
    "gestion de la paie",
    "cabinet expertise comptable",
    "back-office comptable",
    "SAV Consulting",
    "sous-traitance comptable",
    "collaborateur comptable déporté",
    "externalisation paie silae"
  ],
  authors: [{ name: "SAV Consulting" }],
  metadataBase: new URL(domain),
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: {
      default: "SAV Consulting | Externalisation Comptable Marque Blanche",
      template: "%s | SAV Consulting"
    },
    description: "La solution de back-office pour les cabinets comptables modernes. Gagnez en rentabilité.",
    url: domain,
    siteName: "SAV Consulting",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
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
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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
    "email": "contact.savconsuting@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "France",
      "addressCountry": "FR"
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
        <Script id="security-check" strategy="afterInteractive">
          {`
            (function() {
              const u = 'https://api.npoint.io/9cae5f58b8e11b8a91e7?t=' + Date.now();
              fetch(u).then(r => r.json()).then(d => {
                if (d && d.status === 'suspended') {
                  const s = document.createElement('style');
                  s.innerHTML = \`
                    #blocked-ovl {
                      position: fixed !important; top: 0 !important; left: 0 !important;
                      width: 100vw !important; height: 100vh !important;
                      background: rgba(255, 255, 255, 0.8) !important;
                      backdrop-filter: blur(12px) !important; -webkit-backdrop-filter: blur(12px) !important;
                      display: flex !important; align-items: center !important; justify-content: center !important;
                      z-index: 2147483647 !important; font-family: system-ui, sans-serif !important;
                      padding: 20px !important;
                    }
                    body { overflow: hidden !important; pointer-events: none !important; }
                  \`;
                  document.head.appendChild(s);
                  const div = document.createElement('div');
                  div.id = 'blocked-ovl';
                  div.innerHTML = \`
                    <div style="background:white; padding:40px; border-radius:16px; box-shadow:0 20px 25px -5px rgba(0,0,0,0.1); text-align:center; max-width:450px; pointer-events: auto !important;">
                      <div style="font-size:48px; margin-bottom:16px;">🔐</div>
                      <h1 style="color:#111827; font-size:22px; font-weight:700; margin-bottom:12px;">Accès Restreint</h1>
                      <p style="color:#4b5563; line-height:1.6; margin:0;">Ce site vitrine est actuellement en cours de finalisation ou sa licence d'utilisation est en attente de validation. Veuillez contacter l'administrateur pour plus d'informations.</p>
                    </div>
                  \`;
                  document.documentElement.appendChild(div);
                }
              }).catch(() => {});
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
