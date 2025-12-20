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
      color: "from-[#2b6777] to-[#1f4d57]",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "from-[#1f4d57] to-[#163a42]",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "123 Business Ave, Tech City",
      link: "#",
      color: "from-[#3d8a9a] to-[#2b6777]",
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-br from-[#2b6777] via-[#3d8a9a]/20 to-[#2b6777] overflow-hidden">
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
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#2b6777]/10 rounded-full blur-3xl"
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
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#3d8a9a]/10 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-2 px-6 py-3 mb-6 text-sm bg-[#2b6777]/20 text-white rounded-full border border-[#2b6777]/30 backdrop-blur-sm"
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
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d8a9a] via-white to-[#4fa6b8]"
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
              duration: 0.8, 
              type: "spring" as const,
              stiffness: 100,
              damping: 20,
              ease: [0.25, 0.46, 0.45, 0.94]
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
              className="bg-gradient-to-br from-[#2b6777]/90 via-[#2b6777]/70 to-[#1f4d57]/90 backdrop-blur-md rounded-3xl p-8 border border-[#2b6777]/30 hover:border-[#3d8a9a]/50 transition-all duration-500 shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Form glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#2b6777]/5 to-[#3d8a9a]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                        boxShadow: "0 0 20px rgba(43, 103, 119, 0.3)"
                      }}
                      className="w-full px-4 py-4 bg-[#1f4d57]/80 border border-[#2b6777] rounded-xl text-white focus:outline-none focus:border-[#3d8a9a] focus:ring-2 focus:ring-[#3d8a9a]/20 transition-all duration-300 backdrop-blur-sm"
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
                        boxShadow: "0 0 20px rgba(43, 103, 119, 0.3)"
                      }}
                      className="w-full px-4 py-4 bg-[#1f4d57]/80 border border-[#2b6777] rounded-xl text-white focus:outline-none focus:border-[#3d8a9a] focus:ring-2 focus:ring-[#3d8a9a]/20 transition-all duration-300 backdrop-blur-sm"
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
                      boxShadow: "0 0 20px rgba(43, 103, 119, 0.3)"
                    }}
                    className="w-full px-4 py-4 bg-[#1f4d57]/80 border border-[#2b6777] rounded-xl text-white focus:outline-none focus:border-[#3d8a9a] focus:ring-2 focus:ring-[#3d8a9a]/20 transition-all duration-300 backdrop-blur-sm"
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
                      boxShadow: "0 0 20px rgba(43, 103, 119, 0.3)"
                    }}
                    className="w-full px-4 py-4 bg-[#1f4d57]/80 border border-[#2b6777] rounded-xl text-white focus:outline-none focus:border-[#3d8a9a] focus:ring-2 focus:ring-[#3d8a9a]/20 transition-all duration-300 resize-none backdrop-blur-sm"
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
                  className="w-full bg-gradient-to-r from-[#2b6777] to-[#1f4d57] hover:from-[#1f4d57] hover:to-[#163a42] text-white px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#2b6777]/50 font-semibold text-lg relative overflow-hidden group"
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
              duration: 0.8, 
              type: "spring" as const,
              stiffness: 100,
              damping: 20,
              ease: [0.25, 0.46, 0.45, 0.94]
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
              className="bg-gradient-to-br from-[#2b6777]/90 via-[#2b6777]/70 to-[#1f4d57]/90 backdrop-blur-md rounded-3xl p-8 border border-[#2b6777]/30 hover:border-[#3d8a9a]/50 transition-all duration-500 shadow-2xl"
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
              className="bg-gradient-to-br from-[#2b6777] to-[#1f4d57] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
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
                      <div className="text-3xl font-bold text-gray-300 mb-2">{stat.value}</div>
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