
// task - 4

// ['i', 'am', 'urvish'] ==> want['hsivru', 'ma', 'i']
// by use of map, loop and reducer 


let array = ['i','am','dharmin'];

let str = [];

// Using For loop..........

// for (let i = 0; i < array.length; i++) {

//     let x = array[i].split("");

//     let y = x.reverse();

//     let z = y.join("");

//     str.push(z);

// }

// let b = str.reverse();
// console.log("Ans:", b);

// using by map

// let arr = array.map((e)=>{
//     let x = e.split("");

//     let y = x.reverse();

//     let z = y.join("");

//     str.push(z);
    
// });

// let b = str.reverse();

// console.log(b);

// by using reduce

let arr = array.reduce((LastEle,ele)=>{

    let x = ele.split("");

    let y = x.reverse();

    let z = y.join("");

    str.push(z);
},0);

let b = str.reverse();

console.log(b);
