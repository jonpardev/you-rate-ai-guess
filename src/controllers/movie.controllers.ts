import { Request, Response } from 'express';
import { returnMovie } from '../services/tmdb.services.js';

type postSearchQuery = {
  query: string
}

export const getSearch = (req: Request<{}, {}, {}, postSearchQuery>, res: Response) => {
  const query = req.query.query;
  returnMovie(query)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err: Error) => {
      console.error(err);
      res.sendStatus(500);
    });
}