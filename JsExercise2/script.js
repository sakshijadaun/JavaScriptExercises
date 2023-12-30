//Q1. Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.

// function greet(name){
//     console.log(`Hello ${name}`);
// }
// greet("Sakshi");

//Q2. Write a function called 'getSquare' that takes a number parameter and returns its square.

// function getSquare(side){
//     return side**2;
// }
// console.log(getSquare(8));

//Q3.  Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

// function countLetters(str){
//     let obj = {}
//     for(let i=0; i<str.length; i++){
//         const char = str[i];

//         if(obj[char]){
//             obj[char]++;
//         }else{
//             obj[char] = 1;
//         }
//     }
//     return obj;
// }
// const letterCounts = countLetters("SakshiJadaun");
// console.log(letterCounts);

//Q4. Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

// function createCounter(){
//       let count = 0;
      
//       return function(){
//         count++;
//         return count;
//       }
      
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

//Q5. Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

// function sumEvenNumbers(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 == 0){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// const arr = [1,2,3,4,5,6];
// console.log(sumEvenNumbers(arr));

//Q6. Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

// function sumOfNumbers(numbers){   //Using for of loop
//     let sum=0;
//     for(let number of numbers){
//         sum += number;
//     }
//     return sum;
// }
// const numbers = [1,2,3,4];
// console.log(sumOfNumbers(numbers));

// function sumOfNumbers(numbers){   //using Normal for-loop
//     let sum = 0;
//     for(let i = 0; i<numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum;
// }
// const numbers = [1,2,3,4];
// console.log(sumOfNumbers(numbers));

//Q7. Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.

// function filterLongStrings(arr){
//     let filteredArr = [];

//     for(let i=0; i<arr.length; i++){
//         if(arr[i].length>5){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// console.log(filterLongStrings(["apple","banana","kiwi","watermelon","orange"]));

//Q8. 