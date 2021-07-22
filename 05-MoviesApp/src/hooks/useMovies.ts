import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieDBInterfaces';

export const useMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = async () => {
    const resNowPlaying = await movieDB.get<MovieDBMoviesResponse>(
      '/now_playing',
    );
    setNowPlayingMovies(resNowPlaying.data.results);
    const resPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');
    setPopularMovies(resPopular.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { nowPlayingMovies, popularMovies, isLoading };
};
