import { ChangeEvent, FormEvent, MouseEvent, useEffect, useMemo, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { SvgAddSquare, SvgLoading, SvgTrashCan } from "../assets/images/images";
import Bubble from "../components/Bubble";
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
      navigate('/error', { state: { message: 'If you accessed a review or a result page without searching, this could happen.' }});
    }
    setReview(reviewDraft!);
  }, []);

  const memoDraftsCharacters = useMemo(() => {
    const reviewText = review?.drafts.join('') || ''; // To make users can recognize the characters intuitively, join without a space.
    return reviewText.length;
  }, [review])

  const handleChangeDrafts = (event: ChangeEvent<HTMLTextAreaElement>, index: number) => {
    if ((event.nativeEvent as InputEvent).inputType === 'insertLineBreak') return; // prevent line break
    setReview(prev => {
      if (prev === undefined) return;
      const drafts = [...prev.drafts];
      drafts[index] = event.target.value.replaceAll('\n', '').replaceAll('\r', ''); // remove line break
      const review = {
        ...prev,
        drafts: drafts,
      }
      saveReviewDraft(review);
      return review;
    });
  }

  const handleClickAddInput = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setReview(prev => {
      if (prev === undefined) return;
      const drafts = [...prev.drafts];
      drafts.push('');
      const review = {
        ...prev,
        drafts: drafts,
      }
      saveReviewDraft(review);
      return review;
    });
  }

  const handleClickRemoveInput = (event: MouseEvent<HTMLButtonElement>, index: number) => {
    event.preventDefault();
    setReview(prev => {
      if (prev === undefined) return;
      const drafts = [...prev.drafts];
      drafts.splice(index, 1);
      const review = {
        ...prev,
        drafts: drafts,
      }
      saveReviewDraft(review);
      return review;
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

  return (<>
    <Bubble className="bg-slate-200 p-4">
      <h1 className="text-2xl font-[500]">How to use</h1>
      <ul className="list-disc ml-5">
        <li>Just list how you felt watching the movie like making a draft.</li>
        <li>What about story? What about CG?</li>
        <li>The total number of characters across all inputs cannot be over 400.</li>
      </ul>
    </Bubble>
    {isLoading && (
      <Modal><div className="w-[3em]"><SvgLoading className="stroke-red-700 animate-[spin_2s_linear_infinite]" /></div></Modal>
    )}
    {review != null && (
    <Movie movie={review.movie}>
      <div className="w-full flex flex-col items-center">
        <div className={`w-fit mb-1 px-2 rounded-full sticky top-1 text-xl ${memoDraftsCharacters > 400 ? ' text-white bg-red-700 font-[700]' : ' bg-neutral-200 font[500]'}`}
          >{memoDraftsCharacters}/400
        </div>
        <form onSubmit={handleSubmitReviewForm} className="w-full p-2 rounded-lg bg-neutral-200">
          {review.drafts.map((text, index) => (
          <div key={index} className="flex gap-1 mb-1 last:mb-0">
            <button type="button" onClick={(event) => handleClickRemoveInput(event, index)}
              className="px-3 py-2 hover:bg-neutral-300 rounded-lg disabled:opacity-50" disabled={review.drafts.length <= 1}>
              <SvgTrashCan className="w-[1em] fill-neutral-700 inline-block mb-1" />
            </button>
            <TextareaAutoGrowing className="rounded-lg overflow-clip p-4 bg-white w-full" rows={1} placeholder="" value={text} onChange={(event) => handleChangeDrafts(event, index)} required={true} />
          </div>
          ))}
          <div className="flex items-center justify-between mt-2">
            <button className="rounded-lg hover:bg-neutral-300 text-neutral-700 font-[500] text-[1em] px-2 py-1"
              type="reset" onClick={handleClickAddInput}><SvgAddSquare className="w-[1em] stroke-neutral-700 inline-block mb-1 mr-1" />Add</button>
            <button className="rounded-lg text-white disabled:text-neutral-600 bg-red-800 hover:bg-red-700 disabled:bg-neutral-500 disabled:hover:bg-neutral-500 py-3 px-8" type="submit" disabled={memoDraftsCharacters <= 0 || memoDraftsCharacters > 400}>Submit</button>
          </div>
        </form>
      </div>
    </Movie>
    )}
  </>)
}

export default Review;