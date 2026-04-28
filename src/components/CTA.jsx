import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";
import { LogoMark } from "./Navbar";

const HLS_URL =
  "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export const CTA = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls;
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_URL;
    }

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, []);

  return (
    <section
      id="use-cases"
      className="relative py-32 md:py-44 px-6 border-t border-border/30 overflow-hidden"
      data-testid="cta-section"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        data-testid="cta-video"
      />
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          {...fadeUp(0)}
          className="flex justify-center mb-8"
        >
          <LogoMark outer="w-10 h-10" inner="w-5 h-5" />
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-1.5px] leading-[1.05] mb-6"
          data-testid="cta-heading"
        >
          Start Your{" "}
          <span className="font-serif italic font-normal">Journey</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10"
        >
          Join a community of thoughtful readers and writers — and turn every
          newsletter into a conversation worth having.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background rounded-lg px-8 py-3.5 text-sm font-semibold"
            data-testid="cta-subscribe-button"
          >
            Subscribe Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass rounded-lg px-8 py-3.5 text-sm font-semibold text-foreground"
            data-testid="cta-start-writing-button"
          >
            Start Writing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
