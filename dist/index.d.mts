import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}
declare const Button: ({ className, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
declare const Input: ({ className, ...props }: InputProps) => react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps, Input, type InputProps };
