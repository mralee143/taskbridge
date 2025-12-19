"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";

export function Hero() {
 const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;
const floatingVariants = {
  animate: {
    y: [-20, 20, -20] as number[],
    rotate: [0, 5, -5, 0] as number[],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2b6777] via-[#3d8a9a] to-[#2b6777]"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#2b6777]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#3d8a9a]/10 rounded-full blur-3xl"
        />
        
        {/* Floating particles */}
        {[
          { left: 15, top: 20, duration: 4, delay: 0 },
          { left: 85, top: 30, duration: 5, delay: 0.5 },
          { left: 25, top: 70, duration: 3.5, delay: 1 },
          { left: 75, top: 80, duration: 4.5, delay: 1.5 },
          { left: 10, top: 50, duration: 3, delay: 0.8 },
          { left: 90, top: 15, duration: 4.2, delay: 0.3 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#2b6777]/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
      >
        <div className="text-center">
          <motion.div variants={itemVariants}>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm bg-[#2b6777]/20 text-white rounded-full border border-[#2b6777]/30 backdrop-blur-sm"
            >
              <Sparkles size={16} className="animate-pulse" />
              Your Digital Success Partner
              <Zap size={16} className="animate-bounce" />
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-[var(--font-space-grotesk)]"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transform Your Business
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d8a9a] via-white to-[#4fa6b8]"
            >
              With Digital Excellence
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            From stunning graphics to intelligent AI solutions, we deliver comprehensive
            digital services that elevate your brand and drive real results.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#services"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(123, 104, 238, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#2b6777] to-[#1f4d57] hover:from-[#1f4d57] hover:to-[#163a42] text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#2b6777]/50"
            >
              <Target size={20} />
              Explore Services
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(123, 104, 238, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#2b6777] text-[#2b6777] hover:bg-[#2b6777] hover:text-white px-8 py-4 rounded-lg transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Projects Completed", icon: Target },
              { number: "300+", label: "Happy Clients", icon: Sparkles },
              { number: "50+", label: "Team Members", icon: Zap },
              { number: "24/7", label: "Support", icon: ArrowRight },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 1.4 + index * 0.1,
                  duration: 0.6,
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="flex justify-center mb-2"
                >
                  <stat.icon className="text-[#2b6777] group-hover:text-[#3d8a9a] transition-colors" size={24} />
                </motion.div>
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-gray-300 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-6 h-10 border-2 border-[#2b6777] rounded-full flex justify-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#2b6777] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}