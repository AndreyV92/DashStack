import React, { type SelectHTMLAttributes } from 'react'

type SelectPrors = SelectHTMLAttributes<HTMLSelectElement> &{
  
  classNames: string[]
}

const Select = ( {classNames = [''], ...props}:SelectPrors  ) => {
  return (
    <select className={`baseStyleSelect ${classNames.join(' ')}`} {...props}>
      
    </select>
  )
}

export default Select
