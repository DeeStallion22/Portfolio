import React from '../assets/origireact.png'
import Html from '../assets/origiHtml.png'
import Origi from '../assets/origiJS.png'
import Tail from  '../assets/origitail.png'
import  Git from '../assets/github.png'
import CSS from '../assets/origiCss.png'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} 
     id="skills" className="bg-gray-100 py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-shadow-lg">Skills</h2>
      <div className="grid grid-cols-2 p-4 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
        <motion.div
         initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
         className="p-4 bg-white shadow rounded-lg">
            <img src={React} 
            classNamealt="bg-white" />
            React
        </motion.div>
        <motion.div
         initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
         className="p-4 bg-white shadow rounded-lg">
            <img src={Tail} alt="" />
            Tailwind
        </motion.div>
        <motion.div
         initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
         className="p-4 bg-white shadow rounded-lg">
            <img src={Origi} alt="" />
            JavaScript
          </motion.div>
        <motion.div
         initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
         className="p-4 bg-white shadow rounded-lg">
            <img src={Git} alt="" />
            GitHub
        </motion.div>
        <motion.div
         initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
         className="p-4 bg-white shadow rounded-lg">
            <img src={Html} alt="" />
            HTML
        </motion.div>
        <motion.div
         initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
         className="p-4 bg-white shadow rounded-lg">
            <img src={CSS} alt="" />
            CSS
        </motion.div>
      </div>
    </motion.div>
  );
}
