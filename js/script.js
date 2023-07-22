 "use strict"

 let numberOfFilms = 0;
 let filmQuestCount = 2; 

 function start() {
   do {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
   } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
 }

 start();
 
 const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

 function rememberMyMovies() {
   while (filmQuestCount) {
      let movieName;
      let movieRaiting;

      do {
         movieName = prompt("Один из последний просмотренных фильмов?","");
         if (movieName !== null)
            movieName = movieName.trim();
      } while (movieName == "" || movieName == null || movieName.length > 50);
    
      do  {
         movieRaiting = prompt("На сколько оцените его?","");
         if (movieRaiting !== null)
         movieRaiting = movieRaiting.trim();
      } while (movieRaiting == "" || movieRaiting == null); 
   
      filmQuestCount--;
      personalMovieDB.movies[movieName] = movieRaiting;
    } 
 }
 
 rememberMyMovies();
 
 function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      confirm("Просмотрено довольно мало фильмов");
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      confirm("Вы классический зритель");
   } else if (personalMovieDB.count >= 30){
      confirm("Вы киноман");
   } else {
      confirm("Произошла ошибка");
   }
 }

 detectPersonalLevel();

 function showMyDB (hidden) {
   if (!hidden) 
      console.log(personalMovieDB);
 }

 showMyDB(personalMovieDB.privat);

 function rememberMyGenres() {
   let genre;
   let genreNum = 0;
   do {
      genre = prompt(`Ваш любимый жанр под номером ${genreNum + 1}`,"");
      if (genre !== null)
         genre = genre.trim();
      personalMovieDB.genres[genreNum] = genre;
   } while (genre == '' || genre == null || (genreNum++ < 2));
 }

rememberMyGenres();
 

