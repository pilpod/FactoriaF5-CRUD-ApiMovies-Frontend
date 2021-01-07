// import uniqid = require("uniqid");

namespace Models {

    export class Movie 
    {
        private id: number;
        private title: string;
        private poster: string;
        private director: string;
        private genre: string;

        constructor(title?:any, poster?:any, director?: any, genre?: any, id?: any) 
        {
            this.id = id;
            this.title = title;
            this.poster = poster;
            this.director = director;
            this.genre = genre;
        }

        public GetId(): number
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

        public SetId(id: number)
        {
            this.id = id;
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
                            <button id="btn_delete_movie" class="btn btn-danger" onclick="Delete(${this.id})">Trash</button>
                        </div>
                    </div>
                `;
                
            }
        }

        public AddMovie(api: Api.MyListMovie)
        {
            let newMovie = {
                "nombre": this.title,
                "poster": this.poster,
                "director": this.director,
                "clasificacion": this.genre,
            }

            api.PostDataMovie(newMovie);
        }

        public DeleteMovie(api:Api.MyListMovie)
        {
            api.DeleteDataMovie(this.id);
        }

    }

}