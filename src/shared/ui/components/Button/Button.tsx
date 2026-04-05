import React, { type ButtonHTMLAttributes } from 'react'
//   size?: "sm" | "md" | "lg";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  classNames: string[];
  size?: string;
}

const Button = ( {children, classNames = [''], size = 'md', ...props}: ButtonProps ) => {
  return (
    <button className={`baseStyleBtn ${classNames.join(' ')}`} {...props}>
      {children}
    </button>
  )
}

export default Button
