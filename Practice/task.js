
// task 1 //
// let person = [
//     { name:"dharmin", age:12},
//     { name: "tej", age: 10 },
//     { name: "ram", age: 20 },
// ];

// let array = person.map((fname)=>{
//     console.log(`${fname.name}`)
// });



////// task 2 //


// let promise = new Promise((resolve,reject)=>{
//     let person = {name:"kush",age:10}

//     if(person.age<18){
//         resolve(person);
//     }else{
//         reject("not eligible");
//     }
// })

// promise
//         .then((res)=>{
//             console.log("naem is :",res.name);
//             res.add = "surat";
//             return res.add
//         })
//         .catch((error)=>{
//             console.log("error :",error);
//         })

        /// taske 3 /// promise...

// let promise = new Promise((resolve, reject) => {
//     let person = { name: "kush", 
//                     suraname : "patel",
//                     age: 10,
//                 }

//     if (person.age < 18) {
//         resolve(person);
//     } else {
//         reject("not eligible");
//     }
// })

// promise
//     .then((res) => {
//         console.log("naem is :", res);
//         res.add = "bilimora";
//     })
//     .catch((error) => {
//         console.log("error :", error);
//     })

    // task 4 // callback

    // function f1(data){
    //     data.age=23;
    //     console.log(data.fname+""+data.lname +""+data.age);
    // }

    // function f2(fname,lname,callbak){
    //     let person = { 
    //         fname : fname,
    //         lname: lname,
    //     } 
    //     callback(person);
    // }
    // f2("dharmin","patel",f1);

    // try catch //

    // function find(){
    //     var x = {name : "dharmin"}
    //     return console.log(x.name)
    // }

    // function find1(){
    //     var x1 = {surname : "patel"}
    //     return console.log(x1.surname)
    // }

    // function find2(){
    //     var x2 = {add : "bilimora"}
    //     return console.log(x2.add)
    // }

    // function bug(){
    //     throw new Error("========Error====");
    //     setTimeout(()=>{
    //             console.log("Error");
    //     },5000);
    // }
    //  function mainfun(){
    //     try{
    //             let x1 = find();
    //             let x2 = find1(x1);
    //             let x3 = find(x2);
    //     }catch(error){
    //             console.log(error);
    //     }
    //  }
    //  mainfun();

    // reduse using adition //

    // let arr = [1,2,3,4,5,6]

    // let total = arr.reduce((lastEle,ele)=>{
    //     console.log("LastElement is :",lastEle);
    //     console.log("Element is :", ele);

    //     return lastEle + ele;

    // })

    // console.log("reduce :",total);

    // distructureing //

//     let find = ["dharmin",23,"bilimora"]


//     let x = find[0];
//     let y = find[1];
//     let z = find[2];

//     console.log(x);
// console.log(y);
// console.log(z);

// recursion//

// function count(num){
//     console.log(num);

//     const total = num-1;

//     if(total>0){
//         count(total);
//     }
// }

// count(5);

// chaining //

// let obj = {
//     name : "dharmin",
//     add : "bilimora",
//     age : 25,
// };

// let m = obj.city? (obj.name) : null;
// console.log("m :",m)

// let n = obj.add ? (obj.name) : null;
// console.log("m :", n)


//

// let arry = [1,53,45,20,59]  // maximum value find //

// let ans = arry.reduce((a,b)=>{
//     return (a>b)? a:b;
// });



// map using arr //

// let arry = [1, 53, 45, 20, 59]

// let ans = aary.map((i)=>{
    
// })


// for loop //

// let arry = [1,2,3,4,5,6,7,8]

// for (i=0;i<arry.length;i++){

//     if(i==7)
// {
//     break;
// }    console.log("element:", arry[i]);

// }

// map //

// let arry = [1, 2, 3, 4, 5, 6, 7, 8]

// let x = arry.map((i)=>{
//     console.log(i);
// })

// ================================================================

let arry = [1,2,4,5,6,7,8];

delete arry[2]; // delete //

console.log(arry[2]);

arry[2]=9;

// arry.push(9); //push method //

console.log(arry);











