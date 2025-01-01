import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wenhui Xu | Portfolio",
  description: "Portfolio of Wenhui Xu, Economist and Data Scientist located in Toronto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} transition-colors duration-100`}>
        <ThemeProvider themes={["light", "dark"]} defaultTheme="system">
          <div className="max-w-screen-lg mx-auto flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow mt-16">
              <div className="flex flex-col justify-center items-center h-full">{children}</div>
            </main>

            {/* Footer
            <Footer /> */}

            {/* Analytics */}
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}