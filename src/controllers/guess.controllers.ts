import { Request, Response } from 'express';
import { saveReview } from '../services/review.service.js';

export const postReview = (req: Request, res: Response) => {
    const movieId = req.body.movieId as number;
    const review = req.body.review as string;
    saveReview({ movieId, review })
        .then((predString: number) => res.status(200).send(`${predString}`))
        .catch((err: Error) => res.status(500).send(err));
}