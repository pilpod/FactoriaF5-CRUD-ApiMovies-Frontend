///<reference path="Domain/Services/MovieController.ts" />
///<reference path="Domain/Services/MyMoviesController.ts" />
///<reference path="Domain/Models/Movie.ts" />
///<reference path="Infrastructure/Api/Api.ts" />


namespace App {

  let tmdb = new Api.ApiMovie();
  let allMovies = new Controller.MovieController(tmdb);

  if(window.location.pathname == '/index.html' || window.location.pathname == '/') {
    allMovies.ListPopularMovies();
  }

  let apiMyListMovies = new Api.MyListMovie();
  let myList = new Controller.MyMoviesController(apiMyListMovies);


  if(window.location.pathname == '/myList.html') {
    myList.ShowAllMovies();
    myList.ShowAddMovieForm();
    myList.AddMovie();
    myList.UpdateMovie();
  }

}

function Edit(id:number)
{
  let apiMyListMovies = new Api.MyListMovie();
  let myList = new Controller.MyMoviesController(apiMyListMovies);

  myList.FillUpdateForm(id);
}

function Delete(id: number)
{
  let apiMyListMovies = new Api.MyListMovie();
  let myList = new Controller.MyMoviesController(apiMyListMovies);

  myList.DeleteMovie(id);
}

