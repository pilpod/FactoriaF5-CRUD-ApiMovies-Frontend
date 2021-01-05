///<reference path="../Models/Movie.ts" />
///<reference path="../Contracts/IApiService.ts" />

namespace Controller {

    export class MyMoviesController implements Contract.IMyJsonMovies {

        peliculas:Api.MyListMovie;

        constructor(peliculas:Api.MyListMovie)
        {

            this.peliculas = peliculas;

        }

        public Index()
        {
            
        }

    }

}