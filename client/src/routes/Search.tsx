import { FormEvent, useEffect, useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { emojiWearyCat, SvgSearch } from "../assets/images/images";
import Bubble from "../components/Bubble";
import TmdbAttribution from "../components/TmdbAttribution";
import { BASE_NAME } from "../config/env";
import { useInput } from "../helpers/useInput";
import { getSearch } from "../services/movie.service";
import { saveReviewDraft } from "../services/sessionStorage.service";
import { MovieType, ReviewType } from "../types/movie.type";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [query, setQuery, queryChange] = useInput("");
  const [movies, setMovies] = useState<MovieType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let isTriggered = false;
  useEffect(()=> {
    if (!isTriggered) {
      isTriggered = true;
      // Get query from search params
      const query = searchParams.get('q');
      if(query === null) return;
      if(query.length === 0) return;
      setQuery(query);
      // Get search result from TMDB API
      setIsLoading(true);
      getSearch(query)
        .then((response) => setMovies(response.data))
        .finally(() => setIsLoading(false))
        .catch(() => navigate(`${BASE_NAME}/error`));
    }
  }, [searchParams.get('q')]);

  const handleSubmitSearchForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate({
      pathname: "/search",
      search: createSearchParams({
        q: query
      }).toString(),
    });
  }

  const handleClickMovie = (movie: MovieType) => {
    const review: ReviewType = {
      movie: movie,
      reviewText: '',
    }
    saveReviewDraft(review);
    navigate(`${BASE_NAME}/review`);
  }

  return (
    <>
    <Bubble className="flex items-center text-white bg-red-700 hover:bg-red-800">
      <SvgSearch className="fill-white w-[1.5em] ml-4" />
      <form className="w-full flex flex-col" onSubmit={handleSubmitSearchForm}>
        <input placeholder="Find a movie with its title" name="q" value={query} onChange={queryChange} minLength={1} required
            className={`w-full outline-none ph:text-lg p-4 text-white placeholder:text-white focus:placeholder:text-white/[0] bg-red-700/[0]`} />
      </form>
    </Bubble>
    {isLoading && (
      <Bubble className="w-full p-8 bg-neutral-200 flex flex-col gap-4">
        <div className="bg-neutral-500 p-2 animate-pulse rounded-lg"><br /></div>
        <div className="bg-neutral-500 p-2 animate-pulse rounded-lg"><br /></div>
        <div className="bg-neutral-500 p-2 animate-pulse rounded-lg"><br /></div>
      </Bubble> 
    )}
    {(isLoading === false && movies) && (
    <Bubble className="text-black bg-neutral-200 py-4">
    {(movies.length === 0) ? (
      <div className="w-full text-center text-[1.25em] font-[500]">
        <img src={emojiWearyCat.src} alt={emojiWearyCat.alt} className="w-[5em] inline-block" />
        <br />
        <span>We could not find any movie with the title.</span>
      </div>
    ) : (<>
    {movies.map((movie, index) => (
      <div key={index} onClick={() => handleClickMovie(movie)}
        className="hover:bg-neutral-300 px-8 py-4 cursor-pointer">
        <div className="font-semibold">{movie.title}</div>
        <div className="text-[0.75em]">{movie.year}</div>
      </div>
    ))}
    </>)}
    </Bubble>
    )}
    <TmdbAttribution />
    </>
  )
}

export default Search;