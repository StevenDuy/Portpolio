"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight, Activity, Terminal, Shield, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden w-full min-h-screen py-20">
      
      {/* Decorative background grid/dots for cyberpunk feel */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.03] pointer-events-none" />

      <div className="relative container px-4 md:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10 h-full">
        
        {/* ================= LEFT COLUMN: Image & Name ================= */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start items-center w-full"
        >
          {/* Avatar Container */}
          <div className="relative w-[320px] h-[450px] md:w-[450px] md:h-[600px] z-10">
            
            {/* Avatar Image */}
            <div className="relative w-full h-full z-20">
              <Image 
                src="/cyberpunk-avatar.png" 
                alt="Cyberpunk Avatar" 
                fill 
                className="object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                priority
              />
            </div>
            
            {/* Name overlaying the bottom 1/5 of the image, centered horizontally */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-[2%] md:bottom-[5%] left-1/2 -translate-x-1/2 z-50 pointer-events-none w-[120%] text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase font-sans text-foreground drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] leading-tight">
                HO HOANG <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">DUY</span>
              </h1>
            </motion.div>
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN: Information ================= */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-8 justify-center z-20 w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto"
        >
          
          {/* Profile Box - BLUE (Primary) */}
          <div className="border-l-2 border-primary/40 p-6 bg-background/20 backdrop-blur-sm relative">
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            
            <div className="group flex items-center gap-2 text-primary font-mono text-xs mb-3 tracking-widest uppercase cursor-default w-fit">
              <Activity className="w-4 h-4 group-hover:scale-125 group-hover:text-white transition-all duration-300" />
              <span className="group-hover:translate-x-1 group-hover:text-white transition-all duration-300">ABOUT ME</span>
            </div>
            
            <p className="text-xs md:text-sm text-muted/90 leading-relaxed font-mono">
              Adaptable <span className="text-foreground font-semibold cursor-help hover:text-primary hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.8)] transition-all duration-300 border-b border-primary/20 hover:border-primary">Software Engineering</span> student at <span className="text-foreground font-semibold cursor-help hover:text-secondary hover:drop-shadow-[0_0_5px_rgba(139,92,246,0.8)] transition-all duration-300 border-b border-secondary/20 hover:border-secondary">BTEC FPT</span> with hands-on experience in full-stack, AI integration, and IoT. Focused on building scalable architecture and practical solutions.
            </p>
          </div>

          {/* Designation Box - PURPLE (Secondary) */}
          <div className="border-l-2 border-secondary/40 p-6 bg-background/20 backdrop-blur-sm relative">
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-secondary shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
            
            <div className="group flex items-center gap-2 text-secondary font-mono text-xs mb-3 tracking-widest uppercase cursor-default w-fit">
              <Terminal className="w-4 h-4 group-hover:scale-125 group-hover:text-white transition-all duration-300" />
              <span className="group-hover:translate-x-1 group-hover:text-white transition-all duration-300">SPECIALTY</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold uppercase font-sans tracking-wide text-foreground/90 cursor-default hover:text-secondary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] w-fit">
              Full-Stack
            </h2>
            
            <p className="text-muted/90 text-sm mt-2 font-mono cursor-default w-fit">
              <span className="inline-block hover:text-white transition-colors duration-300">Class: Software Engineering Student</span>
            </p>
          </div>

          {/* Core Skills Box - CYAN */}
          <div className="border-l-2 border-cyan-500/40 p-6 bg-background/20 backdrop-blur-sm relative">
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            
            <div className="group flex items-center gap-2 text-cyan-400 font-mono text-xs mb-4 tracking-widest uppercase cursor-default w-fit">
              <Cpu className="w-4 h-4 group-hover:scale-125 group-hover:text-white transition-all duration-300" />
              <span className="group-hover:translate-x-1 group-hover:text-white transition-all duration-300">CORE SKILLS</span>
            </div>
            
            <ul className="space-y-4 font-mono text-base text-foreground/80 w-full">
              <li className="flex items-center gap-3 group cursor-default">
                <span className="w-2 h-2 bg-cyan-500/50 group-hover:bg-cyan-400 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)]"/>
                <span className="group-hover:text-white transition-all group-hover:translate-x-1 duration-300">Laravel API Development</span>
              </li>
              <li className="flex items-center gap-3 group cursor-default">
                <span className="w-2 h-2 bg-secondary/50 group-hover:bg-secondary rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_var(--color-secondary)]"/>
                <span className="group-hover:text-white transition-all group-hover:translate-x-1 duration-300">Next.js UI & Architecture</span>
              </li>
              <li className="flex items-center gap-3 group cursor-default">
                <span className="w-2 h-2 bg-cyan-500/50 group-hover:bg-cyan-400 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)]"/>
                <span className="group-hover:text-white transition-all group-hover:translate-x-1 duration-300">AI Logic Integration</span>
              </li>
            </ul>
          </div>


        </motion.div>
      </div>

    </section>
  );
}


