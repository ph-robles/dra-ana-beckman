"use server";

import { Resend } from "resend";
import { contactSchema, type ContactFormValues } from "@/lib/schemas";
import { SITE } from "@/lib/constants";

// TODO(Raphael): configurar RESEND_API_KEY nas variáveis de ambiente (.env.local e Vercel)
const resend = new Resend(process.env.RESEND_API_KEY);

type ActionResult = { success: true } | { success: false; error: string };

export async function sendContactMessage(
  data: ContactFormValues
): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Dados inválidos. Revise o formulário." };
  }

  const { name, email, phone, procedure, message } = parsed.data;

  try {
    await resend.emails.send({
      // TODO(Raphael): trocar pelo domínio verificado no Resend
      from: `Site ${SITE.name} <contato@${new URL(SITE.url).hostname}>`,
      to: SITE.email,
      replyTo: email,
      subject: `Novo contato pelo site — ${name}`,
      text: [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Telefone: ${phone}`,
        `Procedimento de interesse: ${procedure}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
    });

    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar e-mail de contato:", error);
    return {
      success: false,
      error: "Não foi possível enviar sua mensagem agora. Tente novamente em instantes.",
    };
  }
}
