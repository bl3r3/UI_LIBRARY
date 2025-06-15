import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}
declare const Button: ({ className, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps };
