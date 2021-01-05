namespace Api {

    export class MyListMovie {

        private url:string = "http://localhost:3000/peliculas"

        public async GetMovies(): Promise<any>
        {
            try {
                const promise = await fetch(this.url, {
                    method: 'GET',
                    redirect: 'follow',
                    headers: {
                        'Content-Type': 'application/json',
                      }
                });
                let response = await promise.json();
                return response;
            }
            catch(error) {
                console.log(error);
            }
        }

        public async PostDataMovie(data:any): Promise<any>
        {
            try {
                const promise = await fetch(this.url, {
                    method: 'POST',
                    redirect: 'follow',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                      }
                });
                let response = await promise.json();
                alert(response.message);
            }
            catch(error) {
                console.log(error);
            }
        }

    }

}