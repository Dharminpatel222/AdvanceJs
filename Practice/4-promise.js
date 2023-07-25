// function prom(complete){

// return new Promise(function(resolve,reject){
//     if(complete){
//         resolve("i am successfull");
//     }else{
//         reject("i am not successfull");
//     }
// });
// }
// let onfulfilment = (result)=>{
//     console.log(result);
// }

// let onrejection = (error) =>{
//     console.log(error);
// }

// prom(true).then(onfulfilment);
// prom(true).catch(onrejection);

// let promise = new Promise((resolve, reject) => {
//     //   resolve({ name: "tej" }); + {age:19}
//     let arr =
//         resolve("tej");
//     let data =
//         reject("data not found");
// });

// promise
//     .then((res) => {
//         console.log("res :", res);
//     })
//     .then((res) => {
//         console.log("res2", res);
//     })
//     .catch((err) => {
//         console.log("err", err);
//     });


// const myPromise = new Promise(function(resolve,reject){
//     const a = 5, b = 5;
//     const c = a + b;

//     if(c === 10){
//         resolve("yes");
//     }else{
//         reject("no");
//     }
// });

// myPromise.then((res)=>{
//     console.log("res :",res);
// }).catch((err)=>{
//     console.log("err :",err);
// })


let Promise = new Promise((resolve,reject)=>{
    let person = {name:"kush", age:12}

    if(person.age<18){
        resolve(person);
    }else{
        reject("not eligible");
    }
})

Promise
        .then((res)=>{
            console.log("name is :",res.name);
            res.add="surat";
            return res.add
        })
        .then((res1)=>{
            console.log("res1:",res1);
            return console.log(res1)
        })
        .catch((err)=>{
            console.log("err :",err);
        })


