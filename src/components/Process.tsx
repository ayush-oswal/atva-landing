"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Deep dive into your business, market, and competitors. We craft a data-driven roadmap tailored to your goals.",
    outcomes: ["ICP Defined", "Roadmap Ready"],
  },
  {
    number: "02",
    title: "Execution",
    description:
      "Our expert team brings the strategy to life with precision. Every campaign, every pixel, every line of code—flawlessly delivered.",
    outcomes: ["Campaigns Live", "Assets Delivered"],
  },
  {
    number: "03",
    title: "Optimization",
    description:
      "Continuous testing and refinement. We analyze performance data and optimize for maximum impact and ROI.",
    outcomes: ["CPL ↓ 40%", "Conversion ↑"],
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Once we find what works, we amplify it. Scale your success across channels and markets with confidence.",
    outcomes: ["Revenue ↑", "Market Expanded"],
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveStep(index);
            }
          });
        },
        {
          threshold: [0.5],
          rootMargin: "-30% 0px -30% 0px",
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 px-6 bg-[#1A1A1A]">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A]" />
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            How We Grow Businesses
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto font-light">
            A proven process that delivers consistent, measurable results
          </p>
        </motion.div>

        {/* Vertical layout with progress bar */}
        <div className="relative flex gap-6 md:gap-14">
          {/* Left: Progress bar */}
          <div className="hidden md:flex flex-col items-center">
            {/* Progress track */}
            <div className="relative w-1 flex-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full bg-[#FF5733] rounded-full"
                style={{ height: progressHeight }}
              />
            </div>
          </div>

          {/* Right: Steps */}
          <div className="flex-1 space-y-6">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isPast = index < activeStep;

              return (
                <motion.div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className={`relative p-6 md:p-8 rounded-2xl transition-all duration-500 cursor-default ${
                    isActive
                      ? "bg-[#252525] shadow-2xl shadow-black/40"
                      : "bg-[#1E1E1E] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30"
                  }`}
                >
                  {/* Step indicator dot (mobile) */}
                  <div className="md:hidden absolute -left-4 top-8">
                    <motion.div
                      className="w-3 h-3 rounded-full"
                      animate={{
                        backgroundColor: isPast || isActive ? "#FF5733" : "#3C3C3C",
                        scale: isActive ? 1.3 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Step indicator dot (desktop) - positioned on the progress line */}
                  <div className="hidden md:block absolute -left-[46px] md:-left-[74px] top-8">
                    <motion.div
                      className="w-3.5 h-3.5 rounded-full"
                      animate={{
                        backgroundColor: isPast || isActive ? "#FF5733" : "#3C3C3C",
                        scale: isActive ? 1.4 : 1,
                        boxShadow: isActive ? "0 0 20px rgba(255,87,51,0.4)" : "none",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8">
                    {/* Step number */}
                    <motion.div
                      className="text-5xl md:text-6xl font-bold tracking-tighter shrink-0"
                      animate={{
                        color: isActive ? "#FF5733" : isPast ? "#FF5733" : "rgba(255,255,255,0.15)",
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Text content */}
                    <div className="flex-1 space-y-3">
                      {/* Title */}
                      <h3
                        className={`text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-400 ${
                          isActive ? "text-white" : "text-white/50"
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-sm md:text-base leading-relaxed transition-colors duration-400 ${
                          isActive ? "text-white/80" : "text-white/40"
                        }`}
                      >
                        {step.description}
                      </p>

                      {/* Outcome chips */}
                      <motion.div
                        className="flex flex-wrap gap-2 pt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 10,
                        }}
                        transition={{ duration: 0.3, delay: isActive ? 0.15 : 0 }}
                      >
                        {step.outcomes.map((outcome, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-medium bg-[#FF5733]/10 text-[#FF5733] rounded-full"
                          >
                            {outcome}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
