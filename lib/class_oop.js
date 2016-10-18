// Sums the Primes numbers less than or equal to the supplied integer
'use strict'

module.exports = {
  findCriminal: function findCriminal(planet, latitude, longitude) {
    
  this.planet = ((typeof planet !== 'string') || (planet !== 'Earth')) ? "Alien Zone" : planet;
  this.latitude = (typeof latitude !== 'number') ? "Unknown" : latitude;
  this.longitude = (typeof longitude !== 'number') ? "Unknown" : longitude;
    
    //determine if coordinates are valid

    Object.__defineGetter__.call(findCriminal.prototype, 
      "getCoords", function(){
        return "Planet: "+ this.planet + ", latitude: " + parseFloat(this.latitude) + ", longitude: " + parseFloat(this.longitude);
      });

    Object.__defineSetter__.call(findCriminal.prototype,
      "setCoords", function(Coords){
        var point = Coords.toString().split(", ");
        this.latitude = (point[0]) || "";
        this.longitude = point[1] || "";
      });

  //locate Criminal's base
  Object.__defineGetter__.call(findCriminal.prototype, 
      "getAddress", function(){
        return "street: " + this.street + ", city: " + this.city + ", state: " +this.state;
      });
      
    Object.__defineSetter__.call(findCriminal.prototype,
      "setAddress", function(locate){
        var direct = locate.toString().split(", ");
        this.street = direct[0] || "";
        this.city = direct[1] || "";
        this.state = direct[2] || "";
      });
  
  this.Action = (this.planet == "Alien Zone")? "Prepare for war" : "Continue Search" ;
 }
}