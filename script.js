'use strict';

//Task 1.1
function addNumbers (firstNumber = 0.1, secondNumber = 0.2) {
  return (firstNumber + secondNumber).toFixed(1);
};

console.log(addNumbers());


//Task 1.2
function addStringNumbers (firstNumber = "1", secondNumber = 2) {
  return (Number(firstNumber) + secondNumber);
};

console.log(addStringNumbers());


// Task 1.3
let flashDriveSize = '';

function getFileSize () {
  flashDriveSize = prompt('Enter flash drive size in Gb');
  flashDriveSize *= 1024;
};

function countFiles (fileSize = 820, storageSize) {
  return Math.floor(storageSize/fileSize);
};

getFileSize();
console.log(countFiles(820, flashDriveSize));


//Task 2.1
let moneyAmount = '';
let productPrice = '';

function getPrice () {
  moneyAmount = prompt('Enter how much money you have in your wallet');
  productPrice = prompt('Enter the price of one chocolate bar');
};

function buyProducts (money, price) {
  return `You can buy ${Math.floor(money / price)} chocolates.` + ((money % price) ? ` The change is ${(money % price)} EUR.` : ` No change.`);
};

getPrice();
console.log(buyProducts(moneyAmount, productPrice));

//Task 2.2
let userNumber = '';

function getNumber () {
  userNumber = prompt('Enter your number.');
}

function reverseNumber (numberToReverse) {
  return numberToReverse ? Number(numberToReverse.split('').reverse().join('')) : 'Please, enter a valid number.';
}

getNumber();
console.log(reverseNumber(userNumber));



//Task 3.1
const CALCULATE_BUTTON = document.querySelector("#action-button");
const DEPOSIT_VALUE = document.querySelector("#depositAmount");


CALCULATE_BUTTON.addEventListener("click", depositCalculator);
DEPOSIT_VALUE.addEventListener("change", percentageCalculator);

function depositCalculator() {
  const DEPOSIT_TERM = Number(document.querySelector("#month").value);
  const DEPOSIT_AMOUNT = Number(document.querySelector("#depositAmount").value);
  const DEPOSIT_PERCENTAGE = Number(document.querySelector("#depositPercent").value);

  if(DEPOSIT_PERCENTAGE === 0.06 || DEPOSIT_PERCENTAGE === 0.09) {
    document.querySelector(".calculator__result-currency").innerHTML = "$";
  } else {
    document.querySelector(".calculator__result-currency").innerHTML = "€";
  }

  const RESULT = (DEPOSIT_AMOUNT + DEPOSIT_AMOUNT*DEPOSIT_PERCENTAGE*DEPOSIT_TERM/12).toFixed(2);
  document.querySelector("#calculator__result").innerHTML = RESULT;
};


function percentageCalculator() {
  const DEPOSIT_AMOUNT = Number(document.querySelector("#depositAmount").value);

  if(DEPOSIT_AMOUNT >= 10000) {
    document.querySelectorAll(".premium-percentage").forEach(element => element.removeAttribute("hidden"));
    document.querySelectorAll(".standard-percentage").forEach(element => {element.setAttribute("hidden", ""); element.removeAttribute("selected")});
    document.querySelector(".premium-percentage").setAttribute("selected", "");
  } else {
    document.querySelectorAll(".standard-percentage").forEach(element => element.removeAttribute("hidden"));
    document.querySelectorAll(".premium-percentage").forEach(element => {element.setAttribute("hidden", ""); element.removeAttribute("selected")});
    document.querySelector(".standard-percentage").setAttribute("selected", "");
  }
};