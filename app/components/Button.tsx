import React from 'react'

interface ButtonProps {
    label: string;
    isSmall?: boolean;
    isSecondary?: boolean;
    action?: () => void
}
const Button:React.FC<ButtonProps> = ({
  label,
  isSmall,
  isSecondary,
  action
}) => {
  return (
    <button className={`

     text-lg  
     rounded px-4 py-2
     ${isSmall ? 'max-w-[150px] text-xs font-regular': ''}
     ${isSecondary ? 'bg-neutral-300 text-black border border-gray-500':' bg-blue-500 text-white' }`}
     onClick={action}
     >{label}</button>
  )
}

export default Button
