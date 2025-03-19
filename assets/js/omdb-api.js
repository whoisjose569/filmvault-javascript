const filmsApi = {}

function convertFilmeApiToFilmClass(filmDetail) {
    const film = new Film()
    film.title = filmDetail.Title
    film.year = filmDetail.Year
    film.genre = filmDetail.Genre
    film.plot = filmDetail.Plot
    film.poster = filmDetail.Poster

    return film
}


filmsApi.getFilms = (filmName) => {
    const apiKey = '669dd84c'
    const url = ` https://www.omdbapi.com/?apikey=${apiKey}&t=${filmName}`
    return fetch(url).then((response) => response.json())
        .then(convertFilmeApiToFilmClass)
}

