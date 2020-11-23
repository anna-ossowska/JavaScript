function countDownRecursive(n) {
  if (n <= 0) {
    console.log('We have reached 0');
  } else {
    console.log(n);
    countDownRecursive(n - 1);
  }
}

console.log(countDownRecursive(3));