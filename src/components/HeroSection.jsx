import React, { useEffect, useState } from 'react';  
import { motion, useScroll, useTransform } from 'framer-motion';  
import { ArrowDown, Code, Palette, Rocket, User } from 'lucide-react';  

const NUM_PARTICLES = 40;  

const HeroSection = () => {  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });  
  const [particles, setParticles] = useState([]);  
  const { scrollY } = useScroll();  

  const parallaxY1 = useTransform(scrollY, [0, 600], [0, -150]); // Para o fundo ondulado  
  const parallaxY2 = useTransform(scrollY, [0, 600], [0, -75]); // Para as partículas, movimento mais sutil  
  const arrowOpacity = useTransform(scrollY, [0, 200], [1, 0]); // Seta some no início do scroll  

  useEffect(() => {  
    const handleMouseMove = (e) => {  
      setMousePosition({ x: e.clientX, y: e.clientY });  
    };  
    window.addEventListener('mousemove', handleMouseMove);  
    return () => window.removeEventListener('mousemove', handleMouseMove);  
  }, []);  

  useEffect(() => {  
    const newParticles = Array.from({ length: NUM_PARTICLES }).map(() => ({  
      size: 2 + Math.random() * 8,  
      x: Math.random() * 100,  
      y: Math.random() * 100,  
      opacity: 0.05 + Math.random() * 0.15,  
      blur: Math.random() * 2,  
      depth: Math.random() < 0.5 ? 'front' : 'back',  
    }));  
    setParticles(newParticles);  
  }, []);  

  const skills = [  
    { icon: Code, label: 'Código Limpo' },  
    { icon: Palette, label: 'Design Elegante' },  
    { icon: Rocket, label: 'Ideias Rápidas' }  
  ];  

  return (  
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">  
      {/* Gradiente de luz suave */}  
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-gray-900/50 to-black/60"></div>  

      {/* Ondas animadas preto e branco com parallax */}    
      <motion.svg   
        className="absolute inset-0 w-full h-full z-10"   
        style={{ y: parallaxY1 }}  
        preserveAspectRatio="none"  
      >  
        <motion.path  
          d="M0 500 Q 400 400 800 500 T 1600 500 V1000 H0 Z"  
          fill="#050505" // cinza escuro  
          animate={{ y: [0, -20, 0] }}  
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}  
        />  
        <motion.path  
          d="M0 520 Q 400 420 800 520 T 1600 520 V1000 H0 Z"  
          fill="#020202" // cinza médio  
          animate={{ y: [0, 15, 0] }}  
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}  
        />  
      </motion.svg>  

      {/* Partículas flutuantes com parallax */}  
      <motion.div   
        className="absolute inset-0 pointer-events-none"  
        style={{ y: parallaxY2 }}  
      >  
        {particles.map((p, i) => {  
          const depthFactor = p.depth === 'front' ? 60 : 30;  
          return (  
            <motion.div  
              key={i}  
              className="absolute bg-white rounded-full"  
              style={{  
                width: p.size,  
                height: p.size,  
                left: `${p.x}%`,  
                top: `${p.y}%`,  
                filter: `blur(${p.blur}px)`,  
                opacity: p.opacity,  
              }}  
              animate={{  
                x: mousePosition.x / depthFactor,  
                y: mousePosition.y / depthFactor,  
              }}  
              transition={{ type: 'tween', duration: 0.5 }}  
            />  
          );  
        })}  
      </motion.div>  

      {/* Conteúdo central */}  
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl">  

        {/* Nome */}  
        <motion.h1  
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight title"  
          initial={{ opacity: 0, y: 100 }}  
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1, delay: 0.3 }}  
        >  
          Olá, eu sou o{" "}  
          <motion.span  
            className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent"  
            whileHover={{ scale: 1.08 }}  
            transition={{ type: "spring", stiffness: 300 }}  
          >  
            <br />  
            JaooPredo  
          </motion.span>  
        </motion.h1>  

        {/* Subtítulo */}  
        <motion.h2  
          className="text-2xl md:text-4xl font-light mb-6 text-gray-400 opacity-80"  
          initial={{ opacity: 0, y: 50 }}  
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1, delay: 0.6 }}  
        >  
          Web Developer  
        </motion.h2>  

        {/* Descrição */}  
        <motion.p  
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12"  
          initial={{ opacity: 0 }}  
          animate={{ opacity: 1 }}  
          transition={{ duration: 1, delay: 0.9 }}  
        >  
          Criando experiências digitais elegantes com código limpo e design sofisticado.  
        </motion.p>  

        {/* Destaques de Habilidades */}  
        <motion.div  
          className="flex justify-center items-center gap-8 mb-12"  
          initial={{ opacity: 0, y: 50 }}  
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1, delay: 1.2 }}  
        >  
          {skills.map((skill, index) => (  
            <motion.div  
              key={skill.label}  
              className="flex flex-col items-center gap-2 p-4 bg-gray-900/50 rounded-2xl border border-white/20"  
              whileHover={{ scale: 1.1, y: -10 }}  
              whileTap={{ scale: 0.95 }}  
              initial={{ opacity: 0, y: 20 }}  
              animate={{ opacity: 1, y: 0 }}  
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}  
            >  
              <skill.icon className="w-8 h-8 text-gray-300" />  
              <span className="text-sm text-gray-400 font-medium">{skill.label}</span>  
            </motion.div>  
          ))}  
        </motion.div>  
      </div>  

      {/* Seta animada com fade on scroll */}  
      <motion.div  
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"  
        style={{ opacity: arrowOpacity }}  
        initial={{ opacity: 0, y: -20 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{  
          duration: 1,  
          delay: 1.5,  
          repeat: Infinity,  
          repeatType: 'reverse',  
          repeatDelay: 1,  
        }}  
      >  
        <ArrowDown className="w-6 h-6 text-gray-400" />  
      </motion.div>  
    </section>  
  );  
};  

export default HeroSection;