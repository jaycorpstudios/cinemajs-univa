const moviesData = require('../data/movies.js');

module.exports = class Movies{

  displayMovies(){

    const moviesOrderedByStars = this.orderByStars([...moviesData]);

    moviesOrderedByStars.forEach( movie => {
      console.log(`${movie.title}, Rank de la crítica: ${movie.stars}`);
    });
  }

  displayDirectors() {
    let repeatedDirectors = new Array();

        moviesData.forEach(function(element){
          if(!repeatedDirectors.includes(element.director)){
            repeatedDirectors.push(element.director);  
            console.log(element.director);  
          }
          
        });
  }

  orderByStars(movies){
    movies.sort(function(a,b){
      return b.stars - a.stars;
    });

    return movies;
  }


}
