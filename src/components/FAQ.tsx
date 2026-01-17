"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope. A landing page typically takes 1-2 weeks, while comprehensive marketing campaigns may span 2-3 months. We'll provide a detailed timeline during our initial proposal.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. We operate on a flexible pay-as-you-go model. You can start, pause, or scale your engagement at any time. We believe in earning your business through results, not contracts.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We've worked across SaaS, e-commerce, healthcare, finance, and professional services. Our data-driven approach adapts to any industry, and we quickly learn the nuances of your market.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We focus on metrics that impact your bottom line: revenue, qualified leads, conversion rates, and ROI. We provide transparent reporting and regular strategy sessions to review performance.",
  },
  {
    question: "What makes atva different from other agencies?",
    answer:
      "We combine cutting-edge AI and automation with proven marketing strategies. Our lean team means less overhead and more value. We're results-obsessed and treat your budget like our own.",
  },
  {
    question: "Can you work with our existing tools and platforms?",
    answer:
      "Absolutely. We're platform-agnostic and integrate with your existing tech stack—whether that's HubSpot, Salesforce, Shopify, WordPress, or custom solutions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/80">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl bg-zinc-900/50 border border-zinc-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
              >
                <span className="font-medium text-white pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-2xl flex-shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-white/80 text-sm leading-relaxed border-t border-zinc-800 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
