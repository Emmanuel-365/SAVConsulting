"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, FileCheck } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-emerald-950 pt-32 pb-20">
      
      {/* 1. DYNAMIC BACKGROUND (Aurora Effect - Green & Rose) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-20%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-emerald-500/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-blob" />
        <div className="absolute top-[10%] right-[-20%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-rose-400/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-emerald-600/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]"></div> 
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2000&auto=format&fit=crop" 
          alt="Expertise comptable et conseil"
          fill
          className="object-cover opacity-10 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/50 to-emerald-950" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="flex flex-col items-start text-left space-y-6 md:space-y-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-rose-300 text-xs md:text-sm font-medium shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Nouveaux packs tarifs disponibles
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Externalisez la <br />
              production, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-rose-300">
                vendez du conseil.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-xl text-emerald-100/80 max-w-lg leading-relaxed"
            >
              Gagnez du temps, économisez en masse salariale et préservez votre relation client.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button size="lg" className="h-12 md:h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-900/30 transition-all w-full sm:w-auto" asChild aria-label="Réserver un audit gratuit">
                <a href="?subject=audit#contact">
                  Réserver un Audit <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="h-12 md:h-14 px-8 text-base border-emerald-700 text-white hover:bg-emerald-800 transition-colors w-full sm:w-auto" asChild aria-label="Consulter la grille tarifaire">
                <a href="#pricing">Voir nos tarifs</a>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT: ABSTRACT DASHBOARD VISUAL (Desktop Only) */}
          <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
             <motion.div 
               initial={{ opacity: 0, rotateY: -10, rotateX: 5 }}
               animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
               transition={{ duration: 1, type: "spring" }}
               className="relative w-full h-full"
             >
                <div className="absolute inset-x-4 top-10 bottom-10 bg-emerald-950/40 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl">
                   <div className="h-12 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400/50" />
                      <div className="h-3 w-3 rounded-full bg-amber-400/50" />
                      <div className="h-3 w-3 rounded-full bg-green-400/50" />
                   </div>
                   <div className="p-6 flex-1 relative">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                         <div className="h-24 rounded-xl bg-white/5 p-4 border border-white/5">
                            <div className="h-8 w-8 bg-emerald-500/20 rounded-lg mb-2 flex items-center justify-center text-emerald-400"><TrendingUp size={16}/></div>
                            <div className="h-2 w-12 bg-white/10 rounded mb-1"/>
                            <div className="h-3 w-8 bg-white/20 rounded"/>
                         </div>
                         <div className="h-24 rounded-xl bg-white/5 p-4 border border-white/5">
                             <div className="h-8 w-8 bg-rose-500/20 rounded-lg mb-2 flex items-center justify-center text-rose-400"><Users size={16}/></div>
                             <div className="h-2 w-12 bg-white/10 rounded mb-1"/>
                             <div className="h-3 w-8 bg-white/20 rounded"/>
                         </div>
                         <div className="h-24 rounded-xl bg-white/5 p-4 border border-white/5">
                             <div className="h-8 w-8 bg-emerald-500/20 rounded-lg mb-2 flex items-center justify-center text-emerald-400"><FileCheck size={16}/></div>
                             <div className="h-2 w-12 bg-white/10 rounded mb-1"/>
                             <div className="h-3 w-8 bg-white/20 rounded"/>
                         </div>
                      </div>
                      <div className="space-y-3 opacity-20">
                         <div className="h-10 w-full bg-white/5 rounded-lg border border-white/5" />
                         <div className="h-10 w-full bg-white/5 rounded-lg border border-white/5" />
                         <div className="h-10 w-full bg-white/5 rounded-lg border border-white/5" />
                      </div>
                   </div>
                </div>

                {/* Floating Notification */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-20 -left-6 bg-emerald-600 p-4 rounded-xl shadow-xl border border-emerald-500 flex items-center gap-3 w-64 z-20"
                >
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Lettrage terminé</p>
                    <p className="text-xs text-emerald-100">Dossier Martin SARL à jour</p>
                  </div>
                </motion.div>
             </motion.div>
          </div>
        </div>

        {/* 2. ABOUT SECTION (Immediately below title/CTA) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-20 p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-black text-white leading-tight">À propos de <br/><span className="text-emerald-500">notre projet.</span></h2>
              <div className="h-1 w-12 bg-rose-400 mt-4 rounded-full" />
            </div>
            <div className="md:w-2/3 space-y-6 text-emerald-100/80 leading-relaxed text-base md:text-lg">
              <p>
                Ce projet est né d&apos;un constat simple : Les cabinets d&apos;expertise comptable passent encore trop de temps sur des tâches comptables récurrentes, au détriment du conseil, de la relation client et de la qualité de vie des équipes.
              </p>
              <p>
                Nous avons donc fait le choix de créer un service d&apos;externalisation sur mesure pensé pour <strong>les cabinets d&apos;expertise comptable et les entreprises</strong>, avec une approche volontairement simple, rigoureuse et respectueuse du métier.
              </p>
              <p>
                Notre rôle est clair : intervenir uniquement en back-office, sur des tâches standardisables et clairement définies, sans jamais interférer avec la relation client, le conseil ou les décisions techniques.
              </p>
              <p className="text-white font-medium">
                Nous reposons sur des process documentés, des contrôles qualité et une transparence totale. Nous travaillons dans l&apos;ombre pour permettre aux cabinets et entreprises de se concentrer sur ce qui fait réellement leur valeur.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}