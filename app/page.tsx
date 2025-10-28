"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Bot, Brain } from "lucide-react";
import { Playfair_Display, Poppins } from "next/font/google";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

// ======= FONTS =======
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-playfair",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function Page() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine); // load everything (all presets)
    }).then(() => setEngineReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      background: { color: { value: "#00000000" } },
      particles: {
        number: { value: 45 },
        color: { value: "#4ade80" },
        links: { enable: true, color: "#4ade80", opacity: 0.25 },
        move: { enable: true, speed: 0.4 },
        opacity: { value: 0.25 },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!engineReady) return null; // waits for animation engine

  return (
    <main
      className={`${playfair.variable} ${poppins.variable} scroll-smooth min-h-screen relative bg-gradient-to-b from-[#d9f8d6] via-[#e8ffe7] to-[#f4fff3] text-neutral-900 overflow-hidden`}
    >
      <Particles id="tsparticles" className="absolute inset-0 -z-10" options={options} />
      <FloatingIcons />

      <section className="flex flex-col items-center justify-center text-center py-20 px-8">
        <motion.img
          src="/me.jpg"
          alt="Rayan Minhaj"
          className="w-44 h-44 rounded-full shadow-lg border-2 border-white mb-6 object-cover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <h1 className="text-6xl font-serif font-bold mb-4">Hey, I'm Rayan Minhaj</h1>
        <p className="text-lg max-w-2xl text-neutral-700">
          I’m a Computer Science major at <b>Penn State</b>, passionate about{" "}
          <b>AI, ML and intelligent systems</b>. I enjoy exploring how code can
          make ideas come alive and building projects that blend creativity,
          logic and purpose.
        </p>
      </section>
    </main>
  );
}

/* ============== FLOATING ICONS ============== */
function FloatingIcons() {
  const iconClass =
    "absolute opacity-30 hover:opacity-60 transition drop-shadow-md";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        className={`${iconClass} top-[12%] left-[-8%]`}
        initial={{ x: "-10vw" }}
        animate={{ x: "115vw" }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        <Cpu size={44} />
      </motion.div>

      <motion.div
        className={`${iconClass} top-[38%] left-[-12%]`}
        initial={{ x: "-15vw" }}
        animate={{ x: "120vw" }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        <Bot size={48} />
      </motion.div>

      <motion.div
        className={`${iconClass} top-[70%] left-[-10%]`}
        initial={{ x: "-12vw" }}
        animate={{ x: "118vw" }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <Brain size={46} />
      </motion.div>
    </div>
  );
}