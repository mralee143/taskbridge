"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check, Award, Users, Target, Zap } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Expert team with 10+ years experience",
    "100% client satisfaction guarantee", 
    "Agile and transparent workflow",
    "Cutting-edge technology stack",
    "Competitive pricing & flexible packages",
    "Dedicated project management",
  ];

  const stats = [
    { title: "Years Experience", value: "10+", icon: Award, color: "from-[#6666ff] to-[#4d4dcc]" },
    { title: "Projects Delivered", value: "500+", icon: Target, color: "from-[#4d4dcc] to-[#333399]" },
    { title: "Client Retention", value: "95%", icon: Users, color: "from-[#8080ff] to-[#6666ff]" },
    { title: "Team Size", value: "50+", icon: Zap, color: "from-[#333399] to-[#1a1a66]" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-gradient-to-br from-[#6666ff] via-[#8080ff]/30 to-[#6666ff] overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6666ff] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8080ff] rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -15 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut"
            }}
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          >
            <motion.span 
              className="inline-block px-6 py-3 mb-6 text-sm bg-[#6666ff]/20 text-white rounded-full border border-[#6666ff]/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05, rotateX: 5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              ✨ About Us
            </motion.span>

            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-white mb-8 font-[var(--font-space-grotesk)]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Your Trusted{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#8080ff] via-white to-[#9999ff]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                Digital Partner
              </motion.span>
            </motion.h2>

            <motion.p 
              className="text-lg text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We are a full-service digital agency specializing in creating exceptional
              online experiences. Our team of creative designers, developers, and
              marketing experts work together to bring your vision to life.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-300 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              With a proven track record of delivering successful projects across
              various industries, we combine creativity with technical expertise to
              help businesses thrive in the digital landscape.
            </motion.p>

            {/* Features with 3D effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -30, rotateX: -10 }}
                  animate={isInView ? { opacity: 1, x: 0, rotateX: 0 } : { opacity: 0, x: -30, rotateX: -10 }}
                  transition={{ 
                    delay: 0.8 + index * 0.1,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    x: 10, 
                    rotateX: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-start gap-3 group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-[#6666ff]/20 to-[#8080ff]/20 flex items-center justify-center mt-0.5 border border-[#6666ff]/30"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 0 20px rgba(123, 104, 238, 0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check size={14} className="text-[#6666ff]" />
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              whileHover={{ 
                scale: 1.08,
                rotateX: 5,
                boxShadow: "0 15px 40px rgba(123, 104, 238, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-[#6666ff] to-[#4d4dcc] hover:from-[#4d4dcc] hover:to-[#333399] text-white px-10 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-[#6666ff]/50 font-semibold"
              style={{ transformStyle: "preserve-3d" }}
            >
              Start Your Project
            </motion.a>
          </motion.div>

          {/* Right Stats Grid with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 100, rotateY: 15 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut"
            }}
            className="relative"
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : { opacity: 0, scale: 0.8, rotateX: -20 }}
                  transition={{ 
                    delay: 0.2 + index * 0.15,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    rotateX: 8,
                    rotateY: 5,
                    z: 20,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-gradient-to-br from-[#6666ff]/80 via-[#6666ff]/60 to-[#4d4dcc]/80 backdrop-blur-md rounded-2xl p-6 border border-[#6666ff]/30 hover:border-[#8080ff]/50 transition-all duration-500 overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                    animate={{
                      background: [
                        `radial-gradient(circle at 30% 30%, ${stat.color.split(' ')[1]}/10, transparent)`,
                        `radial-gradient(circle at 70% 70%, ${stat.color.split(' ')[3]}/10, transparent)`,
                        `radial-gradient(circle at 30% 30%, ${stat.color.split(' ')[1]}/10, transparent)`,
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 mb-4 shadow-lg`}
                    whileHover={{ 
                      rotate: [0, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Value */}
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>

                  {/* Title */}
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.title}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced floating elements */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#6666ff]/30 to-[#8080ff]/30 rounded-full blur-2xl"
            />

            <motion.div
              animate={{
                y: [0, 30, 0],
                rotate: [0, -10, 0],
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-[#4d4dcc]/30 to-[#6666ff]/30 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}