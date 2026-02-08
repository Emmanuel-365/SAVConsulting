import { PageHero } from "@/components/layout/PageHero";
import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Saisie Comptable & Révision | SAV Consulting",
  description: "Externalisez la saisie de vos journaux d'achats, ventes et banques. Une production rigoureuse en marque blanche pour votre cabinet.",
};

const features = [
  "Saisie et imputation comptable",
  "Lettrage des comptes",
  "Rapprochements bancaires quotidiens",
  "Pré-révision et contrôles de cohérence",
  "Préparation des déclarations de TVA",
  "Gestion des justificatifs et archivage"
];

export default function AccountingServicePage() {
  return (
    <main className="min-h-screen bg-white text-left">
      <PageHero
        title="Saisie Comptable & Révision"
        subtitle="Confiez-nous la production de base et libérez du temps pour le conseil stratégique."
        badge="Notre Expertise"
      />

      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight text-left">
              Une production <span className="text-blue-600">industrielle</span> avec une rigueur <span className="text-rose-400">artisanale</span>.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed text-left">
              SAV Consulting prend en charge l&apos;intégralité de ce flux de production en s&apos;adaptant strictement à vos besoins spécifiques.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 text-left">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-900/20" asChild>
                <Link href="/contact?subject=compta">Demander une étude de vos volumes</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden group">
              <img
                src="/hero-saisie.png"
                alt="Saisie Comptable Digitale"
                className="w-full h-auto opacity-100 group-hover:scale-105 transition-transform duration-500 rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 uppercase tracking-widest text-sm opacity-60">Logiciels maîtrisés</h3>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
            <span className="font-black text-2xl">SAGE</span>
            <span className="font-black text-2xl">CEGID</span>
            <span className="font-black text-2xl">ACD</span>
            <span className="font-black text-2xl">PENNYLANE</span>
            <span className="font-black text-2xl">MYUNISOFT</span>
          </div>
        </div>
      </section>
    </main>
  );
}
