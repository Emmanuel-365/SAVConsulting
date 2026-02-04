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
        subtitle="Soutenir la croissance des cabinets d'expertise comptable en prenant en charge leur production back-office avec excellence."
        badge="Qui sommes-nous ?"
      />

      {/* Story Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
              Une extension digitale <br/>
              <span className="text-blue-600">pour votre cabinet.</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                SAV Consulting est né d&apos;un constat simple : les experts-comptables manquent de temps pour le conseil à cause d&apos;une surcharge de tâches administratives répétitives.
              </p>
              <p>
                Basés à Douala, au cœur d&apos;un écosystème de talents formés aux normes françaises, nous avons bâti une structure capable de s&apos;intégrer parfaitement dans votre organisation.
              </p>
              <p>
                Nous ne sommes pas un simple prestataire externe ; nous devenons une partie intégrante de votre équipe de production, invisible et efficace.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-3xl p-12 border border-slate-100 relative">
             <div className="absolute top-0 right-0 p-8 text-slate-200">
                <Target size={120} />
             </div>
             <blockquote className="relative z-10">
                <p className="text-2xl font-medium text-slate-800 italic leading-relaxed">
                  &quot;Notre objectif est de rendre l&apos;externalisation si fluide qu&apos;elle devienne un levier de rentabilité immédiat pour nos partenaires.&quot;
                </p>
                <footer className="mt-6 font-bold text-slate-900">— La Direction, SAV Consulting</footer>
             </blockquote>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Nos Valeurs Fondamentales</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
                  <v.icon size={24} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
