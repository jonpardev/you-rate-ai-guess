import axios from "axios";
import { TMDB_KEY } from "../config/env.js";

const tmdb = axios.create(
  {
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
      Authorization: `Bearer ${TMDB_KEY}`,
      'Content-Type': 'application/json;charset=utf-8',
    }
  }
)

export default tmdb;