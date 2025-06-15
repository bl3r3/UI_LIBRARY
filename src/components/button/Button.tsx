import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = ({ className = "", ...props }: ButtonProps) => {
  return <button className={className} {...props} />;
};
