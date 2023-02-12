import backendApi from '../config/api';
import { MovieType, ResultType, ReviewType } from '../types/movie.type';

export const getSearch = async (query: string) => {
  try {
    return await backendApi.get<MovieType[]>('/search', {
      params: {
        'query': query,
      }
    });
  }
  catch(error) {
    if (error instanceof Error) throw error;
    throw new Error("Unexpected");
  }
}

export const getResult = async (id: string) => {
  try {
    return await backendApi.get<ResultType>('/result', {
      params: {
        'id': id,
      }
    });
  }
  catch(error) {
    if (error instanceof Error) throw error;
    throw new Error("Unexpected");
  }
}

export const postResult = async (review: ReviewType) => {
  return new Promise<string>((resolve, reject) => {
    backendApi.post<string>('/review', review)
    .then(response => {
      resolve(response.data)
    })
    .catch(error => reject(error));
  });
}