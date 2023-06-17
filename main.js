const API_KEY = "6c04c22dccd83badc967a769acb17db9";
const API_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzA0YzIyZGNjZDgzYmFkYzk2N2E3NjlhY2IxN2RiOSIsInN1YiI6IjY0Mjg0NTg4OGRlMGFlMDBkNWYyZmY3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AAVSQhFTXIGqFT7GhWJngpoxfCk03WyTkiVrxNeVLoo";
const BASE_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6c04c22dccd83badc967a769acb17db9";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=6c04c22dccd83badc967a769acb17db9&query=";

function showField() {
  let field = document.querySelector(".search");
  field.style.display = field.style.display === "block" ? "none" : "block";
}
function mode() {
  const dBody = document.querySelector("#header");
  const dSection = document.querySelector("#section");
  const dFooter = document.querySelector("#footer");
  dBody.classList.toggle("d-head");
  dSection.classList.toggle("d-section");
  dFooter.classList.toggle("d-footer");
}

const searchField = document.getElementById("search");
const form = document.getElementById("form");
const highlight = document.getElementById("head-img");
const list = document.getElementById("movielist");
const slide = document.getElementById("carousel");

function highLight(movies) {
  highlight.innerHTML = "";
  movies.map((movie) => {
    const { poster_path } = movie;
    const movielement = document.createElement("IMG");
    movielement.setAttribute("class", "highlight");
    movielement.setAttribute("src", `${IMAGE_URL + poster_path}`);
    highlight.appendChild(movielement);
  });
}

function displayMovies(movies) {
  list.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, release_date, vote_average } = movie;
    const movielement = document.createElement("div");
    movielement.classList.add("list-card");
    movielement.innerHTML = `
    <img src="${IMAGE_URL + poster_path}" alt="${title}" />
    <div class="katalog">
    <p style='font-weight:bold;overflow:hidden; display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;'>${title}</p>
    <p>
  ${release_date}
  </p>
    <p style='font-weight:bold;color:tomato'>
    <i class="fa-solid fa-star"></i>
  ${vote_average}
  </p>

  </div>
`;
    list.appendChild(movielement);
  });
}
function carousel(movies) {
  slide.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path } = movie;
    const movielement = document.createElement("div");
    movielement.classList.add("card");
    movielement.setAttribute("aria-hidden", "true");
    movielement.innerHTML = `
    <img src="${IMAGE_URL + poster_path}" alt="${title}" />
    <div class="katalog">
    <p style="font-weight:bold; display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;">${title}</p>
  </div>
`;
    slide.appendChild(movielement);
  });
}

getMovies(BASE_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  displayMovies(data.results);
  highLight(data.results);
  carousel(data.results);
  console.log(data.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = searchField.value;
  if (val && val !== "") {
    getMovies(SEARCH_URL + val);
    val = "";
  }
  window.location.reload();
});
