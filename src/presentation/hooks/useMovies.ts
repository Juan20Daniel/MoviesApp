import { useEffect, useState } from "react";
import { movieDBFecher } from "../../config/adapters/movieDB.adapter";
import { moviesNowPlayingUseCase } from "../../core/use-cases";
import { moviesPopularUseCase } from '../../core/use-cases';
import { moviesTopRatedUseCase } from "../../core/use-cases";
import { moviesUpcomingUseCase } from "../../core/use-cases";
import type { Movie } from "../../core/entities/movie.entity";

let popularPage = 1;

export const useMovies = () => {
    const [ nowPlaying, setNowPlaying ] = useState<Movie[]>([]);
    const [ popular, setPopular ] = useState<Movie[]>([]);
    const [ topRated, setTopRated ] = useState<Movie[]>([]);
    const [ upcoming, setUpcoming ] = useState<Movie[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    useEffect(() => {
        initialLoader();
    },[]);
    
    const initialLoader = async () => {
        const [ 
            nowPlayingMovies, 
            popularMovies,
            topRatedMovies,
            upcomingMovies
        ] = await Promise.all([
            moviesNowPlayingUseCase(movieDBFecher),
            moviesPopularUseCase(movieDBFecher),
            moviesTopRatedUseCase(movieDBFecher),
            moviesUpcomingUseCase(movieDBFecher),
        ]);
        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

        setIsLoading(false);
    }

    return {
        nowPlaying,
        popular,
        topRated,
        upcoming,
        isLoading,

        //Methods
        popularNextPage: async () => {
            popularPage++;
            const popularMovies = await moviesPopularUseCase(movieDBFecher, {
                page: popularPage
            });
            setPopular(prev => [...prev, ...popularMovies])
        }
    }
}
