import React from "react";
import Button from "./Button";

export const Hero = () => {
  return (
    <div className="w-full">
      <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat lg:bg-[url('/tif-hero.jpg')] bg-[url('/tif-hero-mobile.jpg')]">
        <div className="bg-black bg-opacity-55 w-3/4 py-5 flex mx-auto lg:w-[35%] lg:text-center flex-col">
          <h1 className="text-center text-4xl lg:text-6xl text-sandybrown font-bold 
          px-1.5 lg:px-5" > { /* pl-3 pl-10 betyder padding-left. Den blir ojämn om man skalar ner sidan då. Testa att halvera på båda sidor med px. */} 
            Trandareds IF
          </h1>
      
          <p className="text-sandybrown text-center font-medium">
            Trandareds IF - Tillsammans för fotboll, gemenskap och glädje
          </p>
        </div>
        <div className="
            w-[80%] md:w-[40%] lg:w-[20%]
            bg-black bg-opacity-70
            p-10 

            flex flex-col
            lg:items-center
            
            absolute 
            lg:left-80 -bottom-14 left-10 right-10
        "> {/* Jag fixade överflödiga knappar med en Fetch och Pull, så din branch är uppdaterad med main! */}
          <Button onClick={""} linkTo={"#"} text={"STÖTTA OSS"}></Button>
          <Button isLink={true} linkTo="#" text="BLI MEDLEM"></Button> {/* Syntax fel här, ändra första knappen såsom jag gjort här :) */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
