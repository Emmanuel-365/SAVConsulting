import { PageHero } from "@/components/layout/PageHero";
import { Metadata } from "next";
import { CheckCircle2, Target, Heart, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos | SAV Consulting",
  description: "Découvrez l'histoire, la mission et les valeurs de SAV Consulting, votre partenaire expert en externalisation comptable.",
};

const values = [
  {
    icon: Target,
    title: "Précision",
    desc: "Nous appliquons une rigueur absolue dans le traitement de chaque ligne d'écriture."
  },
  {
    icon: Heart,
    title: "Proximité",
    desc: "Un interlocuteur unique dédié à votre cabinet pour une collaboration fluide."
  },
  {
    icon: Shield,
    title: "Confidentialité",
    desc: "Le respect total du secret professionnel et la protection de vos données."
  },
  {
    icon: CheckCircle2,
    title: "Excellence",
    desc: "Une amélioration continue de nos processus pour dépasser vos attentes."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Notre Mission" 
        subtitle="Soutenir la croissance des cabinets d&apos;expertise comptable en prenant en charge leur production back-office."
        badge="Qui sommes-nous ?"
      />

      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-emerald-900 leading-tight">
              Une extension digitale <br/>
              <span className="text-emerald-600">pour votre cabinet.</span>
            </h2>
            <div className="space-y-4 text-emerald-600 leading-relaxed text-lg">
              <p>Basés en France, avec une infrastructure agile et connectée, nous avons bâti une structure capable de s&apos;intégrer parfaitement dans votre organisation.</p>
              <p>Nous devenons une partie intégrante de votre équipe de production, invisible et efficace.</p>
            </div>
          </div>
          <div className="bg-emerald-50 rounded-3xl p-12 border border-emerald-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 text-emerald-100/50">
                <Target size={120} />
             </div>
             <blockquote className="relative z-10">
                <p className="text-2xl font-medium text-emerald-900 italic leading-relaxed">
                  &quot;Notre objectif est de rendre l&apos;externalisation si fluide qu&apos;elle devienne un levier de rentabilité immédiat.&quot;
                </p>
                <footer className="mt-6 font-bold text-emerald-800">— La Direction, SAV Consulting</footer>
             </blockquote>
          </div>
        </div>
      </section>

      <section className="py-24 bg-emerald-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-900">Nos Valeurs Fondamentales</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-emerald-100 shadow-sm text-center hover:border-rose-100 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-rose-50 text-rose-400 flex items-center justify-center mx-auto mb-6">
                  <v.icon size={24} />
                </div>
                <h3 className="font-bold text-xl text-emerald-900 mb-2">{v.title}</h3>
                <p className="text-emerald-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}