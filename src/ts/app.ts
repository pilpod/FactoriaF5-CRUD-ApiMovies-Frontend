///<reference path="Domain/Services/MovieController.ts" />
///<reference path="Domain/Models/Movie.ts" />
///<reference path="Infrastructure/Api/Api.ts" />

namespace App {

  let tmdb = new Api.ApiMovie();
  let allMovies = new Controller.MovieController(tmdb);

  allMovies.ListPopularMovies();
  
  

}

