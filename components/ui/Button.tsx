"use client";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center rounded-xl border px-5 py-2.5 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300";

const variants = {
  primary:
    "border-blue-600 bg-blue-600 text-white hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-soft active:translate-y-0",
  secondary:
    "border-line bg-white text-foreground hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-soft active:translate-y-0",
};

export function Button({
  children,
  href,
  target,
  rel,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classNames = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}
