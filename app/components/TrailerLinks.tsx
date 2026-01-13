"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const links = [
  {
    title: "Steve Rogers",
    subtitle: "Character Teaser",
    url: "https://www.youtube.com/watch?v=UiMg566PREA",
    icon: "/captain_america.png",
  },
  {
    title: "Thor Odinson",
    subtitle: "Character Teaser",
    url: "https://www.youtube.com/watch?v=1clWprLC5Ak",
    icon: "/thor.png",
  },
  {
    title: "X-Men",
    subtitle: "Character Teaser",
    url: "https://www.youtube.com/watch?v=kH1XlwHQv9o",
    icon: "/xmen.png",
  },
  {
    title: "The Wakandans And The Fantastic Four",
    subtitle: "Character Teaser",
    url: "https://www.youtube.com/watch?v=399Ez7WHK5s",
    icon: "/avengers-logo.png",
  },
];

export function TrailerLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-12 sm:mt-16 md:mt-20 z-10 font-montserrat text-xs max-w-4xl mx-auto w-full px-4 sm:px-6">
      {links.map((link, index) => (
        <TrailerLink key={index} {...link} index={index} />
      ))}
    </div>
  );
}

function TrailerLink({
  title,
  subtitle,
  url,
  icon,
  index,
}: {
  title: string;
  subtitle: string;
  url: string;
  icon: string;
  index: number;
}) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
      className="group flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3.5 sm:py-4 border border-white/10 bg-white/5 rounded-lg hover:bg-white/10 hover:border-doom-green/50 active:bg-white/15 transition-all duration-300 backdrop-blur-sm w-full min-h-[60px] sm:min-h-[64px]"
    >
      <div className="relative w-11 h-11 sm:w-10 sm:h-10 flex items-center justify-center border border-white/20 rounded-full group-hover:border-doom-green group-hover:bg-doom-green/10 transition-colors duration-300 shrink-0">
        <img
          src={icon}
          alt={`${title} logo`}
          className="w-6 h-6 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <div className="flex flex-col items-start gap-0.5 grow min-w-0">
        <span className="text-gray-200 font-bold group-hover:text-white transition-colors duration-300 font-cinzel text-sm sm:text-sm truncate w-full">
          {title}
        </span>
        <span className="text-[10px] sm:text-[10px] text-gray-500 group-hover:text-doom-green-dim transition-colors uppercase">
          {subtitle}
        </span>
      </div>

      <ExternalLink className="w-5 h-5 sm:w-4 sm:h-4 text-gray-600 group-hover:text-doom-green transition-colors duration-300 shrink-0" />
    </motion.a>
  );
}
