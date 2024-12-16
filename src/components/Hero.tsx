import React from "react";
import Button from "./Button";

export const Hero = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div
        className="overflow-x-hidden min-h-screen bg-center bg-cover bg-no-repeat 
        lg:bg-[url('/tif-hero.jpg')]
        bg-[url('/hero-mobile.jpg')]
        // " 
        // style={{ backgroundImage: "url('/tif-hero.jpg')" }}
      >
        <div className="bg-black p-10 bg-opacity-70 flex flex-col lg:left-80 absolute lg:-bottom-14 items-center">
            <Button onClick={''} linkTo={'#'} text={'DONERA'}></Button>
            <Button onClick={''} linkTo={'#'} text={'GÅ MED'}></Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
