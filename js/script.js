 "use strict"

 let numberOfFilms = 0;
 let filmQuestCount = 2; 

 numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
 
 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };

 let twoInput = 0;
 while (filmQuestCount) {
   let movieName = prompt("Один из последний просмотренных фильмов?","");
   if (movieName === null || movieName == "" || movieName.length > 50) {
      continue;
   }
 
   let movieRaiting = "";
   while (1) {
   movieRaiting = prompt("На сколько оцените его?","");
   console.log(movieRaiting == null || movieRaiting == "");
   if (movieRaiting != null && movieRaiting != "") {
      break;
   }
   }

   filmQuestCount--;
   personalMovieDB.movies[movieName] = movieRaiting;
 } 

if (personalMovieDB.count < 10) {
   confirm("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   confirm("Вы классический зритель");
} else if (personalMovieDB.count >= 30){
   confirm("Вы киноман");
} else {
   confirm("Произошла ошибка");
}

 console.log(personalMovieDB);
