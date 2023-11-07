import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBnowPlaying } from '../interfaces/movieInterface';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBnowPlaying>('/now_playing');
        const peliculas = resp.data.results;
        setPeliculasEnCine(peliculas);

        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();

      }, []);
  return {
    peliculasEnCine,
    isLoading,
  };
};
