/* 
Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
 make a function that organizes these into individual array that is ordered. 
 For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
 Bonus: Make it so it organizes strings differently from number types.
 i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
 */

//Solution

let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const orderArray = (array) => {
	array = array.sort((a, b) => a - b);
	let result = [];
	for (let i=0; i<array.length; i++) {
		let filterArray = array.filter(num => num === array[i]);
		if(filterArray.length === 1) {
			filterArray = filterArray[0];
		}
		if(!result.flat().includes(array[i])) {
			result.push(filterArray);
		}
	}
	return result;
}

console.log(orderArray(array));

//Bonus: Solution

let array2 = ['1',2,4,'591',392,391,'2',5,'10',2,1,1,'1',20,20];

const filterNumbers = (array) => array.filter(num => typeof num === 'number').sort((a, b) => a - b);
const filterStrings = (array) => array.filter(string => typeof string === 'string').sort((a, b) => a - b);	

const orderArray2 = (array) => {
	let result = [];
	const numbers = filterNumbers(array);
	const strings = filterStrings(array);
 	result.push(numbers)
 	result.push(strings);
	return result;
}

console.log(orderArray(array2));
/*
Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together,
 give the target number. For example: answer([1,2,3], 4)should return [1,3]
 */


 const twoAddends = (array, target) => {
 	let firstAddend;
 	for(let i=0; i<array.length/2; i++) {
 		firstAddend = array[i];
 		for(let j=1; j<array.length; j++) {
 			if(firstAddend + array[j] === target && firstAddend !== array[j]) {
 				return `${firstAddend} + ${array[j]} = ${target}`;
 			}
 		}
 	}
 	return `Nie znaleziona w tablicy 2. takich liczb, ktorych suma wynosi ${target}`;
 }

 console.log(twoAddends([1, 2, 4, 6, 4, 11, 17, 4, 27], 15));
 console.log(twoAddends([1, 2, 4, 6, 4, 11, 17, 4, 27], 26));

 /* 
 Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats
  so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.*/
  


