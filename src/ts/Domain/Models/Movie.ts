import uniqid = require("uniqid");

namespace Models {

    export class Movie 
    {
        private id: string;
        private title: string;
        private poster?: string;
        private director?: string;
        private genre?: string;

        constructor(title:string, id?: string, poster?: string, director?: string, genre?: string) 
        {
            this.id = uniqid();
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

        public ShowAllMovies()
        {

        }

        public CreateMovie()
        {

        }

        public UpdateMovie()
        {
            
        }

        public DeleteMovie()
        {

        }

    }

}