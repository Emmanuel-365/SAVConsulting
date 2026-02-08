import { ContactClient } from "./client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contactez-nous | Devis B2B Gratuit | SAV Consulting",
    description: "Besoin d'externaliser vos opérations comptables ou paie ? Contactez SAV Consulting pour une étude personnalisée. Réponse sous 2h ouvrées.",
};

export default function ContactPage() {
    return <ContactClient />;
}
