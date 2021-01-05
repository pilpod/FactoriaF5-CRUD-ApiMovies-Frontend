///<reference path="../../Infrastructure/Api/Api.ts" />
///<reference path="../../Infrastructure/Api/MyListMovie.ts" />

namespace Contract {

    export interface ExternalApiData {

        tmdb:Api.ApiMovie;

    }

    export interface IMyJsonMovies {

        peliculas:Api.MyListMovie;

    }


}