
// task - 3
// 1.['i', 'am', 'urvish'] ==> want['urvish', 'am', 'i']
// by use of map, loop and reducer
// 2. want "i am urvish" without use join method

// 1.['i', 'am', 'urvish'] ==> want['urvish', 'am', 'i']

// let array = ['i','am','dharmin'];

// // by use map

// let array2 = array.map((e,i)=>{
//     return array[array.length - 1 - i];
// });

// console.log(array2);

// by use loop

// let array = ['i','am','dharmin'];
// let str=[];

// for(let i=array.length-1;i>=0;i--){

//         str.push(array[i]);

// }
// console.log(str);

// by reduce

// let array = ['i','am','dharmin'];
// let revarr =[];

// array.reduce((LastEle,ele)=>{
//     revarr.unshift(ele);
// },0);

// console.log(revarr);

// 2. want "i am urvish" without use join method

let arr = ['i','am','dharmin'];

let total = [""];

for(let i=0;i<arr.length;i++){
    total = total + arr[i];
}
console.log(total);















