"use client"
import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  title: string;
  className?: string;
  children?: React.ReactElement
}

const Button =({ title, className }: ButtonProps) => {
    const onClick = ()=>{
    }
  return (
    <button onClick={onClick} className={clsx( "bg-custom-gradient font-bold text-xs sm:text-sm md:text-[1rem]",className)} >
      {title}
       
    </button>
  );
};

export default Button;
