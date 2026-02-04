"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, FileCheck, Bell } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-24 pb-12 lg:pt-20">
      
      {/* 1. DYNAMIC BACKGROUND (Aurora Effect - Intensified for Mobile) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-20%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-blue-500/30 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-blob" />
        <div className="absolute top-[10%] right-[-20%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-indigo-500/30 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[10%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-purple-500/30 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]"></div> 
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="flex flex-col items-start text-left space-y-6 md:space-y-8">
            
            {/* Badge Premium */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-white/60 backdrop-blur-md text-blue-700 text-xs md:text-sm font-medium shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Offre Pilote : 1er dossier offert
            </motion.div>

            {/* Headline with Gradient */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
            >
              Externalisez la <br />
              production, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                vendez du conseil.
              </span>
            </motion.h1>
            
            {/* MOBILE VISUAL (IMPACTANT - 3D Perspective) */}
            <motion.div 
              initial={{ opacity: 0, rotateX: 20, y: 40 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="lg:hidden w-full h-[280px] relative my-6 perspective-1000"
            >
               {/* Carte Principale (Interface) */}
               <div className="absolute inset-x-4 top-4 bottom-4 bg-white rounded-2xl shadow-2xl border border-white/60 backdrop-blur-xl z-10 flex flex-col overflow-hidden transform rotate-x-6 hover:rotate-x-0 transition-transform duration-500">
                  {/* Header App */}
                  <div className="h-14 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between px-5">
                     <div className="flex gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-400"/>
                        <div className="h-2.5 w-2.5 rounded-full bg-amber-400"/>
                        <div className="h-2.5 w-2.5 rounded-full bg-green-400"/>
                     </div>
                     <div className="h-2 w-20 bg-slate-200 rounded-full"/>
                  </div>
                  {/* Body App */}
                  <div className="flex-1 p-5 relative">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                           <TrendingUp size={24} />
                        </div>
                        <div>
                           <div className="h-3 w-32 bg-slate-200 rounded mb-2"/>
                           <div className="h-2 w-20 bg-slate-100 rounded"/>
                        </div>
                     </div>
                     {/* Notifications Stack */}
                     <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded-lg border border-green-100 flex items-center gap-3">
                           <CheckCircle2 size={16} className="text-green-600"/>
                           <span className="text-xs font-semibold text-green-700">Lettrage 100% terminé</span>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 flex items-center gap-3">
                           <Bell size={16} className="text-blue-600"/>
                           <span className="text-xs font-semibold text-blue-700">Paie: 50 bulletins prêts</span>
                        </div>
                     </div>
                     {/* Chart Abstract */}
                     <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50/50 to-transparent flex items-end justify-around px-6 pb-2">
                        <div className="w-4 h-8 bg-blue-200 rounded-t"/>
                        <div className="w-4 h-12 bg-blue-300 rounded-t"/>
                        <div className="w-4 h-6 bg-blue-200 rounded-t"/>
                        <div className="w-4 h-10 bg-blue-400 rounded-t"/>
                        <div className="w-4 h-14 bg-blue-500 rounded-t"/>
                     </div>
                  </div>
               </div>

               {/* Elements Décoratifs Arrière-plan (Glow) */}
               <div className="absolute top-10 left-10 w-full h-full bg-blue-500/20 blur-2xl -z-10 rounded-full" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-xl text-slate-600 max-w-lg leading-relaxed"
            >
              La solution marque blanche pour experts-comptables.
              Libérez vos collaborateurs des tâches à faible valeur ajoutée.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pb-8 md:pb-0"
            >
              <Button size="lg" className="h-12 md:h-14 px-8 text-base bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all w-full sm:w-auto" asChild>
                <a href="#contact">
                  Réserver un Audit <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="h-12 md:h-14 px-8 text-base border-slate-200 hover:bg-slate-50 hover:text-blue-600 transition-colors w-full sm:w-auto" asChild>
                <a href="#pricing">Voir la grille tarifaire</a>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 md:pt-4 flex flex-col sm:flex-row gap-3 md:gap-4 text-sm text-slate-500 font-medium"
            >
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-500" /> Réponse sous 2h
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-500" /> 100% Marque Blanche
               </div>
            </motion.div>
          </div>

          {/* RIGHT: ABSTRACT DASHBOARD VISUAL (Desktop Only) */}
          <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
             
             {/* Floating Elements Container */}
             <motion.div 
               initial={{ opacity: 0, rotateY: -10, rotateX: 5 }}
               animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
               transition={{ duration: 1, type: "spring" }}
               className="relative w-full h-full"
             >
                {/* Main Card (The Dashboard) */}
                <div className="absolute inset-x-4 top-10 bottom-10 bg-white rounded-2xl border border-slate-100 shadow-2xl overflow-hidden flex flex-col">
                   {/* Fake Header */}
                   <div className="h-12 border-b bg-slate-50 flex items-center px-4 gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-amber-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                   </div>
                   {/* Fake Content */}
                   <div className="p-6 flex-1 bg-slate-50/50 relative">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                         <div className="h-24 rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                            <div className="h-8 w-8 bg-blue-100 rounded-lg mb-2 flex items-center justify-center text-blue-600"><TrendingUp size={16}/></div>
                            <div className="h-2 w-12 bg-slate-100 rounded mb-1"/>
                            <div className="h-3 w-8 bg-slate-200 rounded"/>
                         </div>
                         <div className="h-24 rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                             <div className="h-8 w-8 bg-purple-100 rounded-lg mb-2 flex items-center justify-center text-purple-600"><Users size={16}/></div>
                             <div className="h-2 w-12 bg-slate-100 rounded mb-1"/>
                             <div className="h-3 w-8 bg-slate-200 rounded"/>
                         </div>
                         <div className="h-24 rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                             <div className="h-8 w-8 bg-green-100 rounded-lg mb-2 flex items-center justify-center text-green-600"><FileCheck size={16}/></div>
                             <div className="h-2 w-12 bg-slate-100 rounded mb-1"/>
                             <div className="h-3 w-8 bg-slate-200 rounded"/>
                         </div>
                      </div>
                      <div className="space-y-3">
                         <div className="h-10 w-full bg-white rounded-lg shadow-sm border border-slate-100" />
                         <div className="h-10 w-full bg-white rounded-lg shadow-sm border border-slate-100" />
                         <div className="h-10 w-full bg-white rounded-lg shadow-sm border border-slate-100" />
                      </div>
                      
                      {/* Gradient Overlay bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
                   </div>
                </div>

                {/* Floating Notification Card 1 (Left) */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-20 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 w-64 backdrop-blur-md bg-white/90 z-20"
                >
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Lettrage terminé</p>
                    <p className="text-xs text-slate-500">Dossier Martin SARL (100%)</p>
                  </div>
                </motion.div>

                {/* Floating Notification Card 2 (Right) */}
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-32 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 w-64 backdrop-blur-md bg-white/90 z-20"
                >
                   <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Paie validée</p>
                    <p className="text-xs text-slate-500">50 bulletins envoyés</p>
                  </div>
                </motion.div>

             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
