//TODO: UNIVA-GIT-003: theatersData should require data from ../data/theaters Hint: Take a look at Movies.js file.

const theatersData = [
  {
    name: 'Cinemex Punto Sao Paulo',
    id: 4,
    brand: 'Cinemex',
    location: { lat: 20.702281, long: -103.376779 },
    street: 'Valparaiso 2367',
    state: 'Jalisco',
    hasVIP: true
  }
];

module.exports = class Theaters{

  showTheatersInfo() {
    theatersData.forEach( theater => {
      //TODO: UNIVA-GIT-004: Modify to also display Address:
      //🏨 Cinepolis Ciudadela 📍 Dirección: Calle Labna 1437, Jalisco
      console.log(`🏨 ${theater.name}`);
    });
  }

  
  getVIPCount(){
    let vipCount = 0;
    theatersData.forEach(theater => {
     if(theater.hasVIP === true) {
    vipCount++;
     } 
    });
    return vipCount;
  }

}
