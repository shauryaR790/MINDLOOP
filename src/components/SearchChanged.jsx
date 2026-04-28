import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const ChatGPTIcon = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
    <defs>
      <radialGradient id="cg-grad" cx="50%" cy="35%" r="70%">
        <stop offset="0%" stopColor="#ffb47a" />
        <stop offset="55%" stopColor="#ff6a1a" />
        <stop offset="100%" stopColor="#8a2a00" />
      </radialGradient>
    </defs>
    <g>
      <path
        d="M60 110 q-6 -28 18 -44 q24 -16 48 -2 q26 14 22 42 q-4 28 -30 36 q-26 8 -44 -8 q-10 -10 -14 -24 z"
        fill="url(#cg-grad)"
        opacity="0.95"
      />
      <circle cx="82" cy="94" r="10" fill="#2a0a00" opacity="0.55" />
      <path
        d="M70 130 q20 14 48 6"
        stroke="#ffd1a8"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
    </g>
  </svg>
);

const PerplexityIcon = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
    <defs>
      <radialGradient id="px-grad" cx="40%" cy="35%" r="70%">
        <stop offset="0%" stopColor="#f4f6fa" />
        <stop offset="40%" stopColor="#9aa6b6" />
        <stop offset="100%" stopColor="#0c1017" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="58" fill="url(#px-grad)" />
    <ellipse
      cx="82"
      cy="78"
      rx="22"
      ry="10"
      fill="#ffffff"
      opacity="0.35"
      transform="rotate(-25 82 78)"
    />
    <circle cx="100" cy="100" r="58" fill="none" stroke="#1a1f2a" strokeWidth="2" opacity="0.6" />
  </svg>
);

const GoogleAIIcon = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
    <defs>
      <linearGradient id="g-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#9ea7b3" />
      </linearGradient>
    </defs>
    <g transform="translate(100,100)">
      <path
        d="M0,-70 L14,-14 L70,0 L14,14 L0,70 L-14,14 L-70,0 L-14,-14 Z"
        fill="url(#g-grad)"
      />
      <path
        d="M0,-40 L8,-8 L40,0 L8,8 L0,40 L-8,8 L-40,0 L-8,-8 Z"
        fill="#ffffff"
        opacity="0.85"
      />
    </g>
  </svg>
);

const cards = [
  {
    title: "ChatGPT",
    desc: "Values structured, high-quality content in-depth, accurate answers users trust and rely on.",
    Icon: ChatGPTIcon,
  },
  {
    title: "Perplexity",
    desc: "Surfaces credible, well-structured sources and prioritises clear, authoritative explanations.",
    Icon: PerplexityIcon,
  },
  {
    title: "Google AI",
    desc: "Highlights content that fully answers the query, prioritising completeness and clear outcomes.",
    Icon: GoogleAIIcon,
  },
];

export const SearchChanged = () => {
  return (
    <section
      className="relative px-6 md:px-12 pt-52 md:pt-64 pb-6 md:pb-9 text-center"
      data-testid="search-changed-section"
    >
      <motion.h2
        {...fadeUp(0)}
        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.02] max-w-5xl mx-auto"
        data-testid="search-changed-heading"
      >
        Search has{" "}
        <span className="font-serif italic font-normal">changed.</span>
        <br />
        Have you?
      </motion.h2>

      <motion.p
        {...fadeUp(0.15)}
        className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-6 mb-24"
        data-testid="search-changed-subtitle"
      >
        People no longer search with keywords — they ask questions that ChatGPT,
        Perplexity, and Google AI answer. Brands that grow today are the ones
        that appear in those answers.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 max-w-6xl mx-auto">
        {cards.map(({ title, desc, Icon }, i) => (
          <motion.div
            key={title}
            {...fadeUp(0.1 * i)}
            className="flex flex-col items-center text-center"
            data-testid={`platform-card-${title.toLowerCase().replace(/\s/g, "-")}`}
          >
            <div className="w-[200px] h-[200px] flex items-center justify-center mb-6">
              <Icon />
            </div>
            <h3 className="font-semibold text-base mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm max-w-xs">{desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        {...fadeUp(0.2)}
        className="text-muted-foreground text-sm text-center"
      >
        If you don't answer the questions, someone else will.
      </motion.p>
    </section>
  );
};
