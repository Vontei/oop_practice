function Animal(name){
  this.name = name;
}

Animal.prototype.speak = function(){
  console.log('says hi');
}

Animal.prototype.feed = function(){
  console.log('NOM NOM NOM')
}

function Pig(name){
  Animal.call(this)
  this.name = name
}


function Dog(breed, name){
  Animal.call(this)
  this.name = name
  this.breed = breed
}

function Rhino(name){
  Animal.call(this)
  this.name = name
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


var ventura = new Rhino('ventura')
ventura.removeHorn()
var rex = new Dog('shepherd', 'rex')
rex.speak()
rex.isPurebred()
rex.feed()
var porkchop = new Pig('porkchop')
porkchop.rollInMud()
porkchop.feed()
porkchop.speak()
