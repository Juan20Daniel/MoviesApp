import { HttpAdapter } from '../../../config/adapters/http/http.adapter'
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { MoviesApiResponse } from '../../../infrastructure/interfaces/movies-db.responses';
import type { Movie } from '../../entities/movie.entity'

export const moviesTopRatedUseCase = async (fetcher:HttpAdapter): Promise<Movie[]> => {
    try {
        const topRated = await fetcher.get<MoviesApiResponse>('/top_rated');
        return topRated.results.map(result => {
            return MovieMapper.fromMovieDBResultToEntitie(result);
        });
    } catch (error) {
        throw new Error('Error fetching movies - TopRated')
    }
}
