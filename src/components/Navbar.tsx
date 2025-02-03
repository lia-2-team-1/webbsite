import React, { useState } from "react";
import Button from "./Button.tsx";
import NavLinks from "./NavLinks.tsx";
import LightDark from "./LightDark.tsx";
import Burger from "./Burger.tsx";

/** <img src="/tif-burger.svg" alt="Hamburgermeny" className="h-10 w-auto justify-self-start hover:justify-self-end"/>*/
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    const [dark, setDark] = React.useState(false);
    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

  return (
    <nav className="bg-sandybrown dark:bg-darkgray dark:border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="logo.webp" className="h-20" alt="TRANDAREDS IF LOGO" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap  hidden lg:block
                               text-codgray dark:text-sandybrown ">
                TRANDAREDS IF
              </span>
            </a>
          </div>

          <NavLinks className="hidden lg:flex items-center justify-center space-x-10 absolute left-1/2 transform -translate-x-1/2 font-inter text-xl" />

          <div className="hidden lg:flex items-center space-x-6 ml-auto ">
            <Button onClick={""} linkTo={"#"} text={"Logga in"} />
            <LightDark />
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <div onClick={toggleMenu}>
            <Burger className="w-16 h-16 mt-4 max-h-20" stroke="stroke-codgray dark:stroke-sandybrown" /> 
            </div>
          </div>
        </div>

        <div className={`xl:hidden ${isOpen ? "block" : "hidden"} mt-2`}>
          <div className="flex flex-row justify-evenly">
            <NavLinks className="flex flex-col mb-5 space-y-4 uppercase" />
            <div className="flex flex-col">
                <LightDark className="mx-auto"/>
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
