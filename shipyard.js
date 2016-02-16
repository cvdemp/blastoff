var crewNames = ["Pat", "Christine", "Mooch"];

var trainCrew = function(names){
  var crew = [];
  for(i=0; i < names.length; i++){
    crew.push({name: names[i]});
  }
  return crew;
};

var crewMembers = trainCrew(crewNames);

var rocket = {
  fuel: 0,
  fire: function(){
    if(this.fuel > 0){
      this.fuel --;
      console.log("The engines have fired!");
      console.log("Fuel levels are " + this.fuel);
      return true;
    }
    else {
      console.log("The engines failed to fire. Maybe you need some fuel?");
      return false;
    }
  }
};

var ship = {
    name: "Gattica",
    crew: [],
    loadCrew: function(crewMembers){
      for(i = 0; i < crewMembers.length; i++){
        var crewMember = crewMembers[i];
        this.crew.push(crewMember);
        console.log(crewMember.name + " has boarded " + ship.name);
      }
    },
    captain: function(){
      var crewCount = this.crew.length;
      return this.crew[Math.floor(Math.random() * crewCount)]
    },
    propulsion: null,
    mountPropulsion: function(propulsion){
      this.propulsion = propulsion;
      console.log("Engines mounted!");
    },
    takeoff: function(){
      if(this.propulsion.fire()){
        console.log("ZOOOOOM!");
      }
      else {
        console.log("Ship failed to take off");
      }
    },
    fuelShip: function(fuelGallons){
      this.propulsion.fuel += fuelGallons;
    }
};

var countdown = function(count, ship){
  if (count === 0) {
    console.log("Blastoff!");
    ship.takeoff();
  }
  else {
    setTimeout(function(){
      console.log(count);
      countdown(count - 1, ship);
    }, 1000);
  }
}

var launchpad = function(ship, crew, engine){
  ship.loadCrew(crew);
  console.log("Fasten your seatbelts!");
  console.log(ship.name + " is about to take off!");
  console.log("Get ready Captain " + ship.captain().name);
  ship.mountPropulsion(engine);
  ship.fuelShip(10);
  countdown(10, ship);
};


launchpad(ship, crewMembers, rocket);
