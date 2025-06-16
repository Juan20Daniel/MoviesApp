import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import type { MovieApiResponse } from "../../../infrastructure/interfaces/movie-db.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { FullMovie } from "../../entities/movie.entity"

export const getByIdUseCase = async (
    fetcher:HttpAdapter, 
    movieId:number
):Promise<FullMovie> => {
    try {
        const movieResponse = await fetcher.get<MovieApiResponse>(`/${movieId}`); 
        return MovieMapper.fromMovieDBToEntity(movieResponse);
    } catch (error) {
        throw new Error(`Cannot get movie by id ${movieId}`)
    }
}