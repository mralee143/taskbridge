"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

interface WelcomeScreenProps {
  onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show welcome content after brief delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Auto-proceed to main site after 3 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#2b6777] via-[#3d8a9a] to-[#2b6777] overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#2b6777]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#3d8a9a]/20 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[
          { left: 10, top: 20, duration: 3, delay: 0 },
          { left: 90, top: 30, duration: 4, delay: 0.5 },
          { left: 20, top: 80, duration: 3.5, delay: 1 },
          { left: 80, top: 70, duration: 4.5, delay: 1.5 },
          { left: 50, top: 10, duration: 3, delay: 0.8 },
          { left: 30, top: 50, duration: 4.2, delay: 0.3 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative text-center px-4 max-w-6xl mx-auto flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={showContent ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={showContent ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ 
              duration: 1,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              delay: 0.2
            }}
            className="mb-8 flex justify-center"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-[#2b6777] rounded-sm"></div>
              </div>
            </div>
          </motion.div>

          {/* Welcome to TaskBridge */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-[var(--font-space-grotesk)] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.span className="text-white">
              Welcome to{" "}
            </motion.span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#3d8a9a] to-white"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
              }}
            >
              TaskBridge
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Your Digital Success Partner
          </motion.p>

          {/* Sparkles animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-10 h-10 text-white/60" />
            </motion.div>
          </motion.div>

          {/* Loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="mt-8"
          >
            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-white/40 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}