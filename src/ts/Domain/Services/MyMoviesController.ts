///<reference path="../Models/Movie.ts" />
///<reference path="../Contracts/IApiService.ts" />

namespace Controller {

    export class MyMoviesController implements Contract.IMyJsonMovies {

        movies:Api.MyListMovie;

        constructor(movies:Api.MyListMovie)
        {
            this.movies = movies;
        }


        public ShowAllMovies()
        {   
            let movie = new Models.Movie();
            this.movies.GetMovies().then(data => movie.ShowAllMovie(data));
        }

        public CreateMovie()
        {

        }

        public UpdateMovie()
        {
            
        }

        public DeleteMovie()
        {

        }

    }

}