import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vigil — AI-Native Bug Triage Platform for Developers",
  description: "Vigil watches every user session, clusters repeated failures, and hands you a prioritized queue of developer-ready, GitHub-ready bug reports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${lora.variable} font-sans text-foreground bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
