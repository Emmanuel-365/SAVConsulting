import { IEmailService } from "./types";
import { FormspreeService } from "./formspree.service";
import { EmailJSService } from "./emailjs.service";

export class EmailServiceFactory {
  static getService(): IEmailService {
    const provider = process.env.NEXT_PUBLIC_EMAIL_PROVIDER;

    if (provider === "emailjs") {
      return new EmailJSService(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
    }

    // Par défaut, on retourne Formspree
    return new FormspreeService(
      process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || ""
    );
  }
}
