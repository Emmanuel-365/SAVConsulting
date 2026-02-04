"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { FormspreeService } from "@/lib/email/formspree.service";
import { EmailJSService } from "@/lib/email/emailjs.service";
import { ContactFormData, IEmailService } from "@/lib/email/types";
import { EmailServiceFactory } from "@/lib/email/email.factory";

const EMAIL_PROVIDER = EmailServiceFactory.getService();

import { useSearchParams } from "next/navigation";

import { Suspense, useEffect } from "react";



function CTAContent() {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();

  const [message, setMessage] = useState("");



  useEffect(() => {

    const subject = searchParams.get("subject");

    if (subject === "pilote") {

      setMessage("Je souhaite démarrer une phase pilote gratuite sur l'un de mes dossiers.");

    } else if (subject === "paie") {

      setMessage("Je souhaite obtenir des informations sur l'externalisation de la paie.");

    } else if (subject === "audit") {

      setMessage("Je souhaite réserver un audit de 15 minutes pour mon cabinet.");

    } else if (subject === "compta") {

      setMessage("Je souhaite externaliser la saisie comptable de mon cabinet.");

    }

  }, [searchParams]);



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

    <div className="grid md:grid-cols-2 gap-16 items-center">

      <div className="space-y-6">

        <h2 className="text-4xl font-bold tracking-tight">

          Prêt à récupérer du temps ?

        </h2>

        <p className="text-slate-300 text-lg">

          Discutons de vos besoins lors d'un audit gratuit de 15 minutes.

          Sans engagement. Réponse sous 24h.

        </p>

        <div className="space-y-4 pt-4">

           <div className="flex items-center gap-4">

              <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 font-bold">1</div>

              <p>Audit de vos volumes</p>

           </div>

           <div className="flex items-center gap-4">

              <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 font-bold">2</div>

              <p>Proposition tarifaire sur mesure</p>

           </div>

           <div className="flex items-center gap-4">

              <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 font-bold">3</div>

              <p>Démarrage du pilote</p>

           </div>

        </div>

      </div>



      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">

        {isSuccess ? (

          <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4 animate-in fade-in zoom-in duration-500">

            <div className="h-16 w-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">

              <CheckCircle2 className="h-8 w-8" />

            </div>

            <h3 className="text-2xl font-bold">Message envoyé !</h3>

            <p className="text-slate-300">

              Merci de votre intérêt. Nous revenons vers vous sous 24h ouvrées.

            </p>

            <Button 

              variant="outline" 

              className="mt-6 border-slate-700 hover:bg-slate-800 text-white"

              onClick={() => setIsSuccess(false)}

            >

              Envoyer un autre message

            </Button>

          </div>

        ) : (

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid grid-cols-2 gap-4">

              <div className="space-y-2">

                <label htmlFor="firstname" className="text-sm font-medium text-slate-300">Prénom</label>

                <Input id="firstname" name="firstname" required placeholder="Jean" className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500" />

              </div>

              <div className="space-y-2">

                <label htmlFor="lastname" className="text-sm font-medium text-slate-300">Nom</label>

                <Input id="lastname" name="lastname" required placeholder="Dupont" className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500" />

              </div>

            </div>

            

            <div className="space-y-2">

              <label htmlFor="email" className="text-sm font-medium text-slate-300">Email pro</label>

              <Input id="email" name="email" type="email" required placeholder="jean@cabinet-dupont.fr" className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500" />

            </div>



            <div className="space-y-2">

              <label htmlFor="message" className="text-sm font-medium text-slate-300">Message (optionnel)</label>

              <Textarea 

                id="message" 

                name="message" 

                value={message}

                onChange={(e) => setMessage(e.target.value)}

                placeholder="Je souhaite externaliser la paie..." 

                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 min-h-[100px]" 

              />

            </div>



            {error && (

              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">

                <AlertCircle size={16} />

                {error}

              </div>

            )}



            <Button disabled={isSubmitting} size="lg" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold">

              {isSubmitting ? (

                <>

                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Envoi en cours...

                </>

              ) : (

                "Envoyer ma demande"

              )}

            </Button>

            <p className="text-xs text-center text-slate-500 mt-4">

              Vos données restent confidentielles.

            </p>

          </form>

        )}

      </div>

    </div>

  );

}



export function CTA() {

  return (

    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">

       {/* Background Decoration */}

       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">

          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-600 blur-[120px]" />

          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-600 blur-[100px]" />

       </div>



      <div className="container mx-auto px-4 relative z-10">

        <Suspense fallback={<div>Chargement...</div>}>

          <CTAContent />

        </Suspense>

      </div>

    </section>

  );

}
