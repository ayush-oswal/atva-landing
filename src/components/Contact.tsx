"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit - no backend
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", budget: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Ready to grow your business? Let&apos;s talk. Fill out the form below 
            and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800"
        >
          {/* Name */}
          <div>
            <label className="block text-sm text-white/80 mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-white/80 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="john@company.com"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm text-white/80 mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Your Company"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm text-white/80 mb-2">
              Budget (optional)
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            >
              <option value="">Select a range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-15k">$5,000 - $15,000</option>
              <option value="15k-50k">$15,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm text-white/80 mb-2">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              placeholder="Tell us about your project and goals..."
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
