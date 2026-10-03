import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { pages } from '../components/types';

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: pages.home.metadata.title,
  description: "Premium car wash and detailing services to keep your vehicle looking its best.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
