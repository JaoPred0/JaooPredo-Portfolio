import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = ({ scrollRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Sobre", id: "sobre" },
    { name: "Projetos", id: "projetos" },
    { name: "Contato", id: "contato" },
  ];

  const handleScroll = (id) => {
    if (!scrollRef.current) return;

    const scroll = scrollRef.current;
    if (scroll && scroll.__loco) {
      // Instância do Locomotive Scroll
      scroll.__loco.scrollTo(document.querySelector(`#${id}`), {
        offset: -80, // altura do header fixo
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 w-full z-50 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo */}
            <motion.div
              className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200 cursor-default select-none drop-shadow-md"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              JaooPredo
            </motion.div>

            {/* Menu desktop */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleScroll(item.id)}
                  className="text-white font-medium transition-colors duration-300 hover:text-gray-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Menu mobile toggle */}
            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-4 py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleScroll(item.id)}
                    className="block text-white font-medium transition-colors duration-300 hover:text-gray-300 w-full text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
