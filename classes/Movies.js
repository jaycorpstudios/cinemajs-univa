const moviesData = require('../data/movies.js');

module.exports = class Movies{

  displayMovies(){

    const moviesOrderedByStars = this.orderByStars([...moviesData]);

    moviesOrderedByStars.forEach( movie => {
      console.log(`${movie.title}, Rank de la crítica: ${movie.stars}`);
    });
  }

  //TODO: UNIVA-GIT-002: Iterate over moviesData to display Directors (Unique values, not repeated)
  displayDirectors() {
    let arraytoSaveData = new Array();
    let repeated = false;
        moviesData.forEach(function(element){
          for (var i = 0; i < arraytoSaveData.length; i++) {
            if(arraytoSaveData[i] == element.director){
              repeated = true;
              break;
            }else{
              repeated = false;
            }  
          }
          arraytoSaveData.push(element.director);
          if(repeated == false){
            console.log(element.director);  
          }
    });
    /*moviesData.forEach(element. => {
      console.log(element);
    });
    */
    //console.log(element);
  }

  orderByStars(movies){
    movies.sort(function(a,b){
      return b.stars - a.stars;
    });

    return movies;
  }


}
