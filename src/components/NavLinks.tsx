import React from "react";
import LightDark from "./LightDark.tsx";
import Button from "./Button.tsx";
import { Link } from "react-router-dom";
const NavLinks: React.FC<NavLinksProps> = ({ className }) => {
  const links = [
    { path: "/", text: "Hem" },
    { path: "/about", text: "Om oss" },
    { path: "/contact", text: "Kontakt" },
    { path: "/matches", text: "Matcher" },
    { path: "/news", text: "Nyheter" },
  ];

  return (
    <div className={`${className}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="
          transition-[color] delay-150 duration-250 ease-out
          text-codgray dark:text-sandybrown active:underline md:font-semibold md:text-nowrap hover:border-r-2 dark:border-sandybrown border-codgray 
          md:hover:border-r-0 md:hover:border-b-2"
        >
          {link.text}
        </Link>
      ))}
      <div className="flex items-center md:absolute md:right-0 md:top-0">
        <Button
          text="Logga In"
          isLink={false}
          className="mx-0 md:mx-3 text-nowrap"
        />
        <LightDark className="transition-[color_transform_position_display] delay-150 duration-250 ease-out" />
      </div>
    </div>
  );
};

export default NavLinks;
