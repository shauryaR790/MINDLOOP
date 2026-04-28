import React from "react";

const links = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];

export const Footer = () => {
  return (
    <footer
      className="py-12 px-8 md:px-28 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/30"
      data-testid="footer"
    >
      <p className="text-muted-foreground text-sm">
        © 2026 Mindloop. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            data-testid={`footer-link-${l.label.toLowerCase()}`}
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
};
