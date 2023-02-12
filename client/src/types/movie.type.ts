export type MovieType = {
  id: number,
  title: string,
  year: number | null,
  poster: string | null,
  backdrop: string | null,
}

export type ReviewType = {
  movie: MovieType,
  reviewText: string,
}

export type ResultType = {
  movie: MovieType,
  predictedRating: number,
  revisedReview: string,
}

export type SurveyType = {
  isCorrect: boolean | null,
  realRating: number,
  isSubmitted: boolean,
}