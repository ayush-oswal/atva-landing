"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const projects = [
  {
    title: "TechFlow SaaS",
    description: "Complete brand overhaul and 300% increase in organic traffic",
    category: "SEO & Branding",
  },
  {
    title: "GreenLeaf E-commerce",
    description: "Custom Shopify build with 5x conversion rate improvement",
    category: "Web Design",
  },
  {
    title: "FinanceHub",
    description: "Google Ads campaign delivering 8x ROAS consistently",
    category: "Google Ads",
  },
  {
    title: "HealthFirst Clinic",
    description: "Local SEO strategy resulting in #1 rankings across 15 keywords",
    category: "SEO",
  },
  {
    title: "AutoMate AI",
    description: "AI-powered workflow automation saving 40 hours weekly",
    category: "AI Consulting",
  },
  {
    title: "StyleBox Fashion",
    description: "Meta Ads scaling from $5K to $50K monthly spend profitably",
    category: "Meta Ads",
  },
];

export default function Work() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPosition += speed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="work" className="py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Our Work
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A selection of projects where we&apos;ve driven exceptional results
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden cursor-grab"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Double the projects for infinite scroll effect */}
        {[...projects, ...projects].map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex-shrink-0 w-80 p-7 rounded-2xl bg-[#242424] shadow-lg shadow-black/25 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 group"
          >
            {/* Image placeholder */}
            <div className="aspect-video rounded-xl bg-[#1A1A1A] mb-5 flex items-center justify-center shadow-md shadow-black/20">
              <div className="text-4xl opacity-50">🖼️</div>
            </div>
            <div className="text-xs text-[#FF5733] font-medium mb-2">
              {project.category}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FF5733] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
