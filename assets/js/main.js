const inputFilm = document.getElementById("movieTitle")
const button = document.getElementById("searchBtn")
const movieDetailsDiv = document.getElementById("movieDetails")


function searchMovie() {
    const movieTitle = inputFilm.value.trim()
    filmsApi.getFilms(movieTitle)
        .then((movie) => {
            if (movie.title === undefined) {
                movieDetailsDiv.innerHTML = `<p>Filme não encontrado</p>`
            } else {

                movieDetailsDiv.innerHTML = `
            <h2>${movie.title} (${movie.year})</h2>
            <p><strong>Gênero:</strong> ${movie.genre}</p>
            <p><strong>Sinopse:</strong> ${movie.plot}</p>
            <img src="${movie.poster}" alt="Poster de ${movie.title}" />`
            }
        })
}

button.addEventListener('click', searchMovie)