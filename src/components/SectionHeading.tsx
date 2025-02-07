import React from "react";

interface SectionHeadingProps {
  text: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => {
  return (
    <h2 className="text-center pt-5 pb-5 lg:text-4xl md:text-3xl text-2xl font-bold text-codgray dark:text-sandybrown">
      {text}
    </h2>
  );
};

export default SectionHeading;
