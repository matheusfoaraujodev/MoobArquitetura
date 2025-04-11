// src/components/HeroSection.tsx
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
];

const phrases = [
  "Interiores que inspiram",
  "Funcionalidade com estilo",
  "Seu lar com identidade",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={images[index]}
            alt="Imagem de fundo"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="relative z-10 text-center px-6 text-white">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Moob Arquitetura
        </h1>
        <motion.p
          key={phrases[index]}
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {phrases[index]}
        </motion.p>

        <Button variant="secondary" className="bg-white text-black">
          Pedir orçamento
        </Button>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />
    </section>
  );
}
