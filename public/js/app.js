"use strict";
var Controller;
(function (Controller) {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=f2527bcedba3b6b354338c4907758284&language=es-ES";
})(Controller || (Controller = {}));
var Models;
(function (Models) {
    class Movie {
        constructor(title, poster) {
            this.title = title;
            this.poster = poster;
        }
    }
})(Models || (Models = {}));
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Api;
(function (Api) {
    class ApiMovie {
        constructor(url) {
            this.url = url;
        }
        PopularMovies(url, data) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const promise = yield fetch(url, {
                        method: 'GET',
                        redirect: 'follow',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    const response = yield promise.json();
                    return response;
                }
                catch (error) {
                    console.log(error);
                }
            });
        }
    }
    Api.ApiMovie = ApiMovie;
    Api.popularMovies = (url, data) => __awaiter(this, void 0, void 0, function* () {
        try {
            const promise = yield fetch(url, {
                method: 'GET',
                redirect: 'follow',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const response = yield promise.json();
            return response;
        }
        catch (error) {
            console.log(error);
        }
        ;
    });
})(Api || (Api = {}));
///<reference path="Domain/Services/MovieController.ts" />
///<reference path="Domain/Models/Movie.ts" />
///<reference path="Infrastructure/Api/Api.ts" />
const url = "https://api.themoviedb.org/3/movie/popular?api_key=f2527bcedba3b6b354338c4907758284&language=es-ES";
const testSection = document.getElementById('test_section');
Api.popularMovies(url)
    .then(data => ShowPopularMovies(data));
function ShowPopularMovies(data) {
    for (let i = 0; i < data['results'].length; i++) {
        let poster = data['results'][i]['poster_path'];
        let title = data['results'][i]['title'];
        let id = data['results'][i]['id'];
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
var Test;
(function (Test) {
    function SayingFactoria() {
        return 'factoria f5';
    }
    Test.SayingFactoria = SayingFactoria;
})(Test || (Test = {}));