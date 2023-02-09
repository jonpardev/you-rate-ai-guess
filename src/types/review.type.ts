import { Timestamp } from "firebase-admin/firestore";

export type ReviewType = {
  movieId: number;
  review: string;
}

export type ReviewDto = {
  movieId: number,
  review: string,
  createdAt: Timestamp,
  rawResponse?: string,
  predicted?: number,
}