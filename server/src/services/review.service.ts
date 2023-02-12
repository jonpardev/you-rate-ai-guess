import crypto from 'crypto';
import { Timestamp } from "firebase-admin/firestore";
import { OPENAI_PROMPT, OPENAI_REQUEST } from "../config/env.js";
import fs, { converter } from "../helpers/firebase.js";
import openai from "../helpers/openai.js";
import { PredictedType, ReviewDto, ReviewType } from "../types/review.type.js";

/**
 * Conduct createCompletion through Open AI's API.
 */
const requestPredicted = async (review: ReviewType) => {
  const requestJSON = JSON.parse(OPENAI_REQUEST);
  const prompt = OPENAI_PROMPT.replace("[MOVIE]", review.movie.title) + ` ${review.reviewText}`
  const requestConfig = {
    ...requestJSON,
    prompt: prompt,
  }
  return await openai.createCompletion(requestConfig);
}

/**
 * Conduct add document to Firestore.
 */
export const saveReview = async (review: ReviewType) => {
  const reviewDto: ReviewDto = {
    review: review,
    createdAt: Timestamp.fromDate(new Date()),
  }
  const uuid = crypto.randomUUID().replaceAll('-', '');

  try {
    const response = await requestPredicted(review);
    reviewDto.rawResponse = response.data.choices[0].text?.replaceAll("\r", "").replaceAll("\n", "").trim();
    if (reviewDto.rawResponse !== undefined) {
      const ratingString = reviewDto.rawResponse.substring(1, 2).replaceAll("/", "").trim();
      const reviewString = reviewDto.rawResponse.substring(6).trim();
      reviewDto.predictedRating = Number.parseInt(ratingString);
      reviewDto.revisedReview = reviewString;
    }
  } catch(error) {
    if (error instanceof Error) throw error;
    throw new Error("Unexpected Error from saveReview()");
  } finally {
    const reviewRef = fs.collection('reviews').withConverter(converter<ReviewDto>()).doc(uuid);
    await reviewRef.set(reviewDto);
    return uuid;
  }
}

export const readReview = async (pageId: string) => {
  const reviewRef = fs.collection('reviews').withConverter(converter<ReviewDto>()).doc(pageId);
  const doc = await reviewRef.get();
  if (!doc.exists) return {} as PredictedType;
  const data = doc.data();
  if (data === undefined) return {} as PredictedType;
  return {
    movie: data.review.movie,
    predictedRating: data.predictedRating,
    revisedReview: data.revisedReview,
  } satisfies PredictedType;
}