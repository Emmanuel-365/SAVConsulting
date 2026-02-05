"use client";

import { Home, Rocket, Briefcase, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const sectors = [
  {
    icon: Home,
    title: "Immobilier",
    desc: "Expertise en LMNP, SCI et comptabilité de copropriété. Nous maîtrisons les spécificités fiscales du secteur."
  },
  {
    icon: Rocket,
    title: "Startups & Tech",
    desc: "Accompagnement des entreprises en forte croissance. Gestion agile et reporting financier en temps réel."
  },
  {
    icon: Briefcase,
    title: "Professions Libérales",
    desc: "Solutions dédiées aux BNC (médical, juridique, conseil). Standardisation des flux pour une rentabilité optimale."
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Intégration automatique des flux de vente et gestion des stocks. Compatibilité avec Shopify, Prestashop, etc."
  },
  {
    icon: Briefcase,
    title: "Sociétés Commerciales",
    desc: "Gestion comptable courante pour les TPE/PME du secteur du commerce et des services."
  }
];

export function Expertise() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-20 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-emerald-950 mb-4 md:mb-6"
            >
              Une expertise métier<br/> <span className="text-emerald-600">selon votre secteur.</span>
            </motion.h2>
            <p className="text-base md:text-lg text-emerald-800/70">
              Nous comprenons les enjeux spécifiques de vos clients pour une production pertinente dès le premier jour.
            </p>
          </div>
          <div className="md:hidden text-rose-400 font-semibold text-sm animate-pulse">
            Glissez pour explorer 👉
          </div>
        </div>

        {/* MOBILE: Swipe / DESKTOP: Grid */}
        <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-5 md:gap-6 md:pb-0 md:mx-auto md:px-0 scrollbar-hide">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="snap-center shrink-0 w-[80vw] md:w-auto p-8 rounded-3xl border border-emerald-100 bg-emerald-50/20 hover:bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="h-14 w-14 rounded-2xl bg-white border border-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <sector.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-emerald-950">{sector.title}</h3>
              <p className="text-emerald-800/60 text-sm leading-relaxed">
                {sector.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}