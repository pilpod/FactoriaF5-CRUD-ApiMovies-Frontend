import uniqid = require("uniqid");

namespace Models {

    export class Movie 
    {
        id: string;
        title: string;
        poster: string;

        constructor(title:string, poster:string, id?: string) 
        {
            this.id = uniqid();
            this.title = title;
            this.poster = poster;
        }

        public GetId(): string
        {
            return this.id;
        }

        public GetTitle(): String
        {
            return this.title;
        }

        public GetPoster(): any
        {
            return this.poster;
        }

        public SetTitle(title:string): string
        {
            return this.title;
        }

        public SetPoster(poster:string): string
        {
            return this.poster;
        }


    }

}