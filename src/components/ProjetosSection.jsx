import React, { useState, useRef } from 'react';  
import { motion, AnimatePresence } from 'framer-motion';  
import { Github, ExternalLink, X, Code, ShoppingBag, BarChart3, ChevronDown } from 'lucide-react';  

const ProjetosSection = () => {  
  const [hoveredProject, setHoveredProject] = useState(null);  
  const [activeImage, setActiveImage] = useState(null);  
  const [visibleCount, setVisibleCount] = useState(3);  
  const imageRef = useRef(null);  

  const projects = [  
    {  
      id: 1,  
      title: "EducaShop",  
      description: "EducaShop oferece materiais prontos, resumos e exercícios para estudo. Tudo para você arrasar nas provas e concursos.",  
      icon: ShoppingBag,  
      link: "https://educa-shop.vercel.app",  
      githubLink: "https://github.com/JaoPred0/EducaShop-Central",  
      imageUrl: "/educashop-projeto.png"  
    },  
    {  
      id: 2,  
      title: "Portal Inmigra Acción",  
      description: "Estamos ajudando, acolhendo e direcionando para um melhor caminho e integridade na nossa cidade.",  
      icon: Code,  
      link: "https://portal-imigrantes.vercel.app",  
      githubLink: "https://github.com/JaoPred0/portal-imigrantes",
      imageUrl: "/Portal-Inmigra-Accion.png"  
    },  
    {  
      id: 3,  
      title: "LaAFIF",  
      description: "O LaAFIF é uma aplicação web interativa desenvolvida para auxiliar professores e profissionais de Educação Física na aplicação e análise de testes físicos.",  
      icon: BarChart3,  
      link: "https://laafif-app.vercel.app",  
      githubLink: "https://github.com/JaoPred0/portal-imigrantes",
      imageUrl: "/laafif.png"  
    },  
    // {  
    //   id: 4,  
    //   title: "CodeNest",  
    //   description: "Uma plataforma colaborativa para desenvolvedores compartilharem snippets de código e ideias malucas que salvam o dia.",  
    //   icon: Code,  
    //   link: "#",  
    //   githubLink: "#",  
    //   imageUrl: "/images/codenest-preview.jpg"  
    // },  
    // {  
    //   id: 5,  
    //   title: "FitTrackr",  
    //   description: "App de tracking de exercícios que motiva com badges e lembretes engraçados – porque malhar sozinho é triste.",  
    //   icon: BarChart3,  
    //   link: "#",  
    //   imageUrl: "/images/fittrackr-preview.jpg"  
    // },  
    // {  
    //   id: 6,  
    //   title: "StoryWeave",  
    //   description: "Ferramenta para criar histórias interativas como jogos, perfeita pra escritores preguiçosos que amam ramificações.",  
    //   icon: ShoppingBag,  
    //   link: "#",  
    //   githubLink: "#",  
    //   imageUrl: "/images/storyweave-preview.jpg"  
    // }  
  ];  

  const visibleProjects = projects.slice(0, visibleCount);  

  const containerVariants = {  
    hidden: { opacity: 0 },  
    visible: {  
      opacity: 1,  
      transition: {  
        staggerChildren: 0.15,  
        delayChildren: 0.4  
      }  
    }  
  };  

  const itemVariants = {  
    hidden: { opacity: 0, y: 50, scale: 0.95 },  
    visible: {  
      opacity: 1,  
      y: 0,  
      scale: 1,  
      transition: {  
        duration: 0.6,  
        ease: [0.25, 0.46, 0.45, 0.94]  
      }  
    }  
  };  

  const cardVariants = {  
    hidden: { opacity: 0, rotateY: -10 },  
    visible: {  
      opacity: 1,  
      rotateY: 0,  
      transition: { duration: 0.5 }  
    },  
    hover: {  
      y: -10,  
      rotateY: 3,  
      transition: { type: 'spring', stiffness: 300, damping: 20 }  
    }  
  };  

  const handleMouseEnter = (project) => {  
    setHoveredProject(project);  
    setActiveImage(project);  
  };  

  const handleMouseLeave = () => {  
    setHoveredProject(null);  
    setActiveImage(null);  
  };  

  const handleCloseImage = () => {  
    setActiveImage(null);  
    setHoveredProject(null);  
  };  

  const handleShowMore = () => {  
    setVisibleCount(prev => Math.min(prev + 3, projects.length));  
  };  

  const imageVariants = {  
    initial: { opacity: 0, scale: 0.9, y: 20 },  
    animate: {  
      opacity: 1,  
      scale: 1,  
      y: 0,  
      transition: { duration: 0.3, type: 'spring', stiffness: 400 }  
    },  
    exit: {  
      opacity: 0,  
      scale: 0.9,  
      y: 20,  
      transition: { duration: 0.2 }  
    }  
  };  

  const buttonVariants = {  
    hover: {  
      scale: 1.05,  
      transition: { type: 'spring', stiffness: 400 }  
    },  
    tap: { scale: 0.98 }  
  };  

  return (  
    <section  
      className="relative min-h-screen py-16 px-4 overflow-hidden"  
      style={{  
        backgroundColor: '#020202'  
      }}  
    >  
      {/* Fundo animado: só preto puro com fade sutil, sem cores */}  
      <div className="absolute inset-0 bg-[#020202] opacity-100 animate-fade-black">  
        <style>{`    
          @keyframes fade-black {    
            0%, 100% { opacity: 1; }    
            50% { opacity: 0.95; }    
          }    
          .animate-fade-black {    
            animation: fade-black 20s ease-in-out infinite;    
          }    
        `}</style>  
      </div>  

      <div className="relative z-10 container mx-auto max-w-6xl">  
        <motion.div  
          className="text-center mb-16"  
          variants={containerVariants}  
          initial="hidden"  
          whileInView="visible"  
          viewport={{ once: true, margin: "-100px" }}  
        >  
          <motion.h2  
            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight drop-shadow-2xl"  
            variants={itemVariants}  
            animate={{  
              scale: [1, 1.02, 1],  
              opacity: [1, 0.95, 1]  
            }}  
            transition={{  
              duration: 4,  
              repeat: Infinity,  
              ease: 'easeInOut'  
            }}  
          >  
            Meus Projetos  
          </motion.h2>  
          <motion.p  
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"  
            variants={itemVariants}  
          >  
            Explore esses projetos que criei com paixão, código afiado e um pouquinho de magia digital. Cada um é uma história esperando para ser contada.  
          </motion.p>  
        </motion.div>  

        <motion.div  
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"  
          variants={containerVariants}  
          initial="hidden"  
          whileInView="visible"  
          viewport={{ once: true, margin: "-100px" }}  
        >  
          <AnimatePresence>  
            {visibleProjects.map((project, index) => (  
              <motion.div  
                key={project.id}  
                className="relative group"  
                variants={cardVariants}  
                initial="hidden"  
                whileInView="visible"  
                whileHover="hover"  
                viewport={{ once: true }}  
                transition={{ delay: index * 0.1 }}  
                onMouseEnter={() => handleMouseEnter(project)}  
                onMouseLeave={handleMouseLeave}  
                whileTap={{ scale: 0.97 }}  
                exit={{  
                  opacity: 0,  
                  scale: 0.95,  
                  transition: { duration: 0.2 }  
                }}  
              >  
                <motion.div  
                  className="relative bg-black border border-white/50 rounded-3xl p-6 md:p-8 overflow-hidden cursor-pointer text-white shadow-2xl hover:shadow-black/80 transition-all duration-500"  
                  style={{  
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8), 0 4px 10px rgba(0, 0, 0, 0.6)'  
                  }}  
                  whileHover={{  
                    scale: 1.02,  
                    backgroundColor: '#111111'  
                  }}  
                  onClick={() => window.open(project.link, '_blank')}  
                >  
                  {/* Imagem de prévia no card */}  
                  <div className="relative mb-6 overflow-hidden rounded-2xl h-48 bg-white flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">  
                    <motion.div  
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"  
                    />  
                    <project.icon className="w-12 h-12 text-white absolute z-10 group-hover:scale-110 transition-transform duration-300" />  
                    <img  
                      src={project.imageUrl}  
                      alt={project.title}  
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-opacity duration-500"  
                    />  
                  </div>  

                  <motion.div  
                    className="space-y-3"  
                    animate={hoveredProject?.id === project.id ? { opacity: 1 } : { opacity: 0.9 }}  
                    transition={{ duration: 0.3 }}  
                  >  
                    <motion.h3  
                      className="text-xl md:text-2xl font-bold text-white mb-2"  
                      whileHover={{ y: -2 }}  
                      transition={{ duration: 0.2 }}  
                    >  
                      {project.title}  
                    </motion.h3>  
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-1">{project.description}</p>  
                  </motion.div>  

                  <div className="flex justify-center gap-4 pt-6 border-t border-white/30 mt-4">  
                    <motion.button  
                      className="p-3 rounded-xl text-gray-400 hover:text-white hover:bg-black/30 border border-black/30 transition-all duration-300 flex items-center justify-center"  
                      whileHover={{ scale: 1.1 }}  
                      whileTap={{ scale: 0.95 }}  
                      title="Ver no GitHub"  
                      onClick={(e) => {  
                        e.stopPropagation();  
                        window.open(project.githubLink || project.link, "_blank");  
                      }}  
                    >  
                      <Github size={20} />  
                    </motion.button>  
                    <motion.button  
                      className="p-3 rounded-xl text-gray-400 hover:text-white hover:bg-black/30 border border-black/30 transition-all duration-300 flex items-center justify-center"  
                      whileHover={{ scale: 1.1 }}  
                      whileTap={{ scale: 0.95 }}  
                      title="Visitar Site"  
                      onClick={(e) => {  
                        e.stopPropagation();  
                        window.open(project.link, "_blank");  
                      }}  
                    >  
                      <ExternalLink size={20} />  
                    </motion.button>  
                  </div>  
                </motion.div>  
              </motion.div>  
            ))}  
          </AnimatePresence>  
        </motion.div>  

        {visibleCount < projects.length && (  
          <motion.div  
            className="text-center mt-12"  
            initial={{ opacity: 0, y: 20 }}  
            whileInView={{ opacity: 1, y: 0 }}  
            viewport={{ once: true }}  
            transition={{ duration: 0.5 }}  
          >  
            <motion.button  
              onClick={handleShowMore}  
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 rounded-2xl text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm"  
              variants={buttonVariants}  
              whileHover="hover"  
              whileTap="tap"  
            >  
              Mostrar Mais Projetos  
              <ChevronDown className="w-5 h-5 transition-transform group-hover:rotate-180" />  
            </motion.button>  
          </motion.div>  
        )}  
      </div>  

      {/* Modal de imagem em vez de vídeo */}  
      {activeImage && (  
        <AnimatePresence>  
          <motion.div  
            className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4"  
            variants={imageVariants}  
            initial="initial"  
            animate="animate"  
            exit="exit"  
            onClick={handleCloseImage}  
          >  
            <div className="relative max-w-4xl w-full max-h-[90vh]">  
              <button  
                onClick={handleCloseImage}  
                className="absolute -top-4 -right-4 bg-black hover:bg-black/80 text-white p-2 rounded-full shadow-lg transition-colors duration-200 z-10 border border-white/20"  
              >  
                <X size={24} className="stroke-white" />  
              </button>  
              <img  
                ref={imageRef}  
                src={activeImage.imageUrl}  
                alt={activeImage.title}  
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-black"  
              />  
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm p-4 rounded-xl text-center border border-white/10">  
                <h3 className="text-xl font-bold text-white mb-2">{activeImage.title}</h3>  
                <p className="text-gray-300 text-sm">{activeImage.description}</p>  
              </div>  
            </div>  
          </motion.div>  
        </AnimatePresence>  
      )}  
    </section>  
  );  
};  

export default ProjetosSection;