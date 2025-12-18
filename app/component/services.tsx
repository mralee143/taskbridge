"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Palette, Search, TrendingUp, Code, Bot } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphics Designing",
    description: "Create stunning visual identities, logos, and brand materials that captivate your audience and stand out in the market.",
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"],
    color: "from-fuchsia-500 to-pink-500",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Boost your online visibility with strategic SEO optimization that drives organic traffic and improves search rankings.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics & Reporting"],
    color: "from-purple-500 to-fuchsia-500",
    gradient: "from-purple-500/20 to-fuchsia-500/20",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies that connect with your target audience and deliver measurable ROI across all channels.",
    features: ["Social Media Marketing", "Email Campaigns", "Content Strategy", "PPC Advertising"],
    color: "from-pink-500 to-rose-500",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Build powerful, responsive websites and web applications with cutting-edge technologies and best practices.",
    features: ["Custom Websites", "E-commerce Solutions", "Web Applications", "Maintenance & Support"],
    color: "from-violet-500 to-purple-500",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    description: "Implement intelligent chatbot solutions that provide 24/7 customer support and enhance user engagement.",
    features: ["Custom AI Training", "Multi-Platform Integration", "Natural Language Processing", "Analytics Dashboard"],
    color: "from-indigo-500 to-fuchsia-500",
    gradient: "from-indigo-500/20 to-fuchsia-500/20",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Alternating animation directions: right, left, right, left, right
  const isFromRight = index % 2 === 0;
  
  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        x: isFromRight ? 150 : -150,
        y: 50,
        rotateY: isFromRight ? 25 : -25,
        scale: 0.8
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        y: 0,
        rotateY: 0,
        scale: 1
      } : { 
        opacity: 0, 
        x: isFromRight ? 150 : -150,
        y: 50,
        rotateY: isFromRight ? 25 : -25,
        scale: 0.8
      }}
      transition={{ 
        duration: 1.2, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
      whileHover={{ 
        y: -20, 
        scale: 1.05,
        rotateX: 8,
        rotateZ: isFromRight ? 2 : -2,
        transition: { 
          duration: 0.4,
          type: "spring",
          stiffness: 300
        }
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative bg-gradient-to-br from-slate-800/90 via-slate-800/70 to-slate-900/90 backdrop-blur-md rounded-3xl p-8 border border-slate-600/30 hover:border-fuchsia-400/60 transition-all duration-700 overflow-hidden shadow-2xl hover:shadow-fuchsia-500/20"
      style={{ 
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Animated background gradient with morphing effect */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
        animate={{
          background: [
            `radial-gradient(circle at 20% 20%, ${service.color.split(' ')[1]}/15, transparent 50%)`,
            `radial-gradient(circle at 80% 80%, ${service.color.split(' ')[3]}/15, transparent 50%)`,
            `radial-gradient(circle at 50% 50%, ${service.color.split(' ')[1]}/10, ${service.color.split(' ')[3]}/10)`,
            `radial-gradient(circle at 20% 80%, ${service.color.split(' ')[3]}/15, transparent 50%)`,
            `radial-gradient(circle at 80% 20%, ${service.color.split(' ')[1]}/15, transparent 50%)`,
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, ${service.color.split(' ')[1]}/20, transparent, ${service.color.split(' ')[3]}/20)`,
          padding: '2px',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {[
          { x: 15, y: 20, size: 2, delay: 0 },
          { x: 75, y: 35, size: 1.5, delay: 0.5 },
          { x: 45, y: 70, size: 2.5, delay: 1 },
          { x: 85, y: 15, size: 1, delay: 1.5 },
          { x: 25, y: 85, size: 1.8, delay: 0.8 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute bg-fuchsia-400/30 rounded-full blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 4}px`,
              height: `${particle.size * 4}px`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + particle.delay,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        animate={{
          background: [
            "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
            "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
          ],
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

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
            type: "spring",
            stiffness: 200
          }}
          className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} p-5 mb-8 shadow-2xl shadow-fuchsia-500/30 group-hover:shadow-fuchsia-500/60 group-hover:shadow-2xl`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Icon glow effect */}
          <motion.div
            className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50`}
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
          className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-pink-400 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {service.title}
        </motion.h3>

        <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {service.description}
        </p>

        {/* Features with staggered animation */}
        <div className="space-y-3 mb-6">
          {service.features.map((feature, idx) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.2 + idx * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-pink-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
              />
              {feature}
            </motion.div>
          ))}
        </div>

        {/* CTA Button with 3D effects */}
        <motion.button
          whileHover={{ 
            scale: 1.08,
            rotateX: 5,
            z: 20,
            boxShadow: "0 15px 40px rgba(217, 70, 239, 0.4)"
          }}
          whileTap={{ 
            scale: 0.95,
            rotateX: -2
          }}
          className="w-full py-4 rounded-2xl border-2 border-fuchsia-500/50 text-fuchsia-400 hover:text-white hover:border-fuchsia-400 transition-all duration-500 font-semibold relative overflow-hidden group/btn backdrop-blur-sm"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Animated background layers */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/20 to-pink-500/0"
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
            className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(217, 70, 239, 0.1), rgba(236, 72, 153, 0.1))",
                "linear-gradient(225deg, rgba(236, 72, 153, 0.1), rgba(217, 70, 239, 0.1))",
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
      </div>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
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
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-fuchsia-500/5 rounded-full blur-3xl"
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
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl"
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
            className="inline-block px-6 py-3 mb-6 text-sm bg-fuchsia-500/20 text-fuchsia-300 rounded-full border border-fuchsia-500/30 backdrop-blur-sm"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400">
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
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
          
          {/* Last 2 services centered in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
            {services.slice(3, 5).map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}