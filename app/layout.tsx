import type { Metadata } from "next";
import "./globals.css";
import {Sidebar} from "@/components/sidebar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Hackbyte 3.0",
  description: "Hackbyte 3.0 is a flagship event of TPC of IIITDMJ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
