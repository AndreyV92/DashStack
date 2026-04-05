import type { InputHTMLAttributes } from "react";

type InputPrors = InputHTMLAttributes<HTMLInputElement> &{
  classNames?: string[]
}

const Input = ( { classNames = [''], ...props}: InputPrors ) => {
  return (
    <input className={`baseStyleInput ${classNames.join(' ')}`} {...props}>
      
    </input>
  )
}

export default Input
