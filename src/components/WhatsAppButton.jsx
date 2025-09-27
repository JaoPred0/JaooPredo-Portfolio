import React from 'react';  
import { motion } from 'framer-motion';  
import { MessageCircle } from 'lucide-react';  

const WhatsAppButton = () => {  
  const phoneNumber = '5567996610494'; 
  const message = 'Olá! Vi seu portfolio e gostaria de conversar.';  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;  

  return (  
    <motion.a  
      href={whatsappUrl}  
      target="_blank"  
      rel="noopener noreferrer"  
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-2xl flex items-center gap-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"  
      initial={{ y: 20, opacity: 0 }}  
      animate={{ y: 0, opacity: 1 }}  
      whileHover={{ scale: 1.05, y: -2 }}  
      whileTap={{ scale: 0.95 }}  
    >  
      <MessageCircle className="w-6 h-6" />  
      Falar no WhatsApp  
    </motion.a>  
  );  
};  

export default WhatsAppButton;