import { PageHero } from "@/components/layout/PageHero";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero title="Politique de Confidentialité" subtitle="Comment nous protégeons vos données et celles de vos clients." />
      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <div className="space-y-12 text-slate-600 leading-relaxed">
          <p>Chez SAV Consulting, la protection des données est fondamentale. Cette politique détaille nos engagements conformément au RGPD.</p>
          
          <div>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">Protection des données clients</h2>
            <p>Dans le cadre de nos prestations d&apos;externalisation, nous agissons en tant que sous-traitant. Nous ne stockons aucune donnée client sur nos serveurs locaux. Toutes les opérations sont effectuées via accès distant sur l&apos;infrastructure du cabinet partenaire.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">Mesures de sécurité</h2>
            <p>Nous utilisons des protocoles de chiffrement VPN de pointe et des accès bi-factoriels pour sécuriser chaque connexion. Nos locaux en France sont sécurisés et l&apos;accès aux postes de travail est restreint.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
