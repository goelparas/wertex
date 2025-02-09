"use client";
import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  children?: React.ReactElement;
  loading?: boolean;
}

const Button = ({ title, className, loading, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "relative flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-custom-gradient font-bold text-xs sm:text-sm md:text-[1rem] disabled:opacity-50",
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
