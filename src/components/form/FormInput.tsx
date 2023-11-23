import { type FC } from 'react';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
    errors?: FieldError;
    register: UseFormRegisterReturn<string>;
    type: string;
    placeholder: string;
    name: string;
};

export const FormInput: FC<InputProps> = ({
    errors,
    register,
    type,
    placeholder,
    name,
}) => {
    return (
        <div className="relative w-full">
            {errors && (
                <p className="text-gradient text-s14 font-bold md:absolute -top-[40%] left-[40px]">
                    {errors.message}
                </p>
            )}
            <input
                id={name}
                className={`bg-transparent outline-none focus:border-inputFocus placeholder::opacity-50 border-2 py-5 px-10 rounded-full border-white w-full text-white text-medium text-s14 ${errors ? '' : ''
                    }`}
                type={type}
                placeholder={placeholder}
                {...register}
            />
        </div>
    );
};
