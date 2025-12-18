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

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has visited before (optional - remove if you want to show welcome every time)
    const visited = localStorage.getItem('taskbridge-visited');
    if (visited) {
      setShowWelcome(false);
      setHasVisited(true);
    }
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    // Mark as visited (optional - remove if you want to show welcome every time)
    localStorage.setItem('taskbridge-visited', 'true');
    setHasVisited(true);
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
    </div>
  );
}
