
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";

// const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Preach Concepts | LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
