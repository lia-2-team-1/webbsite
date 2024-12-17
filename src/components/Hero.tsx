import React from "react";
import Button from "./Button";

export const Hero = () => {
  return (
    <div className="w-full">
 <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat lg:bg-[url('/tif-hero.jpg')] bg-[url('/hero-mobile.jpg')]">
  <div className="bg-black bg-opacity-55 w-3/4 py-5 flex mx-auto lg:w-[50%] lg:text-center">
    <h1 className="text-3xl text-sandybrown font-bold text-left pl-3 lg:pl-10">
      Trandareds IF - Tillsammans för fotboll, gemenskap och glädje
    </h1>
  </div>
        <div className="bg-black p-10 bg-opacity-70 flex flex-col lg:left-80 md:w-[40%] absolute -bottom-14 lg:items-center w-[80%] left-10 right-10 lg:w-[20%]">
          <Button onClick={""} linkTo={"#"} text={"STÖTTA OSS"}></Button>
          <Button onClick={""} linkTo={"#"} text={"BLI MEDLEM"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
