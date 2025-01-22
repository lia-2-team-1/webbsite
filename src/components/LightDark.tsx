import React from "react";
import Sun from "./Sun.tsx";
import Moon from "./Moon.tsx";
export default function LightDark() {

    const [dark, setDark] = React.useState(false);
    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    return (
        <>
            <button className="w-20 h-20 p-2 dark:bg-mineshaft bg-brandy" onClick={()=> darkModeHandler()}>
                {
                    dark && <Sun className="w-full" stroke="stroke-sandybrown"/>
                }
                {
                    !dark && <Moon className="w-full" stroke="stroke-black" fill="fill-black" /> 
                }
            </button>
        </>
    )
}


