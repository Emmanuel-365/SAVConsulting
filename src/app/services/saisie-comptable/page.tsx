import { PageHero } from "@/components/layout/PageHero";
import { Metadata } from "next";
import { CheckCircle2, Zap, Shield, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Saisie Comptable & Révision | SAV Consulting",
  description: "Externalisez la saisie de vos journaux d'achats, ventes et banques. Une production rigoureuse en marque blanche pour votre cabinet.",
};

const features = [
  "Saisie et imputation comptable",
  "Lettrage des comptes tiers (fournisseurs/clients)",
  "Rapprochements bancaires quotidiens ou hebdomadaires",
  "Pré-révision et contrôles de cohérence",
  "Préparation des déclarations de TVA",
  "Gestion des justificatifs et archivage numérique"
];

export default function AccountingServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Saisie Comptable & Révision" 
        subtitle="Confiez-nous la production de base et libérez du temps pour le conseil stratégique."
        badge="Notre Expertise"
      />

      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Une production <span className="text-blue-600">industrielle</span> avec une rigueur <span className="text-blue-600">artisanale</span>.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              La saisie comptable est le socle de votre métier, mais c&apos;est aussi la tâche la plus chronophage. SAV Consulting prend en charge l&apos;intégralité de ce flux de production en s&apos;adaptant strictement à vos méthodes de travail.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full" asChild>
                <Link href="/#contact?subject=compta">Demander une étude de vos volumes</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <Zap className="text-blue-600 mb-4" size={32} />
                <h4 className="font-bold text-slate-900 mb-2">Rapidité</h4>
                <p className="text-sm text-slate-500">Traitement de vos pièces sous 24h à 48h selon l&apos;urgence.</p>
              </div>
              <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-200">
                <Shield className="text-blue-200 mb-4" size={32} />
                <h4 className="font-bold mb-2">Fiabilité</h4>
                <p className="text-sm text-blue-100">Double contrôle systématique par nos superviseurs seniors.</p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-slate-900 p-8 rounded-3xl text-white">
                <BarChart3 className="text-blue-400 mb-4" size={32} />
                <h4 className="font-bold mb-2">Transparence</h4>
                <p className="text-sm text-slate-400">Suivi en temps réel de l&apos;avancement sur vos propres outils.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <CheckCircle2 className="text-green-600 mb-4" size={32} />
                <h4 className="font-bold text-slate-900 mb-2">Qualité</h4>
                <p className="text-sm text-slate-500">Respect scrupuleux de votre plan comptable interne.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section (Reminder) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-12">Nous travaillons sur vos outils habituels</h3>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">
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
