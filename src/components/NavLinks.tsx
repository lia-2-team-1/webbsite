import React from "react";

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
    <div className={className}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-codgray dark:text-sandybrown active:underline font-semibold"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
