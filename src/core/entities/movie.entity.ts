export interface Movie {
    id: number;
    title: string;
    description: string;
    relaseDate: Date;
    rating: number;
    poster: string;
    backdrop: string; 
}

export interface FullMovie extends Movie {
    genres: Genre[];
    duration: number;
    budget: number;
    originalTitle: string;
    productionCompanies: ProductionCompany[];
} 
export interface Genre {
    id:   number;
    name: string;
}

export interface ProductionCompany {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}
export interface MovieCast {
    id:             number;
    name:           string;
    caracter:       string;
    avatar:         string;
}