"use client"
import React from "react";

interface ButtonProps<T = void> {
  title: string;
  className?: string;
}

const Button = <T,>({ title, className }: ButtonProps<T>) => {
    const onClick = ()=>{

    }
  return (
    <button onClick={onClick} className={className} >
      {title}
    </button>
  );
};

export default Button;
