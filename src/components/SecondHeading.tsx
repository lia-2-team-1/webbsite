import React from 'react';

interface SecondHeadingProps {
  text: string;  
  className?: string;        
}

const SecondHeading: React.FC<SecondHeadingProps> = ({ text, className }) => {
  return (
    <h2 className={`text-center lg:text-2xl text-xl font-bold text-sandybrown ${className ? className : ''}`}>
      {text}
    </h2>
  );
};

export default SecondHeading;
