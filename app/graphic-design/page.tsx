"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Palette, Star, Download, Eye, Video } from "lucide-react";
import Image from "next/image";

// Image loading component with error handling
const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw",
  priority = false 
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
        style={{ objectFit: 'cover' }}
        onError={(e) => {
          console.warn(`Failed to load image: ${src}`);
        }}
      />
      {/* Loading placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d262c]/20 to-[#051317]/20 animate-pulse" 
           style={{ zIndex: -1 }} />
    </div>
  );
};

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description: "Custom logo designs that represent your brand identity",
    features: ["Brand Research", "Concept Development", "Multiple Revisions", "Final Files"]
  },
  {
    icon: Star,
    title: "Brand Identity",
    description: "Complete brand packages including colors, fonts, and guidelines",
    features: ["Color Palette", "Typography", "Brand Guidelines", "Business Cards"]
  },
  {
    icon: Eye,
    title: "Social Media Design",
    description: "Engaging graphics for all your social media platforms",
    features: ["Post Templates", "Story Designs", "Cover Photos", "Ad Creatives"]
  },
  {
    icon: Download,
    title: "Print Design",
    description: "Professional print materials for your business needs",
    features: ["Brochures", "Flyers", "Posters", "Business Materials"]
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing and motion graphics services",
    features: ["Video Editing", "Motion Graphics", "Color Grading", "Audio Enhancement"]
  }
];

// Professional Auto-sliding Portfolio Showcase
function ProfessionalAutoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const portfolioShowcase = [
    {
      src: "/graphic-design/branding main.jpeg",
      category: "Brand Identity",
      title: "Complete Brand Solutions",
      description: "Strategic brand development and visual identity systems"
    },
    {
      src: "/graphic-design/logo main.jpeg", 
      category: "Logo Design",
      title: "Distinctive Logo Creation",
      description: "Memorable logos that capture brand essence"
    },
    {
      src: "/graphic-design/thumbnils  main.jpeg",
      category: "Digital Design",
      title: "Engaging Thumbnails",
      description: "Click-worthy designs for digital platforms"
    },
    {
      src: "/graphic-design/socail meadia main.jpeg",
      category: "Social Media",
      title: "Social Media Graphics",
      description: "Cohesive visual content for social platforms"
    },
    {
      src: "/graphic-design/vedio editing main.jpeg",
      category: "Video Production",
      title: "Professional Video Editing",
      description: "High-quality video content and motion graphics"
    }
  ];

  useEffect(() => {
    if (isInView && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % portfolioShowcase.length);
      }, 5000); // Change every 5 seconds for professional pacing

      return () => clearInterval(interval);
    }
  }, [isInView, isHovered, portfolioShowcase.length]);

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d262c]/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-gradient-to-r from-[#0d262c]/80 to-[#051317]/80 backdrop-blur-xl rounded-full border border-[#3d8a9a]/20"
            whileHover={{ scale: 1.02, borderColor: "rgba(61, 138, 154, 0.4)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-2 h-2 bg-[#3d8a9a] rounded-full animate-pulse"></div>
            <span className="text-white font-medium text-sm tracking-wide">FEATURED WORK</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-[var(--font-space-grotesk)]">
            Portfolio{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d8a9a] via-[#4fa6b8] to-white">
              Showcase
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover our latest creative solutions and design excellence
          </p>
        </motion.div>

        {/* Main Professional Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Image Container */}
          <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl shadow-[#0d262c]/50">
            {portfolioShowcase.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  scale: currentIndex === index ? 1 : 1.05,
                }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.46, 0.45, 0.94] // Professional easing
                }}
                className="absolute inset-0"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  className="object-cover"
                  priority={index === 0}
                />
                
                {/* Professional Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d262c]/90 via-[#0d262c]/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d262c]/80 via-transparent to-transparent"></div>
                
                {/* Content Overlay */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    x: currentIndex === index ? 0 : -50,
                  }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg"
                >
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-[#3d8a9a]/20 backdrop-blur-sm border border-[#3d8a9a]/30 rounded-full text-[#3d8a9a] text-xs font-semibold tracking-wide uppercase">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}

            {/* Professional Navigation */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-4">
              {/* Progress Indicators */}
              <div className="flex gap-2">
                {portfolioShowcase.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="group relative"
                    aria-label={`View project ${index + 1}`}
                  >
                    <div className={`w-12 h-1 rounded-full transition-all duration-500 ${
                      currentIndex === index 
                        ? "bg-white" 
                        : "bg-white/20 hover:bg-white/40"
                    }`}>
                      {currentIndex === index && (
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#3d8a9a] to-[#4fa6b8] rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5, ease: "linear" }}
                          key={currentIndex}
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Counter */}
              <div className="text-white/60 text-sm font-mono">
                {String(currentIndex + 1).padStart(2, '0')} / {String(portfolioShowcase.length).padStart(2, '0')}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentIndex((currentIndex - 1 + portfolioShowcase.length) % portfolioShowcase.length)}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => setCurrentIndex((currentIndex + 1) % portfolioShowcase.length)}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
              aria-label="Next project"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white rotate-180 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Professional Thumbnail Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 md:mt-8 flex justify-center gap-3 md:gap-4"
          >
            {portfolioShowcase.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative group transition-all duration-500 ${
                  currentIndex === index 
                    ? "scale-110" 
                    : "scale-100 hover:scale-105"
                }`}
              >
                <div className={`relative w-20 h-12 md:w-28 md:h-16 rounded-xl overflow-hidden transition-all duration-500 ${
                  currentIndex === index
                    ? "ring-2 ring-[#3d8a9a] ring-offset-2 ring-offset-[#0d262c]"
                    : "opacity-40 hover:opacity-70"
                }`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                  {currentIndex !== index && (
                    <div className="absolute inset-0 bg-[#0d262c]/60"></div>
                  )}
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#0d262c]/90 backdrop-blur-sm text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.category}
                </div>
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BrandingGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const brandingImages = [
    { src: "/graphic-design/branding 1.jpeg", title: "Branding Project 1" },
    { src: "/graphic-design/branding 2.jpeg", title: "Branding Project 2" },
    { src: "/graphic-design/branding 3.jpeg", title: "Branding Project 3" },
    { src: "/graphic-design/branding 4.jpeg", title: "Branding Project 4" },
  ];

  return (
    <div>
      {/* Branding Main - Full Screen */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60, rotateX: -10 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: -10 }}
        whileHover={{ 
          rotateX: 2,
          rotateY: 1,
          scale: 1.02,
          z: 30
        }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }}
        className="w-full mb-8 sm:mb-12"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-2xl">
          <Image
            src="/graphic-design/branding main.jpeg"
            alt="Branding Main"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 90vw, 80vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority={true}
          />
          {/* 3D depth overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>

      {/* Branding 1,2,3,4 in 2x2 grid box */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12"
      >
        {brandingImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, rotateY: index % 2 === 0 ? -15 : 15 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.9, rotateY: index % 2 === 0 ? -15 : 15 }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: index % 2 === 0 ? 5 : -5,
              rotateX: 2,
              z: 50
            }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden group shadow-xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Light brightness line in center for branding 4 (index 3) */}
            {index === 3 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"></div>
              </div>
            )}
            {/* 3D depth effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gradient-to-br from-[#0d262c]/90 via-[#0d262c]/70 to-[#051317]/90 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-[#0d262c]/30 hover:border-[#3d8a9a]/60 transition-all duration-700 shadow-2xl hover:shadow-[#0d262c]/20"
    >
      <div className="flex items-start gap-4">
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
          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0d262c] to-[#051317] p-4 md:p-5 flex-shrink-0 shadow-2xl shadow-[#0d262c]/30 group-hover:shadow-[#0d262c]/60"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Icon glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0d262c] to-[#051317] blur-xl opacity-0 group-hover:opacity-50"
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
        <div className="flex-1">
          <motion.h3 
            className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3d8a9a] group-hover:to-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {service.title}
          </motion.h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
          <div className="space-y-2">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                transition={{ 
                  delay: index * 0.1 + idx * 0.05,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#3d8a9a] flex-shrink-0" />
                {feature}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GraphicDesignPage() {
  const router = useRouter();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0d262c] via-[#051317]/80 to-[#0d262c] relative overflow-x-hidden">
      {/* Dark overlay to ensure consistent background */}
      <div className="absolute inset-0 bg-[#0d262c]/20 pointer-events-none"></div>
      
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotateX: [0, 10, 0],
            rotateY: [0, 15, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#3d8a9a]/20 to-[#0d262c]/20 rounded-2xl blur-xl"
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotateX: [0, -15, 0],
            rotateZ: [0, 10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[#4fa6b8]/15 to-[#051317]/15 rounded-3xl blur-2xl"
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotateY: [0, -20, 0],
            rotateX: [0, 5, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-[#3d8a9a]/25 to-transparent rounded-full blur-xl"
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-[#0d262c]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-[#051317]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <button
              onClick={() => {
                // Primary method: Use window.location for navigation with hash
                window.location.href = "/#services";
                
                // Fallback: If we're already on the home page, try direct scrolling
                if (window.location.pathname === "/") {
                  setTimeout(() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }
              }}
              className="inline-flex items-center gap-2 text-white/80 hover:text-[#3d8a9a] transition-colors duration-300 bg-[#0d262c]/30 backdrop-blur-sm px-4 py-2 rounded-full border border-[#0d262c]/50"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </button>
          </motion.div>

          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-[#0d262c]/30 backdrop-blur-sm rounded-full border border-[#0d262c]/50"
              whileHover={{ scale: 1.05 }}
            >
              <Palette className="w-5 h-5 text-[#3d8a9a]" />
              <span className="text-white">Graphic Design Portfolio</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[var(--font-space-grotesk)]">
              Creative{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d8a9a] via-white to-[#4fa6b8]">
                Design Solutions
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Bringing your brand to life with stunning visual designs that captivate, engage, and convert your audience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Auto Slider Section */}
      <ProfessionalAutoSlider />

      {/* Portfolio Section */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d8a9a] to-white">
                Portfolio
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our collection of creative designs and successful brand transformations
            </p>
          </motion.div>

          {/* Table of Content - Full Screen */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ 
              rotateX: 2,
              rotateY: 1,
              scale: 1.02,
              z: 30
            }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className="w-full mb-8 sm:mb-12"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/graphic-design/table of contant.jpeg"
                alt="Table of Content"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 90vw, 80vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* 3D depth overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Branding Section with Grid Layout */}
          <BrandingGrid />

          {/* Logo Main - Full Screen */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ 
              rotateX: 2,
              rotateY: 1,
              scale: 1.02,
              z: 30
            }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className="w-full mb-8 sm:mb-12"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/graphic-design/logo main.jpeg"
                alt="Logo Main"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 90vw, 80vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Light brightness line in center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"></div>
              </div>
              {/* 3D depth overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Logo 1 Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full mb-8 sm:mb-12"
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-xl">
              <Image
                src="/graphic-design/logo 1.jpeg"
                alt="Logo 1"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 90vw, 80vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Thumbnail Main - Full Screen */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ 
              rotateX: 2,
              rotateY: 1,
              scale: 1.02,
              z: 30
            }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className="w-full mb-8 sm:mb-12"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/graphic-design/thumbnils  main.jpeg"
                alt="Thumbnail Main"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 90vw, 80vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* 3D depth overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Thumbnail 1,3,5 Images in Box Layout */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12"
          >
            {[
              { src: "/graphic-design/thumbnil 1.jpeg", title: "Thumbnail 1" },
              { src: "/graphic-design/thumbnils 3.jpeg", title: "Thumbnail 3" },
              { src: "/graphic-design/thumbnils 5.jpeg", title: "Thumbnail 5" }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotateY: (index - 1) * 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: (index - 1) * 5,
                  rotateX: 2,
                  z: 50
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden group shadow-xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* 3D depth effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Social Media Main - Full Screen */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ 
              rotateX: 2,
              rotateY: 1,
              scale: 1.02,
              z: 30
            }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className="w-full mb-8 sm:mb-12"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/graphic-design/socail meadia main.jpeg"
                alt="Social Media Main"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 90vw, 80vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* 3D depth overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Social Media 1,2 Images in 2-Column Layout */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12"
          >
            {[
              { src: "/graphic-design/social media 1.jpeg", title: "Social Media 1" },
              { src: "/graphic-design/social media 2.jpeg", title: "Social Media 2" }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotateY: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: index % 2 === 0 ? 5 : -5,
                  rotateX: 2,
                  z: 50
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden group shadow-xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* 3D depth effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Video Editing Main - Full Screen */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ 
              rotateX: 2,
              rotateY: 1,
              scale: 1.02,
              z: 30
            }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className="w-full mb-8 sm:mb-12"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/graphic-design/vedio editing main.jpeg"
                alt="Video Editing Main"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 90vw, 80vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* 3D depth overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Video Editing 1,2 Images in 2-Column Layout */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12"
          >
            {[
              { src: "/graphic-design/vedio editing 1.jpeg", title: "Video Editing 1" },
              { src: "/graphic-design/vedio editing 2.jpeg", title: "Video Editing 2" }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: 2,
                  z: 50
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden group shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* 3D depth effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Design{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d8a9a] to-white">
                Services
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive graphic design services to elevate your brand presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
          
          {/* Centered Video Editing Card */}
          <div className="flex justify-center mt-8">
            <div className="w-full md:w-1/2">
              <ServiceCard service={services[4]} index={4} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0d262c]/90 via-[#0d262c]/70 to-[#051317]/90 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#0d262c]/30 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's work together to create stunning designs that make your brand stand out from the competition
            </p>
            <motion.button
              onClick={() => {
                // Primary method: Use window.location for navigation with hash
                window.location.href = "/#contact";
                
                // Fallback: If we're already on the home page, try direct scrolling
                if (window.location.pathname === "/") {
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#0d262c] to-[#3d8a9a] text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-[#0d262c]/30 transition-all duration-500 cursor-pointer"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}