let family = {
  name: "Khushalbhai",
  age: 70,
  child: [
    {id : 101,  
      name: "Ketanbhai",
      age: 52,
      vehicle: "bullet",
      vehicalno: "gj212935",
      son: [
        { name: "dharmin", age: 25,},
        { name: "jay", age: 20,},
      ],
    },
    {id : 102,
      name: "sureshbhai",
      age: 40,
      vehicle: "Dream",
      vehicalno: "gj212272",
      son: [
        { name: "rahul", age: 22,},
        { name: "keval", age: 23,},
      ],
    },
    {id : 103,
      name: "Rupnaben",
      age: 34,
      vehicle: "duke",
      vehicalno: "gj273521",
      son: [
        { name: "snehal", age: 23,},
        { name: "monik", age: 21,},
      ],
    },
  ],
};

// -> 


// let fname = family.child.map((e)=>{
//     console.log(e.name);
// });

//  all son of your dada

// console.log(family.child[0].name);

// let name = family.child.map((e)=>{
//     console.log(e.name);
// });

// > all son of father/uncle's (note - me jeni id aapu ana j son na name print thava joiye like uncle nu apu to uncle other wise dada nu apu to dad nu)

// function fname(id){
//     console.log(family.child[id]);
// }
// fname(1);

function printchildbyid(id){
  let match = family.child.find((e)=>{
  return e.id = id;
})
// console.log(match);
//   match.son.map((e)=>{
//   console.log(e.name)
// })

console.log(match.vehicle);

}
printchildbyid(102);


// ================================================================= //

// -> badha family ni vehicale details like me jeni id apu aa family ni

// function vhcl(id){
//   console.log(family.child[id].vehicle);
// }
// vhcl(0);



