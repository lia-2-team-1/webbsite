import React from "react";

interface PageHeadingProps {
  text: string;
}
const PageHeading: React.FC<PageHeadingProps> = ({ text }) => {
  return (
    <h1
      className="text-center text-4xl lg:text-6xl text-mineshaft dark:text-sandybrown font-bold 

          px-1.5 lg:px-5"
    >
      {text}
    </h1>
  );
};

export default PageHeading;
