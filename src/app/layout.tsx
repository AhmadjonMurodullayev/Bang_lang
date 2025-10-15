import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Pediatra - Health Solutions For Your Child",
  description: "Professional pediatric healthcare services for your children",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${poppins.variable} antialiased`}>
        <Suspense fallback={null}>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
