import React, { useState } from "react";
import Button from "./Button.tsx";
import NavLinks from "./NavLinks.tsx";

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
    <nav className="bg-darkgray border-gray-200">
      <div className="container mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="logo.png" class="h-20" alt="TRANDAREDS IF LOGO" />
        <span className="hidden xl:flex self-center text-xl font-semibold whitespace-nowrap dark:text-gold">TRANDAREDS IF</span>
        </a>
          </div>

          
          <NavLinks className="hidden lg:flex items-center justify-center space-x-10 absolute left-1/2 transform -translate-x-1/2 font-inter text-xl" />

         
          <div className="hidden lg:flex items-center space-x-6 ml-auto font-inter">
            <Button onClick={""} linkTo={"#"} text={"Logga in"} />
            <button
              onClick={toggleDarkMode}
              className="w-20 h-12 flex items-center justify-center mix-blend-lighten"
              title={darkMode ? "Ljusläge" : "Mörkläge"}
            >
              <img
                src={darkMode ? "/mode.png" : "/mode.png"}
                alt={darkMode ? "Ljusläge" : "Mörkläge"}
                className="w-full h-full"
              />
            </button>
          </div>

          
          <div className="lg:hidden flex items-center space-x-4">
          <button
          onClick={toggleDarkMode}
          className="w-20 h-12 flex items-center justify-center mix-blend-lighten"
          title={darkMode ? "Ljusläge" : "Mörkläge"}
          >
          <img
          src={darkMode ? "/mode.png" : "/mode.png"}
          alt={darkMode ? "Ljusläge" : "Mörkläge"}
          className="w-full h-full"
          />
         </button>

            <button
              onClick={toggleMenu}
              className="text-gold focus:outline-none hover:bg-transparent mix-blend-lighten"
            >
              <img
                src="/icons8-menu-50.png"
                alt="Hamburgermeny"
                className="h-8 w-8"
              />
            </button>
          </div>
        </div>

        <div className={`xl:hidden ${isOpen ? "block" : "hidden"} mt-2`}>
          <div className="flex flex-col items-center">
            <NavLinks className="flex flex-col items-center space-y-4 uppercase" />
            <Button onClick={""} linkTo={"#"} text={"Logga in"} className="text-xl px-4 py-2" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
