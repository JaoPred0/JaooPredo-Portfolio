import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Code, Rocket, Star } from 'lucide-react';

const AboutSection = () => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
    const cardsY = useTransform(scrollYProgress, [0, 1], [0, 60]);
    const starsOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
                damping: 20
            }
        }
    };

    // Reduzir estrelas para performance  
    const starCount = 8;

    return (
        <section
            ref={ref}
            className="scroll-mt-24 min-h-screen bg-[#020202] text-white flex flex-col items-center justify-start    relative overflow-hidden"
        >
            <motion.div
                className="absolute inset-0 h-[200vh] opacity-20"
                style={{ y: y1 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#020202]" />
            </motion.div>

            {/* Conteúdo */}
            <div className="container mx-auto px-6 z-10 relative w-full">
                <motion.div
                    className="text-center mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ scale, y: titleY }}
                >
                    <motion.h2
                        className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                        variants={itemVariants}
                        animate={{
                            rotateX: [0, 5, 0],
                            opacity: [1, 0.9, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        Sobre Mim
                    </motion.h2>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
                        variants={itemVariants}
                        style={{ y: textY }}
                        animate={{
                            scale: [1, 1.05, 1],
                            color: ['#d1d5db', '#e5e7eb', '#d1d5db']
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        Sou um criador de mundos digitais, daqueles que transforma noites sem dormir em pixels mágicos. Apaixonado por fazer o impossível acontecer na tela, com um toque de humor pra não levar tudo tão a sério (bugs são só piadas do universo). Vamos criar algo que mude o jogo?
                    </motion.p>
                </motion.div>

                {/* Cards com AOS-like: slide up e fade on scroll */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8 mt-16 px-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-200px 0px" }}
                    style={{ y: cardsY }}
                >
                    <motion.div
                        className="p-8 bg-black/30 rounded-3xl backdrop-blur-sm border border-white/10 relative col-span-1"
                        variants={itemVariants}
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 3, -3, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="flex justify-center mb-6">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                            >
                                <Rocket className="w-16 h-16 text-purple-400" />
                            </motion.div>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Inovações Diárias</h3>
                        <p className="text-gray-400 text-center leading-relaxed">Sempre hackeando o próximo nível de criatividade, um commit de cada vez.</p>
                    </motion.div>

                    <motion.div
                        className="p-8 bg-black/30 rounded-3xl backdrop-blur-sm border border-white/10 relative col-span-1"
                        variants={itemVariants}
                        animate={{
                            y: [0, 15, 0],
                            rotate: [0, -3, 3, 0]
                        }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="flex justify-center mb-6">
                            <motion.div
                                animate={{ rotate: [0, -360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            >
                                <Code className="w-16 h-16 text-blue-400" />
                            </motion.div>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Código Puro</h3>
                        <p className="text-gray-400 text-center leading-relaxed">Linhas que fluem como poesia (sem rimas ruins ou bugs escondidos).</p>
                    </motion.div>

                    <motion.div
                        className="p-8 bg-black/30 rounded-3xl backdrop-blur-sm border border-white/10 relative col-span-1"
                        variants={itemVariants}
                        animate={{
                            scale: [1, 1.08, 1],
                            rotate: [0, 2, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <div className="flex justify-center mb-6">
                            <motion.div
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                            >
                                <Heart className="w-16 h-16 text-pink-400" />
                            </motion.div>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Paixão Eterna</h3>
                        <p className="text-gray-400 text-center leading-relaxed">Fazendo o que amo, com um sorriso sarcástico e café infinito.</p>
                    </motion.div>
                </motion.div>

                {/* Estrelas reduzidas com AOS e scroll movement */}
                <motion.div
                    className="absolute top-20 right-20 hidden md:block"
                    style={{ opacity: starsOpacity }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {[...Array(starCount)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-white rounded-full absolute"
                            style={{
                                top: `${i * 15}px`,
                                left: `${i * 8}px`,
                            }}
                            animate={{
                                y: [-5, 5, -5],
                                opacity: [0.4, 1, 0.4]
                            }}
                            transition={{ duration: 2.5 + i * 0.5, repeat: Infinity }}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;