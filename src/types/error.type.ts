type ErrorWithCode = Error & {
  code: number
}

export const ErrorWithCode: ErrorWithCode = (code: number) => {}