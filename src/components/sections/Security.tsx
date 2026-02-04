"use client";

import { ShieldCheck, Lock, Globe, Server } from "lucide-react";
import { motion } from "framer-motion";

const securityPoints = [
  {
    icon: Lock,
    title: "Accès Sécurisés",
    desc: "Connexion exclusive via VPN chiffré ou accès distant (TSE, Citrix)."
  },
  {
    icon: Globe,
    title: "Conformité RGPD",
    desc: "Signature d'un accord de confidentialité (NDA) et clauses de secret."
  },
  {
    icon: Server,
    title: "Données Souveraines",
    desc: "Travail direct sur vos serveurs ou vos outils SaaS habituels."
  },
  {
    icon: ShieldCheck,
    title: "Traçabilité",
    desc: "Chaque action est auditée par votre interlocuteur unique dédié."
  }
];

export function Security() {
  return (
    <section className="py-20 md:py-32 bg-slate-950 text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          
          <div className="lg:w-1/3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-medium mb-6">
                Zéro compromis sur la sécurité
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Production <span className="text-blue-500">100% sécurisée.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                Nous avons bâti une infrastructure étanche pour garantir la confidentialité totale de vos flux.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {securityPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-blue-600/20 text-blue-500 flex items-center justify-center mb-4 md:mb-6 border border-blue-500/20">
                  <point.icon size={20} className="md:size-24" />
                </div>
                <h3 className="text-sm md:text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-slate-500 text-[10px] md:text-sm leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}