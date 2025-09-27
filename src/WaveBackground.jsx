import React from 'react';  
import { motion } from 'framer-motion';  

const WaveBackground = () => {  
  return (  
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">  
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-blue-900/20 via-blue-500/10 to-transparent">  
        <motion.svg  
          className="w-full h-full"  
          viewBox="0 0 1200 120"  
          preserveAspectRatio="none"  
          xmlns="http://www.w3.org/2000/svg"  
        >  
          <motion.path  
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"  
            fill="currentColor"  
            initial={{ pathLength: 0 }}  
            animate={{ pathLength: 1 }}  
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}  
            style={{ color: "rgba(59, 130, 246, 0.3)" }}  
          />  
          <motion.path  
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c-108.27,19,11-26.09-1.37-26.09C985.66,92.83,906.67,72,823.78,31c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,321.39,56.44Z"  
            fill="currentColor"  
            initial={{ pathLength: 0, opacity: 0.5 }}  
            animate={{ pathLength: 1, opacity: 0.7 }}  
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}  
            style={{ color: "rgba(99, 102, 241, 0.4)" }}  
          />  
        </motion.svg>  
      </div>  
    </div>  
  );  
};  

export default WaveBackground;