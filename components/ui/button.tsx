import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      data-cursor-hover
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" &&
          "bg-espresso text-ivory hover:scale-[1.03]",
        variant === "outline" &&
          "border border-nude text-espresso hover:bg-white",
        variant === "ghost" && "text-espresso-soft hover:text-espresso",
        className
      )}
      {...props}
    />
  );
}
