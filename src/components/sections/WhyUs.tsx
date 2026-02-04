"use client";

import { Zap, ShieldCheck, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Réactivité < 2h",
    desc: "Fini les plateformes anonymes. Vous avez un interlocuteur unique joignable sur WhatsApp/Teams. Réponse garantie sous 2 heures ouvrées.",
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100"
  },
  {
    icon: ShieldCheck,
    title: "Zéro risque RH",
    desc: "Pas de coûts cachés, pas de congés payés à gérer, pas d'arrêts maladie. Une flexibilité totale pour absorber vos pics de période fiscale.",
    color: "bg-green-50 text-green-600",
    border: "border-green-100"
  },
  {
    icon: Fingerprint,
    title: "Sur-mesure",
    desc: "Nous ne sommes pas une usine. Nous nous adaptons à VOTRE plan comptable et VOS méthodes de classement. Comme un collaborateur interne.",
    color: "bg-purple-50 text-purple-600",
    border: "border-purple-100"
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-24 bg-white border-b relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Mobile Only (Pour guider) */}
        <div className="md:hidden text-center mb-8">
           <h2 className="text-2xl font-bold text-slate-900">Pourquoi nous choisir ?</h2>
           <p className="text-sm text-slate-500 mt-2">Spécialisé cabinets de 0 à 50 collaborateurs.</p>
        </div>

        {/* Desktop Header Added for completeness */}
        <div className="hidden md:block text-center mb-16 max-w-2xl mx-auto">
           <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Un partenaire discret, fiable et sécurisé.</h2>
           <p className="text-slate-600">Une solution pensée pour les cabinets de 0 à 50 collaborateurs en pleine croissance.</p>
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
              className={`snap-center shrink-0 w-[85vw] md:w-auto p-6 md:p-0 rounded-2xl md:rounded-none border md:border-0 ${feature.border} md:border-transparent bg-white md:bg-transparent shadow-sm md:shadow-none flex flex-col md:block items-start text-left`}
            >
              <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 md:mb-6 ${feature.color}`}>
                <feature.icon className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {feature.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}