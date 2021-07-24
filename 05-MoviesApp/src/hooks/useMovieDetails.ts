import { useState, useEffect, useCallback } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterfaces';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = useCallback(async () => {
    const movieDetails = await movieDB.get<MovieFull>(`/${movieId}`);
    const cast = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);
    const [movieDetailsResponse, castResponse] = await Promise.all([
      movieDetails,
      cast,
    ]);
    setState({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: castResponse.data.cast,
    });
  }, [movieId]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  return {
    ...state,
  };
};
