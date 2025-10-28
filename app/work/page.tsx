"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function WorkPage() {
  const [active, setActive] = useState("vizzard");

  const projects = [
  {
    id: "vizzard",
    title: "The Vizzard",
    desc: "Election data made visual through Java and curiosity.",
    logo: "/work/the_vizzard_logo.png",
    preview: "/work/the_vizzard_preview.png",
  },
  {
    id: "studybuddy",
    title: "StudyBuddy",
    desc: "A Python sidekick that keeps your study sessions smart and focused.",
    logo: "/work/study_buddy_logo.png",
    preview: "/work/study_buddy_preview.png",
  },
  {
    id: "21arena",
    title: "21Arena",
    desc: "Blackjack meets Python where code and chance go head to head.",
    logo: "/work/21_logo.png",
    preview: "/work/21_preview.png",
  },
  {
    id: "mathly",
    title: "Mathly",
    desc: "Math gets a glow-up with visuals that actually make sense.",
    logo: "/work/mathly_logo.png",
    preview: "/work/mathly_preview.png",
  },
];

  return (
    <main className="relative min-h-screen bg-[#e8ffe7] text-neutral-900 flex flex-col md:flex-row overflow-hidden">
      {/* LEFT SIDE — Project List */}
      <div className="flex flex-col w-full md:w-1/2 px-10 py-16 overflow-y-auto no-scrollbar bg-[#e8ffe7]">
        <section className="w-full">
          <h1 className="text-5xl font-bold mb-4">PROJECTS</h1>
          <p className="text-lg text-neutral-700 mb-12 max-w-lg leading-relaxed">
  A curated selection of my favorite projects focused on AI, software development and creative problem-solving.
</p>


          {projects.map((proj) => (
            <Link href={`/work/${proj.id}`} key={proj.id} className="block">
  <motion.div
    onMouseEnter={() => setActive(proj.id)}
    className={`flex items-start gap-6 py-6 border-t border-green-200 cursor-pointer transition-all ${
      active === proj.id ? "bg-green-100" : "hover:bg-green-50/70"
    }`}
  >
    <Image
      src={proj.logo}
      alt={`${proj.title} logo`}
      width={80}
      height={80}
      className="rounded-lg shadow-sm hover:scale-110 transition-transform duration-300"
    />
    <div>
      <h2 className="text-2xl font-semibold mb-1">{proj.title}</h2>
      <p className="text-gray-700 text-base leading-relaxed max-w-md">
        {proj.desc}
      </p>
    </div>
  </motion.div>
</Link>

          ))}
        </section>
      </div>

      {/* RIGHT SIDE (Layout filler for large screens) */}
      <div className="hidden md:block w-1/2 bg-[#e8ffe7]" />

      {/* FIXED PREVIEW — Bottom Right (Extended Upwards) */}
      <div className="hidden md:fixed bottom-10 right-10 md:w-[47%] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-green-100 bg-white/50 backdrop-blur-md z-40">
        <AnimatePresence mode="wait">
          {projects.map(
            (proj) =>
              active === proj.id && (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, scale: 0.97, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.02, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={proj.preview}
                    alt={`${proj.title} preview`}
                    fill
                    className="object-cover rounded-3xl"
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
