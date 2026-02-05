import { PageHero } from "@/components/layout/PageHero";
import { Metadata } from "next";
import { TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Études de Cas & Témoignages | SAV Consulting",
  description: "Découvrez comment nous avons aidé des cabinets d'expertise comptable à gagner en rentabilité et en sérénité.",
};

const cases = [
  {
    title: "Cabinet Alpha (Paris) - 30 Collab.",
    problem: "Forte croissance mais pénurie de candidats pour les postes de saisie. Retard accumulé sur 200 dossiers TPE.",
    solution: "Mise en place d'une équipe dédiée chez SAV Consulting sous 1 semaine. Accès direct via leur GED.",
    result: "Rattrapage du retard en 1 mois. Le cabinet a pu signer 15 nouveaux clients sans recruter en interne.",
    stats: [
      { label: "Dossiers traités", value: "200+" },
      { label: "Économie", value: "40%" },
      { label: "Mise en place", value: "5j" }
    ],
    tags: ["Saisie", "TVA", "Rattrapage"]
  },
  {
    title: "Cabinet Beta (Lyon) - 10 Collab.",
    problem: "Départ soudain du responsable pôle social. Risque majeur sur les échéances DSN de 500 bulletins.",
    solution: "Externalisation d'urgence du pôle social vers nos experts Silae. Audit rapide des paramétrages.",
    result: "Aucun retard de déclaration. Le cabinet a décidé de pérenniser l'externalisation paie.",
    stats: [
      { label: "Bulletins / mois", value: "500" },
      { label: "Erreurs DSN", value: "0" },
      { label: "Satisfaction", value: "100%" }
    ],
    tags: ["Paie", "Silae", "Urgence"]
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Ils nous font confiance" 
        subtitle="Des exemples concrets de collaboration réussie avec des cabinets de toutes tailles."
        badge="Success Stories"
      />

      <section className="py-24 container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-20">
          {cases.map((study, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-12 items-start border-b border-slate-100 pb-20 last:border-0 last:pb-0">
              <div className="md:w-1/3 sticky top-32">
                <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100">
                   <h3 className="font-bold text-xl text-slate-900 mb-6">{study.title}</h3>
                   <div className="space-y-6">
                      {study.stats.map((stat, j) => (
                        <div key={j}>
                           <div className="text-3xl font-black text-blue-600">{stat.value}</div>
                           <div className="text-xs text-slate-500 uppercase font-semibold">{stat.label}</div>
                        </div>
                      ))}
                   </div>
                   <div className="mt-8 flex flex-wrap gap-2">
                      {study.tags.map((tag, k) => (
                        <span key={k} className="px-3 py-1 bg-white border border-blue-100 rounded-full text-xs font-medium text-blue-700">
                           {tag}
                        </span>
                      ))}
                   </div>
                </div>
              </div>

              <div className="md:w-2/3 space-y-10 pt-4">
                 <div>
                    <div className="flex items-center gap-3 mb-3 text-rose-400 font-bold">
                       <Clock size={20} />
                       <h4>Le Défi Initial</h4>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed">{study.problem}</p>
                 </div>
                 <div>
                    <div className="flex items-center gap-3 mb-3 text-blue-600 font-bold">
                       <TrendingUp size={20} />
                       <h4>La Solution SAV Consulting</h4>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed">{study.solution}</p>
                 </div>
                 <div>
                    <div className="flex items-center gap-3 mb-3 text-blue-700 font-bold">
                       <CheckCircle size={20} />
                       <h4>Les Résultats</h4>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">{study.result}</p>
                 </div>
                 <div className="pt-6">
                    <Button variant="outline" className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50" asChild>
                       <Link href="/contact?subject=audit">Obtenir les mêmes résultats</Link>
                    </Button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-white text-center">
         <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Prêt à écrire votre success story ?</h2>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-rose-50 h-14 px-8 rounded-full shadow-xl font-bold transition-colors" asChild>
               <Link href="/contact?subject=audit">Réserver mon Audit</Link>
            </Button>
         </div>
      </section>
    </main>
  );
}
