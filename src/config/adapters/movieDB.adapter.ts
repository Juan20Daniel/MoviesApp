import { AxiosAdapter } from "./http/axios.atapter";

export const movieDBFecher = new AxiosAdapter({
    baseUrl:'https://api.themoviedb.org/3/movie',
    params: {
        api_key:'b5188a0de979fa2ff5c5fd370cb26a9f',
        language:'en'
    }
});