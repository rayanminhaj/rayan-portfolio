"use client";

import React from "react";
import { Mail, Linkedin } from "lucide-react";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-playfair",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
});

export default function Contact() {
  return (
    <main
      className={`${playfair.variable} ${poppins.variable} min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#e8ffe7] to-[#f4fff3] text-neutral-900 px-6`}
    >
      <h1
  className="text-7xl font-serif font-bold mb-4"
  style={{ fontFamily: "var(--font-playfair)" }}
>
  Let’s Connect <span className="inline-block">🤝</span>
</h1>

<p
  className="text-lg max-w-2xl text-center mb-8 text-neutral-700"
  style={{ fontFamily: "var(--font-poppins)" }}
>
  Whether it’s about technology, data or innovative projects, I’m always open
  to meaningful conversations. Feel free to reach out through email or connect
  with me on LinkedIn.
</p>

      <div className="space-y-4 text-lg text-center">
        <p>
          <Mail className="inline mr-2" size={20} />
          <a
            href="mailto:rayanminhaj1@gmail.com"
            className="hover:underline text-emerald-700"
          >
            rayanminhaj1@gmail.com
          </a>
        </p>

        <p>
          <Linkedin className="inline mr-2" size={20} />
          <a
            href="https://www.linkedin.com/in/rayanminhaj/"
            target="_blank"
            className="hover:underline text-blue-700"
          >
            linkedin.com/in/rayan-minhaj
          </a>
        </p>
      </div>
    </main>
  );
}