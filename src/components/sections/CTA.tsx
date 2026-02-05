"use client";

import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { EmailServiceFactory } from "@/lib/email/email.factory";
import { ContactFormData } from "@/lib/email/types";
import { useSearchParams } from "next/navigation";

const EMAIL_PROVIDER = EmailServiceFactory.getService();

function CTAContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  
  // Initialiser le message directement à la création du composant
  const subject = searchParams.get("subject");
  let initialMsg = "";
  if (subject === "pilote") initialMsg = "Je souhaite démarrer une phase pilote gratuite sur l'un de mes dossiers.";
  else if (subject === "paie") initialMsg = "Je souhaite obtenir des informations sur l'externalisation de la paie.";
  else if (subject === "audit") initialMsg = "Je souhaite réserver un audit de 15 minutes pour mon cabinet.";
  else if (subject === "compta") initialMsg = "Je souhaite externaliser la saisie comptable de mon cabinet.";

  const [message, setMessage] = useState(initialMsg);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const result = await EMAIL_PROVIDER.sendEmail(data);

    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
    } else {
      setError(result.error || "Une erreur est survenue lors de l'envoi.");
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center text-left">
      <div className="space-y-6 text-left">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          Prêt à récupérer du temps ?
        </h2>
        <p className="text-emerald-100/80 text-lg leading-relaxed">
          Discutons de vos besoins lors d&apos;un audit gratuit de 15 minutes.
          Sans engagement. Réponse sous 24h.
        </p>
        <div className="space-y-4 pt-4">
           <div className="flex items-center gap-4 group">
              <div className="h-10 w-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold border border-rose-400 group-hover:scale-110 transition-transform">1</div>
              <p className="text-emerald-50">Audit de vos volumes</p>
           </div>
           <div className="flex items-center gap-4 group">
              <div className="h-10 w-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold border border-rose-400 group-hover:scale-110 transition-transform">2</div>
              <p className="text-emerald-50">Proposition tarifaire sur mesure</p>
           </div>
           <div className="flex items-center gap-4 group">
              <div className="h-10 w-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold border border-rose-400 group-hover:scale-110 transition-transform">3</div>
              <p className="text-emerald-50">Démarrage du pilote</p>
           </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
        {isSuccess ? (
          <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4 animate-in fade-in zoom-in duration-500 bg-rose-500/10 rounded-2xl border border-rose-500/20">
            <div className="h-16 w-16 bg-rose-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-rose-500/40">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Message envoyé !</h3>
            <p className="text-rose-100">
              Merci de votre intérêt. Nous revenons vers vous sous 24h ouvrées.
            </p>
            <Button 
              variant="outline" 
              className="mt-6 border-rose-500/30 hover:bg-rose-500 hover:text-white text-rose-200 transition-all"
              onClick={() => setIsSuccess(false)}
            >
              Envoyer un autre message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstname" className="text-sm font-medium text-emerald-200 text-left block">Prénom</label>
                <Input id="firstname" name="firstname" required placeholder="Jean" className="bg-emerald-950/50 border-emerald-800 text-white placeholder:text-emerald-700 focus:border-rose-500 focus:ring-rose-500" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastname" className="text-sm font-medium text-emerald-200 text-left block">Nom</label>
                <Input id="lastname" name="lastname" required placeholder="Dupont" className="bg-emerald-950/50 border-emerald-800 text-white placeholder:text-emerald-700 focus:border-rose-500 focus:ring-rose-500" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-emerald-200 text-left block">Email pro</label>
              <Input id="email" name="email" type="email" required placeholder="jean@cabinet-dupont.fr" className="bg-emerald-950/50 border-emerald-800 text-white placeholder:text-emerald-700 focus:border-rose-500 focus:ring-rose-500" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-emerald-200 text-left block">Message (optionnel)</label>
              <Textarea 
                id="message" 
                name="message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Je souhaite externaliser la paie..." 
                className="bg-emerald-950/50 border-emerald-800 text-white placeholder:text-emerald-700 focus:border-rose-500 focus:ring-rose-500 min-h-[100px]" 
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <Button disabled={isSubmitting} size="lg" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold transition-all shadow-lg shadow-rose-900/40">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Envoi en cours...
                </>
              ) : (
                "Envoyer ma demande"
              )}
            </Button>
            <p className="text-xs text-center text-emerald-500 mt-4">
              Vos données restent confidentielles.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function CTASuspense() {
  const searchParams = useSearchParams();
  // Utiliser searchParams comme clé pour forcer le remounting du composant lors du changement de paramètre
  return <CTAContent key={searchParams.toString()} />;
}

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-emerald-950 text-white overflow-hidden relative">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-emerald-600 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-rose-500 blur-[100px]" />
       </div>

      <div className="container mx-auto px-4 relative z-10">
        <Suspense fallback={<div className="text-white text-center py-20">Chargement...</div>}>
          <CTASuspense />
        </Suspense>
      </div>
    </section>
  );
}
