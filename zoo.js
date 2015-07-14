function Animal(name){
  this.name = name;
}

Animal.prototype.speak = function(){
  console.log('says hi');
}

Animal.prototype.feed = function(){
  console.log('NOM NOM NOM')
}

function Pig(){
  Animal.call(this)
}


function Dog(breed){
  Animal.call(this)
  this.breed = breed
}

function Rhino(){
  Animal.call(this)
}

Pig.prototype = new Animal();
Rhino.prototype = new Animal();
Dog.prototype = new Animal();


Pig.prototype.rollInMud = function(){
  console.log('Rolls in the Mud')
}

Rhino.prototype.stillHasHorn = true;
Rhino.prototype.removeHorn = function(){
  this.stillHasHorn = false;
  console.log(':(')
}


Dog.prototype.isPurebred = function(){
  if(this.breed === 'mutt'){
    console.log(false);
  }
  else {
    console.log(true);
  }
}


var ventura = new Rhino()
ventura.removeHorn()
var rex = new Dog('shepherd')
rex.speak()
rex.isPurebred()
rex.feed()
var porkchop = new Pig()
porkchop.rollInMud()
porkchop.feed()
