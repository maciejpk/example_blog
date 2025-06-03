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
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black font-sans leading-relaxed
          
        `}
      >
        <Header />
        <main className="max-w-screen-xl px-4 mx-auto">
          <div className="flex lg:space-x-10">
            <NavBar />
            <div className="w-full">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
