//Q1. Write a function that takes two numbers as arguments and returns their sum.

// function sum(num1,num2){
//     return (num1+num2);
// }
// let result = sum(1,2);
// console.log(result);

//Q2. Write a function that takes a string as an argument and returns its length.

// function stringLength(str){
//     let length = str.length;
//     return length;
// }
// console.log(stringLength("SakshiJadaun"));

//Q3. Write a program that takes two numbers and displays their sum, difference, product, and quotient.
 
// const num1 = Number(10); //Use number constructor which made them numeric values
// const num2 = Number(20);

// const sum = num1+num2;
// const sub = num1-num2;
// const mul = num1*num2;
// const div = num1%num2;

// console.log(`sum : ${sum}`);
// console.log(`sub : ${sub}`);
// console.log(`mul : ${mul}`);
// console.log(`div : ${div}`);

//Q4. Write a function that takes two numbers as arguments and returns the larger number.

// function getLarger(num1,num2){
//     if(num1>num2){
//         return num1;
//     }else{
//         return num2;
//     }
// }
// console.log(getLarger(18,48));

//Q5. Write a program that displays a string in reverse order.

// function reverseString(str){
//     let reversedString = str.split("").reverse().join("");  
//     return reversedString;
// }
// console.log(reverseString("Sakshi"));

//Q6. Write a program that takes a number and checks whether it is positive, negative, or zero.

// function checkNumber(num){
//     if(num>0){
//         console.log("positive");
//     }else if(num<0){
//         console.log("Negative");
//     }else{
//         console.log("Zero");
//     }
// }
// checkNumber(0);

//Q7. Write a program that takes a number and prints the multiplication table for that number.

// function multiplicationTable(num){
//     for(let i=1; i<=10; i++){
//         let table = num*i;
//         console.log(`${num} * ${i} = ${table}`);
//     }
// }
// multiplicationTable(5);

//Q8. Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

// function sumOfNumbers(num){
//     let sum = 0;
//     for(let i=1; i<=num; i++){
//         sum = sum+i;
//     }
//     return sum;
// }
// console.log(sumOfNumbers(4));

//Q9. Write a program that takes a string and prints out the number of vowels in the string.

// function countVowels(str){
//     let vowels = ['a','e','i','o','u'];
//     let count = 0;

//     for(let i=0; i<str.length; i++){
//         if(vowels.includes(str[i].toLowerCase())){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("Sakshi"));

//Q10. Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.

// function findCommonElements(arr1,arr2){

//     //create the empty array to hold the common elements
//     let commonElements = [];

//     //Loop through elements on arr1
//     for(let i=0; i<arr1.length; i++){

//         //check if the elements in arr2
//         if(arr2.includes(arr1[i])){

//         //If the element is in arr2 and not already in commonElements array, add it
//             if(!commonElements.includes(arr1[i])){
//                 commonElements.push(arr1[i]);
//             }
//         }
//     }

//     //sort the commonElements array in ascending order
//     commonElements.sort((a,b) => a-b);

//     //Return the commonElements array
//     return commonElements; 
// }

// // Example usage
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];
// const commonElements = findCommonElements(arr1, arr2);
// console.log(commonElements); 