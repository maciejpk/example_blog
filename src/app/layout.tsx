import type { Metadata } from "next";
import "./globals.css";
import "../../styles/style.css";

import Header from "@/components/header";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

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
          body-myriad antialiased bg-white text-black font-sans leading-relaxed
          
        `}
      >
        <Header />

        {/* Mobile nav */}
        <div className="lg:hidden px-4 flex justify-center align-center">
          <NavBar />
        </div>

        <main className="max-w-screen-xl mx-auto">
          <div className="flex lg:space-x-10">
            {/* Desktop nav */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <NavBar />
            </aside>
            <div className="w-full space-y-16">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
