import React from 'react'
import type { IButton } from './types';
import { twMerge } from 'tailwind-merge';

const Button: React.FC<IButton> = ({
  text,
  onClick = () => { },
  disabled = false,
  className = '',
}) => {
  return (
    <button
      className={twMerge('px-3 py-2.5 border border-brand-500 text-sm rounded cursor-pointer bg-brand-500 text-white hover:bg-brand-700 hover:border-brand-700 transition-all duration-300 ease-in-out', className)}
      onClick={onClick}
      disabled={disabled}
    >{text}</button>
  )
}

export default Button