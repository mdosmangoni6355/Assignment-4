// --- Problem-1 ---
function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please input type a number!";
  }
  return number ** 3;
}
const output = cubeNumber(3);
// console.log(output);

// --- Problem-2 ---
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please input a string";
  }
  else if (string1.includes(string2)) {
    return true;
  }
  else {
    return false;
  }
}
const output1 = matchFinder("John Doe", "ohn");
// console.log(output1);

// --- Problem-3 ---
function sortMaker(arr) {
  const firstElement = arr[0];
  const secondElement = arr[1];

  if (firstElement < 0 || secondElement < 0) {
    return "Invalid Input";
  }
  else if (firstElement === secondElement) {
    return "equal";
  }
  else if (secondElement > 0) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
}
let inputArray = [2, 3];
let result = sortMaker(inputArray);
// console.log(result);

// --- Problem-4 ---
function findAddress(obj) {
  const houseNumber = obj.houseNumber || "__";
  const street = obj.street || "__";
  const city = obj.city || "__";

  return houseNumber + "," + street + "," + city;
}
const address = {
  houseNumber: "10",
  street: "15A",
  city: "Earth Perfect",
};
const output2 = findAddress(address);
// console.log(output2);

// --- Problem-5 ---
function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "Please type three values in the array.";
  }

  let totalAmount = 0;
  for (let i = 0; i < changeArray.length; i++) {
    totalAmount += changeArray[i];
  }

  return totalAmount >= totalDue;
}

const changeNotes = [1, 2, 5];
const chipsPrice = 10;
const canPurchase = canPay(changeNotes, chipsPrice);
// console.log(canPurchase);
