"use client";

import { PageHero } from "@/components/layout/PageHero";
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { EmailServiceFactory } from "@/lib/email/email.factory";
import { ContactFormData } from "@/lib/email/types";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const EMAIL_PROVIDER = EmailServiceFactory.getService();

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      setError(result.error || "Une erreur est survenue.");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Discutons de vos besoins" 
        subtitle="Vous avez des questions sur nos process ou nos tarifs ? Notre équipe vous répond sous 2 heures ouvrées."
        badge="Contact & Devis"
      />

      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
          
          {/* LEFT: INFO COLUMN */}
          <div className="lg:col-span-1 space-y-12">
            
            {/* Direct Contact Card */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Téléphone (France)</p>
                    <a href="tel:+33659244451" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      06 59 24 44 51
                    </a>
                    <p className="text-xs text-green-600 font-medium mt-1 flex items-center gap-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Disponible maintenant
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                    <a href="mailto:contact.savconsulting@gmail.com" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors break-all">
                      contact.savconsulting@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Horaires d&apos;ouverture</p>
                    <p className="text-base font-semibold text-slate-900">
                      Lundi - Vendredi<br/>
                      09h00 - 18h00 (Paris)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
               <h4 className="font-bold text-slate-900 mb-4">Besoin d&apos;une réponse immédiate ?</h4>
               <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12 mb-3" asChild>
                 <a href="https://wa.me/33659244451" target="_blank" rel="noopener noreferrer">
                   <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Direct
                 </a>
               </Button>
               <p className="text-xs text-center text-slate-500">Réponse moyenne &lt; 5 min</p>
            </div>

          </div>

          {/* RIGHT: FORM COLUMN */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Envoyez-nous un message</h2>
              <p className="text-slate-500 mb-8">Remplissez le formulaire ci-dessous pour une demande de devis ou un audit gratuit.</p>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4 animate-in fade-in zoom-in duration-500 bg-green-50 rounded-2xl border border-green-100">
                  <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900">Bien reçu !</h3>
                  <p className="text-green-700 max-w-sm">
                    Votre demande a été transmise à notre équipe. Nous vous recontactons dans les plus brefs délais.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6 border-green-200 text-green-700 hover:bg-green-100"
                    onClick={() => setIsSuccess(false)}
                  >
                    Nouvelle demande
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstname" className="text-sm font-semibold text-slate-700">Prénom *</label>
                      <Input id="firstname" name="firstname" required placeholder="Jean" className="h-12 bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastname" className="text-sm font-semibold text-slate-700">Nom *</label>
                      <Input id="lastname" name="lastname" required placeholder="Dupont" className="h-12 bg-slate-50 border-slate-200" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email professionnel *</label>
                    <Input id="email" name="email" type="email" required placeholder="jean.dupont@cabinet.fr" className="h-12 bg-slate-50 border-slate-200" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Votre besoin *</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      placeholder="Bonjour, je souhaiterais obtenir un devis pour..." 
                      className="min-h-[150px] bg-slate-50 border-slate-200 resize-none" 
                    />
                  </div>

                  {error && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm flex items-center gap-2">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}

                  <div className="pt-4">
                    <Button disabled={isSubmitting} size="lg" className="w-full h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-center text-slate-400 mt-4">
                      En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
