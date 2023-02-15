import { FormEvent, useEffect, useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { emojiWearyCat, SvgSearch } from "../assets/images/images";
import Bubble from "../components/Bubble";
import TmdbAttribution from "../components/TmdbAttribution";
import { BASE_NAME } from "../config/env";
import { tmdbImgBaseUrl } from "../config/tmdb";
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
      drafts: [''],
    }
    saveReviewDraft(review);
    navigate(`${BASE_NAME}/review`);
  }

  return (
    <>
    <Bubble className="flex items-center text-white bg-red-700 hover:bg-red-800">
      <SvgSearch className="fill-white w-[1.5em] ml-4" />
      <form className="w-full flex flex-col" onSubmit={handleSubmitSearchForm}>
        <input placeholder="Find a movie with a title" name="q" value={query} onChange={queryChange} minLength={1} required type="search"
            className={`w-full outline-none ph:text-lg p-4 text-white placeholder:text-white focus:placeholder:text-white/[0] bg-red-700/[0]`} />
      </form>
    </Bubble>
    {/* Loading Search Result */}
    {isLoading && (
    <Bubble className="w-full p-4 bg-neutral-200 flex gap-2">
      <div className="w-16 h-24 shrink-0 rounded-lg bg-neutral-400 animate-pulse"><br /></div>
      <div>
        <div className="w-40 h-[1.5em] rounded-lg bg-neutral-400 animate-pulse"><br /></div>
        <div className="w-10 h-[1.2em] rounded-lg bg-neutral-400 animate-pulse mt-1"><br /></div>
      </div>
    </Bubble> 
    )}
    {/* Search Result */}
    {(isLoading === false && movies) && (
    <Bubble className="text-black bg-neutral-200 py-8">
    {(movies.length === 0) ? (
      <div className="w-full text-center text-[1.25em] font-[500]">
        <img src={emojiWearyCat.src} alt={emojiWearyCat.alt} className="w-[5em] inline-block" />
        <br />
        <span className="text-sm ph:text-lg">We could not find any movie with the title</span>
      </div>
    ) : (<>
    {movies.map((movie, index) => (
      <div key={index} onClick={() => handleClickMovie(movie)}
        className="hover:bg-neutral-300 p-4 cursor-pointer flex gap-2">
        <div className="w-16 shrink-0 rounded-lg">
          {movie.poster && <img src={`${tmdbImgBaseUrl(200)}${movie.poster}`} className="rounded-lg" loading="lazy" />}
        </div>
        <div>
          <div className="font-semibold">{movie.title}</div>
          <div className="text-[0.75em]">{movie.year}</div>
        </div>
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