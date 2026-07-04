"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactSchema, type ContactFormValues } from "@/lib/schemas";
import { sendContactMessage } from "@/app/contato/actions";
import { PROCEDURES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    const result = await sendContactMessage(data);

    if (result.success) {
      toast.success("Mensagem enviada! Retornaremos em breve.");
      reset();
    } else {
      toast.error(result.error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Nome completo</Label>
          <Input id="name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-700">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">WhatsApp</Label>
          <Input
            id="phone"
            placeholder="(00) 00000-0000"
            {...register("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-700">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-700">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="procedure">Procedimento de interesse</Label>
        <select
          id="procedure"
          {...register("procedure")}
          defaultValue=""
          aria-invalid={!!errors.procedure}
          className="w-full rounded-md border border-nude bg-white px-4 py-3 text-sm text-espresso focus:border-champagne"
        >
          <option value="" disabled>
            Selecione um procedimento
          </option>
          {PROCEDURES.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
          <option value="Ainda não sei">Ainda não sei / avaliação geral</option>
        </select>
        {errors.procedure && (
          <p className="mt-1.5 text-xs text-red-700">{errors.procedure.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Conte um pouco sobre o que você gostaria de avaliar."
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-700">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          {...register("consent")}
          className="mt-1 h-4 w-4 rounded border-nude accent-champagne"
        />
        <Label htmlFor="consent" className="mb-0 normal-case tracking-normal">
          Autorizo o uso dos meus dados para contato, conforme a{" "}
          <a href="/politica-de-privacidade" className="underline">
            Política de Privacidade
          </a>
          .
        </Label>
      </div>
      {errors.consent && (
        <p className="-mt-3 text-xs text-red-700">{errors.consent.message}</p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  );
}
