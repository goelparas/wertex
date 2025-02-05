import clsx from 'clsx';
import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  children: ReactNode;
  error?: string;
  className?: string;
  inputContainerClassName?: string
}

export const FormField = ({ label, children, error, className, inputContainerClassName }: FormFieldProps) => {
  return (
    <div className={clsx(`flex items-center justify-between gap-5 `, className)}>
      <label className="w-1/5  text-xs sm:text-sm font-medium">{label}</label>
      <div className="flex flex-col gap-1 w-4/5">
        <div className={clsx("flex items-center", inputContainerClassName)}>
          {children}
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>
    </div>
  );
};