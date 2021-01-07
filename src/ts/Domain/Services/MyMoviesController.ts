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

            const btn_validate_movie = document.getElementById('btn_validate_movie') as HTMLElement;
            const form_create_movie = document.getElementById('form_create_movie') as HTMLFormElement;

            let data: any[] = [];

            form_create_movie.addEventListener('submit', (event) => {
                event.preventDefault();
                for (let i = 0; i < form_create_movie.length -1 ; i++) {
                    data.push(form_create_movie[i].value);
                }
                let newMovie = new Models.Movie(data[0], data[1], data[2], data[3] );
                newMovie.AddMovie(this.movies);                
            });

        }

        public UpdateMovie()
        {
            
        }

        public DeleteMovie(id:number)
        {
            let api = this.movies;
            let movieToDelete = new Models.Movie();
            movieToDelete.SetId(id);

            movieToDelete.DeleteMovie(api);

        }

    }

}