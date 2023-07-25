// JavaScript: Display the current day and time in a specific format

// // Create a new Date object
// var currentDate = new Date();

// // Define an array of day names
// var days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// // Get the current day of the week
// var currentDay = currentDate.getDay();

// // Display the current day
// console.log("Today is " + days[currentDay]);

// ===================================================================

// const currentTime = new Date();
// const timeString = currentTime.toLocaleDateString();

// console.log("Current time: " + timeString);


// =======================================================================//

// JavaScript: Find the area of a triangle where lengths of the three of its sides are 5, 6, 7

// let side1 = 5;
//  let side2 = 6;
// let side3 = 7;

// var s = (side1+side2+side3)/2;

// let area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(area);

// ======================================================================    ERROR

// : Rotate a string from left to right 

// function animate_string(id) {
//   var element = document.getElementById(id);
//   var textNode = element.childNodes[0]; // assuming no other children
//   var text = textNode.data;

//   setInterval(function () {
//     text = text[text.length - 1] + text.substring(0, text.length - 1);
//     textNode.data = text;
//   }, 100);
// }

// ======================================================================//

// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// function isLeapYear(year) {
//   if (year % 4 !== 0) {
//     return false; // Not divisible by 4, not a leap year
//   } else if (year % 100 !== 0) {
//     return true; // Divisible by 4 but not by 100, leap year
//   } else if (year % 400 !== 0) {
//     return false; // Divisible by 100 but not by 400, not a leap year
//   } else {
//     return true; // Divisible by 400, leap year
//   }
// }

// // Example usage:
// const year = 2000;
// const isLeap = isLeapYear(year);
// console.log(isLeap); // Output: true

// =====================================================================//

// JavaScript: Find 1st January be a Sunday between a range of years

// for(var year=2015; year<=2050; year++){
//     var d = new Date(year,0,1);  // 0-month,1-date //
//     if(d.getDay()==0){
//         console.log(year);
//     }
// }

// ============================================================================//

// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched"

// const num = Math.ceil(Math.random()*10);

// console.log(num);

// let gnum = prompt("enter a number");

// if(gnum == num){
//     console.log("mathed");
// }else{
//     console.log("not matched");
// }

// ==========================================================================================//

// Write a JavaScript program to calculate the days left before Christmas.

// Get the current date
// const currentDate = new Date();

// // Get the current year
// const currentYear = currentDate.getFullYear();

// // Set the target date to Christmas
// const targetDate = new Date(currentYear, 11, 25); // Month is 0-based, so 11 represents December

// // Calculate the time difference in milliseconds
// const timeDiff = targetDate.getTime() - currentDate.getTime();

// // Convert milliseconds to days
// const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

// // Display the result
// console.log(`There are ${daysLeft} days left until Christmas.`);


// ==============================================================================//

// Write a JavaScript program to convert temperatures to and from celsius, fahrenheit

// function ctof(celsius){
//     let ctemp = celsius;
//     let ctofr = ctemp * 9/5 + 32;
//     let message = ctofr;
//     console.log(message);
// }
// ctof(60);
// function frtoc(fahrenheit){
//     let ftoc = fahrenheit;
//     let frtoc = (ftoc - 32)*5/9;
//     let message1 = frtoc;
//     console.log(message1); 
// }
// frtoc(140);

// ===================================================================================//

// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute differenc

// function difference(n){
//     if (n<=13){
//         return 13-n;
//     }else{
//         return (n-13)*2;
//     }
// }
// console.log(difference(32));
// console.log(difference(2));

// =============================================================================//

// Remove a character at the specified position of a given string and return the new string
// function remove_character(str, char_pos) {
//   part1 = str.substring(0, char_pos);
//   part2 = str.substring(char_pos + 1, str.length);
//   return part1 + part2;
// }

// console.log(remove_character("Python", 0));
// console.log(remove_character("Python", 3));
// console.log(remove_character("Python", 5));


// ==============================================================================//

//  Create a new string from a given string changing the position of first and last characters

// function first_last(str1){
//     if(str1.length<=1){
//         return str1;
//     }
//     mid_char = str1.substring(1,str1.length-1);
//     return (str1.charAt(str1.length-1)) + mid_char + str1.charAt(0);
// }
// console.log(first_last("abcd"))

// =================================================================//

// Check whether a given positive number is a multiple of 3 or a multiple of 7

// function multiple(x){
//     if(x%3==0 || x%7==0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(multiple(15));

// ========================================================================//

// Create a new string from a given string taking the last 3 characters and added at both the front and back

// function front_back(str){
//     if(str.length>=3){
//         str.len = 3;

//         back = str.substring(str.length-3); ///  str.substring(0)=>back=abc //
//         return back + str +back;
//     }else{
//         return false
//     }
// }
// console.log(front_back("abc"));

// =========================================================================//

// Check whether a string starts with 'Java' and false otherwise

// function start_str(str){
//     if(str.length<4){
//         return false
//     }
//     front = str.substring(0,4);
//     if(front == "java"){
//         return true
//     }else{
//         return true;
//     }
// }
// console.log(start_str("javascript"));

// ===================================================================//

// Check whether two given integer values are in the range 50..99

// function chech(x,y){
//     if((x>=50 && x<=99) || (y>=50 && y<=99))
//     {
//         return true
//     }else{
//         return false
//     }
// }
// console.log(chech(52,80));

// ==================================================================//

// Check whether two given integer values are in the range 50..99

// function max_of_three(x, y, z) {
//   max_val = 0;
//   if (x > y) {
//     max_val = x;
//   } else {
//     max_val = y;
//   }
//   if (z > max_val) {
//     max_val = z;
//   }
//   return max_val;
// }

// console.log(max_of_three(1, 0, 1));
// console.log(max_of_three(0, -10, -20));
// console.log(max_of_three(1000, 510, 440));

// =======================================================================//

// Find a value which is nearest to 100 from two different given integer values

// function near_100(x,y){
//     if (x!=y){
//         x1 = Math.abs(x-100);
//         y1 = Math.abs(y-100);
//         if(x1<y1){
//             return x;
//         }
//         if(y1<x1){
//             return y;
//         }
//         return 0;
//         }else{
//         return false;
//     }
// }
// console.log(near_100(90,89));

// ===========================================================================//

//  Check whether two numbers are in range 40..60 or in the range 70..100 inclusive

// function number_change(x,y){
//     if((x>=40 && x<=60 && y>=40 && y<=60) || (x>=70 && y<=100 && y>=70 && y<=100)){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(number_change(44,56));

// ======================================================================//

// Find the larger number from the two given positive integers

// function max_num(x,y){
//     if((x>=40 && x<=60) && (y>=40 && y<=60)){
//         if(x===y){
//             return "number same";
//         }else if(x>y){
//             return x;
//         }else{
//             return y;
//         }
//     }else{
//         return "number not fit range";
//     }
// }
// console.log(max_num(44,60));

// ==================================================================//

// Compute the sum of the two given integers

// function sum(x,y){
//     let sum_value = x + y;
//     if(sum_value>=50 && sum_value<=80){
//         return 65;
//     }else{
//         return 80;
//     }
// }
// console.log(sum(30,20));

// ==================================================================//

// Check from two given integers whether one of them is 8 or their sum or difference is 8

// function sum(x,y){
//     if(x==8 || y==8){
//         return true;
//     }
//     if(x+y==8 || Math.abs (x-y) == 8){
//         return true
//     }else{
//         return false;
//     }
// }
// console.log(sum(24,32));

// ========================================================================//

// let ans = "Dharmin Patel";

// let result = ans.split(" ").join("");

// console.log(result); 

// output = DharminPatel

// ===========================================================//

// Check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40

// function three_number(x,y,z){
//     if(x==y && y==z){
//         return 30;
//     }
//     if(x==y || y==z || z==x ){
//         return 40;
//     }
//     else{
//         return 20;
//     }
// }
// console.log(three_number(8,8,18));

// ========================================================================//

// Check from three given numbers that two or all of them have the same rightmost digit

// function right_digit(p,q,r){
//     return (p % 10 === q % 10) || (p % 10 === r % 10) || (q % 10 === r % 10);
// }
// console.log(right_digit(11,22,61));

// =======================================================================//

// Check from three given integers that whether a number is greater than or equal to 20 and less than one of the others

// function lessby_20(x,y,z){
//     return (x>=20 && (x<y || x<z)) ||
//     (y>=20) && (y<x || y<z) ||
//     (z>=20) && (z<x || z<y)
// }
// // console.log(lessby_20(23,45,10)); true
// console.log(lessby_20(23,23,10)); false

// =============================================================================//

// //  Reverse a given string

// function revers(name){
//     return name.split('').reverse().join('');
// }
// console.log(revers("welcom"));

// =======================================================================//

// Capitalize the first letter of each word of a given string

// function capital_letter(str) {
//   str = str.split(" ");

//   for (let i = 0, x = str.length; i < x; i++) {
//     str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//   }

//   return str.join(" ");
// }

// console.log(
//   capital_letter(
//     "write a javaScript program."
//   )
// );

// =======================================================================//

// Convert a given number to hours and minutes

// function convert(num){
//     let hours = Math.floor(num/60);
//     let minutes = num % 60;
//     return hours + ":" + minutes;
// }
// console.log(convert(450));

// ===============================================================//

// Convert the letters of a given string in alphabetical order

// function alpha(str){
//     return str.split('').sort().join('');
// }
// console.log(alpha("Python"));

// =================================================================//

// function equal_pt(str)
// { 
//   var str_p = str.replace(/[^p]/g, "");

//   var str_t = str.replace(/[^t]/g, "");

//   var p_num = str_p.length;
//   var s_num = str_t.length;

//   return p_num === s_num;
         
// }
// console.log(equal_pt("paatpss"));
// console.log(equal_pt("paatpst"));

// =================================================================//

// Write a JavaScript program to extract the first half of a even string.

// function first_half(str){
//   if(str.length % 2 == 0){
//     return str.slice(0,str.length/2);
//   }
//   return str;
// }

// console.log(first_half('python'));

// ==================================================================//

// Write a JavaScript program to create a new string without the first and last characters of a given string.

// function new_str(str){
//   return str.slice(1,str.length-1);
// }
// console.log(new_str("javascript"));

// ======================================================================//

// Write a JavaScript program to concatenate two strings except for their first character.

// function concat(str1,str2){
//   str1 = str1.substring(1,str1.lenght);
//   str2 = str2.substring(1,str2.lenght);
//   return str1 + str2;
// }
// console.log(concat("python","javascript"));

// ==========================================================================//

// Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.

// function right_three(str) {
//   if (str.length > 1) {
//     return str.slice(-3) + str.slice(0, -3);
//   }
//   return str;
// }
// console.log(right_three("Python"));
// console.log(right_three("JavaScript"));
// console.log(right_three("Hi"));

// ================================================================================//

// Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.

// function endstr(str){
//   if(str.substring(str.length-6,str.length)=="script"){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(endstr("javascript"));

// ==============================================================================//

// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

// function cityname(str){
//   if(str.length >= 3 && ((str.substring(0,3) == "los") || (str.substring(0,3)== "new"))){
//     return str;
//   }
// }
// console.log(cityname("new york"));

// =========================================================================//

// Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.

// function twostr(str,n){
//   first_part = str.substring(0,n);
//   last_part = str.substring(str.length-n);
//   return first_part + last_part;

// }
// console.log(twostr("javascript",2));

// =================================================================================//

// Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.

// function firstlast(num){
//   if(num[0]==1 || (num[num.length-1]==1)){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(firstlast([1,3,5,7]));

//============================================================================//

// Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.

// function middle_ele(a,b){
//    let new_array = []
//     new_array.push(a[1],b[1]);
//     return new_array;
// }

// console.log(middle_ele([1,2,3],[4,3,5]));

//============================================================================//

// Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.

// function started(nums){
//     let new_array = [];
//     new_array.push(nums[0],nums[nums.length-1]);
//     return new_array;
// }
// console.log(started([10,20,30]));

//========================================================================//

// Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

// function max_diff(arr){
//     var max = -1;
//     var temp;

//     for ( let i=0;i<arr.length-1;i++){
//         temp = Math.abs(arr[i] - arr[i+1]);
//         max = Math.max(max,temp);
//     }
//     return max;
// }
// console.log(max_diff[1,2,3,8,9]);

//======================================================================//

// Write a JavaScript program to replace all numbers with a specified number in an array of integers.

// function array_ele(arr,old_ele,new_ele){
//     for( let i = 0; i<arr.length;i++){
//         if(arr[i]===old_ele){
//             arr[i] = new_ele;
//         }
//     }
//     return arr;
// }
// num = [1,2,3,2,2,4,6,7]
// console.log(array_ele(num,2,5));

//===========================================================================//

// Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.

// function sum(arr){
//     var result = 0;
//     for(var i = 1; i<arr.length ; i++){
//         result += Math.abs(arr[i] - arr[i - 1]);
//     }
//     return result;
// }
// console.log(sum([1,2,3,4,-7,3]));

//==============================================================================//

// Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers.

// function check_common_element(arra1, arra2) {
//   for (var i = 0; i < arra1.length; i++) {
//     if (arra2.indexOf(arra1[i]) != -1) return true;
//   }
//   return false;
// }
// console.log(check_common_element([1, 2, 3], [3, 4, 5]));
// console.log(check_common_element([1, 2, 3], [5, 6, 7]));   

//============================================================================//
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

// function upper(str){
//     var array1 = str.split(' ');
//     var newarray1 = [];

//       for (var x = 0; x < array1.length; x++) {
//         newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
//       }
//       return newarray1.join(" ");
// }
// console.log(upper("the quick brown fox"));

//=============================================================================//
// Write a JavaScript function which returns the n rows by n columns identity matrix.

// function mat(n){
//     var i;
//     var j;

//     for(i=0;i<n;i++){

//         for(j=0;j<n;j++){

//             if(i===j){

//                 console.log("1");

//             }else{

//                 console.log("0")
//             }
//         }
//         console.log("=====");
//     }
// }
// console.log(mat(4));

//=============================================================//









