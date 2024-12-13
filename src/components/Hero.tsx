import React from "react";
import Button from "./Button";

export const Hero = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div
        className="min-h-screen bg-center bg-cover bg-blend-overlay overflow-x-scroll" 
        style={{ backgroundImage: "url('/tif-hero-small.jpg')" }}
      >
        <div className="bg-black p-10 bg-opacity-70 flex flex-col absolute left-20 bottom-0 items-center pt-20">
            <Button onClick={''} linkTo={'#'} text={'STÖTTA KLUBBEN'}></Button>
            <Button onClick={''} linkTo={'#'} text={'BLI MEDLEM'}></Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
