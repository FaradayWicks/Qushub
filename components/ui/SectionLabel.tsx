import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
}

export default function SectionLabel({
  children,
  variant = "dark",
  className,
}: SectionLabelProps) {
  if (variant === "light") {
    return (
      <span
        className={cn(
          "font-ui inline-block text-[11px] uppercase font-medium tracking-label-wide text-quishub-muted mb-4",
          className
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "font-ui inline-flex items-center border border-quishub-border bg-quishub-surfaceAlt text-quishub-muted text-[11px] uppercase font-medium tracking-label-wide px-3.5 py-1 rounded-full mb-4",
        className
      )}
    >
      {children}
    </span>
  );
}
