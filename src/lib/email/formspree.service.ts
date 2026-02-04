import { ContactFormData, IEmailService } from "./types";

export class FormspreeService implements IEmailService {
  private formId: string;

  constructor(formId: string) {
    this.formId = formId;
  }

  async sendEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch(`https://formspree.io/f/${this.formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return { success: true };
      } else {
        return { success: false, error: "Erreur lors de l'envoi via Formspree" };
      }
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : "Erreur inconnue" };
    }
  }
}
