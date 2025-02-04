"use client"
import clsx from "clsx";
import React from "react";

interface ButtonProps<T = void> extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  title: string;
  className?: string;
  children?: React.ReactElement
}

const Button = <T,>({ title, className }: ButtonProps<T>) => {
    const onClick = ()=>{
    }
  return (
    <button onClick={onClick} className={clsx( "bg-custom-gradient font-bold",className)} >
      {title}
       
    </button>
  );
};

export default Button;
