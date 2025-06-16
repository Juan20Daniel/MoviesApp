import { FullMovie, Movie, MovieCast } from "../../core/entities/movie.entity";
import type { CastApi } from "../interfaces/movie-cast-db.response";
import type { MovieApiResponse } from "../interfaces/movie-db.response";
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

    static fromMovieDBToEntity(movie: MovieApiResponse): FullMovie {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            relaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            genres: movie.genres,
            duration: movie.runtime,
            budget: movie.budget,
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies
        }
    }

    static fromMovieDBCastToEntity(cast:CastApi): MovieCast {
        return {
            id: cast.id,
            name: cast.name,          
            caracter: cast.character??'No caracter',
            avatar: cast.profile_path
                ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                : 'https://i.stack.imgur.com/l60Hf.png'
        }
    }
}