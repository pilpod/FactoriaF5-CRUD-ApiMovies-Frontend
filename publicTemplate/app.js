let urlApi = "http://localhost:3000/peliculas";
let arrMovies = [];
let sectionMovies = document.getElementById("peliculas");
let btnCreate = document.getElementById("create");
let btnDelete = document.getElementById("delete");

async function TakeApiData()
    {
        try {
            let response = await fetch(urlApi);
            let data = await response.json();
            return data;
        }
        catch(err) {
            console.log(err.message);
        }
    }

async function DeleteApiData()
    {
        try {
            let response = await fetch(urlApi, 
                {
                    method: DELETE,
                    headers: {
                    'Content-Type' : 'application/json'
                    }
                });
            let data = await response.json();
            
        }
    }

TakeApiData().then(data => ListAllMovies(data));


function ListAllMovies(data)
{   
    data.forEach(movie => {
        console.log(movie);
        sectionMovies.innerHTML += `
        <div class="movie">
            <span id="title">` + movie.nombre + `</span>
            <span id="director">` + movie.director + `</span>
            <span id="genero">` + movie.clasificacion + `</span>
            <button id="edit" value="` + movie.id + `">Edit</button>
            <button id="delete" value="` + movie.id + `">Delete</button>
        </div>
        `;
    });
}

