type MovieSearchResult = {
  poster_path: string | null,
  adult: boolean,
  overview: string,
  release_date: string,
  genre_ids : number[],
  id: number,
  original_title: string,
  original_language: string,
  title: string,
  backdrop_path: string | null,
  popularity: number,
  vote_count: number,
  video: boolean,
  vote_average: number, 
}

export type MovieSearchResponse = {
  page: number,
  results: MovieSearchResult[],
  total_result: number,
  total_pages: number,
}

export type MovieType = {
  id: number,
  title: string,
  year: number | null,
  poster: string | null,
  backdrop: string | null,
}