import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dilip Valiya",
  description:
    "Dilip Valiya, Senior Software Engineer at ZopSmart, Driven and determined software engineer, promoting 3+ years of experience in building client applications. Offers strong interpersonal and communication skills.",
  keywords:
    "Dilip, Dilip Valiya, Dilip Valiya ZopSmart, Dilip Valiya Software Engineer",
  metadataBase: new URL("https://dilip-valiya.vercel.app"),
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
      <body className={inter.className}>
        <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/ram.jpg"
                className="h-8"
                alt="Ram"
                width={24}
                height={100}
              />
              <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-white">
                Dilip Valiya
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <a href="/projects">
                <button
                  type="button"
                  className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                >
                  Projects
                </button>
              </a>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                <li>
                  <a
                    href="/#about"
                    className="block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/#experience"
                    className="block py-2 px-3 md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="/#education"
                    className="block py-2 px-3 md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                  >
                    Education
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mt-[70px]">{children}</div>
        <Analytics />
        <footer className="w-full bg-gray-900 border-t border-gray-600">
          <div className="mx-auto max-w-7xl flex flex-wrap gap-4 items-center justify-center min-h-20">
            <a href="mailto:dilipkvaliya@gmail.com">
              <i className="fa fa-envelope-o"></i>
              <span className="pl-2">dilipkvaliya@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/dilipkvaliya" target="_blank">
              <i className="fa fa-linkedin-square"></i>
              <span className="pl-2">dilipkvaliya</span>
            </a>
            <a href="https://github.com/Dilip-Valiya" target="_blank">
              <i className="fa fa-github"></i>
              <span className="pl-2">Dilip-Valiya</span>
            </a>
            <a
              href="https://www.instagram.com/dilip.valiya.99/"
              target="_blank"
            >
              <i className="fa fa-instagram"></i>
              <span className="pl-2">dilip.valiya.99</span>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
