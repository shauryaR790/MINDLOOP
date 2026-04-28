import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MISSION_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4";

const paragraph1 =
  "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";
const paragraph2 =
  "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";

const highlightWords = new Set(["curiosity", "meets", "clarity"]);

const Word = ({ word, progress, range, highlight }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <span
        className="absolute inset-0"
        style={{ color: "hsl(var(--hero-subtitle) / 0.15)" }}
      >
        {word}
      </span>
      <motion.span
        style={{
          opacity,
          color: highlight
            ? "hsl(var(--foreground))"
            : "hsl(var(--hero-subtitle))",
        }}
      >
        {word}
      </motion.span>
    </span>
  );
};

const ScrollParagraph = ({ text, className, highlight = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.2"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const isHighlight = highlight && highlightWords.has(w.toLowerCase());
        return (
          <Word
            key={i}
            word={w}
            progress={scrollYProgress}
            range={[start, end]}
            highlight={isHighlight}
          />
        );
      })}
    </p>
  );
};

export const Mission = () => {
  return (
    <section
      id="philosophy"
      className="relative pt-0 pb-32 md:pb-44 px-6"
      data-testid="mission-section"
    >
      <div className="max-w-[800px] mx-auto mb-16">
        <video
          className="w-full aspect-square object-cover rounded-none"
          src={MISSION_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          data-testid="mission-video"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <ScrollParagraph
          text={paragraph1}
          highlight={true}
          className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-tight"
        />
        <ScrollParagraph
          text={paragraph2}
          className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 leading-tight"
        />
      </div>
    </section>
  );
};
