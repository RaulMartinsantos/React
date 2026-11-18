import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "News",
  description: "I news",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" className={`${roboto.variable} h-full antialiased`}>
      <body className={`min-h-full flex flex-col`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
