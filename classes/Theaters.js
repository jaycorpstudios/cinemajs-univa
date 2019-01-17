
const theatersData = require('../data/theaters.js');


module.exports = class Theaters{

  showTheatersInfo() {
    theatersData.forEach( theater => {
      //TODO: UNIVA-GIT-004: Modify to also display Address:
      //🏨 Cinepolis Ciudadela 📍 Dirección: Calle Labna 1437, Jalisco
      console.log(`🏨 ${theater.name}`);
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
