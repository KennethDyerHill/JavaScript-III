/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1
function animalNoise(noise) {
   console.log(this);
   return noise;
}
animalNoise('Moo!');
// code example for Window Binding

// Principle 2
const snakes = {
    food: 'Mice',
    sound: function(snakeSound) {
        console.log(`My pet loves to eat ${this.food} and she loves to say ${this.snakeSound}`);
        console.log(this);
    }
};
snakes.sound('Hiss!');
// code example for Implicit Binding

// Principle 3
function wastelandWanderer(greeter) {
    this.greeting = 'Got a stimpak, ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const falloutBoy = new greeter('Renegade');
  const renegade = new greeter('Fallout Boy');
  
  falloutBoy.speak();
  renegade.speak();
  
// code example for New Binding

// Principle 4
function wastelandWanderer(greeter) {
  this.greeting = 'Got a stimpak, ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const falloutBoy = falloutBoy.speak.apply('Renegade');
const renegade = renegade.speak.call('Fallout Boy');

falloutBoy.speak();
renegade.speak();


// code example for Explicit Binding