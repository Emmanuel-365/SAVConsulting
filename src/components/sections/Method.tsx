"use client";

import { Search, ClipboardList, Settings2, Rocket } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Audit & Analyse",
    desc: "Nous analysons vos outils, vos volumes et vos process actuels pour calibrer l'offre.",
    number: "01"
  },
  {
    icon: ClipboardList,
    title: "Définition du Périmètre",
    desc: "Validation précise des tâches déléguées (Saisie, Lettrage, Paie) selon vos besoins spécifiques.",
    number: "02"
  },
  {
    icon: Settings2,
    title: "Mise en place Technique",
    desc: "Définition des procédures, checklists, contrôles qualité et paramétrage des accès sécurisés (VPN/TSE).",
    number: "03"
  },
  {
    icon: Rocket,
    title: "Démarrage Pilote",
    desc: "Lancement sur 1 ou 2 dossiers tests pour valider la qualité avant montée en charge.",
    number: "04"
  },
];

export function Method() {
  return (
    <section id="method" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left: Content & Timeline */}
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 md:mb-16 text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mb-4 md:mb-6 leading-tight">
                Une intégration fluide,<br/> 
                <span className="text-emerald-600">sans friction.</span>
              </h2>
              <p className="text-base md:text-lg text-emerald-800/60 leading-relaxed">
                Notre process est rodé pour s'insérer dans votre cabinet sans perturber vos habitudes.
              </p>
            </motion.div>

            <div className="relative space-y-8 md:space-y-12 pl-2">
              {/* Vertical Line Background */}
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-emerald-50 -z-10" />
              
              {/* Vertical Line Progress (Animated) */}
              <motion.div 
                 initial={{ height: 0 }}
                 whileInView={{ height: "100%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="absolute left-[27px] top-4 w-0.5 bg-gradient-to-b from-emerald-600 to-transparent -z-10 origin-top"
              />

              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.2 }} 
                  className="flex gap-6 md:gap-8 group items-start"
                >
                  {/* Icon Bubble */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-100 shadow-sm flex items-center justify-center text-emerald-600 group-hover:border-emerald-200 group-hover:shadow-emerald-50 transition-all duration-300 z-10 relative">
                      <step.icon className="h-6 w-6" />
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 bg-emerald-950 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md shadow-sm">
                      {step.number}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="pt-1 text-left">
                    <h3 className="font-bold text-lg md:text-xl text-emerald-950 group-hover:text-emerald-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-emerald-800/60 leading-relaxed mt-2 text-sm md:text-base">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 relative hidden lg:block"
          >
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-50 aspect-[4/5] bg-emerald-50/20">
                <Image 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                  alt="Collaboration équipe"
                  fill
                  className="object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
                
                {/* Floating Feedback Card */}
                <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-emerald-100 shadow-xl">
                  <div className="flex items-start gap-4">
                     <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold shrink-0">JD</div>
                     <div>
                        <p className="text-sm font-medium text-emerald-900 italic leading-relaxed">
                          "L'équipe a su s'adapter à notre process sur Silae en moins d'une semaine. Un gain de temps immédiat."
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                           <div className="flex text-rose-400">
                              {[1,2,3,4,5].map(i => <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
                           </div>
                           <span className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">Jean D. - Expert-Comptable (Paris)</span>
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}