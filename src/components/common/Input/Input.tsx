import React from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import clsx from 'clsx';

interface InputProps<TFieldValues extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
    name: Path<TFieldValues>;
    register: UseFormRegister<TFieldValues>;
    error?: string;
}

const Input = <TFieldValues extends FieldValues = FieldValues>({
    name,
    register,
    error,
    className,
    ...rest
}: InputProps<TFieldValues>) => {

    return (
        <div className="w-full">
            <input
                {...register(name)}
                className={clsx(
                    'w-full px-2 py-3 h-full autofill:bg-foreground sm:p-3 bg-foreground text-primary text-xs sm:text-sm  border border-border placeholder:text-primary placeholder:text-xs sm:placeholder:text-sm',
                    'outline-none focus:ring-1  ring-border fill-foreground',
                    'transition-colors duration-200',
                    {
                        'border-red-500 focus:ring-red-500': error,
                    },
                    className
                )}
                {...rest}
            />
            {error && (
                <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
        </div>
    );
};

export default Input;