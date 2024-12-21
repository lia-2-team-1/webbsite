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
      <div className="flex items-center justify-between h-20">
        
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt="TIF Logo"
              className="h-20 w-20 object-contain"
            />
          </a>
        </div>
  
       
        <div className="hidden md:flex items-center justify-center space-x-10 absolute left-1/2 transform -translate-x-1/2 font-inter text-base">
          <a href="#" className="text-gold hover:underline text-base font-semibold">
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
        </div>
  
        <div className="hidden md:flex items-center space-x-6 ml-auto font-inter">
          <Button onClick={""} linkTo={"#"} text={"Logga in"} />
          <button
            onClick={toggleDarkMode}
            className="w-20 h-12 flex items-center justify-center"
            title={darkMode ? "Ljusläge" : "Mörkläge"}
          >
            <img
              src={darkMode ? "/sunicon.png" : "/sunicon.png"}
              alt={darkMode ? "Ljusläge" : "Mörkläge"}
              className="w-full h-full"
            />
          </button>
      
      </div>

      
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gold focus:outline-none hover:bg-transparent"
        >
          <img
            src="/icons8-menu-50.png"
            alt="Hamburgermeny"
            className="h-8 w-8"
          />
        </button>
      </div>
    </div>

  
    <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-2`}>
      <div className="flex flex-col items-center space-y-4">
        <a href="#" className="text-gold uppercase">
          Hem
        </a>
        <a href="#" className="text-gold uppercase">
          Om oss
        </a>
        <a href="#" className="text-gold uppercase">
          Schema
        </a>
        <a href="#" className="text-gold uppercase">
          Nyheter
        </a>
        <a href="#" className="text-gold uppercase">
          Tider
        </a>
        <a href="#" className="text-gold uppercase">
          Kontakt
        </a>
        <Button onClick={""} linkTo={"#"} text={"Logga in"} className="text-sm px-4 py-2" />
        <button
          onClick={toggleDarkMode}
          className="w-20 h-12 flex items-center justify-center mt-2"
          title={darkMode ? "Ljusläge" : "Mörkläge"}
        >
          <img
            src={darkMode ? "/sunicon.png" : "/sunicon.png"}
            alt={darkMode ? "Ljusläge" : "Mörkläge"}
            className="w-full h-full"
          />
        </button>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
