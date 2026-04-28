import React from "react";
import { motion } from "framer-motion";

const SOLUTION_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const features = [
  {
    title: "Curated Feed",
    desc: "A personalised feed that brings only what matters — no noise, no filler.",
  },
  {
    title: "Writer Tools",
    desc: "Clean editor, analytics, and distribution built for thoughtful publishers.",
  },
  {
    title: "Community",
    desc: "Conversations with readers who care — beyond likes and empty metrics.",
  },
  {
    title: "Distribution",
    desc: "Reach readers where they search, read, and discover new ideas.",
  },
];

export const Solution = () => {
  return (
    <section
      id="how"
      className="relative py-32 md:py-44 px-6 md:px-12 border-t border-border/30"
      data-testid="solution-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          {...fadeUp(0)}
          className="text-xs tracking-[3px] uppercase text-muted-foreground mb-6"
        >
          Solution
        </motion.p>
        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl font-medium tracking-[-1.5px] leading-[1.05] max-w-4xl mb-16"
          data-testid="solution-heading"
        >
          The platform for{" "}
          <span className="font-serif italic font-normal">meaningful</span>{" "}
          content
        </motion.h2>

        <motion.div
          {...fadeUp(0.2)}
          className="rounded-2xl overflow-hidden mb-20"
        >
          <video
            className="w-full aspect-[3/1] object-cover"
            src={SOLUTION_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            data-testid="solution-video"
          />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp(0.1 * i)}
              data-testid={`feature-${f.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <h3 className="font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
