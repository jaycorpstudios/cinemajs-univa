const moviesData = require('../data/movies.js');

module.exports = class Movies{

  displayMovies(){
    /*TODO: UNIVA-GIT-005: Order by stars first.
            Make moviesOrderedByStarts a constant that receives the output of orderByStars,
            and you need to send a copy of moviesData as a parameter. (Hint: Spread Operator)
    */
    const moviesOrderedByStars = moviesData.slice(0);
    moviesOrderedByStars = this.orderByStars(moviesOrderedByStars);

    //TODO: UNIVA-GIT-005: replace moviesData.forEach for moviesOrderedByStars.forEach
    moviesData.forEach( movie => {
      console.log(`${movie.title}, Rank de la crítica: ${movie.stars}`);
    });
  }

  //TODO: UNIVA-GIT-002: Iterate over moviesData to display Directors (Unique values, not repeated)
  displayDirectors() {
    console.log();
  }

  //TODO: UNIVA-GIT-005: Implement a sort function base on movie.stars, Google: Array.sort documentation if you're not familiar with JS Syntax.
  orderByStars(movies){
    return movies;
  }


}
