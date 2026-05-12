"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
          <div className="w-12 h-1 bg-secondary rounded-full"></div>
        </div>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative pl-8 md:pl-10"
          >
            <div className="absolute w-6 h-6 bg-background rounded-full border-2 border-secondary left-[-12px] top-1 flex items-center justify-center">
              <Briefcase className="w-3 h-3 text-secondary" />
            </div>
            
            <Card className="border-border/50 bg-card/50 hover:bg-card hover:border-secondary/30 transition-colors cursor-pointer">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 space-y-2 md:space-y-0">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">IT Helpdesk & System Optimization</h3>
                    <p className="text-primary font-medium">Freelance</p>
                  </div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/20">
                    Present
                  </div>
                </div>
                <p className="text-muted/90 text-base leading-relaxed">
                  Diagnosed hardware/software issues and optimized operating systems to improve system performance and reliability.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
