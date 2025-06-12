import { HttpAdapter } from '../../../config/adapters/http/http.adapter'
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { MoviesApiResponse } from '../../../infrastructure/interfaces/movies-db.responses';
import type { Movie } from '../../entities/movie.entity'

export const moviesUpcomingUseCase = async (fetcher:HttpAdapter):Promise<Movie[]> => {
    try {
        const upcomming = await fetcher.get<MoviesApiResponse>('upcoming');
        return upcomming.results.map(result => {
            return MovieMapper.fromMovieDBResultToEntitie(result);
        });
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - Upcoming')
    }
}
