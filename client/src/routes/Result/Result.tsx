import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SvgLoading } from "../../assets/images/images";
import { Modal } from "../../components/Modal";
import Movie from "../../components/Movie";
import { BASE_NAME } from "../../config/env";
import { getResult } from "../../services/movie.service";
import { ResultType } from "../../types/movie.type";
import AnnouncePredicted from "./AnnouncePredicted";
import Survey from "./Survey";

const Result = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const navigate = useNavigate();

  const [resultId, setResultId] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ResultType>();

  useEffect(() => window.scrollTo(0, 0), []);

  let isTriggered = false;
  useEffect(()=> {
    if (!isTriggered) {
      isTriggered = true;
      // Get query from search params
      const queryResultId = searchParams.get('r');
      if(queryResultId === null) return navigate(`${BASE_NAME}/error`);
      if(queryResultId.length === 0) return navigate(`${BASE_NAME}/error`);
      setResultId(queryResultId);
      // Get search result from backend
      setIsLoading(true);
      getResult(queryResultId)
        .then(response => setResult(response.data))
        .finally(() => setIsLoading(false))
        .catch(() => navigate(`${BASE_NAME}/error`));
    }
  }, [searchParams.get('r')]);

  return (<>
    {isLoading && (
        <Modal><div className="w-[3em]"><SvgLoading className="stroke-red-700 animate-[spin_2s_linear_infinite]" /></div></Modal>
    )}
    {(result != null && !isLoading) && (<>
    <AnnouncePredicted predictedRating={result.predictedRating} />
    {/*TODO <Survey predictedRating={result.predictedRating} /> */}
    <Movie movie={result.movie}>
      <div className="flex flex-col items-center">
        <div className="text-3xl text-amber-400">
          {[...Array(Math.floor(result.predictedRating/2))].map((number, index)=> (<span key={index}>★</span>))}
          {result.predictedRating % 2 > 0 && <span>☆</span>}
        </div>
        <div className="w-full text-lg ph:text-xl text-white font-[300] p-4 ph:p-8 font-Recursive">{`${result.revisedReview}`}</div>
      </div>
    </Movie>
    </>)}  
  </>)
}

export default Result;