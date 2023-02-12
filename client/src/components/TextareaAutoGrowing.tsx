import { ChangeEvent } from "react";

type Props = {
  className?: string,
  placeholder?: string,
  value?: string,
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void,
  required?: boolean,
  rows?: number,
  maxLength?: number,
}

const TextareaAutoGrowing = ({ className, placeholder, value, onChange, required, rows, maxLength }: Props) => {
  return(
  <div className={`outline-none grid grid-cols-[100%]${className ? ` ${className}` : ''}`}>
    <textarea className="align-top resize-none overflow-hidden outline-none" style={{gridArea: '1 / 1 / 2 / 2'}}
      rows={rows} placeholder={placeholder} value={value} onChange={onChange} required={required} maxLength={maxLength} />
    <div className="align-top break-words whitespace-pre-wrap invisible" style={{gridArea: '1 / 1 / 2 / 2'}} aria-hidden="true">{`${value} `}</div>
  </div>
  )
}

export default TextareaAutoGrowing;