'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-black py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Contact Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2
            className="text-display text-white mb-8"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            LET'S CREATE
            <br />
            SOMETHING AMAZING
          </motion.h2>
          
          <motion.p
            className="text-body-large text-gray-300 max-w-2xl leading-relaxed"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            READY TO TURN YOUR IDEAS INTO REALITY? LET'S COLLABORATE AND BUILD SOMETHING EXCEPTIONAL TOGETHER.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <motion.h3
                className="text-heading text-white mb-8"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                GET IN TOUCH
              </motion.h3>
              
              <div className="space-y-6">
                <motion.a
                  href="mailto:contact@divyanshu.dev"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="text-lg tracking-wider">vedi05962@gmail.com</span>
                </motion.a>
                
                <motion.div
                  className="flex items-center gap-4 text-gray-300"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="w-6 h-6 text-gray-400" />
                  <span className="text-lg tracking-wider">INDIA</span>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <motion.h4
                className="text-subheading text-white mb-8"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                FOLLOW ME
              </motion.h4>
              
              <div className="space-y-4">
                <motion.a
                  href="https://github.com/divyanshu1004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm tracking-wider uppercase">GITHUB</span>
                </motion.a>
                
                <motion.a
                  href="www.linkedin.com/in/divyanshu-rawat-a2a327256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm tracking-wider uppercase">LINKEDIN</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-4 focus:border-white focus:outline-none transition-colors duration-300 tracking-wider"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-4 focus:border-white focus:outline-none transition-colors duration-300 tracking-wider"
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="text"
                  placeholder="PROJECT SUBJECT"
                  className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-4 focus:border-white focus:outline-none transition-colors duration-300 tracking-wider"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <textarea
                  rows={6}
                  placeholder="TELL ME ABOUT YOUR PROJECT"
                  className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-4 focus:border-white focus:outline-none transition-colors duration-300 tracking-wider resize-none"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="bg-white text-black px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-gray-200 tracking-wider uppercase"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}