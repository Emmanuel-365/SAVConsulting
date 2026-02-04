"use client";

import { ShieldCheck, Lock, Globe, Server } from "lucide-react";
import { motion } from "framer-motion";
import RetroGrid from "@/components/ui/retro-grid";

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
    <section className="py-20 md:py-32 bg-slate-950 text-white overflow-hidden relative min-h-[800px] flex items-center">
      
      {/* 1. COMPLEX SVG BACKGROUND (Retro Grid + Radial Glow) */}
      <RetroGrid className="opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-blue-600/10 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
          
          {/* LEFT: TEXT & ORBITAL VISUAL */}
          <div className="lg:w-1/2 text-center lg:text-left relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-20"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-medium mb-6">
                Zéro compromis sur la sécurité
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1]">
                Votre confiance, <br/>
                <span className="text-blue-500 italic">notre forteresse.</span>
              </h2>
              <p className="text-base md:text-xl text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0 mb-12">
                Nous avons bâti une infrastructure étanche pour garantir la confidentialité totale de vos flux.
              </p>
            </motion.div>

            {/* ABSTRACT ORBITAL SVG (Complex visual) */}
            <div className="hidden lg:block relative h-64 w-full">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 flex items-center justify-center opacity-20"
               >
                  <svg viewBox="0 0 200 200" className="w-full h-full stroke-blue-500/50 fill-none stroke-[0.5]">
                     <circle cx="100" cy="100" r="80" />
                     <circle cx="100" cy="100" r="60" strokeDasharray="4 4" />
                     <circle cx="100" cy="100" r="40" />
                  </svg>
               </motion.div>
               {/* Floating nodes */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-1/2 left-1/4 h-10 w-10 bg-blue-600/20 backdrop-blur-md rounded-lg border border-blue-500/30 flex items-center justify-center"
               >
                  <Lock size={16} className="text-blue-400"/>
               </motion.div>
               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute top-1/3 right-1/4 h-12 w-12 bg-blue-600/20 backdrop-blur-md rounded-xl border border-blue-500/30 flex items-center justify-center"
               >
                  <ShieldCheck size={20} className="text-blue-400"/>
               </motion.div>
            </div>
          </div>

          {/* RIGHT: FEATURE GRID */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {securityPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="h-12 w-12 rounded-2xl bg-blue-600/20 text-blue-500 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(37,99,235,0)] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                  <point.icon size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
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
