"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Search, Instagram, Facebook, Linkedin, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceItems = [
    { name: "Graphics Designing", href: "#graphics-designing" },
    { name: "SEO", href: "#seo" },
    { name: "Digital Marketing", href: "#digital-marketing" },
    { name: "Web Development", href: "#web-development" },
    { name: "AI Chat Bot", href: "#ai-chatbot" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#2b6777]/95 backdrop-blur-md border-b border-[#2b6777]/50 shadow-lg shadow-[#2b6777]/10"
          : "bg-gradient-to-r from-[#2b6777]/80 via-[#3d8a9a]/80 to-[#2b6777]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#2b6777] to-[#1f4d57] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-xl font-bold text-white font-[var(--font-space-grotesk)] tracking-wide">
              TASKBRIDGE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium flex items-center space-x-1">
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-2 z-50">
                        {serviceItems.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Social icons and search */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-gray-300 placeholder-gray-500 px-4 py-2 pl-10 pr-8 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2b6777] w-64"
              />
              <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
              <span className="absolute right-3 top-2.5 text-gray-500 text-xs">⌘K</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#2b6777]/95 backdrop-blur-md border-t border-[#2b6777]/50"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#2b6777]/50 mt-4">
              <div className="flex items-center space-x-4 px-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}