export interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  message?: string;
}

export interface IEmailService {
  sendEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }>;
}
