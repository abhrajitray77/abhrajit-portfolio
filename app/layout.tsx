import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/bg-patterns.css";
import Header from "@/components/Header";
import SideStrips from "@/components/SideStrips";
import { Providers } from "./Providers";
import { futureCondensed, futureHalftone, futureHalftoneItalic, futureItalic, futureNormal, futureSemiItalic } from "./fonts";

const inter = Inter({
  subsets: ['latin'],
})

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
      <body className={`${inter.className} ${futureNormal.variable} ${futureCondensed.variable}
      ${futureHalftone.variable} ${futureHalftoneItalic.variable} ${futureSemiItalic.variable}
      ${futureItalic.variable}`}>
        <Providers>
          {/* background patterns */}
          <div className="fixed inset-0 h-full w-full grid-bg -z-50"></div>
          <div
            className="fixed -z-50 top-36 left-10 w-72 h-72 bg-[#afbaec]
        rounded-full blur-3xl opacity-50"
          ></div>
          <div
            className="fixed -z-50 bottom-10 right-10 w-72 h-72 bg-[#afbaec]
        rounded-full blur-3xl opacity-50"
          ></div>
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
