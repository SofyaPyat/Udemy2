 "use strict"

 //let numberOfFilms = 0;
 let filmQuestCount = 2; 

//  function start() {
   
//  }

 //start();
 
 const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {
      let num = 0;
      do {
         num = +prompt("Сколько фильмов вы уже посмотрели?","");
      } while (num == '' || num == null || isNaN(num));
      personalMovieDB.count = num;
   },
   rememberMyMovies: function () {
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
   },
   detectPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
         confirm("Просмотрено довольно мало фильмов");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         confirm("Вы классический зритель");
      } else if (personalMovieDB.count >= 30){
         confirm("Вы киноман");
      } else {
         confirm("Произошла ошибка");
      }
   },
   showMyDB: function () {
       if (personalMovieDB.privat) 
         console.log(personalMovieDB);
   },
   rememberMyGenres: function () {
      let genre;
      let genreNum = 0;
      do {
         genre = prompt(`Ваш любимый жанр под номером ${genreNum + 1}`,"");
         if (genre !== null)
            genre = genre.trim();
         this.genres[genreNum] = genre;
      } while (genre == '' || genre == null || (genreNum++ < 2));

      personalMovieDB.genres.forEach((item, ind) => {
         console.log(`Любимый жанр #${ind + 1 } это ${item}`)
      })
   },

   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) 
         personalMovieDB.privat = false;
      else
         personalMovieDB.privat = true;
   }
};


 

