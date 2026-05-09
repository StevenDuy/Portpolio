"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function HaloEffect({
  count1 = 3,
  count2 = 3,
  count3 = 2,
  size = 400,
  speed = 8,
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

  useEffect(() => {
    // Initialize circles with random starting positions
    const initialCircles = [
      // Set 1: Circles with color1
      ...Array.from({ length: count1 }, () => ({
        id: Math.random(),
        initialX: Math.random() * (window.innerWidth - size),
        initialY: Math.random() * (window.innerHeight - size),
        x: Math.random() * (window.innerWidth - size),
        y: Math.random() * (window.innerHeight - size),
        color: color1,
      })),
      // Set 2: Circles with color2
      ...Array.from({ length: count2 }, () => ({
        id: Math.random(),
        initialX: Math.random() * (window.innerWidth - size),
        initialY: Math.random() * (window.innerHeight - size),
        x: Math.random() * (window.innerWidth - size),
        y: Math.random() * (window.innerHeight - size),
        color: color2,
      })),
      // Set 3: Circles with color3
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

    // Set interval to update position after the initial rendering
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
  }, [size, speed, blur, count1, count2, count3, color1, color2, color3]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -10, // Keep it far behind everything
        pointerEvents: "none", // Prevent it from blocking clicks
        backgroundColor: "var(--color-background)", // Ensure the base dark color remains
      }}
    >
      {circles.map((circle) => (
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
