"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-12"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-muted/90 leading-relaxed text-center">
            <p>
              Adaptable Software Engineering student at BTEC FPT International College with hands-on experience in full-stack web development, AI integration, IoT systems, and technical troubleshooting.
            </p>
            <p>
              Experienced in Laravel, Next.js, Python, and modern web technologies with strong interest in scalable software architecture and practical engineering solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
