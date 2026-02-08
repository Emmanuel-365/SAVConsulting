"use client";

import { PageHero } from "@/components/layout/PageHero";
import { Mail, Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { EmailServiceFactory } from "@/lib/email/email.factory";
import { ContactFormData } from "@/lib/email/types";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

const EMAIL_PROVIDER = EmailServiceFactory.getService();

export function ContactClient() {
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
    <main className="min-h-screen bg-white text-left">
      <PageHero
        title="Discutons de vos besoins"
        subtitle="Vous avez des questions sur nos process ou nos tarifs ? Notre équipe vous répond sous 2 heures ouvrées."
        badge="Contact & Devis"
      />

      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">

          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-left">Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Téléphone (France)</p>
                    <a href="tel:+33659244451" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">06 59 24 44 51</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                    <a href="mailto:contact.savconsuting@gmail.com" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors break-all">contact.savconsuting@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Disponibilité</p>
                    <p className="text-base font-semibold text-slate-900">Lun - Sam | 09h - 18h (Paris)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-blue-950 text-white border border-blue-900 shadow-xl">
              <h4 className="font-bold mb-4">Urgent ?</h4>
              <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12" asChild>
                <a href="https://wa.me/33659244451" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="mr-2 h-5 w-5" /> WhatsApp Direct
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-50 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 text-left">Envoyez-nous un message</h2>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4 animate-in fade-in zoom-in duration-500 bg-blue-50 rounded-2xl border border-blue-100">
                  <CheckCircle2 className="h-16 w-16 text-blue-600" />
                  <h3 className="text-2xl font-bold text-blue-900">Bien reçu !</h3>
                  <Button variant="outline" className="mt-6 border-blue-200 text-blue-700 hover:bg-blue-100" onClick={() => setIsSuccess(false)}>Nouvelle demande</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstname" className="text-sm font-semibold text-slate-700 text-left block">Prénom *</label>
                      <Input id="firstname" name="firstname" required placeholder="Prénom" className="h-12 bg-slate-50 border-slate-200 focus:border-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastname" className="text-sm font-semibold text-slate-700 text-left block">Nom *</label>
                      <Input id="lastname" name="lastname" required placeholder="Nom" className="h-12 bg-slate-50 border-slate-200 focus:border-blue-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 text-left block">Email professionnel *</label>
                    <Input id="email" name="email" type="email" required placeholder="Email professionnel" className="h-12 bg-slate-50 border-slate-200 focus:border-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 text-left block">Votre besoin *</label>
                    <Textarea id="message" name="message" required placeholder="Votre besoin..." className="min-h-[150px] bg-slate-50 border-slate-200 focus:border-blue-500" />
                  </div>

                  {error && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm flex items-center gap-2">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}

                  <Button disabled={isSubmitting} size="lg" className="w-full h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/20">
                    {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <>Envoyer ma demande <ArrowRight className="ml-2" /></>}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
