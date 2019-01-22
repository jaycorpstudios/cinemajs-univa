
const theatersData = require('../data/theaters.js');


module.exports = class Theaters{

  showTheatersInfo() {
    theatersData.forEach( theater => {
      console.log(`🏨 ${theater.name} 📍 Dirección: ${theater.state}, ${theater.state}`);
    });
  }

  //TODO: UNIVA-GIT-001: fix this to return real value:
  getVIPCount(){
    let vipCount = 0;
    theatersData.forEach(theater => {

    });
    return 0;
  }

}
