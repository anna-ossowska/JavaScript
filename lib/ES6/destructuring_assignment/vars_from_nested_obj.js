// Replace the two assignments with an equivalent destructuring assignment.
// It should still assign the variables lowToday and highToday the values
// of today.low and today.high from the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// before:
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

// after:
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
console.log(lowToday);
console.log(highToday);