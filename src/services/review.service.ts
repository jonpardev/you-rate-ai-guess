import { Timestamp } from "firebase-admin/firestore";
import fs from "../helpers/firebase.js";
import openai from "../helpers/openai.js";
import { ReviewDto, ReviewType } from "../types/review.type.js";



const requestPredictedRating = async (input: string) => {
  return await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${input} So, I rate this out of 10:`,
      temperature: 0,
      max_tokens: 5,
      top_p: 0.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["/", "."],
  });
}

export const saveReview = async ({ movieId, review }: ReviewType) => {
  const reviewDto: ReviewDto = {
    movieId: movieId,
    review: review,
    createdAt: Timestamp.fromDate(new Date()),
  }

  try {
    const response = await requestPredictedRating(review);
    reviewDto.rawResponse = response.data.choices[0].text;
    if (reviewDto.rawResponse === undefined) throw new Error("[OPENAI]Response is undefined");
    const predString = reviewDto.rawResponse.replaceAll("\r", "").replaceAll("\n", "").trim();
    reviewDto.predicted = Number.parseInt(predString);
    return reviewDto.predicted;
  } catch(error) {
    if (error instanceof Error) throw error;
    throw new Error("Unexpected Error from saveReview()");
  } finally {
    fs.collection('reviews').add(reviewDto);
  }
}