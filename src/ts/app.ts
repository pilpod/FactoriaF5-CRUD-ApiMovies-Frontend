///<reference path="Domain/Services/MovieController.ts" />
///<reference path="Domain/Models/Movie.ts" />
///<reference path="Infrastructure/Api/Api.ts" />

const url = "https://api.themoviedb.org/3/movie/popular?api_key=f2527bcedba3b6b354338c4907758284&language=es-ES";
const testSection = document.getElementById('test_section') as HTMLInputElement;

Api.popularMovies(url)
    .then(data => ShowPopularMovies(data));

function ShowPopularMovies(data: any) 
{

  for (let i = 0; i < data['results'].length; i++) {

    let poster:any = data['results'][i]['poster_path']
    let title:string = data['results'][i]['title']
    let id:number = data['results'][i]['id']
  
    testSection.innerHTML += `
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card mr-3 mt-3" style="width: 16rem;">
          <img id="movie_img" src="https://image.tmdb.org/t/p/w500/${poster}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 id="movie_title" class="card-title"><a href="${id}">${title}</a></h5>
          </div>
        </div>
      </div>`;
  }
  
}