"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileSpreadsheet, Users, Calculator, XCircle, CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 mb-4"
          >
            Offre 360°
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900"
          >
            Tout pour votre cabinet.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-base md:text-lg text-slate-600 px-4"
          >
            Glissez pour découvrir nos pôles d'expertise. <span className="md:hidden inline-block ml-2 animate-pulse">👉</span>
          </motion.p>
        </div>

        {/* CONTENEUR HYBRIDE : Flex (Mobile) / Grid (Desktop) */}
        {/* On utilise -mx-4 px-4 sur mobile pour que le scroll aille jusqu'au bord de l'écran tout en gardant le padding du contenu */}
        <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:grid md:grid-cols-3 md:gap-6 md:pb-0 md:mx-auto md:px-0 scrollbar-hide">
          
          {/* 1. SAISIE (Large - Col Span 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="snap-center shrink-0 w-[85vw] md:w-auto md:col-span-2 group relative overflow-hidden rounded-3xl border bg-white p-6 md:p-8 shadow-sm transition-all hover:shadow-md min-h-[320px] flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-blue-50 blur-2xl transition-all group-hover:bg-blue-100" />
            
            <div className="relative z-10">
               <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FileSpreadsheet className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Saisie & Révision</h3>
                <p className="text-slate-500 text-base md:text-lg">
                  Traitement intégral (Achats, Ventes, Banques) directement dans vos outils.
                </p>
            </div>

            {/* Visual Abstract */}
            <div className="mt-8 flex gap-4 opacity-80">
                 <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 w-1/2">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="h-2 w-2 rounded-full bg-green-400" />
                       <div className="h-2 w-12 bg-slate-200 rounded" />
                    </div>
                    <div className="space-y-1">
                       <div className="h-1.5 w-full bg-slate-100 rounded" />
                       <div className="h-1.5 w-2/3 bg-slate-100 rounded" />
                    </div>
                 </div>
                 <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 w-1/2 translate-y-2">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="h-2 w-2 rounded-full bg-blue-400" />
                       <div className="h-2 w-12 bg-slate-200 rounded" />
                    </div>
                    <div className="space-y-1">
                       <div className="h-1.5 w-full bg-slate-100 rounded" />
                       <div className="h-1.5 w-2/3 bg-slate-100 rounded" />
                    </div>
                 </div>
            </div>
          </motion.div>

           {/* 2. FISCALITÉ (Small - Col Span 1) */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="snap-center shrink-0 w-[85vw] md:w-auto group relative overflow-hidden rounded-3xl border bg-white p-6 md:p-8 shadow-sm transition-all hover:shadow-md flex flex-col justify-between"
          >
             <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <Calculator className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Fiscalité</h3>
                <p className="text-slate-500">
                    Préparation des déclarations de TVA et liasses fiscales.
                </p>
             </div>
             
             <div className="mt-8">
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-[100%] rounded-full" />
                </div>
                <div className="mt-2 text-xs text-slate-400 font-medium flex justify-between">
                    <span>Conformité</span>
                    <span>100%</span>
                </div>
             </div>
          </motion.div>

          {/* 3. PAIE (Vertical - Col Span 1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="snap-center shrink-0 w-[85vw] md:w-auto group relative overflow-hidden rounded-3xl bg-blue-600 p-6 md:p-8 text-white shadow-xl transition-all hover:scale-[1.02] duration-500 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.1]" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-500 blur-3xl opacity-50" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Social & Paie</h3>
              <p className="text-blue-100 mb-8 leading-relaxed text-sm">
                Nos gestionnaires maîtrisent Silae et les conventions.
              </p>
            </div>

            <div className="space-y-3 relative z-10">
                {["Bulletins", "DSN", "Entrées/Sorties"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-2.5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-blue-200 shrink-0" />
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
            </div>
          </motion.div>

          {/* 4. ANTI-SERVICES (Wide - Col Span 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="snap-center shrink-0 w-[85vw] md:w-auto md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-900 p-6 md:p-8 text-slate-200 shadow-sm flex flex-col justify-center"
          >
             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 bg-red-500/10 rounded-lg text-red-400 border border-red-500/20">
                        <XCircle className="h-6 w-6" />
                     </div>
                     <span className="text-xs font-bold uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-1 rounded">Notre limite</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ce qu'on ne fait PAS</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                     Pas de relation client, pas de conseil.
                  </p>
               </div>
               
               <div className="flex flex-col gap-3 w-full md:w-auto">
                  <div className="flex items-center gap-3 bg-slate-800 p-3 rounded-xl border border-slate-700 opacity-60">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium line-through decoration-slate-500">Contact client</span>
                  </div>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}