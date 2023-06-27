// -> Want to re - use variable name so which variable mathod should i use

// ans=> var keyword

// ------------------------------------------------------------------------------------------

// -> give the list which variavble name not works in js
// 1. let a = 0
// 2. let "a" = 0
// 3. let 'a' = 0
// 4. let 10 = 0
// 5. let 1 = 0

// ans => let 10 = 0 & let 1 = 0

// ------------------------------------------------------------------------------------------

// let x = 100
// var y = 100
// const z = 100
// // {
//     x = 90
//     y = 90
    // z = 90
    // console.log(x) ___________________ point - x1
//     console.log(y) ___________________ point - y1
//     console.log(z) ___________________ point - z1
// }

// console.log(x) ___________________ point - x2
// console.log(Y) ___________________ point - y2
// console.log(Z) ___________________ point - z2

// what will print at x1 - 90
// what will print at y1 - 90
// what will print at z1 - Error
// what will print at x2 - 90
// what will print at y2 - 90
// what will print at z2 - Error

// ------------------------------------------------------------------------------------------

// -> task - 2

// console.log(x) ___________________ point - x2
// console.log(x) ___________________ point - y2
// console.log(x) ___________________ point - z2

// {
//     let x = 100
//     var y = 100
//     const z = 100
// }

// console.log(x) ___________________ point - x1
// console.log(y) ___________________ point - y1
// console.log(z) ___________________ point - z1


// what will print at x1 - Error
// what will print at y1 - 100
// what will print at z1 - Error
// what will print at x2 - error
// what will print at y2 - error
// what will print at z2 - error

// ------------------------------------------------------------------------------------------


// ====================================object==================================================



let obj = {
    name:"Dharmin",
    age:23,
    vehicle:["Bullet","Pulser","Splendor"]
}

//   1)   // console.log(obj); // full object print //

//   2)   // obj.sayhello = function () {  //annomonce function //
//        console.log(this.age);
// }

    // obj.sayhello();

//   3) console.log(Object.keys(obj));

//   4) console.log(Object.values(obj));

//   5) obj.city = "Bilimora";
//    console.log(obj);

    // 6)  delete obj.age;
    // console.log(obj);

    //  7)obj.addage = function(){
    //     console.log(this.age + 10);
    // }

    // obj.addage();
    


