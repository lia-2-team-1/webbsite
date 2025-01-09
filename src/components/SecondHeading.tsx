import React from 'react';

interface SecondHeadingProps {
  children: React.ReactNode;  
  className?: string;        
}

const SecondHeading: React.FC<SecondHeadingProps> = ({ children, className }) => {
  return (
    <h2 className={`text-center lg:text-2xl text-xl font-bold text-sandybrown ${className ? className : ''}`}>
      {children}
    </h2>
  );
};

export default SecondHeading;
