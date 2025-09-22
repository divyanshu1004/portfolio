"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CircularGallery from "./CircularGallery";

export default function Projects() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "AI-BASED AUTO TAGGING SYSTEM",
      description:
        "SMART DSA NOTES ORGANIZER USING NLP AND TRIE DATA STRUCTURE. AUTOMATICALLY CATEGORIZES AND TAGS DATA STRUCTURE PROBLEMS WITH 60% EFFICIENCY IMPROVEMENT.",
      technologies: ["PYTHON", "NLP", "MACHINE LEARNING"],
      github: "https://github.com/divyanshu1004/ai-tagging-system",
      live: "#",
      image: "/api/placeholder/600/400",
    },
    {
      id: 2,
      title: "TALKAI - CONVERSATIONAL AI PLATFORM",
      description:
        "MODERN CHAT APPLICATION WITH AI INTEGRATION, AUTHENTICATION, AND REAL-TIME MESSAGING. BUILT WITH NEXT.JS, TYPESCRIPT, AND MODERN AUTHENTICATION.",
      technologies: ["NEXT.JS", "TYPESCRIPT", "AI INTEGRATION"],
      github: "https://github.com/divyanshu1004/talkai",
      live: "#",
      image: "/api/placeholder/600/400",
    },
    {
      id: 3,
      title: "BLOCKCHAIN VOTING SYSTEM",
      description:
        "DECENTRALIZED VOTING PLATFORM USING ETHEREUM SMART CONTRACTS. ENSURES TRANSPARENCY, SECURITY, AND IMMUTABILITY IN ELECTORAL PROCESSES.",
      technologies: ["SOLIDITY", "ETHEREUM", "WEB3"],
      github: "https://github.com/divyanshu1004/blockchain-voting",
      live: "#",
      image: "/api/placeholder/600/400",
    },
    {
      id: 4,
      title: "REALTIME COLLABORATION TOOL",
      description:
        "COLLABORATIVE WORKSPACE WITH REAL-TIME EDITING, VIDEO CALLS, AND PROJECT MANAGEMENT. BUILT FOR REMOTE TEAMS AND DISTRIBUTED WORKFLOWS.",
      technologies: ["REACT", "NODE.JS", "SOCKET.IO"],
      github: "https://github.com/divyanshu1004/collaboration-tool",
      live: "#",
      image: "/api/placeholder/600/400",
    },
  ];

  return (
   <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.22}/>
</div>

 
  );
}
