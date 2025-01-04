import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SanityLive } from "./sanity/live";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sea World",
  description: "filled with interesting facts of life beneath the water’s surface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <SanityLive/>
<Footer/>
      </body>
    </html>
  );
}
