import { MouseEvent, ReactNode } from "react";

type Props = {
  className?: string,
  children?: ReactNode,
  disabled?: boolean,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
}

const Button = ({ className, children, disabled, onClick }: Props) => {
  return (
    <button className={`rounded-full bg-red-700 disabled:bg-neutral-400 text-white disabled:text-neutral-500 px-4 py-1${className ? ` ${className}` : ''}`}
      disabled={disabled} onClick={onClick} type="button"
      >{children}</button>
  )
}

export default Button;