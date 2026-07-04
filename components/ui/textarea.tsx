import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-md border border-nude bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso-soft/60 transition-colors focus:border-champagne",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
