import { MouseEvent, ReactNode } from "react"

type Props = {
  className?: string,
  children?: ReactNode,
  onClick?: (event: MouseEvent<HTMLDivElement>) => void,
}

const Bubble = ({ className, children, onClick }: Props) => {
  return (
    <div onClick={onClick}
      className={`w-full rounded-lg overflow-clip${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}

export default Bubble;