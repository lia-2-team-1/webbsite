import React, { useState } from "react";
import NavLinks from "./NavLinks.tsx";
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
  };

  return (
    <nav
      className="
                    bg-sandybrown dark:bg-slate
                    dark:border-gray-200 
                    sticky top-0
                    flex h-20 z-40 
                    justify-between
                    transition-all delay-150 duration-250 ease-out
                    "
    >
      <a
        href="#"
        className="flex items-center hover:underline text-mineshaft dark:text-sandybrown"
      >
        <img src="logo.webp" className="w-20" alt="TRANDAREDS IF LOGO" />
        <h2 className="text-codgray dark:text-sandybrown font-bold md:font-semibold lg:whitespace-nowrap">
          TRANDAREDS IF
        </h2>
      </a>
      <NavLinks
        className={`
                bg-sandybrown dark:bg-slate
                flex flex-col space-y-2 p-2 pt-4
                absolute right-0 z-30
                transform ${isOpen ? "translate-y-[0%]" : "translate-y-[-100%]"}
                transition-all delay-150 duration-350 ease-in-out
                rounded-bl-lg

                md:transform md:translate-y-[0%]  
                md:flex md:flex-row 
                md:space-x-[1.5%] md:space-y-0
                w-full md:w-auto
                md:items-center 
                md:justify-center
                md:bg-transparent dark:md:bg-transparent
                md:absolute md:left-0 md:right-0 md:mx-auto
                md:h-[80px]
                
            `}
      />
      <div onClick={toggleMenu}>
        <Burger
          className="block absolute right-0 h-20 p-2 md:hidden z-50 dark:bg-slate bg-sandybrown"
          stroke="stroke-codgray dark:stroke-sandybrown"
        />
      </div>
    </nav>
  );
};

export default Navbar;
