"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions fréquentes</h2>
        </div>
        
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg text-slate-900 hover:text-blue-600 hover:no-underline py-6">
                Où sont stockées les données de mes clients ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed text-base pb-6">
                Vos données ne quittent jamais vos serveurs sécurisés (ou votre cloud). Nous nous connectons via VPN ou accès distant sécurisé (Citrix, TSE, SaaS). Aucune donnée n'est stockée localement sur nos machines.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg text-slate-900 hover:text-blue-600 hover:no-underline py-6">
                Quels logiciels maîtrisez-vous ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed text-base pb-6">
                Nous sommes experts sur : <strong>Silae, Cegid, Sage Coala, ACD, Quadra, MyUnisoft et Pennylane</strong>. Si vous utilisez un outil spécifique, nous pouvons nous former rapidement lors de la phase pilote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg text-slate-900 hover:text-blue-600 hover:no-underline py-6">
                Puis-je tester avant de m'engager ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed text-base pb-6">
                Absolument. C'est même notre standard. Nous proposons systématiquement une <strong>"Phase Pilote Gratuite"</strong> sur 1 dossier. Cela permet de caler les process et de valider la qualité avant de déployer sur un volume plus important.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg text-slate-900 hover:text-blue-600 hover:no-underline py-6">
                Comment gérez-vous la confidentialité ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed text-base pb-6">
                Nous signons une clause de confidentialité stricte (NDA) avec chaque cabinet. Nos contrats de travail incluent également des clauses de secret professionnel rigoureuses.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-b-0">
              <AccordionTrigger className="text-lg text-slate-900 hover:text-blue-600 hover:no-underline py-6">
                Et si je veux arrêter ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed text-base pb-6">
                 Vous êtes libre. Nos contrats sont flexibles avec un préavis court (1 mois). Nous ne voulons pas vous retenir par un contrat, mais par la qualité de notre service.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
