import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Babyland - Bolalar salomatligi markazi",
  description: "Farzandingiz salomatligi uchun professional pediatriya xizmatlari. Bolalar massaji, LFK, emlash va boshqa tibbiy xizmatlar.",
  keywords: ["pediatriya", "bolalar doktori", "bolalar massaji", "LFK", "emlash", "Toshkent", "pediatra klinika"],
  authors: [{ name: "Babyland" }],
  creator: "Babyland",
  publisher: "Babyland",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://babyland.uz'),
  alternates: {
    canonical: '/',
    languages: {
      'uz': '/uz',
      'ru': '/ru',
    },
  },
  openGraph: {
    title: "Babyland - Bolalar salomatligi markazi",
    description: "Farzandingiz salomatligi uchun professional pediatriya xizmatlari",
    url: 'https://babyland.uz',
    siteName: 'Babyland',
    images: [
      {
        url: '/Babyland1.svg',
        width: 1200,
        height: 630,
        alt: 'Babyland Logo',
      },
    ],
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Babyland - Bolalar salomatligi markazi",
    description: "Farzandingiz salomatligi uchun professional pediatriya xizmatlari",
    images: ['/Babyland1.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Babyland1.svg',
    shortcut: '/Babyland1.svg',
    apple: '/Babyland1.svg',
  },
  manifest: '/manifest.json',
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body className={`font-sans ${poppins.variable} antialiased`} suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={null}>
            <Header />
            {children}
            <Footer />
            <Analytics />
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
