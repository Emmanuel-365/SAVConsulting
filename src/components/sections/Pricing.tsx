"use client";

import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [activeTab, setActiveTab] = useState<'depannage' | 'bonplan' | 'collaborateur'>('depannage');

  const featuresList = [
    "Saisie factures achats ventes, achats et relevés bancaires",
    "Lettrage",
    "Rapprochement bancaire",
    "Préparations des déclarations de tva, acomptes ...",
    "Points comptable mensuels des éléments manquants",
    "OD de paie + suivi des comptes 43",
    "Cadrage annuel de tva",
    "Révision des comptes, dossier de révision et note de synthèse"
  ];

  const plans = {
    depannage: {
      title: "Pack Dépannage",
      desc: "Idéal pour soulager ponctuellement.",
      price: "549€",
      unit: "/ mois",
      volume: "10 dossiers",
      cta: "Choisir Dépannage"
    },
    bonplan: {
      title: "Pack Bon Plan",
      desc: "Le meilleur rapport volume/prix.",
      price: "999€",
      unit: "/ mois",
      volume: "20 dossiers",
      cta: "Choisir Bon Plan",
      popular: true
    },
    collaborateur: {
      title: "Pack Collaborateur",
      desc: "Une puissance de production totale.",
      price: "1 499€",
      unit: "/ mois",
      volume: "30 dossiers",
      cta: "Choisir Collaborateur"
    }
  };

  const commonInfo = "Pour des dossiers avec CA de 0 à 249 000€";

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-emerald-900 mb-4">
            Nos Forfaits <span className="text-emerald-600">Cabinets</span>
          </h2>
          <p className="text-lg text-emerald-600">
            Des packs clairs pour une visibilité totale sur vos coûts de production.
          </p>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden">
          <div className="flex p-1 bg-emerald-100 rounded-xl mb-8">
             <button onClick={() => setActiveTab('depannage')} className={cn("flex-1 py-2 text-xs font-bold rounded-lg transition-all", activeTab === 'depannage' ? "bg-white text-emerald-600 shadow-sm" : "text-emerald-500")}>549€</button>
             <button onClick={() => setActiveTab('bonplan')} className={cn("flex-1 py-2 text-xs font-bold rounded-lg transition-all", activeTab === 'bonplan' ? "bg-white text-emerald-600 shadow-sm" : "text-emerald-500")}>999€</button>
             <button onClick={() => setActiveTab('collaborateur')} className={cn("flex-1 py-2 text-xs font-bold rounded-lg transition-all", activeTab === 'collaborateur' ? "bg-white text-emerald-600 shadow-sm" : "text-emerald-500")}>1499€</button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              <Card className="border-2 border-emerald-100 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">{plans[activeTab].title}</CardTitle>
                  <CardDescription className="text-emerald-600 font-bold">{plans[activeTab].volume}</CardDescription>
                  <div className="text-3xl font-black mt-4">{plans[activeTab].price}<span className="text-sm font-medium text-emerald-500">{plans[activeTab].unit}</span></div>
                  <p className="text-xs text-emerald-400 mt-2 italic">{commonInfo}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {featuresList.map((f, i) => (
                    <div key={i} className="flex gap-2 text-sm text-emerald-600">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-600" asChild>
                    <a href={`?subject=${activeTab}#contact`}>{plans[activeTab].cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {(Object.keys(plans) as Array<keyof typeof plans>).map((key) => {
            const plan = plans[key];
            return (
              <motion.div key={key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className={cn("h-full flex flex-col transition-all duration-300 hover:shadow-2xl border-emerald-200", plan.popular && "border-rose-300 ring-4 ring-rose-50 relative scale-105 z-10")}>
                  {plan.popular && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-rose-400" />
                  )}
                  <CardHeader className="text-center">
                    {plan.popular && (
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-400 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                          Meilleur Choix
                       </div>
                    )}
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <div className="text-emerald-600 font-black text-lg mt-1">{plan.volume}</div>
                    <div className="mt-6">
                      <span className="text-4xl font-black">{plan.price}</span>
                      <span className="text-emerald-500 text-sm font-medium"> {plan.unit}</span>
                    </div>
                    <p className="text-xs text-emerald-400 mt-2 italic">{commonInfo}</p>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-3 pt-6 border-t border-emerald-50">
                    {featuresList.map((f, i) => (
                      <div key={i} className="flex gap-3 text-xs text-emerald-600 leading-tight">
                        <div className="h-4 w-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5"><Check size={10} /></div>
                        <span>{f}</span>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="pt-8">
                    <Button variant={plan.popular ? "default" : "outline"} className={cn("w-full h-12 text-base font-bold", plan.popular && "bg-rose-500 hover:bg-rose-600 shadow-lg shadow-rose-200")} asChild>
                      <a href={`?subject=${key}#contact`}>{plan.cta}</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Catch-up Section */}
        <div className="mt-20 p-8 rounded-[2rem] bg-emerald-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-900 shadow-2xl">
           <div className="flex gap-6 items-center">
              <div className="h-16 w-16 rounded-2xl bg-rose-400 flex items-center justify-center shadow-lg text-white"><Zap size={32} /></div>
              <div>
                 <h3 className="text-2xl font-bold">Besoin d&apos;un rattrapage ?</h3>
                 <p className="text-emerald-200/70">Mise à jour de dossiers sur plusieurs mois ou années.</p>
              </div>
           </div>
           <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-50 rounded-full px-8 h-14 font-black" asChild>
              <a href="?subject=rattrapage#contact">Sur devis uniquement</a>
           </Button>
        </div>

      </div>
    </section>
  );
}