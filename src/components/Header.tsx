"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Contact Us", href: "#contact" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full backdrop-blur-xl transition-all duration-500"
    >
      {/* Gradient border wrapper - always visible */}
      <div
        className="p-[1px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400"
      >
        <div
          className={`px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled ? "bg-black/90" : "bg-black/70"
          }`}
        >
          <nav className="flex items-center gap-8">
            <motion.ul
              className="flex items-center gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.li key={item.href} variants={itemVariants}>
                  <motion.a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="relative text-sm text-white transition-all duration-300"
                    whileHover={{ scale: 1.15, fontSize: "16px" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="w-px h-6 bg-gradient-to-b from-cyan-400/50 to-purple-500/50"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/logo.png"
                alt="atva logo"
                width={80}
                height={32}
                className="h-8 w-auto"
              />
            </motion.div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
