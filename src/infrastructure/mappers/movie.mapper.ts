import { Movie } from "../../core/entities/movie.entity";
import type { Result } from "../interfaces/movies-db.responses";

export class MovieMapper {
    static fromMovieDBResultToEntitie(result:Result):Movie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            relaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
        }
    }
}