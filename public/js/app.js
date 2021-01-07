"use strict";
// import uniqid = require("uniqid");
var Models;
(function (Models) {
    class Movie {
        constructor(title, poster, director, genre, id) {
            this.id = id;
            this.title = title;
            this.poster = poster;
            this.director = director;
            this.genre = genre;
        }
        GetId() {
            return this.id;
        }
        GetTitle() {
            return this.title;
        }
        GetPoster() {
            return this.poster;
        }
        GetDirector() {
            return this.director;
        }
        GetGenre() {
            return this.genre;
        }
        SetId(id) {
            this.id = id;
        }
        ShowAllMovie(data) {
            const myMoviesSection = document.getElementById('myMovies');
            for (let i = 0; i < data.length; i++) {
                this.id = data[i].id;
                this.title = data[i].nombre;
                this.poster = data[i].poster;
                myMoviesSection.innerHTML += `
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="card mr-3 mt-3" style="width: 16rem;">
                            <img id="movie_img" src="${this.poster}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 id="movie_title" class="card-title"><a href="${this.id}">${this.title}</a></h5>
                            </div>
                            <button id="btn_delete_movie" class="btn btn-danger" onclick="Delete(${this.id})">Trash</button>
                        </div>
                    </div>
                `;
            }
        }
        AddMovie(api) {
            let newMovie = {
                "nombre": this.title,
                "poster": this.poster,
                "director": this.director,
                "clasificacion": this.genre,
            };
            api.PostDataMovie(newMovie);
        }
        DeleteMovie(api) {
            api.DeleteDataMovie(this.id);
        }
    }
    Models.Movie = Movie;
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
        constructor() {
            this.url = "https://api.themoviedb.org/3/movie/popular?api_key=f2527bcedba3b6b354338c4907758284&language=es-ES";
        }
        PopularMovies(data) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const promise = yield fetch(this.url, {
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
var Api;
(function (Api) {
    class MyListMovie {
        constructor() {
            this.url = "http://localhost:3000/peliculas/";
        }
        GetMovies() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const promise = yield fetch(this.url, {
                        method: 'GET',
                        redirect: 'follow',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    let response = yield promise.json();
                    return response;
                }
                catch (error) {
                    console.log(error);
                }
            });
        }
        PostDataMovie(data) {
            return __awaiter(this, void 0, void 0, function* () {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var raw = JSON.stringify(data);
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                };
                fetch(this.url, requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            });
        }
        DeleteDataMovie(id) {
            return __awaiter(this, void 0, void 0, function* () {
                yield fetch(this.url + id, {
                    method: 'DELETE',
                    redirect: 'follow'
                })
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            });
        }
    }
    Api.MyListMovie = MyListMovie;
})(Api || (Api = {}));
///<reference path="../../Infrastructure/Api/Api.ts" />
///<reference path="../../Infrastructure/Api/MyListMovie.ts" />
///<reference path="../Models/Movie.ts" />
///<reference path="../Contracts/IApiService.ts" />
///<reference path="../../Infrastructure/Api/Api.ts" />
var Controller;
(function (Controller) {
    class MovieController {
        constructor(tmdb) {
            this.tmdb = tmdb;
        }
        ListPopularMovies() {
            this.tmdb.PopularMovies()
                .then(data => this.ShowAllPopularMovies(data));
        }
        ShowAllPopularMovies(data) {
            const popularMovies = document.getElementById('popularMovies_section');
            for (let i = 0; i < data['results'].length; i++) {
                let poster = data['results'][i]['poster_path'];
                let title = data['results'][i]['title'];
                let id = data['results'][i]['id'];
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
    Controller.MovieController = MovieController;
})(Controller || (Controller = {}));
///<reference path="../Models/Movie.ts" />
///<reference path="../Contracts/IApiService.ts" />
var Controller;
(function (Controller) {
    class MyMoviesController {
        constructor(movies) {
            this.movies = movies;
        }
        ShowAllMovies() {
            let movie = new Models.Movie();
            this.movies.GetMovies().then(data => movie.ShowAllMovie(data));
        }
        ShowAddMovieForm() {
            const btn_add_movie = document.getElementById('btn_add_movie');
            const form_add_movie = document.getElementById('form_add_movie');
            btn_add_movie.addEventListener('click', () => {
                if (form_add_movie.hidden == true) {
                    form_add_movie.hidden = false;
                    btn_add_movie.textContent = 'Close form';
                }
                else if (btn_add_movie.textContent == 'Close form') {
                    form_add_movie.hidden = true;
                    btn_add_movie.textContent = 'Add Movie';
                }
            });
        }
        AddMovie() {
            const btn_validate_movie = document.getElementById('btn_validate_movie');
            const form_create_movie = document.getElementById('form_create_movie');
            let data = [];
            form_create_movie.addEventListener('submit', (event) => {
                event.preventDefault();
                for (let i = 0; i < form_create_movie.length - 1; i++) {
                    data.push(form_create_movie[i].value);
                }
                let newMovie = new Models.Movie(data[0], data[1], data[2], data[3]);
                newMovie.AddMovie(this.movies);
            });
        }
        UpdateMovie() {
        }
        DeleteMovie(id) {
            let api = this.movies;
            let movieToDelete = new Models.Movie();
            movieToDelete.SetId(id);
            movieToDelete.DeleteMovie(api);
        }
    }
    Controller.MyMoviesController = MyMoviesController;
})(Controller || (Controller = {}));
///<reference path="Domain/Services/MovieController.ts" />
///<reference path="Domain/Services/MyMoviesController.ts" />
///<reference path="Domain/Models/Movie.ts" />
///<reference path="Infrastructure/Api/Api.ts" />
var App;
(function (App) {
    let tmdb = new Api.ApiMovie();
    let allMovies = new Controller.MovieController(tmdb);
    if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
        allMovies.ListPopularMovies();
    }
    let apiMyListMovies = new Api.MyListMovie();
    let myList = new Controller.MyMoviesController(apiMyListMovies);
    if (window.location.pathname == '/myList.html') {
        myList.ShowAllMovies();
        myList.ShowAddMovieForm();
        myList.AddMovie();
    }
})(App || (App = {}));
function Delete(id) {
    let apiMyListMovies = new Api.MyListMovie();
    let myList = new Controller.MyMoviesController(apiMyListMovies);
    myList.DeleteMovie(id);
}
var Test;
(function (Test) {
    function SayingFactoria() {
        return 'factoria f5';
    }
    Test.SayingFactoria = SayingFactoria;
})(Test || (Test = {}));
