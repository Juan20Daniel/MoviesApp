import { useEffect, useState } from "react"
import type { Movie } from "../../core/entities/movie.entity";
import { moviesNowPlayingUseCase } from "../../core/use-cases";
import { movieDBFecher } from "../../config/adapters/movieDB.adapter";


export const useMovies = () => {
    const [ nowPlaying, setNowPlaying ] = useState<Movie[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    useEffect(() => {
        initialLoader();
    },[]);
    
    const initialLoader = async () => {
        const nowPlayingMovies = await moviesNowPlayingUseCase(movieDBFecher);
    }

    return {
        nowPlaying,
        isLoading
    }
}
