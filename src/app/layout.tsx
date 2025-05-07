import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientRoot from "./ClientRoot";
import "./globals.css";
// First iteration

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Victory Analytica & Security LLC',
  description: "At Victory Analytica & Security LLC, our mission is to empower businesses globally by providing expert consulting in international business setup, strategic planning, and investment opportunities.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientRoot>
          {children}
        </ClientRoot>
      </body>
    </html>
  );
}
