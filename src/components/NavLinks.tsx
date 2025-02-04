import React from "react";
import LightDark from "./LightDark.tsx";
import Button from "./Button.tsx";
const NavLinks = ({ className }) => {
  const links = [
    { href: "#", text: "Hem" },
    { href: "#", text: "Om oss" },
    { href: "#", text: "Schema" },
    { href: "#", text: "Nyheter" },
    { href: "#", text: "Tider" },
    { href: "#", text: "Kontakt" },
  ];

  return (
    <div className={`${className}`}>

  
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="
          transition-[color] delay-150 duration-250 ease-out
          text-codgray dark:text-sandybrown active:underline md:font-semibold md:text-nowrap hover:border-r-2 dark:border-sandybrown border-codgray 
          md:hover:border-r-0 md:hover:border-b-2"
        >
          {link.text}
        </a>
      ))}
      <div className="flex items-center md:absolute md:right-0 md:top-0">
      <Button text="Logga In" isLink={false} className="mx-0 md:mx-3 text-nowrap" />
      <LightDark className="transition-[color_transform_position_display] delay-150 duration-250 ease-out"/>
      </div>
    </div>
  );
};

export default NavLinks;
