import { motion } from "framer-motion";


export default function Contact() {
  return (
    <motion.div id="contact"
    initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
     className="max-w-full mx-auto px-4 py-20 text-center bg-gradient-to-t from-blue-100 to-white">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg mb-6">
        Let’s build something amazing together! 🚀
      </p>
      <div className="space-x-6">
        <a
          href="mailto:gbolahanusman533@gmail.com"
          className="text-blue-600 hover:underline"
        >
          Email
        </a>
        <a
          href="https://github.com/DeeStallion22"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/gbolahan-usman-043428365"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </motion.div>
  );
}
