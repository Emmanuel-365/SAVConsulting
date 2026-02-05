"use client";

import { Zap, ShieldCheck, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Réactivité < 2h",
    desc: "Fini les plateformes anonymes. Vous avez un interlocuteur unique joignable sur WhatsApp/Teams. Réponse garantie sous 2 heures ouvrées.",
    color: "bg-blue-50 text-slate-600",
    border: "border-blue-100"
  },
  {
    icon: ShieldCheck,
    title: "Zéro risque RH",
    desc: "Pas de coûts cachés, pas de congés payés à gérer, pas d'arrêts maladie. Une flexibilité totale pour absorber vos pics de période fiscale.",
    color: "bg-rose-50 text-rose-600",
    border: "border-rose-200"
  },
  {
    icon: Fingerprint,
    title: "Sur-mesure",
    desc: "Nous ne sommes pas une usine. Nous nous adaptons à VOTRE plan comptable et VOS méthodes de classement. Comme un collaborateur interne.",
    color: "bg-blue-50 text-slate-600",
    border: "border-blue-100"
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-white border-b relative overflow-hidden">
      {/* Pink accent glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-100/20 blur-[100px] -z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Mobile Only (Pour guider) */}
        <div className="md:hidden text-center mb-8">
           <h2 className="text-2xl font-bold text-blue-950">Pourquoi nous choisir ?</h2>
           <p className="text-sm text-slate-500 mt-2 font-medium">Spécialisé cabinets de 0 à 50 collaborateurs.</p>
        </div>

        {/* Desktop Header Added for completeness */}
        <div className="hidden md:block text-center mb-20 max-w-2xl mx-auto">
           <h2 className="text-4xl font-black text-blue-950 mb-6">Un partenaire <span className="text-rose-600 italic">discret</span>, fiable et sécurisé.</h2>
           <p className="text-lg text-slate-600 font-medium">Une solution pensée pour les cabinets de 0 à 50 collaborateurs en pleine croissance.</p>
        </div>

        {/* CONTAINER: Grid on Desktop / Snap Scroll on Mobile */}
        <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:grid md:grid-cols-3 md:gap-12 md:pb-0 md:mx-auto md:px-0 scrollbar-hide">
          
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`snap-center shrink-0 w-[85vw] md:w-auto p-8 md:p-10 rounded-[2.5rem] md:rounded-3xl border-2 ${feature.border} bg-white shadow-xl shadow-blue-900/5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500`}
            >
              <div className={`inline-flex items-center justify-center p-4 rounded-2xl mb-6 ${feature.color} shadow-inner`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-blue-950">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}