import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_TITLE || "Luminous Global LLC",
  description:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    "Global FMCG & Ecommerce Distribution Simplified",
  generator: process.env.NEXT_PUBLIC_APP_GENERATOR || "Riaz Ahammed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <SonnerToaster />
      </body>
    </html>
  );
}
