import type { Metadata } from "next";
import "./globals.css";
// import Header from "@/components/MobileSidebar";
import { Sidebar } from "@/components/sidebar";
import Footer from "@/components/footer";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Hackbyte 3.0",
  description: "Hackbyte 3.0 is a flagship event of TPC of IIITDMJ.",
};

const gotham = localFont({
  src: [
    {
      path: "../public/fonts/Gotham-Book.otf",
    },
    {
      path: "../public/fonts/Gotham-Bold.otf",
    },
    {
      path: "../public/fonts/Gotham-Medium.otf",
    },
    {
      path: "../public/fonts/Gotham-Black.otf",
    },
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
      </body>
    </html>
  );
}
