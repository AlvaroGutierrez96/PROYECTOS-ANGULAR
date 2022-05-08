

window.onload = () => {
    init();
    
}

const init = async () => {
    const films = await getFilms ();
    console.log(films);
    const filmsMapeadas = await mappedFilms(films);
    console.log(filmsMapeadas)
    printFilms(filmsMapeadas);
}

const getFilms = async () => {
    const data = await fetch ('https://ghibliapi.herokuapp.com/films');
    const dataToJson = await data.json();

    return dataToJson
}

function mappedFilms (films) {
    const filmsTransformadas = films.map(film => {
        return {
            title: film.title,
            img: film.image
        }
    })
    return filmsTransformadas
}

function printFilms (films) {
    const lista = document.createElement('div');
    lista.className = 'containerFilm';
    films.forEach(film => {
        
        lista.innerHTML += `<div class="card"> 
            <p>${film.title}</p>
            <img src=${film.img} alt=${film.title}/>
            </div>`
    });
    document.body.appendChild(lista);
}