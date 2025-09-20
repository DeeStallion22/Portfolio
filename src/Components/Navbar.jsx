import Mylogo from '../assets/Mylogo.png'
import { useState } from 'react';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

      const handleClick = () => {
    setIsOpen(false);
  };



  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto md:px-4 px-3 py-4 flex justify-between items-center">
        <div className='flex items-center'>
            <img
             src={Mylogo} alt="" 
             className='w-15 text-blue-600'/>
        <h1 className="text-xl font-bold text-blue-600">Ishola</h1>
        </div>
        <ul className="flex space-x-4 hidden md:flex">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
         <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev) }
        >
        {isOpen ? "✕" : "☰"}
        </button>

        {isOpen && (
        <ul className={`md:hidden bg-white shadow-md flex w-35 flex-col space-y-4 p-5  font-medium fixed right-0 top-22 transform transition-transform duration-4000 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
 `}>
          <li><a href="#about"  onClick={handleClick} className="hover:text-blue-500 ">About</a></li>
          <li><a href="#skills" onClick={handleClick}  className="hover:text-blue-500 ">Skills</a></li>
          <li><a href="#projects" onClick={handleClick} className="hover:text-blue-500 ">Projects</a></li>
          <li><a href="#contact"  onClick={handleClick} className="hover:text-blue-500 ">Contact</a></li>
        </ul>
      )}
      </nav>
    </header>
  );
}
