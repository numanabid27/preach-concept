
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Preach Technologies | LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Head>
        <link rel="icon" href="./../app/favicon.png" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
