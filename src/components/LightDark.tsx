import React from "react";
import Sun from "./Sun.tsx";
import Moon from "./Moon.tsx";
interface LightDarkProps {
  className: string;
}
export default function LightDark({ className }) {
  const [dark, setDark] = React.useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <button
        className={`h-14 w-14 md:h-16 md:w-16 lg:w-20 lg:h-20 p-2 
                  dark:bg-transparent bg-transparent 
                  text-2xl md:text-3xl lg:text-4xl
                  transition-all duration-250 ease-out
                  hover:scale-110 ${className}`}
        onClick={() => darkModeHandler()}
      >
        {dark ? "☀️" : "🌕"}
      </button>
    </>
  );
}
