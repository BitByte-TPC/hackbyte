import type { Metadata } from "next";
import "./globals.css";
// import Header from "@/components/MobileSidebar";
import { Sidebar } from "@/components/sidebar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Hackbyte 3.0",
  description: "Hackbyte 3.0 is a flagship event of TPC of IIITDMJ.",
};

const gotham = localFont({
  src: [
    {
      path: "../public/fonts/Gotham-Bold.otf",
      weight: "bold",
    },
    {
      path: "../public/fonts/Gotham-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Gotham-Black.otf",
      weight: "900",
    },
    {
      path: "../public/fonts/Gotham-Light.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/Gotham-Book.otf",
      weight: "normal",
    }
  ],
  variable: "--font-gotham",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gotham.variable} font-sans`}>
      <body>
        {/* <Header /> */}
        <Sidebar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
