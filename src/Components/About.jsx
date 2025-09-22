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
      Hi, I’m Gbolahan, a passionate Frontend Developer who believes in the power of continuous learning and creativity. My journey into tech began in an unexpected place studying biology at university but along the way, I discovered a love for building digital experiences. Transitioning into frontend development has taught me one important lesson: you can rewrite your own story at any time.
      I specialize in building responsive, user-friendly, and visually engaging web applications using modern tools like React, Tailwind CSS, and Framer Motion. Beyond coding, I love solving problems, experimenting with new design patterns, and continuously improving my craft. My goal is to create products that don’t just look good but also make people’s lives easier.
      </p>
    </motion.div>
  );
}
