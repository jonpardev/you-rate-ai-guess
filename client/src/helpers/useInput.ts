import { ChangeEvent, useState } from "react"

export const useInput = (initialForm: string) => {
  const [value, setValue] = useState(initialForm);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  }

  return [value, setValue, handleChange] as const;
}