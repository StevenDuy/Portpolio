"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function HaloEffect({
  count1 = 2,
  count2 = 2,
  count3 = 1,
  size = 400,
  speed = 1.5,
  blur = 120,
  color1 = "rgba(59, 130, 246, 0.15)", // Primary #3b82f6
  color2 = "rgba(139, 92, 246, 0.15)", // Secondary #8b5cf6
  color3 = "rgba(29, 78, 216, 0.1)", // Darker blue
}: {
  count1?: number;
  count2?: number;
  count3?: number;
  size?: number;
  speed?: number;
  blur?: number;
  color1?: string;
  color2?: string;
  color3?: string;
}) {
  const [circles, setCircles] = useState<any[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device is desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    // Initialize circles with random starting positions for desktop
    const initialCircles = [
      ...Array.from({ length: count1 }, () => ({
        id: Math.random(),
        initialX: Math.random() * (window.innerWidth - size),
        initialY: Math.random() * (window.innerHeight - size),
        x: Math.random() * (window.innerWidth - size),
        y: Math.random() * (window.innerHeight - size),
        color: color1,
      })),
      ...Array.from({ length: count2 }, () => ({
        id: Math.random(),
        initialX: Math.random() * (window.innerWidth - size),
        initialY: Math.random() * (window.innerHeight - size),
        x: Math.random() * (window.innerWidth - size),
        y: Math.random() * (window.innerHeight - size),
        color: color2,
      })),
      ...Array.from({ length: count3 }, () => ({
        id: Math.random(),
        initialX: Math.random() * (window.innerWidth - size),
        initialY: Math.random() * (window.innerHeight - size),
        x: Math.random() * (window.innerWidth - size),
        y: Math.random() * (window.innerHeight - size),
        color: color3,
      })),
    ];
    
    setCircles(initialCircles);

    const interval = setInterval(() => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => ({
          ...circle,
          x: Math.random() * (window.innerWidth - size),
          y: Math.random() * (window.innerHeight - size),
        }))
      );
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [isDesktop, size, speed, count1, count2, count3, color1, color2, color3]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -10,
        pointerEvents: "none",
        backgroundColor: "var(--color-background)",
        // Keep the static background as a fallback/base for mobile
        backgroundImage: isDesktop ? "none" :
          "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15), transparent 40%), " +
          "radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15), transparent 40%), " +
          "radial-gradient(circle at 50% 50%, rgba(29, 78, 216, 0.1), transparent 50%)"
      }}
    >
      {isDesktop && circles.map((circle) => (
        <motion.div
          key={circle.id}
          animate={{ x: circle.x, y: circle.y }}
          initial={{ x: circle.initialX, y: circle.initialY }}
          transition={{ duration: speed, ease: "easeInOut" }}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: circle.color,
            position: "absolute",
            filter: `blur(${blur}px)`,
          }}
        />
      ))}
    </div>
  );
}
