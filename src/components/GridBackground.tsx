import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function GridBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Circle mask with blur */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
        animate={{
          x: mousePos.x - 150,
          y: mousePos.y - 150,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Grid that shows only near circle */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59,130,246,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59,130,246,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          maskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 200px, rgba(0,0,0,0) 300px)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 200px, rgba(0,0,0,0) 300px)`,
          opacity: 0.3, // softer visibility
        }}
      />
    </div>
  );
}
