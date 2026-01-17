"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Deep dive into your business, market, and competitors. We craft a data-driven roadmap tailored to your goals.",
  },
  {
    number: "02",
    title: "Execution",
    description:
      "Our expert team brings the strategy to life with precision. Every campaign, every pixel, every line of code—flawlessly delivered.",
  },
  {
    number: "03",
    title: "Optimization",
    description:
      "Continuous testing and refinement. We analyze performance data and optimize for maximum impact and ROI.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Once we find what works, we amplify it. Scale your success across channels and markets with confidence.",
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We Grow Businesses
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            A proven process that delivers consistent, measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-transparent" />
              )}
              
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
