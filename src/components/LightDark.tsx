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
        className={`h-14 w-14 md:h-16 md:w-16 lg:w-20 lg:h-20 p-2 dark:bg-mineshaft bg-sandybrown max-h-20 ${className}`}
        onClick={() => darkModeHandler()}
      >
        {dark && <Sun className="w-full" stroke="stroke-sandybrown" />}
        {!dark && (
          <Moon className="w-full" stroke="stroke-black" fill="fill-black" />
        )}
      </button>
    </>
  );
}
