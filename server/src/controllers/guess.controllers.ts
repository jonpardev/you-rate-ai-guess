import { Request, Response } from 'express';
import { readReview, saveReview } from '../services/review.service.js';
import { ReviewType } from '../types/review.type.js';

type resultQuery = {
  id: string
}

export const postReview = (req: Request, res: Response) => {
  const review: ReviewType = req.body;
  saveReview(review)
    .then(pageId => res.status(200).send(pageId))
    .catch((err: Error) => res.status(500).send(err));
}

export const getResult = (req: Request<{}, {}, {}, resultQuery>, res: Response) => {
  const id = req.query.id;
  readReview(id)
    .then(response => {
      if (response.predictedRating === undefined || response.revisedReview === undefined) return res.sendStatus(404);
      return res.status(200).json(response);
    })
    .catch((err: Error) => {
      console.error(err);
      return res.sendStatus(500);
    });
}