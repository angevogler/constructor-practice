//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype

// Instances of Dog
// Needed: sadie, moonshine, atticus

function Dog (name, color) {
  this.name = name;
  this.status = 'normal';
  this.color = color;
  this.hungry = true;
}

let sadie = new Dog('sadie', 'black');
let moonshine = new Dog('moonshine');
let atticus = new Dog('atticus');


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype

// Instances of Human
// Needed: mason, julia

function Human (cool) {
  this.cool = cool;
}

Human.prototype.pet = function(dog) {
  dog.status = 'happy';
}

Human.prototype.feed = function(dog) {
  dog.hungry = false;
}

let mason = new Human(false);
let julia = new Human(true);

mason.pet('sadie');
mason.feed(sadie);
julia.feed('moonshine');
