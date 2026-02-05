"use client";

import { Scale, BarChart, FileText, Search } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Scale,
    title: "Juridique",
    desc: "Approbation des comptes, AG, modifications de statuts et créations d'entreprises."
  },
  {
    icon: BarChart,
    title: "Reporting",
    desc: "Tableaux de bord personnalisés pour vos clients."
  },
  {
    icon: FileText,
    title: "Recouvrement",
    desc: "Relance des impayés et suivi des règlements."
  },
  {
    icon: Search,
    title: "Audit",
    desc: "Analyse ponctuelle de la conformité des dossiers."
  }
];

export function AdditionalServices() {
  return (
    <section className="py-20 md:py-24 bg-emerald-50/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-4">Services Complémentaires</h2>
          <p className="text-base md:text-lg text-emerald-800/70 max-w-xl mx-auto px-4">Allez plus loin dans l&apos;externalisation avec nos solutions transverses.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm text-center md:text-left hover:border-emerald-300 transition-colors group"
            >
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <service.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-emerald-950 mb-1 md:mb-2">{service.title}</h3>
                <p className="text-emerald-800/60 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}