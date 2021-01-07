namespace Api {

    export class MyListMovie {

        private url:string = "http://localhost:3000/peliculas/"

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

        }

        public async GetMovie(id:number): Promise<any>
        {
            try {
                const promise = await fetch(this.url + id, {
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

        public async UpdateMovie(id: number, data: any): Promise<any>
        {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(data);

            await fetch(this.url + id, {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }

        public async DeleteDataMovie(id:number): Promise<any>
        {
           
            await fetch(this.url + id, {
                    method: 'DELETE',
                    redirect: 'follow'
                })
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            
        }

    }

}