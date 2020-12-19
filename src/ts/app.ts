///<reference path="Domain/Services/MovieController.ts" />
///<reference path="Domain/Models/Movie.ts" />
///<reference path="Infrastructure/Api/Api.ts" />

namespace App {

  const url = "https://api.themoviedb.org/3/movie/popular?api_key=f2527bcedba3b6b354338c4907758284&language=es-ES";
  
  let allMovies = new Controller.MovieController();
  
  Api.popularMovies(url)
    .then(data => allMovies.ShowAllPopularMovies(data));

}

