import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit, Poppins } from "next/font/google";
import "./globals.css";
import GlassNavBar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ViewTransitions } from 'next-view-transitions'
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hackbyte.in'),
  title: {
    default: "HackByte 4.0 | IIITDMJ Hackathon",
    template: "%s | HackByte 4.0"
  },
  description: "HackByte is IIITDMJ's student-run hackathon. Join us for 3 days of coding, innovation, and fun. April 3-5, 2026.",
  icons: {
    icon: '/favicon.ico',
    },
  keywords: ["Hackathon", "IIITDMJ", "Coding", "HackByte", "Jabalpur", "Tech Event"],
  openGraph: {
    title: "HackByte 4.0 | IIITDMJ Hackathon",
    description: "Join us for 3 days of coding, innovation, and fun at IIITDM Jabalpur.",
    url: 'https://hackbyte.in',
    siteName: 'HackByte',
    images: [
      {
        url: '/hackbyte_home_page.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${poppins.className} antialiased overflow-x-hidden bg-black`}
        >
          <SmoothScroll>
            <GlassNavBar />
            {children}
            <Footer />
          </SmoothScroll>
        </body>
      </html>
    </ViewTransitions>
  );
}
