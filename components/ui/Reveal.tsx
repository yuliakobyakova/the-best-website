"use client";

import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className = "" }: RevealProps) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-500 will-change-transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
