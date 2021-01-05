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

        public ShowAddMovieForm()
        {
            const btn_add_movie = document.getElementById('btn_add_movie') as HTMLElement;
            const form_add_movie = document.getElementById('form_add_movie') as HTMLElement;

            btn_add_movie.addEventListener('click', () => {
                if(form_add_movie.hidden == true) {
                    form_add_movie.hidden = false;
                    btn_add_movie.textContent = 'Close form';
                }
                else if(btn_add_movie.textContent == 'Close form') {
                    form_add_movie.hidden = true;
                    btn_add_movie.textContent = 'Add Movie';
                }
            })
        }

        public AddMovie()
        {
            const btn_validate_movie = document.getElementById('btn_validate_movie') as HTMLFormElement;
            const form_create_movie = document.getElementById('form_create_movie') as HTMLFormElement;
            const data = new FormData(form_create_movie);

            btn_validate_movie.addEventListener('click', () => {
                this.movies.PostDataMovie(data)
            })


            // let movie = new Models.Movie();
            // this.movies.PostDataMovie().then(data => movie.AddMovie(data));
        }

        public UpdateMovie()
        {
            
        }

        public DeleteMovie()
        {

        }

    }

}