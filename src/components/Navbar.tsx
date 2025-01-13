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
    <nav className="bg-darkgray border-gray-200 sticky top-0 z-50">
    <div className="container mx-auto px-4 lg:px-6 xl:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex-shrink-0">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="logo.webp" className="h-24" alt="TRANDAREDS IF LOGO" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gold">TRANDAREDS IF</span>
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
                src={darkMode ? "/tif-sun.svg" : "/tif-sun.svg"}
                alt={darkMode ? "Ljusläge" : "Mörkläge"}
                className="w-30 h-auto"
              />
            </button>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <div
              onClick={toggleMenu}
              className="text-gold focus:outline-none hover:bg-transparent mix-blend-lighten"
            >
              <img
                src="/tif-burger-light.svg"
                alt="Hamburgermeny"
                className="h-10 w-auto justify-self-start hover:justify-self-end"
              />
            </div>
          </div>
        </div>

        <div className={`xl:hidden ${isOpen ? "block" : "hidden"} mt-2`}>
          <div className="flex flex-row justify-evenly">
            <NavLinks className="flex flex-col mb-5 space-y-4 uppercase" />
            <div className="">
              <button
                onClick={toggleDarkMode}
                className="w-20 h-12 flex items-center justify-center mix-blend-lighten m-auto mb-5"
                title={darkMode ? "Ljusläge" : "Mörkläge"}
              >
                <img
                  src={darkMode ? "/tif-sun.svg" : "/tif-sun.svg"}
                  alt={darkMode ? "Ljusläge" : "Mörkläge"}
                  className="w-30 h-30"
                />
              </button>

              <Button
                onClick={""}
                linkTo={"#"}
                text={"Logga in"}
                className="text-xl px-4 py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
