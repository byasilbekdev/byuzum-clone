import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  heavy = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { heavy?: boolean }) {
  return (
    <div
      className={cn(
        heavy ? "glass-heavy" : "glass-light",
        "rounded-(--radius)",
        className,
      )}
      {...props}
    />
  );
}
