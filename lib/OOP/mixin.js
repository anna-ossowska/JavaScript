// Create a mixin named glideMixin that defines a method named glide.
// Then use the glideMixin to give both bird and boat the ability to glide.

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {
    return "I am able to glide!";
  };
};

// We need to pass an object to the glideMixin first
glideMixin(bird);
glideMixin(boat);

// Now both bird and boat can glide
console.log(bird.glide()); // I am able to glide!
console.log(boat.glide()); // I am able to glide!
