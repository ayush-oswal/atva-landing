"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About atva
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                We&apos;re not your typical agency. At atva, we blend cutting-edge 
                technology with battle-tested marketing strategies to deliver 
                results that matter.
              </p>
              <p>
                Founded on the principle that growth should be measurable and 
                scalable, we partner with ambitious brands ready to dominate 
                their markets. Our lean, results-first approach means no fluff, 
                no vanity metrics—just real business impact.
              </p>
              <p>
                From AI-powered automation to conversion-optimized websites, 
                from data-driven SEO to high-performing ad campaigns—we bring 
                the full arsenal of modern digital marketing to your doorstep.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  Data-Driven
                </div>
                <p className="text-sm text-white/70">
                  Every decision backed by analytics and insights
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  Results-First
                </div>
                <p className="text-sm text-white/70">
                  We measure success by your bottom line
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-900/30 via-purple-900/50 to-zinc-900 border border-cyan-500/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-dashed border-cyan-500/50"
                />
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  atva
                </div>
                <p className="text-white/70 mt-2 text-sm">
                  Growth. Engineered.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
