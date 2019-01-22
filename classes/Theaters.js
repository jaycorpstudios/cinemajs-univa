
const theatersData = require('../data/theaters.js');


module.exports = class Theaters{

  showTheatersInfo() {
    theatersData.forEach( theater => {
      console.log(`🏨 ${theater.name} 📍 Dirección: ${theater.state}, ${theater.state}`);
    });
  }

  
  getVIPCount(){
    let vipCount = 0;
    theatersData.forEach(theater => {
     if(theater.hasVIP) {
    vipCount++;
    console.log(theater.name);
     } 
    });
    return vipCount;
  }

}
