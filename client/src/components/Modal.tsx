import { ReactNode, MouseEvent } from "react"

type Props = {
  children: ReactNode
}

export const Modal = ({ children }: Props) => {
  const handleModalBackground = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation(); // to prevent mouse events from the background of loading modal
  }

  return(
    <div onMouseEnter={handleModalBackground}
      className="fixed top-0 left-0 bottom-0 right-0 bg-white/[.85] z-[9999] flex flex-col justify-center items-center select-none p-4">
      {children}
    </div>
  );
}