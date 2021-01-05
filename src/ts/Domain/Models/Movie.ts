// import uniqid = require("uniqid");

namespace Models {

    export class Movie 
    {
        private id: string;
        private title: string;
        private poster: string;
        private director: string;
        private genre: string;

        constructor(title?:any, poster?:any, id?: any, director?: any, genre?: any) 
        {
            this.id = id;
            this.title = title;
            this.poster = poster;
            this.director = director;
            this.genre = genre;
        }

        public GetId(): string
        {
            return this.id;
        }

        public GetTitle(): String
        {
            return this.title;
        }

        public GetPoster(): string
        {
            return this.poster;
        }

        public GetDirector()
        {
            return this.director;
        }

        public GetGenre()
        {
            return this.genre;
        }

        public ShowAllMovie(data:any)
        {
            const myMoviesSection = document.getElementById('myMovies') as HTMLInputElement;
            
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
                    </div>
                </div>
                `;
                
            }
        }

        public AddMovie(data:any)
        {
            console.log(data);
        }

    }

}