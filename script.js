'use strict';

function getNumbers () {

};

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

