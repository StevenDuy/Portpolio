"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative pl-8 md:pl-10"
          >
            <div className="absolute w-6 h-6 bg-background rounded-full border-2 border-primary left-[-12px] top-1 flex items-center justify-center">
              <GraduationCap className="w-3 h-3 text-primary" />
            </div>
            
            <a 
              href="https://btec.fpt.edu.vn/ve-btec-fpt/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group/edu"
            >
              <Card className="border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 space-y-2 md:space-y-0">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover/edu:text-primary transition-colors duration-300">BTEC Higher National Diploma in Information Technology</h3>
                      <p className="text-primary font-medium">BTEC FPT International College</p>
                    </div>
                    <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                      08/2023 – 08/2026 (Expected)
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <h4 className="text-sm font-medium text-foreground mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 rounded-md bg-secondary/10 text-secondary border border-secondary/20 text-sm cursor-pointer hover:bg-secondary/20 transition-colors">
                        Vietnamese
                      </span>
                      <span className="px-3 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 text-sm cursor-pointer hover:bg-primary/20 transition-colors">
                        English
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
