// Your code here

const filmAPI = "http://localhost:3000/films";

// fetch(`${filmAPI}/1`)
// .then(res => res.json())
// .then(renderFilm);

let currentFilm;

idFetch('buy-ticket').addEventListener('click', buyTicket)

function init() {
  fetch(filmAPI)
    .then((res) => res.json())
    .then((json) => {
      renderSideMenu(json);
      renderFilm(json[0]);
    });
}

function renderFilm(film) {
  // console.log(film)
  currentFilm = film
  const poster = idFetch("poster");
  poster.src = film.poster;
  poster.alt = film.title;

  idFetch("title").textContent = film.title;
  idFetch("runtime").textContent = `${film.runtime} minutes`;
  idFetch("film-info").textContent = film.description;
  idFetch("showtime").textContent = film.showtime;
  idFetch("ticket-num").textContent = film.capacity - film.tickets_sold;
}

function renderSideMenu(films) {
  const menu = idFetch("films");

  films.forEach((film) => {
    const li = document.createElement("li");
    li.classList.add("film", "item");
    li.textContent = film.title;
    menu.append(li);
  });
}

function buyTicket(){
    if (currentFilm.tickets_sold < currentFilm.capacity){
        currentFilm.tickets_sold++;
        idFetch("ticket-num").textContent = currentFilm.capacity - currentFilm.tickets_sold;
    }else{
        alert("No more tickets!");
    }
}

function idFetch(id) {
  return document.getElementById(id);
}

init();
