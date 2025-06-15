import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className = "", ...props }: InputProps) => {
  return <input className={className} {...props} />;
};
