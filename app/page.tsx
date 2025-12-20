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
