import { PageHero } from "@/components/layout/PageHero";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero title="Mentions Légales" subtitle="Informations juridiques concernant SAV Consulting." />
      <section className="py-20 container mx-auto px-4 max-w-4xl prose prose-slate">
        <div className="space-y-12 text-slate-600">
          <div>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">1. Éditeur du site</h2>
            <p>Le site est édité par SAV Consulting.</p>
            <p>Email : contact.savconsulting@gmail.com</p>
            <p>Téléphone : +33 6 59 24 44 51</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">2. Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">3. Propriété intellectuelle</h2>
            <p>L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
