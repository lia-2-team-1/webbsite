import React from "react";
import Button from "./Button";

export const Hero = () => {
  return (
    <div className="w-full">
      <div
        className="min-h-screen bg-cover bg-no-repeat lg:bg-[url('/tif-hero.jpg')] bg-[url('/hero-mobile.jpg')]"
      >
        <div className="bg-black p-10 bg-opacity-70 flex flex-col lg:left-80 md:w-[40%] absolute -bottom-14 lg:items-center w-[80%] left-10 right-10 lg:w-[20%]">
          <Button onClick={""} linkTo={"#"} text={"STÖTTA OSS"}></Button>
          <Button onClick={""} linkTo={"#"} text={"BLI MEDLEM"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
