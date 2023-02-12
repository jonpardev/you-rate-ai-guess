import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { SvgLoading, SvgTrashCan } from "../assets/images/images";
import { Modal } from "../components/Modal";
import Movie from "../components/Movie";
import TextareaAutoGrowing from "../components/TextareaAutoGrowing";
import { BASE_NAME } from "../config/env";
import { postResult } from "../services/movie.service";
import { removeReviewDraft, returnReviewDraft, saveReviewDraft } from "../services/sessionStorage.service";
import { ReviewType } from "../types/movie.type";

const Review = () => {
  const navigate = useNavigate();
  // states
  const [review, setReview] = useState<ReviewType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // get reviewDraft from sessionStorage when it starts
  useEffect(() => {
    const reviewDraft = returnReviewDraft();
    if (reviewDraft === undefined || reviewDraft.movie === undefined) {
      navigate('/error', { state: { message: "If you accessed a review or a result page without searching, this could happen." }});
    }
    setReview(reviewDraft!);
  }, []);

  const handleChangeTextareaAutoGrowing = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if ((event.nativeEvent as InputEvent).inputType === 'insertLineBreak') return;
    setReview(prev => {
      const review = {
        ...prev,
        reviewText: event.target.value,
      } as ReviewType
      saveReviewDraft(review); // To save to sessionStorage.
      return review; // To set as review state.
    });
  }

  const handleSubmitReviewForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (review === undefined) navigate(`${BASE_NAME}/error`);
    postResult(review!)
      .then(response => navigate({
        pathname: "/result",
        search: createSearchParams({
          r: response
        }).toString(),
      }))
      .then(() => removeReviewDraft())
      .catch(() => navigate(`${BASE_NAME}/error`));
  }
  return (
    <>
    {isLoading && (
      <Modal><div className="w-[3em]"><SvgLoading className="stroke-red-700 animate-[spin_2s_linear_infinite]" /></div></Modal>
    )}
    {review != null && (
    <Movie movie={review.movie}>
      <div className="w-full flex flex-col items-center">
        <div className={`w-fit mb-1 px-2 rounded-full sticky top-0 ${review.reviewText.length === 400 ? ' text-white bg-red-700 font-[700]' : ' bg-neutral-200 font[500]'}`}
          >{review.reviewText.length}/400
        </div>
        <form onSubmit={handleSubmitReviewForm} className="w-full p-1 rounded-lg bg-neutral-200">
          <TextareaAutoGrowing className="rounded-lg overflow-clip p-4 bg-white"
            rows={2} maxLength={400} placeholder="How do you think about this movie?" value={review.reviewText} onChange={handleChangeTextareaAutoGrowing} required={true} />
          <div className="flex items-center justify-between mt-1">
            <button className="rounded-lg text-white disabled:text-neutral-600 bg-red-800 hover:bg-red-700 disabled:bg-neutral-500 disabled:hover:bg-neutral-500 py-3 px-8" type="submit" disabled={!(review.reviewText.length > 0)}>Submit</button>
            <button className="rounded-lg hover:bg-neutral-300 text-neutral-700 font-[500] text-[0.9em] px-2 py-1"
              type="reset" onClick={() => setReview(prev => ({...prev, reviewText: ''} as ReviewType))}><SvgTrashCan className="w-[1em] fill-neutral-700 inline-block mb-1 mr-1" />Delete</button>
          </div>
        </form>
      </div>
    </Movie>
    )}
    </>
  )
}

export default Review;