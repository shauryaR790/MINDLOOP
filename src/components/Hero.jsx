import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4";

const avatars = [
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=68",
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("subscribed:", email);
      setEmail("");
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
      data-testid="hero-section"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        data-testid="hero-video"
      />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-28 md:pt-32">
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center justify-center gap-3 mb-8"
          data-testid="hero-social-proof"
        >
          <div className="flex -space-x-2">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <span className="text-muted-foreground text-sm">
            7,000+ people already subscribed
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.02] mb-6"
          data-testid="hero-heading"
        >
          Get <span className="font-serif italic font-normal">Inspired</span>{" "}
          with Us.
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="text-base md:text-lg max-w-2xl mx-auto mb-10"
          style={{ color: "hsl(var(--hero-subtitle))" }}
          data-testid="hero-subtitle"
        >
          Join our feed for meaningful updates, news around technology and a
          shared journey toward depth and direction.
        </motion.p>

        <motion.form
          {...fadeUp(0.5)}
          onSubmit={handleSubmit}
          className="liquid-glass rounded-full p-2 max-w-lg mx-auto flex items-center gap-2"
          data-testid="hero-subscribe-form"
        >
          <div className="flex items-center gap-2 pl-4 flex-1">
            <Mail className="w-4 h-4 text-muted-foreground" strokeWidth={1.6} />
            <input
              type="email"
              required
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none border-none text-sm flex-1 placeholder:text-muted-foreground text-foreground"
              data-testid="hero-email-input"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-foreground text-background rounded-full px-8 py-3 text-xs font-semibold tracking-[2px]"
            data-testid="hero-subscribe-button"
          >
            SUBSCRIBE
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};
