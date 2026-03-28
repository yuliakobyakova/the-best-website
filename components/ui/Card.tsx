type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-xl2 border border-line bg-panel p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-hover ${className}`}
    >
      {children}
    </article>
  );
}
