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
    console.log();
  }

  orderByStars(movies){
    movies.sort(function(a,b){
      return b.stars - a.stars;
    });

    return movies;
  }


}
