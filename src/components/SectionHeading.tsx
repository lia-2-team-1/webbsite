import React from "react";

interface SectionHeadingProps {
  text: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text, className }) => {
  return (
    <h2 className="text-center lg:text-3xl text-2xl font-bold text-sandybrown">
      {text}
    </h2>
  );
};

export default SectionHeading;
