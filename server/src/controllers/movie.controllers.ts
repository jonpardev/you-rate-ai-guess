import { Request, Response } from 'express';
import { returnMovie } from '../services/tmdb.services.js';

type searchQuery = {
  query: string
}

export const getSearch = (req: Request<{}, {}, {}, searchQuery>, res: Response) => {
  const query = req.query.query;
  returnMovie(query)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((err: Error) => {
      console.error(err);
      return res.sendStatus(500);
    });
}