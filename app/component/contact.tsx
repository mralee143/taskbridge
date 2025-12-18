"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, MapPin, ArrowRight, Send, MessageCircle } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@taskbridge.com",
      link: "mailto:hello@taskbridge.com",
      color: "from-slate-500 to-slate-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "from-slate-600 to-slate-700",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "123 Business Ave, Tech City",
      link: "#",
      color: "from-slate-400 to-slate-500",
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800/20 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-slate-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-slate-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-6 py-3 mb-6 text-sm bg-slate-500/20 text-slate-300 rounded-full border border-slate-500/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle size={16} />
            Get In Touch
          </motion.span>

          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-[var(--font-space-grotesk)]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Let's Build Something{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-300 to-slate-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Amazing Together
            </motion.span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ready to transform your digital presence? Reach out to us and let's discuss your project
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -15 }}
            transition={{ 
              duration: 1.2, 
              type: "spring" as const,
              stiffness: 80,
              damping: 15
            }}
            className="relative"
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover={{ 
                rotateX: 2,
                rotateY: 2,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-slate-800/90 via-slate-800/70 to-slate-900/90 backdrop-blur-md rounded-3xl p-8 border border-slate-600/30 hover:border-fuchsia-500/50 transition-all duration-500 shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Form glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-slate-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 20%, rgba(123, 104, 238, 0.05), transparent)",
                    "radial-gradient(circle at 80% 80%, rgba(204, 204, 255, 0.05), transparent)",
                    "radial-gradient(circle at 20% 20%, rgba(123, 104, 238, 0.05), transparent)",
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <form className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                      Your Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      whileFocus={{ 
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(217, 70, 239, 0.3)"
                      }}
                      className="w-full px-4 py-4 bg-slate-900/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      whileFocus={{ 
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(217, 70, 239, 0.3)"
                      }}
                      className="w-full px-4 py-4 bg-slate-900/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-3">
                    Service Interested In
                  </label>
                  <motion.select
                    id="service"
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(217, 70, 239, 0.3)"
                    }}
                    className="w-full px-4 py-4 bg-slate-900/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300 backdrop-blur-sm"
                  >
                    <option>Select a service</option>
                    <option>Graphics Designing</option>
                    <option>SEO Services</option>
                    <option>Digital Marketing</option>
                    <option>Web Development</option>
                    <option>AI Chatbot</option>
                  </motion.select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                    Your Message
                  </label>
                  <motion.textarea
                    id="message"
                    rows={6}
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(217, 70, 239, 0.3)"
                    }}
                    className="w-full px-4 py-4 bg-slate-900/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300 resize-none backdrop-blur-sm"
                    placeholder="Tell us about your project..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    boxShadow: "0 15px 40px rgba(123, 104, 238, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-slate-500/50 font-semibold text-lg relative overflow-hidden group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                  />
                  <Send size={20} />
                  Send Message
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 100, rotateY: 15 }}
            transition={{ 
              duration: 1.2, 
              type: "spring" as const,
              stiffness: 80,
              damping: 15
            }}
            className="space-y-8"
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          >
            {/* Contact Info Cards */}
            <motion.div
              whileHover={{ 
                rotateX: 2,
                rotateY: -2,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-slate-800/90 via-slate-800/70 to-slate-900/90 backdrop-blur-md rounded-3xl p-8 border border-slate-600/30 hover:border-fuchsia-500/50 transition-all duration-500 shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 font-[var(--font-space-grotesk)]">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      x: 10,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-center gap-5 group cursor-pointer p-4 rounded-2xl hover:bg-slate-700/30 transition-all duration-300"
                  >
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-4 flex items-center justify-center flex-shrink-0 shadow-lg`}
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-full h-full text-white" />
                    </motion.div>
                    
                    <div>
                      <div className="text-sm text-gray-400 mb-1 font-medium">
                        {item.title}
                      </div>
                      <div className="text-lg text-white group-hover:text-slate-400 transition-colors duration-300 font-semibold">
                        {item.detail}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              whileHover={{ 
                rotateX: 2,
                rotateY: -2,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2), transparent)",
                    "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2), transparent)",
                    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2), transparent)",
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 font-[var(--font-space-grotesk)]">
                  Ready to Get Started?
                </h3>
                <p className="mb-8 text-slate-50 text-lg leading-relaxed">
                  Join hundreds of satisfied clients who have transformed their businesses with our services.
                </p>
                
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "500+", label: "Projects" },
                    { value: "300+", label: "Clients" },
                    { value: "95%", label: "Satisfaction" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold mb-2">{stat.value}</div>
                      <div className="text-sm text-slate-100 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}