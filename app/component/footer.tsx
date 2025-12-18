"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Graphics Designing",
    "SEO Services", 
    "Digital Marketing",
    "Web Development",
    "AI Chatbot",
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "Li" },
    { name: "Instagram", href: "#", icon: "Ig" },
    { name: "Facebook", href: "#", icon: "Fb" },
    { name: "Twitter", href: "#", icon: "Tw" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-fuchsia-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            className="space-y-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h3 
              className="text-3xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent font-[var(--font-space-grotesk)]"
              whileHover={{ scale: 1.05 }}
            >
              TASKBRIDGE
            </motion.h3>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              Your trusted partner for comprehensive digital solutions. We transform ideas into reality with cutting-edge technology.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    rotateZ: 5,
                    boxShadow: "0 10px 25px rgba(217, 70, 239, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-fuchsia-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-fuchsia-500/50 group"
                  aria-label={social.name}
                >
                  <span className="text-gray-400 group-hover:text-white font-bold text-sm">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1,
              ease: "easeOut"
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h4 className="text-xl font-bold text-white mb-6 font-[var(--font-space-grotesk)]">
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-fuchsia-400 transition-all duration-300 inline-block relative group"
                  >
                    <span className="relative z-10">{service}</span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-pink-400 group-hover:w-full transition-all duration-300"
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeOut"
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h4 className="text-xl font-bold text-white mb-6 font-[var(--font-space-grotesk)]">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-fuchsia-400 transition-all duration-300 inline-block relative group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-pink-400 group-hover:w-full transition-all duration-300"
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: "easeOut"
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h4 className="text-xl font-bold text-white mb-6 font-[var(--font-space-grotesk)]">
              Contact Us
            </h4>
            <ul className="space-y-6">
              {[
                { icon: Mail, text: "hello@taskbridge.com", href: "mailto:hello@taskbridge.com" },
                { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
                { icon: MapPin, text: "123 Business Ave, Tech City", href: "#" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="w-6 h-6 text-fuchsia-400 flex-shrink-0 mt-1"
                  >
                    <item.icon className="w-full h-full" />
                  </motion.div>
                  {item.href !== "#" ? (
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">{item.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-slate-800/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p
              className="text-gray-400 text-center md:text-left flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} TaskBridge. Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-fuchsia-400 fill-current" />
              </motion.span>{" "}
              All rights reserved.
            </motion.p>

            <div className="flex items-center gap-8">
              <motion.div
                className="flex gap-6 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    whileHover={{ y: -2 }}
                    className="text-gray-400 hover:text-fuchsia-400 transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{item}</span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-pink-400 group-hover:w-full transition-all duration-300"
                    />
                  </motion.a>
                ))}
              </motion.div>

              {/* Scroll to top button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  boxShadow: "0 10px 25px rgba(217, 70, 239, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 flex items-center justify-center transition-all duration-300 shadow-lg"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated bottom gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
}