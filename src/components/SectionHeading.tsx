import React from "react";

interface SectionHeadingProps {
  text: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text, className }) => {
  return (
    <h2
      className={`text-center lg:text-2xl text-xl font-bold text-sandybrown ${
        className ? className : ""
      }`}
    >
      {text}
    </h2>
  );
};

export default SectionHeading;
