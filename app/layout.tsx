import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "От идеи до продакшена",
  description:
    "Лендинг-кейс о том, как проект был создан с нуля и задеплоен на виртуальную машину с HTTPS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${manrope.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
