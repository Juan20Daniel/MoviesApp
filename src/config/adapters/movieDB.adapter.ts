import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.atapter";

export const movieDBFecher = new AxiosAdapter({
    baseUrl:'https://api.themoviedb.org/3/movie',
    params: {
        api_key: THE_MOVIE_DB_KEY??'no-key',
        language:'en'
    }
});