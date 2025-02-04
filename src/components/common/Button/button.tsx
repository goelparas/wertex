"use client"
import clsx from "clsx";
import React from "react";

interface ButtonProps<T = void> extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  title: string;
  className?: string;
}

const Button = <T,>({ title, className }: ButtonProps<T>) => {
    const onClick = ()=>{
    }
  return (
    <button onClick={onClick} className={clsx(className)} >
      {title}
    </button>
  );
};

export default Button;
