import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codecrafters Solutions - Software Development & Digital Solutions",
  description: "Codecrafters Solutions is your global partner for turning ideas into powerful digital experiences. We specialize in software development, web design, mobile app creation, and cutting-edge AI solutions.",
  keywords: "software development, web design, mobile apps, AI solutions, digital transformation, custom software",
  authors: [{ name: "Codecrafters Solutions" }],
  openGraph: {
    title: "Codecrafters Solutions - Software Development & Digital Solutions",
    description: "Your global partner for turning ideas into powerful digital experiences",
    type: "website",
  },
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
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
