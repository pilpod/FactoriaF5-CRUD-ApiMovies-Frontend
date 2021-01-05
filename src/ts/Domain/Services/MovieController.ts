///<reference path="../Models/Movie.ts" />
///<reference path="../Contracts/IApiService.ts" />
///<reference path="../../Infrastructure/Api/Api.ts" />

namespace Controller {

    export class MovieController implements Contract.ExternalApiData {

        tmdb:Api.ApiMovie;

        constructor(tmdb:Api.ApiMovie)
        {
          this.tmdb = tmdb;
        }

        public ListPopularMovies(): any
        {
            this.tmdb.PopularMovies()
                .then(data => this.ShowAllPopularMovies(data));
        }

        public ShowAllPopularMovies(data:any)
        {
            const popularMovies = document.getElementById('popularMovies_section') as HTMLInputElement;

            for (let i = 0; i < data['results'].length; i++) {

                let poster:any = data['results'][i]['poster_path']
                let title:string = data['results'][i]['title']
                let id:number = data['results'][i]['id']
              
                popularMovies.innerHTML += `
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

        

    }

}