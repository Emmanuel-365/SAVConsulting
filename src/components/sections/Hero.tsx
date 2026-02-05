"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-emerald-950 pt-20">
      
      {/* 1. IMMERSIVE BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero_image.jpg" 
          alt="SAV Consulting - Expertise et Conseil"
          fill
          priority
          quality={90}
          className="object-cover opacity-30 grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent z-10" />
      </div>

      {/* 2. DYNAMIC AURORA */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-rose-400/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="container px-4 md:px-6 relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: MAIN CONTENT */}
          <div className="flex flex-col items-start text-left space-y-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-white/5 backdrop-blur-md text-rose-300 text-xs md:text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Solution Marque Blanche Premium
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]"
            >
              Externalisez la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-rose-300">
                production.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl text-emerald-100/80 max-w-xl leading-relaxed"
            >
              Gagnez du temps, économisez en masse salariale et préservez votre relation client.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button size="lg" className="h-14 md:h-16 px-10 text-lg bg-rose-600 hover:bg-rose-700 text-white shadow-2xl shadow-rose-900/40 rounded-full font-black transition-all hover:scale-105" asChild>
                <a href="?subject=audit#contact">
                  Réserver un Audit <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="h-14 md:h-16 px-10 text-lg border-rose-500/30 text-rose-300 hover:bg-rose-600 hover:text-white rounded-full font-bold backdrop-blur-sm transition-all" asChild>
                <a href="#pricing">Voir nos tarifs</a>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT: ABOUT MISSION (Fills the space and fits on one screen) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-emerald-950/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-rose-500/20 flex items-center justify-center text-rose-400 border border-rose-400/30 shadow-lg shadow-rose-500/20">
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-wider">Notre Mission</h2>
              </div>
              
              <div className="space-y-6 text-emerald-50/70 text-lg leading-relaxed">
                <p>
                  Ce projet est né d’un constat simple :​
                  Les cabinets d’expertise comptable passent encore trop de temps sur des tâches
                  comptables récurrentes, au détriment du conseil, de la relation client et de la qualité de vie
                  des équipes.                
                </p>
                <p>
Nous avons donc fait le choix de créer un service d’externalisation sur mesure pensé pour
les cabinets d’expertise comptable et les entreprises, avec une approche volontairement
simple, rigoureuse et respectueuse du métier.                </p>
                <p>
                  Notre rôle est clair : intervenir uniquement en back-office, sur des tâches standardisables et
clairement définies, sans jamais interférer avec la relation client, le conseil ou les décisions
techniques.
                </p>
                <p>
                  Nous reposons sur des process documentés, des contrôles qualité et une transparence
totale.​
Le cabinet reste maître de ses dossiers, de ses clients et de ses choix.
                </p>
                <p>
                  Nous travaillons dans l’ombre, pour permettre aux cabinets et entreprises de se concentrer
sur ce qui fait réellement leur valeur.
                </p>
              </div>
            </div>
            
            {/* Background decorative glow for the card */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px]" />
          </motion.div>

        </div>

        {/* MOBILE ABOUT (Only visible on small screens since the desktop version is now in the 2nd column) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:hidden mt-16 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl"
        >
           <h2 className="text-2xl font-black text-white mb-6">À propos de notre mission.</h2>
           <p className="text-emerald-50/70 text-base leading-relaxed">
             Ce projet est né d&apos;un constat simple : Libérer les cabinets des tâches comptables récurrentes pour leur permettre de se concentrer sur le conseil et la relation client.
           </p>
        </motion.div>

      </div>
    </section>
  );
}