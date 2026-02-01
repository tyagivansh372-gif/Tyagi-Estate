import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Ensure you have created components/Footer.jsx

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tyagi Estates | Shaping Land into Landmarks", // Updated to match your new branding
  description: "Established 2005. Premium real estate and integrated colony development with a legacy of trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-slate-200 min-h-screen flex flex-col`}
      >
        {/* Global Navigation - Fixed at the top */}
        <Navbar />

        {/* Dynamic Page Content */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Global Footer - Bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}