import emailjs from "@emailjs/browser";
import { ContactFormData, IEmailService } from "./types";

export class EmailJSService implements IEmailService {
  private serviceId: string;
  private templateId: string;
  private publicKey: string;

  constructor(serviceId: string, templateId: string, publicKey: string) {
    this.serviceId = serviceId;
    this.templateId = templateId;
    this.publicKey = publicKey;
  }

  async sendEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
    try {
      // EmailJS attend souvent un objet plat pour mapper les variables du template
      const templateParams = {
        from_name: `${data.firstname} ${data.lastname}`,
        from_email: data.email,
        message: data.message,
      };

      const result = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.publicKey
      );

      if (result.status === 200) {
        return { success: true };
      } else {
        return { success: false, error: "Erreur EmailJS" };
      }
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : "Erreur inconnue" };
    }
  }
}
