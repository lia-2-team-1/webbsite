import React from "react";
import Button from "./Button";

export const Hero = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-center bg-cover bg-blend-overlay bg-fixed"
        style={{ backgroundImage: "url('/tif-hero.jpg')" }}
      >
        <h1>Hej</h1>
      </div>
    </div>
  );
};

export default Hero;
