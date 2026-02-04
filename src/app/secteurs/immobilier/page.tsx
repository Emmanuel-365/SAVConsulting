import { PageHero } from "@/components/layout/PageHero";
import { Metadata } from "next";
import { Home, Calculator, Key, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comptabilité Immobilière | SCI, LMNP, LMP | SAV Consulting",
  description: "Solutions d'externalisation pour la comptabilité immobilière. Expertise LMNP et SCI pour cabinets comptables.",
};

export default function RealEstateSectorPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Expertise Immobilier" 
        subtitle="Déléguez la complexité de la comptabilité immobilière (SCI, LMNP, LMP) à des spécialistes."
        badge="Spécialisation Sectorielle"
      />

      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Le marché de l&apos;immobilier demande de la <span className="text-blue-600">réactivité</span>.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              La gestion des SCI et des loueurs en meublé (LMNP/LMP) génère un volume important de petits dossiers. Nous avons industrialisé le traitement de ces flux pour vous permettre de maintenir une rentabilité élevée sur ces missions.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><Calculator size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-900">LMNP / LMP</h4>
                  <p className="text-sm text-slate-500">Traitement des amortissements, déduction des charges et liasses fiscales spécifiques.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><Home size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-900">SCI (IR / IS)</h4>
                  <p className="text-sm text-slate-500">Comptabilité complète, déclarations 2072 ou liasses IS selon l&apos;option fiscale.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="bg-blue-600 rounded-[2.5rem] p-12 text-white shadow-2xl shadow-blue-200">
                <h3 className="text-3xl font-bold mb-6">Vos avantages</h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-white" />
                    <span>Réduction du coût de revient au dossier</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-white" />
                    <span>Respect des délais de déclaration fiscale</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-white" />
                    <span>Connaissance des outils type MEG / MyUnisoft</span>
                  </li>
                </ul>
                <div className="mt-12">
                  <Button className="bg-white text-blue-600 hover:bg-slate-50 rounded-full w-full h-14 text-lg font-bold" asChild>
                    <Link href="/#contact?subject=immobilier">Parler à un expert Immobilier</Link>
                  </Button>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
