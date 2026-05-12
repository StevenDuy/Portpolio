"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ShopDee — AI-Integrated E-commerce",
    type: "Full-stack Web Application",
    description: "Engineered a scalable decoupled architecture using Laravel RESTful APIs and Next.js frontend architecture. Integrated Python microservices and machine learning models including SVM and Neural Networks for fraud detection.",
    tech: ["Laravel", "Next.js", "React", "Python", "Machine Learning", "REST API"],
    tags: ["AI Integration", "Microservices", "Fraud Detection", "Full-stack"],
    link: "https://github.com/StevenDuy/ShopDee",
  },
  {
    title: "Learning Management System (LMS)",
    type: "Web Application",
    description: "Developed a PHP/MySQL academic platform with secure role-based access control for Admin, Lecturer, and Student systems. Implemented course management, online assessments, and automated grading workflows.",
    tech: ["PHP", "MySQL", "RBAC", "Web Development"],
    tags: ["RBAC", "Academic Platform", "Online Assessment"],
    link: "https://github.com/StevenDuy/lms",
  },
  {
    title: "Smart Home & Mobile Robotics",
    type: "IoT & Hardware Logic",
    description: "Programmed Arduino/C++ microcontroller systems for smart home automation and sensor integration. Designed motor control logic and servo-driven robotic movement systems.",
    tech: ["Arduino", "C++", "IoT", "Embedded Systems"],
    tags: ["Robotics", "Automation", "IoT"],
    link: "https://github.com/StevenDuy/HomeAutomation",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group/card"
            >
              <Card className="overflow-hidden border-border/50 bg-background/50 hover:bg-card/80 transition-all duration-300 cursor-pointer hover:border-primary/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 md:p-8 flex-1 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary tracking-wider uppercase">
                          {project.type}
                        </span>
                        {project.link && (
                          <div className="inline-block p-1">
                            <ArrowUpRight className="h-5 w-5 text-muted opacity-50 group-hover/card:opacity-100 group-hover/card:text-primary transition-all duration-300 group-hover/card:scale-125" />
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-bold text-foreground group-hover/card:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </div>
                    
                    <CardDescription className="text-base md:text-lg text-muted/90 leading-relaxed">
                      {project.description}
                    </CardDescription>

                    <div className="space-y-4 pt-2">
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-secondary/10 text-secondary border border-secondary/20">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
