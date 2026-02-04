"use client";

import { Button } from "@/components/ui/button";
import { Check, HelpCircle, Zap, ArrowRight, ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [activeTab, setActiveTab] = useState<'compta' | 'pilote' | 'paie'>('pilote');

  const plans = {
    compta: {
      title: "Production Comptable",
      desc: "Pour la saisie de masse.",
      price: "0.07€",
      unit: "/ ligne",
      features: ["Saisie Achats / Ventes / Banques", "Lettrage des comptes", "Rapprochements bancaires", "Pré-révision et contrôles de cohérence"],
      cta: "Demander un devis",
      variant: "outline"
    },
    pilote: {
      title: "Pack Pilote",
      desc: "Testez notre qualité sans risque.",
      price: "0€",
      unit: "/ 1er dossier",
      features: ["Audit des process inclus", "Paramétrage VPN / Accès", "Livraison sous 72h", "Sans aucun engagement"],
      cta: "Démarrer le Pilote",
      variant: "primary",
      popular: true
    },
    paie: {
      title: "Social & Paie",
      desc: "Gestion sociale externalisée.",
      price: "6€",
      unit: "/ bulletin",
      features: ["Bulletins de paie (Silae/Autre)", "Déclarations sociales (DSN)", "Gestion Entrées / Sorties", "Veille conventionnelle"],
      cta: "Externaliser la paie",
      variant: "outline"
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-slate-900">
            Tarifs simples.<br/>
            <span className="text-blue-600">Rentabilité immédiate.</span>
          </h2>
          <p className="text-lg text-slate-600 hidden md:block">
            Transformez vos charges fixes de personnel en charges variables.
          </p>
        </div>

        {/* MOBILE VIEW: TAB SELECTOR + ANIMATED CARD */}
        <div className="md:hidden">
          {/* Custom Tab Switcher */}
          <div className="flex p-1 bg-slate-100 rounded-xl mb-8 relative">
             <div className="absolute inset-y-1 transition-all duration-300 ease-out bg-white rounded-lg shadow-sm border border-slate-200 w-1/3"
                  style={{ 
                    left: activeTab === 'compta' ? '4px' : activeTab === 'pilote' ? '33.33%' : 'calc(66.66% - 4px)',
                    width: 'calc(33.33% - 2.6px)' 
                  }} 
             />
             <button onClick={() => setActiveTab('compta')} className={cn("flex-1 py-2 text-sm font-semibold z-10 transition-colors", activeTab === 'compta' ? "text-slate-900" : "text-slate-500")}>Compta</button>
             <button onClick={() => setActiveTab('pilote')} className={cn("flex-1 py-2 text-sm font-semibold z-10 transition-colors", activeTab === 'pilote' ? "text-blue-600" : "text-slate-500")}>Pilote</button>
             <button onClick={() => setActiveTab('paie')} className={cn("flex-1 py-2 text-sm font-semibold z-10 transition-colors", activeTab === 'paie' ? "text-slate-900" : "text-slate-500")}>Paie</button>
          </div>

          {/* Animated Card Display */}
          <div className="relative min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                 <Card className={cn("flex flex-col shadow-xl border-2 relative overflow-hidden", activeTab === 'pilote' ? "border-blue-200 ring-4 ring-blue-50" : "border-slate-200")}>
                    {activeTab === 'pilote' && (
                       <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500" />
                    )}
                    {activeTab === 'pilote' && (
                       <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                         Recommandé
                       </div>
                    )}

                    <CardHeader className="pb-6 pt-8 text-center">
                      <CardTitle className="text-2xl font-bold text-slate-900">{plans[activeTab].title}</CardTitle>
                      <CardDescription className="text-slate-500 mt-2">{plans[activeTab].desc}</CardDescription>
                      <div className="mt-6 flex items-center justify-center gap-2">
                        {activeTab !== 'pilote' && <span className="text-sm font-semibold text-slate-400">Dès</span>}
                        <span className="text-5xl font-extrabold tracking-tight text-slate-900">{plans[activeTab].price}</span>
                        <span className="text-sm font-semibold text-slate-500 text-left w-min leading-tight">{plans[activeTab].unit}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1 px-6">
                       <div className="space-y-4 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                          {plans[activeTab].features.map((feat, i) => (
                             <div key={i} className="flex items-start gap-3">
                                <div className={cn("h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5", activeTab === 'pilote' ? "bg-green-100 text-green-600" : "bg-blue-50 text-blue-600")}>
                                   <Check size={12} />
                                </div>
                                <span className="text-sm text-slate-700 font-medium">{feat}</span>
                             </div>
                          ))}
                       </div>
                    </CardContent>

                    <CardFooter className="pt-4 pb-8 px-6">
                      <Button className={cn("w-full h-12 text-base font-bold shadow-lg", activeTab === 'pilote' ? "bg-blue-600 hover:bg-blue-700 shadow-blue-200" : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50")} asChild>
                         <a href={`?subject=${activeTab}#contact`}>
                           {activeTab === 'pilote' && <Zap className="mr-2 h-4 w-4 fill-current" />}
                           {plans[activeTab].cta}
                         </a>
                      </Button>
                    </CardFooter>
                 </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* DESKTOP VIEW: 3 CARDS (Original) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-7xl mx-auto relative items-start">
           {/* ... (Je reprends le code desktop existant mais simplifié via la map pour éviter la duplication si je voulais refactoriser, mais ici je garde la structure statique pour la précision des styles desktop spécifiques) */}
           {/* Pour ne pas casser le design desktop validé, je remets le code desktop exact d'avant */}
           
           {/* OFFRE 1 : COMPTA */}
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="flex flex-col border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-8">
                <CardTitle className="text-xl font-bold text-slate-900">Production Comptable</CardTitle>
                <CardDescription className="text-slate-500 mt-2">Pour la saisie de masse.</CardDescription>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-slate-500">À partir de</span>
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900">0.07€</span>
                  <span className="text-sm font-semibold text-slate-500">/ ligne</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                   {plans.compta.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5"><Check size={12} /></div>
                        <span className="text-sm text-slate-600">{f}</span>
                      </div>
                   ))}
                </div>
              </CardContent>
              <CardFooter className="pt-8">
                <Button variant="outline" className="w-full h-12" asChild>
                  <a href="?subject=compta#contact">Demander un devis</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* OFFRE 2 : PILOTE */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 md:-mt-8">
            <div className="absolute top-0 inset-x-0 -mt-3 flex justify-center">
               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">Offre Découverte</span>
            </div>
            <Card className="flex flex-col border-blue-200 shadow-xl bg-white relative overflow-hidden ring-4 ring-blue-50">
              <CardHeader className="pb-8 text-center pt-10">
                <CardTitle className="text-2xl font-bold text-slate-900">Pack Pilote</CardTitle>
                <div className="mt-6 flex items-center justify-center gap-2"><span className="text-5xl font-extrabold tracking-tight text-slate-900">0€</span></div>
              </CardHeader>
              <CardContent className="flex-1 px-8">
                 <div className="space-y-4 border-t pt-6">
                    {plans.pilote.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0"><Check size={14} /></div>
                        <span className="text-sm font-medium text-slate-700">{f}</span>
                      </div>
                   ))}
                 </div>
              </CardContent>
              <CardFooter className="pt-8 pb-8 px-8">
                <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 font-bold" asChild>
                  <a href="?subject=pilote#contact">
                    <Zap className="mr-2 h-4 w-4" /> Démarrer le Pilote
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* OFFRE 3 : PAIE */}
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="flex flex-col border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-8">
                <CardTitle className="text-xl font-bold text-slate-900">Social & Paie</CardTitle>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-slate-500">À partir de</span>
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900">6€</span>
                  <span className="text-sm font-semibold text-slate-500">/ bulletin</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                   {plans.paie.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5"><Check size={12} /></div>
                        <span className="text-sm text-slate-600">{f}</span>
                      </div>
                   ))}
                </div>
              </CardContent>
              <CardFooter className="pt-8">
                <Button variant="outline" className="w-full h-12" asChild>
                  <a href="?subject=paie#contact">Externaliser la paie</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

        </div>
        
        <div className="mt-16 text-center">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm">
              <HelpCircle className="h-4 w-4" />
              <span>Besoin d'un tarif pour un volume important ? <a href="#contact" className="text-blue-600 font-medium hover:underline">Contactez-nous</a>.</span>
           </div>
        </div>
      </div>
    </section>
  );
}
