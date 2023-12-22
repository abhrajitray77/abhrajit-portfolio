import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SideStrips from "@/components/SideStrips";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhrajit Ray",
  description: "Portfolio site of Abhrajit Ray",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex">
            <div className="hidden md:block">
              <SideStrips />
            </div>
            <div className="flex-1">
              <header>
                <Header />
              </header>
              {children}
            </div>

            <div className="hidden md:block">
              <SideStrips />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
