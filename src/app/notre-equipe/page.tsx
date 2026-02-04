import { PageHero } from "@/components/layout/PageHero";
import { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre Équipe | SAV Consulting",
  description: "Rencontrez les experts derrière SAV Consulting. Une équipe de comptables et gestionnaires de paie dédiés à votre réussite.",
};

const team = [
  {
    name: "Emmanuel M.",
    role: "Fondateur & Directeur Conseil",
    desc: "Expert en gestion et passionné par l'optimisation digitale des processus comptables.",
    initials: "EM"
  },
  {
    name: "Sarah L.",
    role: "Responsable Pôle Paie",
    desc: "Spécialiste Silae avec 10 ans d'expérience dans la gestion sociale française.",
    initials: "SL"
  },
  {
    name: "Jean-Baptiste K.",
    role: "Superviseur Comptable",
    desc: "Garant de la conformité et de la qualité de la saisie sur les plateformes Cegid et Sage.",
    initials: "JK"
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Une équipe d'experts" 
        subtitle="Découvrez les visages de ceux qui accompagnent votre cabinet au quotidien."
        badge="Humain & Expertise"
      />

      {/* Intro Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Des talents formés et certifiés</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Notre force réside dans la sélection rigoureuse de nos collaborateurs. Tous nos comptables et gestionnaires de paie sont diplômés et formés en continu aux évolutions de la réglementation française.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {team.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-blue-600 rounded-full rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-100 rounded-full flex items-center justify-center border-4 border-white shadow-xl overflow-hidden">
                   <span className="text-4xl font-black text-slate-300">{member.initials}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-start gap-6">
              <div className="h-14 w-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/20">
                <GraduationCap size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Diplômés d&apos;État</h4>
                <p className="text-slate-400 text-sm">Formation académique rigoureuse en comptabilité et gestion.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="h-14 w-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/20">
                <Briefcase size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Expérience Cabinet</h4>
                <p className="text-slate-400 text-sm">Nos superviseurs ont tous travaillé en cabinet d&apos;expertise français.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="h-14 w-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/20">
                <Award size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Veille Continue</h4>
                <p className="text-slate-400 text-sm">Mise à jour régulière sur les lois de finances et conventions collectives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
