"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { WelcomeScreen } from "./component/welcome-screen";
import { Navbar } from "./component/navbar";
import { Hero } from "./component/hero";
import { Services } from "./component/services";
import { About } from "./component/about";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";
import { WhatsAppChat } from "./component/whatsapp-chat";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  // Handle hash navigation after components are loaded
  useEffect(() => {
    if (!showWelcome) {
      const scrollToSection = () => {
        const hash = window.location.hash.substring(1); // Remove the #
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      // Try multiple times with increasing delays to ensure components are rendered
      setTimeout(scrollToSection, 100);
      setTimeout(scrollToSection, 500);
      setTimeout(scrollToSection, 1000);
    }
  }, [showWelcome]);

  // Also handle hash changes while on the page
  useEffect(() => {
    const handleHashChange = () => {
      if (!showWelcome) {
        const hash = window.location.hash.substring(1);
        if (hash) {
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [showWelcome]);

  return (
    <div className="min-h-screen bg-slate-900">
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <WelcomeScreen key="welcome" onComplete={handleWelcomeComplete} />
        ) : (
          <div key="main">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Contact />
            <Footer />
          </div>
        )}
      </AnimatePresence>
      
      {/* WhatsApp Chat - Always visible */}
      <WhatsAppChat />
    </div>
  );
}
