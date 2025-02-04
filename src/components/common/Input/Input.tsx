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
                autoComplete='shipping home tel-national webauthn'
                {...register(name)}
                className={clsx(
                    'w-full px-3 py-2 bg-muted border border-border',
                    'outline-none focus:ring-1 ',
                    'transition-colors duration-200',
                    {
                        'border-red-500 focus:ring-red-500': error,
                    },
                    className
                )}
                {...rest}
            />
            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export default Input;