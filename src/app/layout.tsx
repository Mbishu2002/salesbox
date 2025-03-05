import type { Metadata } from "next";
import localFont from "next/font/local";
import { BackToTop } from "@/components/layout/back-to-top";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Salesbox - Business Intelligence and Management Software",
  description: "Streamline your business operations with Salesbox - the all-in-one solution for inventory management, sales tracking, and business intelligence. Try it free today!",
  keywords: ["business management", "inventory management", "sales tracking", "business intelligence", "POS system"],
  authors: [{ name: "Salesbox Team" }],
  openGraph: {
    title: "Salesbox - Business Intelligence and Management Software",
    description: "Streamline your business operations with Salesbox - the all-in-one solution for inventory management, sales tracking, and business intelligence.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/resources/og-image.png",
        width: 1200,
        height: 630,
        alt: "Salesbox Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesbox - Business Intelligence and Management Software",
    description: "Streamline your business operations with Salesbox",
    images: ["/resources/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="flex-1 w-full">
          {children}
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
