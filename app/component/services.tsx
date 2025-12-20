"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Palette, Search, TrendingUp, Code, Bot } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Palette,
    title: "Graphics Designing",
    id: "graphics-designing",
    description: "Create stunning visual identities, logos, and brand materials that captivate your audience and stand out in the market.",
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"],
    color: "from-[#2b6777] to-[#1f4d57]",
    gradient: "from-[#2b6777]/20 to-[#1f4d57]/20",
  },
  {
    icon: Search,
    title: "SEO Services",
    id: "seo",
    description: "Boost your online visibility with strategic SEO optimization that drives organic traffic and improves search rankings.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics & Reporting"],
    color: "from-[#1f4d57] to-[#163a42]",
    gradient: "from-[#1f4d57]/20 to-[#163a42]/20",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    id: "digital-marketing",
    description: "Comprehensive marketing strategies that connect with your target audience and deliver measurable ROI across all channels.",
    features: ["Social Media Marketing", "Email Campaigns", "Content Strategy", "PPC Advertising"],
    color: "from-[#3d8a9a] to-[#2b6777]",
    gradient: "from-[#3d8a9a]/20 to-[#2b6777]/20",
  },
  {
    icon: Code,
    title: "Web Development",
    id: "web-development",
    description: "Build powerful, responsive websites and web applications with cutting-edge technologies and best practices.",
    features: ["Custom Websites", "E-commerce Solutions", "Web Applications", "Maintenance & Support"],
    color: "from-[#163a42] to-[#0d262c]",
    gradient: "from-[#163a42]/20 to-[#0d262c]/20",
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    id: "ai-chatbot",
    description: "Implement intelligent chatbot solutions that provide 24/7 customer support and enhance user engagement.",
    features: ["Custom AI Training", "Multi-Platform Integration", "Natural Language Processing", "Analytics Dashboard"],
    color: "from-[#0d262c] to-[#051317]",
    gradient: "from-[#0d262c]/20 to-[#051317]/20",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Simplified animation for better mobile performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 60,
        scale: 0.9
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        scale: 1
      } : { 
        opacity: 0, 
        y: 60,
        scale: 0.9
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoothness
        type: "spring",
        stiffness: 120,
        damping: 20
      }}
      whileHover={{ 
        y: -15, 
        scale: 1.03,
        rotateX: 5,
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-gradient-to-br from-[#2b6777]/90 via-[#2b6777]/70 to-[#1f4d57]/90 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-[#2b6777]/30 hover:border-[#3d8a9a]/60 transition-all duration-700 overflow-hidden shadow-2xl hover:shadow-[#2b6777]/20"
      style={{ 
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Simplified background effect for better performance */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${service.color.split(' ')[1]}/10, transparent 70%)`,
        }}
      />

      {/* Subtle glow effect */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, ${service.color.split(' ')[1]}/10, transparent, ${service.color.split(' ')[3]}/10)`,
        }}
      />
      
      {/* Simplified floating particles for better performance */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-60">
        {[
          { x: 20, y: 30, size: 1.5 },
          { x: 80, y: 70, size: 1 },
          { x: 60, y: 20, size: 1.2 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#2b6777]/20 rounded-full blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 6}px`,
              height: `${particle.size * 6}px`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Icon with enhanced 3D animation */}
        <motion.div
          whileHover={{ 
            rotateY: [0, 15, -15, 0],
            rotateX: [0, 10, -10, 0],
            scale: 1.2,
            z: 50
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-gradient-to-br ${service.color} p-4 md:p-5 mb-6 md:mb-8 shadow-2xl shadow-[#2b6777]/30 group-hover:shadow-[#2b6777]/60 group-hover:shadow-2xl`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Icon glow effect */}
          <motion.div
            className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50`}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          
          <motion.div
            animate={{
              rotateZ: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <service.icon className="relative z-10 w-full h-full text-white drop-shadow-2xl" />
          </motion.div>
        </motion.div>

        {/* Title with gradient effect */}
        <motion.h3 
          className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3d8a9a] group-hover:to-white transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {service.title}
        </motion.h3>

        <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm md:text-base">
          {service.description}
        </p>

        {/* Features with smooth animation */}
        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
          {service.features.map((feature, idx) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
              transition={{ 
                delay: index * 0.1 + idx * 0.05,
                duration: 0.5,
                ease: "easeOut"
              }}
              className="flex items-center gap-3 text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#3d8a9a] flex-shrink-0" />
              {feature}
            </motion.div>
          ))}
        </div>

        {/* CTA Button with 3D effects */}
        {service.title === "Graphics Designing" ? (
          <Link href="/graphic-design">
            <motion.button
              whileHover={{ 
                scale: 1.08,
                rotateX: 5,
                z: 20,
                boxShadow: "0 15px 40px rgba(43, 103, 119, 0.4)"
              }}
              whileTap={{ 
                scale: 0.95,
                rotateX: -2
              }}
              className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-[#2b6777]/50 text-[#3d8a9a] hover:text-white hover:border-[#3d8a9a] transition-all duration-500 font-semibold relative overflow-hidden group/btn backdrop-blur-sm text-sm md:text-base"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated background layers */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#2b6777]/0 via-[#2b6777]/20 to-[#3d8a9a]/0"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#2b6777]/10 to-[#3d8a9a]/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(43, 103, 119, 0.1), rgba(61, 138, 154, 0.1))",
                    "linear-gradient(225deg, rgba(61, 138, 154, 0.1), rgba(43, 103, 119, 0.1))",
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              <motion.span 
                className="relative z-10 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                Learn More
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.span>
            </motion.button>
          </Link>
        ) : (
          <motion.button
            whileHover={{ 
              scale: 1.08,
              rotateX: 5,
              z: 20,
              boxShadow: "0 15px 40px rgba(43, 103, 119, 0.4)"
            }}
            whileTap={{ 
              scale: 0.95,
              rotateX: -2
            }}
            className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-[#2b6777]/50 text-[#3d8a9a] hover:text-white hover:border-[#3d8a9a] transition-all duration-500 font-semibold relative overflow-hidden group/btn backdrop-blur-sm text-sm md:text-base"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Animated background layers */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#2b6777]/0 via-[#2b6777]/20 to-[#3d8a9a]/0"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#2b6777]/10 to-[#3d8a9a]/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(43, 103, 119, 0.1), rgba(61, 138, 154, 0.1))",
                  "linear-gradient(225deg, rgba(61, 138, 154, 0.1), rgba(43, 103, 119, 0.1))",
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            
            <motion.span 
              className="relative z-10 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Learn More
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.span>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-br from-[#2b6777] via-[#3d8a9a]/20 to-[#2b6777]">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#2b6777]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#3d8a9a]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-6 py-3 mb-6 text-sm bg-[#2b6777]/20 text-white rounded-full border border-[#2b6777]/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            ✨ What We Offer
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-[var(--font-space-grotesk)]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d8a9a] via-white to-[#4fa6b8]">
              Services
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Comprehensive digital solutions tailored to accelerate your business growth and digital transformation
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <div className="space-y-8 md:space-y-10">
          {/* First 3 services in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.slice(0, 3).map((service, index) => (
              <div key={service.title} id={service.id}>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
          
          {/* Last 2 services centered in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
            {services.slice(3, 5).map((service, index) => (
              <div key={service.title} id={service.id}>
                <ServiceCard service={service} index={index + 3} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}