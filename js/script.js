 "use strict"

 let numberOfFilms = 0;
 numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };

 let movieName = prompt("Один из последний просмотренных фильмов?","");
 let movieRaiting = prompt("На сколько оцените его?","");

 personalMovieDB.movies[movieName] = movieRaiting;

 movieName = prompt("Один из последний просмотренных фильмов?","");
 movieRaiting = prompt("На сколько оцените его?","");

 personalMovieDB.movies[movieName] = movieRaiting;

 console.log(personalMovieDB);