import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Copyright, Star, Code, Rocket } from 'lucide-react';

const NUM_PARTICLES = 25; // Menos partículas pro footer, pra não pesar  

const Footer = () => {
  const [particles, setParticles] = useState([]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/JaoPred0', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/joão-pedro-cristaldo-ferraz-02b4a7289', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/jaoo.predo', label: 'Instagram' }
  ];

  useEffect(() => {
    const newParticles = Array.from({ length: NUM_PARTICLES }).map(() => ({
      id: Math.random(),
      size: 1 + Math.random() * 4,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.1 + Math.random() * 0.3,
      speed: 0.5 + Math.random() * 1.5, // Velocidade de flutuação  
    }));
    setParticles(newParticles);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const funFacts = [
    { icon: Star, label: 'Projetos Entregues', value: '42 (a resposta pra tudo)' },
    { icon: Code, label: 'Linguagens', value: 'React, JS, e um café forte' },
    { icon: Rocket, label: 'Ideias Malucas', value: 'Infinito (mas só 3 viram realidade)' }
  ];

  return (
    <footer className="relative bg-[#020202] text-white py-16 px-4 overflow-hidden border-t border-black/20 mb-5">
      {/* Fundo animado de partículas flutuantes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white/20 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0], // Flutuação vertical devagar  
              opacity: [particle.opacity, particle.opacity * 0.8, particle.opacity],
              x: [particle.x, particle.x + (Math.random() - 0.5) * 10, particle.x], // Movimento horizontal sutil  
            }}
            transition={{
              duration: 10 + particle.speed * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              y: { duration: 15 + particle.speed * 10 },
            }}
          />
        ))}
      </motion.div>

      {/* Linhas sutis no fundo com animação */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-white/30"></div>
        <div className="absolute top-1/2 left-0 w-px h-full bg-white/10"></div>
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Coluna central: Nome e descrição */}
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h3
              className="text-3xl font-bold mb-4 text-white"
              whileHover={{ scale: 1.02, color: '#ffffff' }}
              transition={{ duration: 0.3 }}
            >
              JaooPredo
            </motion.h3>
            <motion.p
              className="text-gray-400 text-base leading-relaxed"
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Criando o futuro digital, um pixel de cada vez. Obrigado por visitar!
            </motion.p>
          </motion.div>

          {/* Coluna de links sociais */}
          <motion.div
            className="flex flex-col items-center md:items-end"
            variants={itemVariants}
          >
            <motion.h4
              className="text-xl font-semibold mb-6 text-white"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              Conecte-se
            </motion.h4>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-black/30 hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-500 border border-white/15 shadow-lg hover:shadow-xl"
                    variants={itemVariants}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 360, // Gira completo no hover pra diversão  
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      boxShadow: '0 0 20px rgba(255,255,255,0.2)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, duration: 0.8 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Coluna de contato */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <motion.h4
              className="text-xl font-semibold mb-6 text-white"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              Contato
            </motion.h4>
            <motion.p
              className="text-gray-400 text-base mb-3 hover:text-white transition-colors duration-300 cursor-pointer"
              whileHover={{ x: 5 }}
            >
              jhonpitere1633@gmail.com
            </motion.p>
            <motion.p
              className="text-gray-400 text-base hover:text-white transition-colors duration-300 cursor-pointer"
              whileHover={{ x: 5 }}
            >
              +55 (67) 99661-0494
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Seção de Fatos Rápidos com animações */}
        <motion.div
          className="border-t border-white/20 pt-12 pb-8 text-center"
          variants={itemVariants}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h4
            className="text-2xl font-bold mb-4 text-white"
            whileHover={{ scale: 1.05 }}
          >
            Fatos Divertidos
          </motion.h4>
          <motion.p
            className="text-gray-400 text-base mb-8 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Uns números aleatórios pra te fazer sorrir antes de ir embora.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                className="bg-black/30 rounded-2xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <fact.icon size={32} className="mx-auto mb-3 text-yellow-400" />
                <h5 className="text-white font-semibold mb-2">{fact.label}</h5>
                <p className="text-gray-400 text-sm">{fact.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Linha de copyright com animação de slide */}
        <motion.div
          className="border-t border-white/20 pt-8 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              © 2024 JaooPredo. Todos os direitos reservados.
            </motion.p>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Copyright size={18} className="text-gray-500 animate-pulse" />
              <span>Feito com React & Tailwind</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
