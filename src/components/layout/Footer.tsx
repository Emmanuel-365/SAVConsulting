import Link from "next/link";
import { BarChart3, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100/80 border-t border-emerald-900 pt-16 pb-32 md:pb-8">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
              <div className="bg-emerald-600 text-white p-1.5 rounded-lg">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span>SAV<span className="text-emerald-500">Consulting</span></span>
            </Link>
            <p className="text-emerald-100/60 text-sm leading-relaxed max-w-xs">
              L&apos;extension digitale et flexible de votre cabinet d&apos;expertise comptable.
              Production marque blanche, standards de qualité français.
            </p>
            <div className="flex items-center gap-4 pt-2">
               <a href="#" className="h-10 w-10 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all">
                 <Linkedin className="h-5 w-5" />
               </a>
               <a href="mailto:contact.savconsulting@gmail.com" className="h-10 w-10 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all">
                 <Mail className="h-5 w-5" />
               </a>
            </div>
          </div>
          
          {/* Expertise Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm text-emerald-100/60">
              <li><Link href="/services/saisie-comptable" className="hover:text-rose-300 transition-colors">Saisie Comptable</Link></li>
              <li><Link href="/services/externalisation-paie" className="hover:text-rose-300 transition-colors">Externalisation Paie</Link></li>
              <li><Link href="/secteurs/immobilier" className="hover:text-rose-300 transition-colors">Compta Immobilier</Link></li>
              <li><Link href="/#pricing" className="hover:text-rose-300 transition-colors">Tarifs Marque Blanche</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Société</h4>
            <ul className="space-y-4 text-sm text-emerald-100/60">
              <li><Link href="/a-propos" className="hover:text-rose-300 transition-colors">À Propos</Link></li>
              <li><Link href="/notre-equipe" className="hover:text-rose-300 transition-colors">Notre Équipe</Link></li>
              <li><Link href="/etudes-de-cas" className="hover:text-rose-300 transition-colors">Études de Cas</Link></li>
              <li><Link href="/processus-integration" className="hover:text-rose-300 transition-colors">Processus Intégration</Link></li>
              <li><Link href="/contact" className="hover:text-rose-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-emerald-100/60">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <a href="tel:+33659244451" className="hover:text-white transition-colors">06 59 24 44 51</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <a href="mailto:contact.savconsulting@gmail.com" className="hover:text-white transition-colors truncate">contact.savconsulting@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-500/50">
          <p>&copy; {new Date().getFullYear()} SAV Consulting. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-emerald-100 transition-colors">Mentions Légales</Link>
            <Link href="/confidentialite" className="hover:text-emerald-100 transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
