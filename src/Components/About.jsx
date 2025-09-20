import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
    id="about" 
    className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg text-gray-700 leading-relaxed text-center">
        I’m a frontend developer passionate about building clean, modern, and
        functional web apps. I love turning ideas into interactive experiences
        with React and Tailwind CSS.
      </p>
    </motion.div>
  );
}
