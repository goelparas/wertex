import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`bg-[#242424] mt-12 p-12 ${className || ''}`}>
      {children}
    </div>
  );
};

export default Container; 