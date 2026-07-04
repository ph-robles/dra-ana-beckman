import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes condicionais e resolve conflitos do Tailwind.
 * Uso: cn("px-4", condicao && "px-8") -> "px-8" (a última prevalece)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
