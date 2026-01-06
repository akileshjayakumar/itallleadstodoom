"use client";

import { motion } from "framer-motion";
import { Countdown } from "./components/Countdown";
import { TrailerLinks } from "./components/TrailerLinks";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black selection:bg-doom-green selection:text-black">
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

      {/* First Viewport Section - Everything visible on first load */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-between px-4 py-8 md:py-12">
        {/* Main Content */}
        <div className="flex flex-col items-center w-full max-w-6xl grow justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-6 relative w-full h-auto max-w-3xl flex justify-center"
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

        {/* Credits Section - Bottom of first viewport */}
        <div className="flex flex-col items-center gap-2 text-gray-500 text-[10px] tracking-widest font-montserrat mt-auto pt-8">
          <span className="uppercase">December 18, 2026</span>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="lowercase text-[10px] tracking-widest font-sans">
              made by
            </span>
            <span className="text-lg">👨‍💻</span>
            <a
              href="https://AkileshJayakumar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lowercase text-sm tracking-normal underline decoration-1 underline-offset-4 font-sans hover:text-white transition-colors"
            >
              akileshjayakumar.com
            </a>

            {/* Pipe Separator */}
            <span className="text-gray-600 mx-1">|</span>

            {/* Twitter Handle with Creative X Design */}
            <a
              href="https://x.com/sentrytoast"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-gray-400 hover:text-doom-green transition-all duration-300"
            >
              <div className="relative flex items-center justify-center w-5 h-5">
                {/* Glowing background on hover */}
                <div className="absolute inset-0 bg-doom-green rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
                {/* X Icon */}
                <svg
                  className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <span className="text-xs tracking-wide font-sans group-hover:underline underline-offset-4 decoration-doom-green/50">
                @sentrytoast
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Below the Fold - Disclaimer Section (requires scroll) */}
      <footer className="relative z-20 flex flex-col items-center gap-4 text-gray-500 font-montserrat py-12 px-4 bg-black/80">
        <p className="max-w-[90%] md:max-w-4xl text-center text-[10px] md:text-xs text-gray-400 leading-relaxed font-sans select-none">
          This is an unofficial fan-made project. Avengers: Doomsday, Marvel,
          and all related characters and concepts are property of Marvel Studios
          and The Walt Disney Company. This site is not affiliated with or
          endorsed by Marvel or Disney.
        </p>
        <p className="text-center text-[10px] md:text-xs text-gray-400/80 font-sans select-none">
          marvel icons used from{" "}
          <a
            href="https://www.flaticon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-2 hover:text-white transition-colors"
          >
            flaticon
          </a>
        </p>
      </footer>
    </main>
  );
}
