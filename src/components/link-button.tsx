import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "outline" | "blue";
  external?: boolean;
  className?: string;
};

export function LinkButton({
  href,
  children,
  variant = "dark",
  external = false,
  className = "",
}: LinkButtonProps) {
  const classes = `button button--${variant} ${className}`.trim();
  const icon = external ? <ArrowUpRight /> : <ArrowRight />;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        <span>{children}</span>
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      <span>{children}</span>
      {icon}
    </Link>
  );
}

