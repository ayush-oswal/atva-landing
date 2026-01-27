"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Digital Marketing & Branding",
    description:
      "Build a powerful brand identity and reach your target audience through strategic digital campaigns that convert.",
    icon: "📣",
  },
  {
    title: "SEO & Content Marketing",
    description:
      "Dominate search rankings with data-driven SEO strategies and compelling content that drives organic growth.",
    icon: "🔍",
  },
  {
    title: "Google Ads Management",
    description:
      "Maximize ROI with expertly managed Google Ads campaigns. From search to display, we optimize every click.",
    icon: "🎯",
  },
  {
    title: "Meta Ads",
    description:
      "Reach billions on Facebook and Instagram with precision-targeted ad campaigns that deliver measurable results.",
    icon: "📱",
  },
  {
    title: "Website Design",
    description:
      "Stunning, conversion-optimized websites that captivate visitors and turn them into loyal customers.",
    icon: "🎨",
  },
  {
    title: "Automations & AI Consulting",
    description:
      "Leverage AI-enabled products and workflows to automate operations and unlock exponential growth potential.",
    icon: "🤖",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Services
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Comprehensive digital solutions to accelerate your business growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-ember/10"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ember/0 via-fire/0 to-ember/0 group-hover:from-ember/50 group-hover:via-fire/50 group-hover:to-ember/50 transition-all duration-300 -z-10 blur-sm" />
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-ember group-hover:to-fire group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                {service.title}
              </h3>
              <p className="text-white text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
