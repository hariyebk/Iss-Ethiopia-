import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const nunito = Nunito({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Iss Ethiopia",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased bg-[#f2f1f6]`}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
