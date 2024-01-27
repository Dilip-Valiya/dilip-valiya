import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dilip Valiya",
  description:
    "Dilip Valiya, Senior Software Engineer at ZopSmart, Driven and determined software engineer, promoting 3+ years of experience in building client applications. Offers strong interpersonal and communication skills.",
  keywords:
    "Dilip, Dilip Valiya, Dilip Valiya ZopSmart, Dilip Valiya Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
