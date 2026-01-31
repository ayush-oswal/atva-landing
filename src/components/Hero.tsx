"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);
  
  // Layered parallax for depth - different speeds for different elements
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fgScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const subtextY = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  
  // Smooth spring for foreground opacity fade
  const fgOpacityRaw = useTransform(scrollYProgress, [0.6, 0.95], [1, 0]);
  const fgOpacity = useSpring(fgOpacityRaw, { stiffness: 100, damping: 30 });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Video/Animation Placeholder Background - Sticky like navbar */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/vid.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[#1A1A1A]/70" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: fgY, scale: fgScale, opacity: fgOpacity }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-end pb-32 px-8 md:px-12 lg:px-16 text-left will-change-transform"
      >
        <motion.div
          style={{ y: headlineY }}
          className="mb-6 overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-start gap-1"
          >
            {["A", "T", "V", "A"].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FF5733]"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* <motion.p
          style={{ y: subtextY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#FF5733] text-sm font-medium tracking-widest uppercase mb-8"
        >
          Marketing • SEO • Web Design • AI Consulting
        </motion.p> */}

        <motion.h1
          style={{ y: headlineY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
        >
          We Build Brands That
          <span className="block mt-2 text-[#FF5733]">
            Dominate Digitally
          </span>
        </motion.h1>

        {/* <motion.p
          style={{ y: subtextY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="text-lg md:text-xl text-white/75 max-w-2xl mb-12"
        >
          Data-driven marketing, cutting-edge SEO, stunning web design, and
          AI-powered solutions to scale your business beyond limits.
        </motion.p> */}

        <motion.div
          style={{ y: ctaY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="px-12 py-5 bg-[#FF5733] text-white font-semibold rounded-full hover:bg-[#FF5733]/90 transition-all duration-300 shadow-xl shadow-black/30 cursor-default select-none"
          >
            Let&apos;s Grow Your Business
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full flex justify-center pt-2 bg-white/5 shadow-lg shadow-black/20"
          >
            <motion.div 
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-white/60 rounded-full" 
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Soft gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent pointer-events-none z-20" />
    </section>
  );
}
