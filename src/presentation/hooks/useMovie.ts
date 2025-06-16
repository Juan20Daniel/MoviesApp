import { useEffect, useState } from 'react';
import { getByIdUseCase } from '../../core/use-cases/movie/get-by-id.use-case';
import { movieDBFecher } from '../../config/adapters/movieDB.adapter';
import type { FullMovie, MovieCast } from '../../core/entities/movie.entity';
import { getCastUseCace } from '../../core/use-cases/movie/get-cast.use-case';
export const useMovie = (movieId:number) => {
    const [ movie, setMovie ] = useState<FullMovie>();
    const [ cast, setCast ] = useState<MovieCast[]>();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        loadMovie();
    },[]);

    const loadMovie = async () => {
        const [ fullMovie, castMovie ] = await Promise.all([
            getByIdUseCase(movieDBFecher, movieId),
            getCastUseCace(movieDBFecher, movieId)
        ]);
        setMovie(fullMovie);
        setCast(castMovie);
        setIsLoading(false);
    }

    return {
        isLoading,
        movie,
        cast
    }
}
