"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Services() {
  const pillars = useMemo(
    () => [
      {
        id: "strategy",
        leftLabel: "STRATEGY",
        title: "STRATEGY",
        subtitle: "The Foundation",
        accentClass: "text-[#FF5733]",
        items: [
          "Market Research & ICP Definition",
          "Campaign Planning & Roadmapping",
          "Data Analytics & Optimization (Ex: Providing Dashboards to track APIs)",
          "AI Consulting & Implementation (AI Enablement and AI Workflows AI Native strategy)",
        ],
      },
      {
        id: "design",
        leftLabel: "DESIGN",
        title: "DESIGN",
        subtitle: "The Experience",
        accentClass: "text-[#FF5733]",
        items: [
          "Brand Identity & Visual Design (Company Branding, Logos, Assets, Animations etc)",
          "Website Design & Development",
          "Marketing Collateral (Ex: Hoardings, Magazines, Signages etc)",
        ],
      },
      {
        id: "content",
        leftLabel: "CONTENT",
        title: "CONTENT",
        subtitle: "The Voice",
        accentClass: "text-[#FF5733]",
        items: [
          "SEO (Making website appear on top on google listings, AI Listings)",
          "Content Strategy (Designing Content calendars, Format Strategy, and more)",
          "Blog Posts & Long-form Content",
          "Video & Multimedia Production",
          "Email Campaigns (AK Research & Ayush O)",
          "Social Media Content",
          "Community Management",
        ],
      },
      {
        id: "marketing",
        leftLabel: "MARKETING",
        title: "MARKETING",
        subtitle: "The Amplifier",
        accentClass: "text-[#FF5733]",
        items: [
          "Google Ads Management",
          "Meta Ads",
          "Marketing Automation (Based on client requirements)",
          "Analytics & Reporting",
          "Social Media Management",
        ],
      },
    ],
    [],
  );

  const [activeId, setActiveId] = useState(pillars[0]?.id ?? "strategy");
  const [navStyle, setNavStyle] = useState<"top" | "fixed" | "bottom">("top");
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRefs = useRef<Record<string, HTMLElement | null>>({});
  const navRef = useRef<HTMLDivElement | null>(null);

  // Track section scroll position for sticky nav behavior
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !navRef.current) return;

      const section = sectionRef.current;
      const sectionRect = section.getBoundingClientRect();
      const navHeight = navRef.current.offsetHeight;
      const headerOffset = 112; // top-28 = 7rem = 112px

      // Section hasn't reached the top yet
      if (sectionRect.top > headerOffset) {
        setNavStyle("top");
      }
      // Section has scrolled past (nav should stick to bottom)
      else if (sectionRect.bottom < navHeight + headerOffset + 100) {
        setNavStyle("bottom");
      }
      // Section is in view - nav should be fixed
      else {
        setNavStyle("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active pillar based on scroll
  useEffect(() => {
    const els = pillars
      .map((p) => contentRefs.current[p.id])
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        const top = visible[0];
        if (!top) return;
        const id = (top.target as HTMLElement).dataset.pillarId;
        if (id) setActiveId(id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-35% 0px -45% 0px",
      },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pillars]);

  const scrollTo = (id: string) => {
    const el = contentRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getNavClasses = () => {
    const base = "hidden lg:block w-[280px] z-40";
    switch (navStyle) {
      case "fixed":
        return `${base} fixed top-28`;
      case "bottom":
        return `${base} absolute bottom-0 left-6`;
      default:
        return `${base} absolute top-0 left-6`;
    }
  };

  return (
    <section ref={sectionRef} id="services" className="relative py-32 px-6">
      {/* Left sticky nav - Desktop only */}
      <div ref={navRef} className={getNavClasses()}>
        <nav className="relative flex flex-col gap-0 pr-8">
          {/* Animated indicator bar */}
          <motion.div
            className="absolute left-0 h-14 w-1 rounded-full bg-[#FF5733]"
            initial={false}
            animate={{
              y: pillars.findIndex((p) => p.id === activeId) * 56,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          {pillars.map((p) => {
            const isActive = activeId === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => scrollTo(p.id)}
                className={[
                  "text-left text-3xl font-bold tracking-tight transition-colors duration-200 h-14 pl-5",
                  isActive ? "text-[#FF5733]" : "text-white/30 hover:text-white/60",
                ].join(" ")}
              >
                {p.leftLabel}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile horizontal nav */}
      <div className="lg:hidden mb-8 overflow-x-auto">
        <nav className="flex gap-6 pb-4">
          {pillars.map((p) => {
            const isActive = activeId === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => scrollTo(p.id)}
                className={[
                  "text-2xl font-bold tracking-tight transition-colors duration-200 whitespace-nowrap",
                  isActive ? "text-[#FF5733]" : "text-white/30 hover:text-white/60",
                ].join(" ")}
              >
                {p.leftLabel}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left lg:pl-[320px]"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Services that make business{" "}
            <span className="relative inline-block px-2 font-serif italic text-[#FF5733]">
              sense
            </span>
          </h2>
        </motion.div>

        {/* Right details column */}
        <div className="lg:pl-[320px] space-y-16">
          {pillars.map((p) => (
            <motion.section
              key={p.id}
              ref={(el) => {
                contentRefs.current[p.id] = el;
              }}
              data-pillar-id={p.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-[#242424] p-10 shadow-xl shadow-black/30"
            >
              <div className="flex flex-col gap-2">
                
                <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {p.title}{" "}
                  <span className={p.accentClass}>—</span>{" "}
                  <span className="text-white/70">{p.subtitle}</span>
                </h3>
              </div>

              <div className="mt-10 space-y-5">
                {p.items.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-2.5 inline-block h-2 w-2 rounded-full bg-[#FF5733] shadow-sm shadow-[#FF5733]/30" />
                    <p className="text-base text-white/75 md:text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}
