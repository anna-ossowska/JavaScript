// create an object with the CURRENCY UNIT as keys and the AMOUNT as values
// multiple all money amounts by 100 to avoid the common problem with the fraction display
const moneyObj = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
};


function checkCashRegister(price, cash, cid) {
  let change = [];
  // use Math.round() to get rid of any fractional digits
  let amountToPay = Math.round((cash - price) * 100);
  // convert the cid being a two-dimensional array into an object
  // the 2nd arg inside the callback (which we are going to loop over) is the actual array
  // the 2nd parameter of the reduce function is {}
  let cidObj = cid.reduce((accumulator, [currencyUnit, amount]) => {
    return { ...accumulator, [currencyUnit]: Math.round(amount * 100)};
  }, {});

  // run for each CURRENCY UNIT
  [amountToPay, cidObj, change] = fetchCidMoney(amountToPay, cidObj, change, "ONE HUNDRED");
  [amountToPay, cidObj, change] = fetchCidMoney(amountToPay, cidObj, change, "TWENTY");
  [amountToPay, cidObj, change] = fetchCidMoney(amountToPay, cidObj, change, "TEN");
  [amountToPay, cidObj, change] = fetchCidMoney(amountToPay, cidObj, change, "FIVE");
  [amountToPay, cidObj, change] = fetchCidMoney(amountToPay, cidObj, change, "ONE");
  [amountToPay, cidObj, change] = fetchCidMoney(amountToPay, cidObj, change, "QUARTER");
  [amountToPay, cidObj, change] = fetchCidMoney(amountToPay, cidObj, change, "DIME");
  [amountToPay, cidObj, change] = fetchCidMoney(amountToPay, cidObj, change, "NICKEL");
  [amountToPay, cidObj, change] = fetchCidMoney(amountToPay, cidObj, change, "PENNY");

  // count how much money left in cid
  // retrieve all the object values and sum them using the reduce method
  let cidMoneyLeft = Object.values(cidObj).reduce((sum, value) => sum + value, 0);
  
  // final conditions
  if (amountToPay > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else if (cidMoneyLeft > 0) {
    return { status: 'OPEN', change: change };
  } else {
    return { status: "CLOSED", change: cid };
  }
}

// ---------------------------------------------------------------

function fetchCidMoney(amountToPay, cidObj, change, currencyUnit) {
  if (cidObj[currencyUnit] && amountToPay >= moneyObj[currencyUnit]) { // we want cidObj["ONE HUNDRED"] to exists, hence cidObj[currencyUnit]
    if (amountToPay >= cidObj[currencyUnit]) {
      let moneyToSubtract = cidObj[currencyUnit];
      amountToPay -= moneyToSubtract;
      change.push([currencyUnit, moneyToSubtract / 100]);
      cidObj[currencyUnit] = 0;
    } else {
      let moneyToSubtract = moneyObj[currencyUnit] * Math.floor(amountToPay / moneyObj[currencyUnit]);
      amountToPay -= moneyToSubtract;
      change.push([currencyUnit, moneyToSubtract / 100]);
      cidObj[currencyUnit] -= moneyToSubtract;
    }
  }
  return [amountToPay, cidObj, change];
}

console.log(checkCashRegister(3.26, 200, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // should return { status: "OPEN", change: [["QUARTER", 0.5]] }.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // should return { status: "INSUFFICIENT_FUNDS", change: [] }.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // should return { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] }.