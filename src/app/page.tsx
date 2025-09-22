"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  // Optional: Auto-complete loading after a maximum time
  useEffect(() => {
    const maxLoadTime = setTimeout(() => {
      if (isLoading) {
        handleLoadingComplete();
      }
    }, 8000); // 8 seconds max

    return () => clearTimeout(maxLoadTime);
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {showContent && (
        <main className="min-h-screen">
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
