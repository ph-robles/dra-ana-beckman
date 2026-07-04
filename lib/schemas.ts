import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo."),
  email: z.string().email("Informe um e-mail válido."),
  phone: z
    .string()
    .min(10, "Informe um telefone com DDD.")
    .max(16, "Telefone inválido."),
  procedure: z.string().min(1, "Selecione um procedimento de interesse."),
  message: z.string().min(10, "Conte um pouco mais (mínimo 10 caracteres)."),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "É necessário aceitar o uso dos dados para enviar o formulário.",
    }),
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
