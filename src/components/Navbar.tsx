import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-darkgray border-b shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-25 items-center">
          
        <div className="flex-shrink-0">
  <a href="#" className="flex items-center">
    <div className="rounded-full border-4 border-gold">
      <img
        src="/logo.png"
        alt="TIF Logo"
        className="h-20 w-20 object-contain"
      />
    </div>
  </a>
</div>
          
          <div className="hidden md:flex items-center justify-center space-x-10 ml-12 font-inter text-center text-base uppercase">
            <a href="#" className="text-gold hover:underline text-base  font-semibold">
              Hem
            </a>
            <a href="#" className="text-gold hover:underline text-base font-semibold">
              Om oss
            </a>
            <a href="#" className="text-gold hover:underline text-base font-semibold">
              Schema
            </a>
            <a href="#" className="text-gold hover:underline text-base font-semibold">
              Nyheter
            </a>
            <a href="#" className="text-gold hover:underline text-base font-semibold">
              Tider
            </a>
            <a href="#" className="text-gold hover:underline text-base font-semibold">
              Kontakt
            </a>

            <Button onClick={""} linkTo={"#"} text={"Logga in"} />

           
            <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-20 h-15"         
            title={darkMode ? "Ljusläge" : "Mörkläge"}
            >
            <img
            src={darkMode ? "/switch.png" : "/switch.png"}
            alt={darkMode ? "Ljusläge" : "Mörkläge"}
           className="w-full h-full"
            />
            </button>

            </div>

         
          <div className="md:hidden">
          <button  
          onClick={toggleMenu}
          className="text-gold hover:underline focus:outline-none"
          >
          <img
          src="/hamburger.jpeg"
            alt="Hamburgermeny"
            className="h-8 w-8 object-contain"        
              />
        </button>
        </div>
        </div>
        </div>

      
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <a
          href="#"
          className="block px-4 py-2 text-gold hover:bg-gray-200 uppercase"
        >
          Hem
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gold hover:bg-gray-200 uppercase"
        >
          Om oss
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gold hover:bg-gray-200 uppercase"
        >
          Schema
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gold hover:bg-gray-200 uppercase"
        >
          Nyheter
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gold hover:bg-gray-200 uppercase"
        >
          Tider
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gold hover:bg-gray-200 uppercase "
        >
          Kontakt
        </a>

       
        <div className="flex justify-center mt-4">
        <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-20 h-15"         
            title={darkMode ? "Ljusläge" : "Mörkläge"}
            >
            <img
            src={darkMode ? "/switch.png" : "/switch.png"}
            alt={darkMode ? "Ljusläge" : "Mörkläge"}
           className="w-full h-full"
            />
            </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
