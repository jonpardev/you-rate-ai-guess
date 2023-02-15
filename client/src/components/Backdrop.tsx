import { tmdbImgBaseUrl } from "../config/tmdb";
import { MovieType } from "../types/movie.type";

type Props = {
  movie?: MovieType;
  className?: string;
  children?: React.ReactNode;
}

const Backdrop = ({ movie, children }: Props) => {
  return(
    <>
    {movie?.backdrop != null ? (
    <div className={`bg-no-repeat bg-cover bg-center`} style={{ backgroundImage: `url('${tmdbImgBaseUrl(200)}${movie?.backdrop}')`}}>
      <div className="w-full rounded-lg overflow-clip backdrop-blur bg-black bg-opacity-75">
        {children}
      </div>
    </div>
    ) : (<div className="bg-neutral-600">{children}</div>)}
    </>
  )
}

export default Backdrop;