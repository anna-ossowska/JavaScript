// Use the class keyword to create a Thermostat class.The constructor accepts a Fahrenheit temperature.
// Now create a getter and a setter in the class, to obtain the temperature in Celsius.
// Remember that C = 5 / 9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit,
// and C is the value of the same temperature in Celsius.
// Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
// This is the power of a getter and a setter.You are creating an API for another user, who can get the correct result regardless
// of which one you track.
// In other words, you are abstracting implementation details from the user.

class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  // getter
  get temperature() {
    return 5 / 9 * (this._fahrenheit - 32);
  }

  // setter
  set temperature(celcius) {
    this._fahrenheit = celcius * 9.0 / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);