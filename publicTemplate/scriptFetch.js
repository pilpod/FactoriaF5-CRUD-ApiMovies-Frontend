let sectionMovies = document.getElementById("peliculas");
let btnCreate = document.getElementById("create");
let btnDelete = document.getElementById("delete");

// btnCreate.addEventListener("click", CreateMovie());
// btnDelete.addEventListener("click", RemoveMovie(id));

fetch('http://localhost:3000/peliculas')
    .then(response => response.json())
    .then(data => ListAllMovies(data));

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

function RemoveMovie(id)
{
    fetch(`http://localhost:3000/peliculas/${id}`), {
        method: 'DELETE'
    }
    .then(response => response.json())
    .then(response => {

    });
}
