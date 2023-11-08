import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBmoviesResponse } from '../interfaces/movieInterface';

interface MovieState{
    nowPLaying: Movie[];
    popular:   Movie[];
    topRated:  Movie[];
    upcoming:  Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [ moviesState, setMoviesState ] = useState<MovieState>({
        nowPLaying: [],
        popular:   [],
        topRated:  [],
        upcoming:  [],
    });


    const getMovies = async () => {
      const nowPLayingPromise =  movieDB.get<MovieDBmoviesResponse>('/now_playing');
      const popularPromise =  movieDB.get<MovieDBmoviesResponse>('/popular');
      const topRatedPromise =  movieDB.get<MovieDBmoviesResponse>('/top_rated');
      const upcomingPromise =  movieDB.get<MovieDBmoviesResponse>('/upcoming');

      const response = await Promise.all([
        nowPLayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
        ]);

        setMoviesState({
            nowPLaying: response[0].data.results,
            popular:response[1].data.results,
            topRated:response[2].data.results,
            upcoming :response[3].data.results,
        });

        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();

      }, []);
  return {
    ...moviesState,
    isLoading,
  };
};
