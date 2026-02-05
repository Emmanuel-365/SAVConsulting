import { PageHero } from "@/components/layout/PageHero";
import { Metadata } from "next";
import { Settings, Lock, MessageSquare, Monitor, CheckSquare, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Processus d'Intégration & Onboarding | SAV Consulting",
  description: "Comment se passe le démarrage avec SAV Consulting ? Découvrez notre méthode d'intégration fluide en 4 étapes techniques.",
};

const steps = [
  {
    icon: Settings,
    title: "1. Audit Technique (J-0)",
    desc: "Nous analysons votre infrastructure (Serveur local ? Cloud ? SaaS ?). Nous identifions les accès nécessaires (création de comptes utilisateurs 'SAV Consulting' sur vos logiciels)."
  },
  {
    icon: Lock,
    title: "2. Sécurisation (J+2)",
    desc: "Mise en place du tunnel VPN si nécessaire. Signature des NDA. Configuration des accès restreints (nous ne demandons que les droits nécessaires à la production)."
  },
  {
    icon: Monitor,
    title: "3. Formation Outils (J+5)",
    desc: "Nos collaborateurs se forment à VOS spécificités (classement GED, codes journaux, analytique). Nous ne vous demandons pas de changer vos habitudes."
  },
  {
    icon: CheckSquare,
    title: "4. Phase Test (J+7)",
    desc: "Lancement sur un dossier pilote non critique. Double contrôle systématique. Ajustement des procédures selon vos retours."
  },
  {
    icon: RefreshCw,
    title: "5. Rythme de Croisière (M+1)",
    desc: "Production autonome. Point hebdomadaire avec votre superviseur dédié. Reporting mensuel des volumes traités."
  }
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Démarrer en toute simplicité" 
        subtitle="Nous avons standardisé l'intégration pour qu'elle ne vous prenne que quelques heures de temps cumulé."
        badge="Onboarding Client"
      />

      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="relative border-l-2 border-blue-200 pl-8 md:pl-16 space-y-16">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] md:-left-[73px] top-0 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow-sm" />
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start p-6 md:p-8 rounded-3xl bg-blue-50 border border-blue-100 hover:bg-white hover:shadow-lg transition-all">
                   <div className="h-14 w-14 rounded-2xl bg-white border border-blue-100 text-slate-600 flex items-center justify-center shrink-0 shadow-sm">
                      <step.icon size={28} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">
                         {step.desc}
                      </p>
                   </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Technique */}
      <section className="py-24 bg-blue-950 text-white">
         <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Questions Techniques</h2>
            <div className="space-y-8">
               <div>
                  <h4 className="font-bold text-xl mb-2 flex items-center gap-3"><MessageSquare className="text-rose-400"/> Comment communique-t-on au quotidien ?</h4>
                  <p className="text-blue-100/60 pl-9">Nous utilisons vos canaux : Email, Teams, Slack, WhatsApp ou via les commentaires de votre outil de production (ACD, Pennylane...).</p>
               </div>
               <div>
                  <h4 className="font-bold text-xl mb-2 flex items-center gap-3"><Monitor className="text-rose-400"/> Avez-vous besoin d&apos;une licence supplémentaire ?</h4>
                  <p className="text-blue-100/60 pl-9">Oui, généralement il faut créer un accès utilisateur pour notre collaborateur. Le coût de cette licence reste à votre charge, mais c&apos;est le seul coût caché.</p>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}