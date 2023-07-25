const data = require("./task-8.json");

// console.log(data);

// ========state na name pr thi city na aname =======================

// by used functin user defined ////

function getCityByStateName(state){
  let filterData = data.filter((e) => {
    return e.state_name === state;
  });
  console.log(filterData);
  console.log(filterData.length);

}
 getCityByStateName('Delhi')

//=====================================================//

// let filterData = data.filter((e) => {
//   return e.state_name === "Bihār";
// });
// console.log(filterData);
// console.log(filterData.length);


// ===============================================================================

// let filterData = data.filter((e)=>{
//   return e.city.length >= 15;
// })

// console.log("🚀 ~ file: task-8.js:21 ~ c:", filterData);
// console.log(filterData.length);


// or by map used

// let newarra = [];
// data.map((e)=>{
//   console.log(e.city.length);
//   return e.city.length ? newarr.push(e.city) : null;
// })

// =====================================================================

// city list which has population more than i gave //

// let filterData = data.filter((e)=>{
//   return e.population < 3000;
// })
//   console.log("🚀 ~ file: task-8.js:39 ~ filterData ~ population:",filterData);
//   console.log(filterData.length);


// by map

// let newarray = [];
// let newdata = data.map((e)=>{
//   return e.population <3000 ? newarray.push(

//     {
//       "cityName" : e.city,
//       'population' : e.population
//     }
//   ) : null;
// })

// console.log(newarray);


  // ========================================================//

  // acending & decending population wise //

// let newdata = data.sort((a,b)=>{
//   return a.population - b.population;
// });
// console.log(newdata);

//===============================================//






