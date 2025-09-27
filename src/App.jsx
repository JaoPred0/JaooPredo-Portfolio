import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjetosSection from "./components/ProjetosSection";
import ContactForm from "./components/ContactForm";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

const App = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Fundo animado com framer-motion
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    if (!scrollRef.current) return;

    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8,
    });

    // guarda a instância dentro do ref
    scrollRef.current.__loco = locoScroll;

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="relative bg-[#020202] text-white overflow-x-hidden"
    >
      <Header scrollRef={scrollRef} />

      <main>
        <section data-scroll-section id="home">
          <HeroSection />
        </section>

        {/* Fundo animado */}
        <motion.div
          className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
          style={{
            transformOrigin: "top",
            scale,
            y: backgroundY,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 25,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black" />
        </motion.div>

        <section data-scroll-section id="sobre">
          <AboutSection />
        </section>

        <section data-scroll-section id="projetos" className="relative z-10">
          <ProjetosSection />
        </section>

        <section data-scroll-section id="contato" className="relative z-10">
          <div className="min-h-screen bg-gradient-to-br bg-[#020202] relative overflow-hidden">
            <div className="container mx-auto px-4 py-12 max-w-2xl relative z-10">
              <motion.h1
                className="text-4xl font-bold text-center text-gray-800 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Vamos Conversar?
              </motion.h1>
              <p className="text-center text-gray-600 mb-12 max-w-md mx-auto">
                Estou animado pra ouvir sobre seu projeto! Escolha email ou WhatsApp.
              </p>
              <div className="space-y-8">
                <ContactForm />
                <div className="text-center pt-6 border-t border-gray-200">
                  <p className="text-gray-500 mb-4">Ou prefere o chat rápido?</p>
                  <WhatsAppButton />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-scroll-section className="relative z-10">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;
