import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bubble from "./Bubble";
import { tmdbImgBaseUrl } from "../config/tmdb";
import { MovieType } from "../types/movie.type";
import Backdrop from "./Backdrop";
import TmdbAttribution from "./TmdbAttribution";

type Props = {
  movie?: MovieType;
  children?: React.ReactNode;
}

const Movie = ( { movie, children }: Props) => {
  const navigate = useNavigate();
  
  return (
    <>
      <Bubble className="h-fit">
        <Backdrop movie={movie}>
          <div className="flex flex-col gap-2 p-2">
            {movie?.poster != null && (
            <div className="w-full flex justify-center">
              <div className="max-w-[200px] pt-6"><img src={`${tmdbImgBaseUrl(200)}${movie?.poster}`} className="rounded-lg" /></div>
            </div>
            )}
            <div className="w-full text-white flex flex-col items-center p-4">
              <div className="w-full break-words text-2xl ph:text-3xl leading-none text-center font-[500] uppercase" style={{fontStretch: '62.5%'}}>{movie?.title}</div>
              <div>{movie?.year}</div>
            </div>
            {children}
          </div>
        </Backdrop>
      </Bubble>
      <TmdbAttribution />
    </>
  )
}

export default Movie;