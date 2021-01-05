///<reference path="Domain/Services/MovieController.ts" />
///<reference path="Domain/Services/MyMoviesController.ts" />
///<reference path="Domain/Models/Movie.ts" />
///<reference path="Infrastructure/Api/Api.ts" />

namespace App {

  let tmdb = new Api.ApiMovie();
  let allMovies = new Controller.MovieController(tmdb);

  allMovies.ListPopularMovies();

  let apiMyListMovies = new Api.MyListMovie();
  let myList = new Controller.MyMoviesController(apiMyListMovies);

  myList.ShowAllMovies();

  
  

}

