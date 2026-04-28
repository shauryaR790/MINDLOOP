import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const LogoMark = ({ outer = "w-7 h-7", inner = "w-3 h-3" }) => (
  <div
    className={`${outer} rounded-full border-2 border-foreground/60 flex items-center justify-center`}
    data-testid="mindloop-logo-mark"
  >
    <div className={`${inner} rounded-full border border-foreground/60`} />
  </div>
);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Use Cases", href: "#use-cases" },
];

const socials = [
  { Icon: Instagram, label: "instagram", href: "#" },
  { Icon: Linkedin, label: "linkedin", href: "#" },
  { Icon: Twitter, label: "twitter", href: "#" },
];

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-28 py-4 flex items-center justify-between"
      data-testid="navbar"
    >
      <div className="flex items-center gap-3" data-testid="navbar-logo">
        <LogoMark />
        <span className="font-bold text-lg tracking-tight">Mindloop</span>
      </div>

      <div className="hidden md:flex items-center gap-3 text-sm">
        {navLinks.map((link, i) => (
          <React.Fragment key={link.label}>
            <a
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              {link.label}
            </a>
            {i < navLinks.length - 1 && (
              <span className="text-muted-foreground/50">•</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex items-center gap-2">
        {socials.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            data-testid={`social-${label}`}
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
          >
            <Icon className="w-4 h-4" strokeWidth={1.6} />
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export { LogoMark };
