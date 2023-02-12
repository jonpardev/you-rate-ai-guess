import { Router } from "express";
import { getResult, postReview } from "../controllers/guess.controllers.js";
import { getSearch } from "../controllers/movie.controllers.js";

const apiRoutes = Router();
apiRoutes.post('/api/review', postReview);
apiRoutes.get('/api/result', getResult);
apiRoutes.get('/api/search', getSearch);

export default apiRoutes;