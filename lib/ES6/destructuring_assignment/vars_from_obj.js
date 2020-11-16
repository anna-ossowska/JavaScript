// Replace the two assignments with an equivalent destructuring assignment.
// It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// before:
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow;

// after:
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

console.log(highToday);
console.log(highTomorrow);