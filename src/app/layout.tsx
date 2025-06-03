import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog des Johann-Gottfried-Herder-Forschungsrats",
  description: "Blog des Johann-Gottfried-Herder-Forschungsrats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black font-sans leading-relaxed`}
      >
        <div className="flex flex-col w-[900px] mx-auto">
          <Header />
          <div className="flex flex-1">
            <NavBar />
            <main className="flex-1 p-8">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
