namespace Api {

    export class ApiMovie
    {

        private url:string;

        constructor(url:string)
        {
            this.url = url;
        }
        
        public async PopularMovies(url:string, data?:object) {

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


