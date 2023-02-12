import { MovieType, ReviewType } from "../types/movie.type";

export const saveReviewDraft = (review: ReviewType) => {
  sessionStorage.setItem('reviewDraft', JSON.stringify(review));
}

export const returnReviewDraft = () => {
  const reviewDraftString = sessionStorage.getItem('reviewDraft');
  if (reviewDraftString === null) return;
  const reviewDraft: ReviewType = JSON.parse(reviewDraftString);
  return reviewDraft;
}

export const removeReviewDraft = () => sessionStorage.removeItem('reviewDraft');