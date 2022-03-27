// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] 
const array2 = ['a', 3, 4, 2]
const array3 = [] // should return 0

//Sholution
function biggestNumberInArray(arr) {
  let biggestNum = 0;
  arr.forEach(num => {
    if(num>biggestNum)
      biggestNum = num;
  });
  return biggestNum;
}

function biggestNumberInArray2(arr) {
  let biggestNum = 0;
  for(num of arr) {
    if (num>biggestNum)
      biggestNum = num;
  }
  return biggestNum
}

function biggestNumberInArray3(arr) {
  let biggestNum = 0;
  for(num in arr) {
    if (num>biggestNum)
      biggestNum = num;
  }
  return biggestNum
}

console.log(biggestNumberInArray(array));
console.log(biggestNumberInArray2(array2));
console.log(biggestNumberInArray3(array3));



// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

//Sholution
function checkBasket(basket, lookingFor) {
  for(item in basket) {
    if(item === lookingFor)
      return true;
  }
  return false;
}
checkBasket(amazonBasket, 'books');
checkBasket(amazonBasket, 'cds');