import "./globals.css";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Github, Linkedin } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rayan Minhaj | Portfolio",
  description:
    "Portfolio of Rayan Minhaj — Computational Data Science major at Penn State",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f4fff4] text-black flex flex-col min-h-screen`}
      >
        {/* ===== UNIVERSAL NAVBAR ===== */}
        <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-serif font-bold text-black">Rayan Minhaj</h1>
            <span className="text-sm text-gray-600">© 2025</span>
          </div>

          <div className="flex items-center gap-6 text-lg">
            <Link href="/" className="hover:text-green-700 transition text-black">
              Home
            </Link>
            <Link href="/work" className="hover:text-green-700 transition text-black">
              Projects
            </Link>
            <Link href="/resume" className="hover:text-green-700 transition text-black">
              Resume
            </Link>
            <Link href="/contact" className="hover:text-green-700 transition text-black">
              Contact
            </Link>

            {/* Social Icons */}
            <a
              href="https://www.linkedin.com/in/rayanminhaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-700 text-black"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/rayanminhaj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-700 text-black"
            >
              <Github size={20} />
            </a>
          </div>
        </nav>

        {/* ===== PAGE CONTENT ===== */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
