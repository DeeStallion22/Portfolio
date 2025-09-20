import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      id="hero"
      initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-100 to-white"
    >
      <h1 className="text-4xl flex md:text-6xl font-bold text-gray-800">
        Hi, I’m <span className="text-blue-600 pl-2">Ishola</span> 
        <img 
        className="wave"
        src="data:image/png;base64,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" alt="waving-hand-medium-skin-tone"></img>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600">
        Frontend Developer | React Enthusiast | UI Builder
      </p>
      <div className="mt-6 flex space-x-4">
        <a
          href="#projects"
          className=" animate-bounce bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          View My Work
        </a>
        <motion.a 
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255, 255, 255)',
            boxShadow : '0px 0px 8px rgb(255, 255, 255)'
          }}
          href="#contact"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
        >
          Hire Me
        </motion.a>
      </div>
    </motion.div>
  );
}
