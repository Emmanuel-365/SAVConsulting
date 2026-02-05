import { PageHero } from "@/components/layout/PageHero";
import { Metadata } from "next";
import { ShieldCheck, Lock, Globe, Server, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Sécurité & Conformité RGPD | SAV Consulting",
  description: "Découvrez nos protocoles de sécurité pour protéger vos données comptables. Conformité RGPD et accès chiffrés garantis.",
};

const protocols = [
  {
    title: "Accès chiffré VPN/TSE",
    desc: "Toutes nos connexions sont sécurisées par des tunnels VPN cryptés. Nous travaillons directement sur vos serveurs.",
    icon: Lock
  },
  {
    title: "Zéro stockage local",
    desc: "Aucune donnée client n&apos;est téléchargée ou stockée sur nos postes en France. Les flux restent sur votre infrastructure.",
    icon: Server
  },
  {
    title: "Conformité RGPD",
    desc: "Processus conformes au Règlement Général sur la Protection des Données. Signature systématique d&apos;un NDA.",
    icon: Globe
  },
  {
    title: "Sélection rigoureuse",
    desc: "Vérification des antécédents et formation continue aux enjeux de cybersécurité pour tout notre personnel.",
    icon: UserCheck
  }
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="La Sécurité au cœur de nos process" 
        subtitle="Nous traitons vos données avec le même niveau d&apos;exigence qu&apos;un cabinet en France."
        badge="Engagement & Confiance"
      />

      <section className="py-24 container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-16">
          
          <div className="space-y-6 text-left">
            <h2 className="text-3xl font-bold text-slate-900">Un protocole étanche</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Pour SAV Consulting, la sécurité est la base de notre relation de confiance. Nous avons mis en place une infrastructure technique conçue pour garantir une étanchéité totale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {protocols.map((p, i) => (
              <div key={i} className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100 group hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all text-left">
                <div className="h-12 w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  <p.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-950 rounded-3xl p-10 text-white flex flex-col md:flex-row gap-8 items-center border border-blue-900 shadow-2xl">
             <div className="h-20 w-20 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                <ShieldCheck size={40} className="text-blue-400" />
             </div>
             <div className="text-left">
                <h4 className="text-2xl font-bold mb-2">Audit de Sécurité</h4>
                <p className="text-blue-100/60 leading-relaxed">
                  Nous sommes ouverts à toute demande d&apos;audit technique de la part de vos services informatiques pour valider nos protocoles de connexion.
                </p>
             </div>
          </div>

        </div>
      </section>
    </main>
  );
}
