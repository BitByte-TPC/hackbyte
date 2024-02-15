import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "./clash_grotesk.css";

export const metadata = {
  title: "HackByte - IIITDMJ Hackathon",
  description:
    "HackByte is the IIITDMJ's student-run hackathon, which centers on bringing developers and problem solvers from different foundations together and enables them to develop projects that can bring out an impact.",
  keywords: "hackathon, IIITDMJ, hackbyte, coding, programming, tech",
  url: "https://hackbyte.in",
  openGraph: {
    title: "HackByte - IIITDMJ Hackathon",
    description:
      "HackByte is the IIITDMJ's student-run hackathon, which centers on bringing developers and problem solvers from different foundations together and enables them to develop projects that can bring out an impact.",
    url: "https://hackbyte.in",
    siteName: "HackByte - IIITDMJ Hackathon",
    images: [
      {
        url: "/opengraph-image.jpg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
