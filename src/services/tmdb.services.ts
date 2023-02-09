import tmdb from "../helpers/tmdb.js";
import { MovieType, MovieSearchResponse } from "../types/tmdb.type";

const getSearchResult = async (query: string) => {
  try {
    return await tmdb.get<MovieSearchResponse>('/search/movie', {
      params: {
        'query': query
      }
    });
  } catch(error) {
    if (error instanceof Error) throw error;
    throw new Error("Unexpected Error from getSearchMovie()");
  }
}

export const returnMovie = async (query: string): Promise<MovieType[] | Error> => {
  try {
    const response = await getSearchResult(query);
    return response.data.results.map((result) => ({
      id: result.id,
      title: result.title,
      year: Number.parseInt(result.release_date?.substring(0, 4)) ?? null,
      poster: result.poster_path,
      backdrop: result.backdrop_path,
    } satisfies MovieType));
  }
  catch(error) {
    if (error instanceof Error) throw error;
    throw new Error("Unexpected Error from returnMovieTitleYears()");
  }
}