import Link from "next/link";
import { BarChart3, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span>SAV<span className="text-blue-500">Consulting</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              L'extension digitale et flexible de votre cabinet d'expertise comptable.
              Production marque blanche, qualité française.
            </p>
            <div className="flex items-center gap-4 pt-2">
               <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                 <Linkedin className="h-5 w-5" />
               </a>
               <a href="mailto:contact.savconsulting@gmail.com" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                 <Mail className="h-5 w-5" />
               </a>
            </div>
          </div>
          
          {/* Solutions Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Saisie Comptable</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Externalisation Paie</Link></li>
              <li><Link href="#pricing" className="hover:text-blue-400 transition-colors">Pack Pilote Gratuit</Link></li>
              <li><Link href="#method" className="hover:text-blue-400 transition-colors">Notre Méthode</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>Douala, Cameroun<br/><span className="text-xs text-slate-500">Service monde entier</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <a href="tel:+33659244451" className="hover:text-white">06 59 24 44 51</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <a href="mailto:contact.savconsulting@gmail.com" className="hover:text-white">contact.savconsulting@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
             <h4 className="font-bold text-white mb-6">Restez informé</h4>
             <p className="text-sm text-slate-400 mb-4">
               Conseils pour optimiser la rentabilité de votre cabinet.
             </p>
             <div className="flex gap-2">
               <Input placeholder="Email pro" className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-blue-500" />
               <Button size="icon" className="bg-blue-600 hover:bg-blue-700 shrink-0">
                 <Mail className="h-4 w-4" />
               </Button>
             </div>
          </div>

        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} SAV Consulting. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-300">Mentions Légales</Link>
            <Link href="#" className="hover:text-slate-300">Confidentialité</Link>
            <Link href="#" className="hover:text-slate-300">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}