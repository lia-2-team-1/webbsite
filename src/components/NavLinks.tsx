import React from "react";
import LightDark from "./LightDark.tsx";
import Button from "./Button.tsx";
import { Link } from "react-router-dom";
const NavLinks: React.FC<NavLinksProps> = ({ className }) => {
  const links = [
    { path: "/", text: "Hem" },
    { path: "/news", text: "Nyheter" },
    { path: "/matches", text: "Matcher" },
    { path: "/about", text: "Om oss" },
    { path: "/contact", text: "Kontakt" },
  ];

  return (
    <div className={`${className}`}>
      <LightDark className="transition-[color_transform_position_display] delay-150 duration-250 ease-out lg:mr-5 md:hidden" />
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="
          transition-[color] delay-150 duration-250 ease-out
          text-codgray dark:text-sandybrown active:underline md:font-semibold md:text-nowrap hover:border-r-2 dark:border-sandybrown border-codgray 
          md:hover:border-r-0 md:hover:border-b-2 text-center"
        >
          {link.text}
        </Link>
      ))}
      <div className="flex items-center md:absolute md:right-0 md:top-0">
        {/* <Button
          text="Logga In"
          isLink={false}
          className="mx-0 md:mx-3 text-nowrap"
        /> */}
        
        <LightDark className="transition-[color_transform_position_display] delay-150 duration-250 ease-out lg:mr-5 hidden md:block" />
      </div>
    </div>
  );
};

export default NavLinks;
