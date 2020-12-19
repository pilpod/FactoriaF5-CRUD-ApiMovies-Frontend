namespace Api {

    export class ApiMovie
    {

        private url:string = "https://api.themoviedb.org/3/movie/popular?api_key=f2527bcedba3b6b354338c4907758284&language=es-ES";
        
        public async PopularMovies(data?:object): Promise<any>
        {

            try {
                const promise = await fetch(this.url, {
                    method: 'GET',
                    redirect: 'follow',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                      }
                });
                const response = await promise.json();
                return response;
            }
            catch(error) {
                console.log(error)
            }
            
        }
        

    }
    
    export const popularMovies = async (url:string, data?:object): Promise<any> => {

        try {
            const promise = await fetch(url, {
                method: 'GET',
                redirect: 'follow',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                  }
            });
            const response = await promise.json();
            return response;
        }
        catch(error){
            console.log(error);
        };
    };

}


