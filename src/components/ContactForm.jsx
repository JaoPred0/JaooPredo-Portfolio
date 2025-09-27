/* global process */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log(error.text);
          alert('Erro ao enviar a mensagem. Tente novamente!');
        }
      );
  };

  return (
    <motion.div
      className="bg-[#020202] backdrop-blur-xl border border-blue-200/50 rounded-3xl p-8 shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Mail className="w-6 h-6 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-800">Envie um Email</h3>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
            className="w-full px-4 py-3 bg-[#020202] border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu email"
            required
            className="w-full px-4 py-3 bg-[#020202] border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Sua mensagem"
            rows={4}
            required
            className="w-full px-4 py-3 bg-[#020202] border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all resize-none"
          />
          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" /> Enviar Mensagem
          </motion.button>
        </form>
      ) : (
        <motion.div className="text-center py-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Send className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <p className="text-green-600 font-semibold">Mensagem enviada! Eu te respondo em breve.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactForm;
