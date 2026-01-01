"use client";

import { motion } from "framer-motion";
import { Countdown } from "./components/Countdown";
import { TrailerLinks } from "./components/TrailerLinks";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between bg-black selection:bg-doom-green selection:text-black overflow-x-hidden">
      {/* Background Poster */}
      <div
        className="fixed inset-0 bg-[url('/poster.png')] bg-cover bg-center opacity-40 z-0"
        style={{ filter: "grayscale(30%) contrast(120%)" }}
      />

      {/* Dynamic Overlay - Vignette and Color Tint */}
      <div className="fixed inset-0 bg-linear-to-t from-black via-black/80 to-transparent z-0" />
      <div className="fixed inset-0 bg-linear-to-b from-black/80 via-transparent to-black z-0" />

      {/* Ambient Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,var(--doom-green)_0%,transparent_70%)] opacity-20 blur-3xl pointer-events-none z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl px-4 py-20 md:py-32 grow justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-12 relative w-full h-auto max-w-3xl flex justify-center"
        >
          {/* Using img tag for simplicity with the uploaded asset */}
          <img
            src="/logo.png"
            alt="Avengers Doomsday Logo"
            className="w-full h-auto drop-shadow-[0_0_25px_rgba(79,240,120,0.4)]"
          />
        </motion.div>

        <Countdown />
        <TrailerLinks />
      </div>

      {/* Footer / Credits */}
      <footer className="relative z-20 flex flex-col items-center gap-4 text-gray-500 text-[10px] tracking-widest font-montserrat pb-8">
        <span className="uppercase">December 18, 2026</span>
        <a
          href="https://AkileshJayakumar.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <span className="lowercase text-[10px] tracking-widest font-sans">
            made by
          </span>
          <span className="text-lg">👨‍💻</span>
          <span className="lowercase text-sm tracking-normal underline decoration-1 underline-offset-4 font-sans">
            akileshjayakumar.com
          </span>
        </a>
      </footer>
    </main>
  );
}
