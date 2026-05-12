"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Layout, Server, Cpu, Wrench } from "lucide-react";

const skills = [
  {
    category: "Laravel & PHP",
    icon: <Server className="h-6 w-6 text-primary" />,
  },
  {
    category: "React & Next.js",
    icon: <Layout className="h-6 w-6 text-secondary" />,
  },
  {
    category: "C# & Python",
    icon: <Code2 className="h-6 w-6 text-primary" />,
  },
  {
    category: "SQL & Git",
    icon: <Database className="h-6 w-6 text-secondary" />,
  },
  {
    category: "Hardware / IoT",
    icon: <Cpu className="h-6 w-6 text-primary" />,
  },
  {
    category: "IT Support",
    icon: <Wrench className="h-6 w-6 text-secondary" />,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Skills</h2>
          <div className="w-12 h-1 bg-secondary rounded-full"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="h-full group border-border/50 bg-card/50 backdrop-blur hover:bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <CardContent className="h-full p-6 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="shrink-0 p-3 rounded-full bg-background border border-border group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium text-foreground tracking-wide leading-tight">{skill.category}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
