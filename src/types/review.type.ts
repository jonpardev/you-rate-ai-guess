import { Timestamp } from "firebase-admin/firestore";
import { MovieType } from "./tmdb.type.js";

export type ReviewType = {
  movie: MovieType;
  reviewText: string;
}

export type ReviewDto = {
  review: ReviewType,
  // user?: string, //TODO this should not be able to undefined once auth is completed
  createdAt: Timestamp,
  rawResponse?: string,
  predictedRating?: number,
  revisedReview?: string,
}

export type PredictedType = {
  movie: MovieType,
  predictedRating?: number,
  revisedReview?: string,
}