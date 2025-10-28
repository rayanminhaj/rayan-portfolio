"use client";

import { Playfair_Display, Montserrat } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function ResumePage() {
  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen bg-[#e8ffe7] px-6 py-10 ${montserrat.className}`}
    >
      {/* Elegant Header */}
      <h1
        className={`${playfair.className} text-6xl font-extrabold text-neutral-900 mb-3 tracking-wider text-center`}
      >
        My Resume
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
      </p>

      {/* Resume Frame */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border border-green-200 overflow-hidden">
        <iframe
          src="/resume.pdf"
          title="Rayan Minhaj Resume"
          className="w-full h-[90vh] rounded-2xl"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href="/resume.pdf"
        download="Rayan_Minhaj_Resume.pdf"
        className="mt-8 px-8 py-3 bg-green-700 text-white text-lg font-semibold rounded-md shadow-md hover:bg-green-800 transition"
      >
        Download Resume
      </a>
    </main>
  );
}