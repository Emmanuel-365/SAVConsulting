import { PageHero } from "@/components/layout/PageHero";
import { Metadata } from "next";
import { Users, FileText, Calendar, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Externalisation Paie & Social | SAV Consulting",
  description: "Sécurisez la gestion sociale de vos clients. Établissement des bulletins, DSN et veille conventionnelle par nos experts paie.",
};

const workflows = [
  {
    icon: Calendar,
    title: "Collecte des variables",
    desc: "Nous récupérons vos éléments de paie via vos outils ou fichiers d&apos;import."
  },
  {
    icon: FileText,
    title: "Établissement des bulletins",
    desc: "Saisie et calcul des bulletins sur Silae ou votre logiciel habituel."
  },
  {
    icon: ShieldCheck,
    title: "Contrôle & DSN",
    desc: "Vérification de la cohérence et télétransmission de la DSN dans les délais."
  },
  {
    icon: Users,
    title: "Sorties & Administratif",
    desc: "Gestion des STC, certificats de travail et attestations employeur."
  }
];

export default function PayrollServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Gestion Sociale & Paie"
        subtitle="Externalisez la complexité de la paie pour garantir une conformité totale à vos clients."
        badge="Expertise Sociale"
        image="/hero-paie.png"
      />

      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Un pôle social dédié à votre service</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            La gestion de la paie demande une vigilance constante. SAV Consulting met à votre disposition des experts formés aux spécificités des conventions collectives françaises.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {workflows.map((item, i) => (
            <div key={i} className="relative p-8 rounded-3xl bg-blue-50 border border-blue-100 hover:shadow-xl hover:bg-white transition-all group text-left">
              <div className="h-12 w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <item.icon size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-blue-950 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-rose-300 text-sm font-medium mb-6">
                Maîtrise Silae
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-left">L&apos;expertise au cœur de vos outils.</h2>
              <p className="text-blue-100/60 text-lg leading-relaxed mb-8 text-left">
                Notre équipe est nativement formée sur <strong>Silae</strong>, le standard du marché français.
              </p>
              <ul className="space-y-4 mb-10 text-left">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-rose-400" />
                  <span className="text-blue-100">Veille conventionnelle permanente</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-rose-400" />
                  <span className="text-blue-100">Respect strict des calendriers DSN</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-rose-400" />
                  <span className="text-blue-100">Confidentialité absolue des données</span>
                </li>
              </ul>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 rounded-full shadow-xl shadow-blue-900/40 font-bold" asChild>
                <Link href="/contact?subject=paie">Étudions vos besoins paie</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                <div className="aspect-video bg-blue-900/50 rounded-xl overflow-hidden relative border border-blue-800 flex items-center justify-center">
                  <span className="text-blue-500 italic">Expertise Silae Certifiée</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
