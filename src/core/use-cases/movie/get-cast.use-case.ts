import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieCastApiResponse } from "../../../infrastructure/interfaces/movie-cast-db.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { MovieCast } from "../../entities/movie.entity";

export const getCastUseCace = async (fetcher:HttpAdapter, movieId: number): Promise<MovieCast[]> => {
    try {
        const {cast} = await fetcher.get<MovieCastApiResponse>(`/${movieId}/credits`);
        return cast.map(cast => {
            return MovieMapper.fromMovieDBCastToEntity(cast);
        })
    } catch (error) {
        throw new Error('Cannot get movie cast - get-cast.use-case');
    }
}