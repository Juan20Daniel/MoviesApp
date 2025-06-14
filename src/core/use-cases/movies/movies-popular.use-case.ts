import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { MoviesApiResponse } from "../../../infrastructure/interfaces/movies-db.responses";
import type { Movie } from "../../entities/movie.entity";

interface Options {
    page?:number;
    limit?:number;
}

export const moviesPopularUseCase = async (fetcher:HttpAdapter, options?:Options ): Promise<Movie[]> => {
    try {
        const moviesPopular = await fetcher.get<MoviesApiResponse>('/upcoming', {
            params: {
                page: options?.page ?? 1,
            }
        });
        return moviesPopular.results.map(result => {
            return MovieMapper.fromMovieDBResultToEntitie(result);
        });
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - MoviesPopular');
    }
}