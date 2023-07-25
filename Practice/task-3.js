// -> make one array who have value from 1 to 10

// 1. print 9th and 10th index of array
// 2. print every element of array by map reduce and for loop
// 3. change a value of 6th index with 100
// 4. print a array till element value not gratter then 100
// 5. pluse 1 in every element of an array
// 6. add 0 in start of array
// 7. add  99 in end of array
// 8. remove 1 element from start of  array
// 9. remove 1 element from end of array
// 10. do sum of all value of an array with use of map, reduce and for-loop
// 11. sort a array in acending decending
// 12. reverce an array with use of method
// 13. reverce an array with use of for-loop


// let array = [1,2,3,4,5,6,7,8,9,10];

//  (1)    console.log(array.indexOf(9));
//         console.log(array.indexOf(10));

// (2)
// by map

// let red = array.map((i)=>{
//     console.log(i);
// });

// by reduce
// let red = array.reduce((lastEle,ele)=>{
//     console.log(ele);
//     return lastEle + ele; // output = 55 //
// })

// by loop

// for(let i=0;i<array.length;i++){
//     let count = array[i];
//     console.log(count);
// }

// (3)

// console.log(array[7]);

// array[7] = 100;

// console.log(array);

// (4)

// let array = [1, 2, 3, 4, 5,100, 6, 7, 8, 9, 10];


// for(let i=0;i<array.length;i++){
//     let count = array[i];

//     if(array[i]==100){
//         break;
//     }
//     console.log(count);

// }

// (5)

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(i=0;i<array.length;i++){
//     let count = array[i] + 1;
//     console.log(count);
// }

// (6)

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  array.unshift(0);

// console.log(array);

//(7)

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array.push(99);

// console.log(array);

// (8)

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array.shift();

// console.log(array);

//(9)

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array.pop();

// console.log(array);

// 10) do sum of all value of an array with use of map, reduce and for-loop

// by use map

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let total = 0;

// let sum =  array.map((i)=>{

//     total = total + i;

// })
// console.log(total);

// by use reduce

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// total = 0;

// let sum = array.reduce((lastelm,ele)=>{

//     total = total + ele;

// },0)

// console.log(total);

// by use for loop

// let total = 0;

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// for(let i=0;i<array.length;i++){
//     total = total + array[i];
// }
// console.log(total);

// 11. sort a array in acending decending

// let array = [9,7,8,6,5,4,3,2,1];

// console.log(array.sort());  // acending //

// console.log(array.reverse()); // decendind //

// 12. reverce an array with use of method

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array.reverse();

// console.log(array);

// 13. reverce an array with use of for-loop


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i=array.length-1;i>=0;i--){

//     console.log(array[i]);

// }



































