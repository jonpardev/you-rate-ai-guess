import { MouseEvent, useState } from "react"

export const useSignInWith = (initialValue: boolean, callback: Function) => {
  const [value, setValue] = useState(initialValue);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setValue(true);
    callback();
  }

  return [value, setValue, handleClick] as const;
}