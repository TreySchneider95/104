// let names = [ 'name1', 'name2', 'name3', 'name4' ];
// function displayNames(arr) {
// 	for (i = 0; i < arr.length; i++) {
// 		console.log(names[i]);
// 	}
// }
// displayNames(names);

// let student={
//   theName:"Trey",
//   age:80,
//   student:true,
//   grade:"A-"
// }
// console.log(student)
let salon={
  theName:'Pets',
  address:{
    street:"Ave. Avenue",
    ZipCode:22414,
    number:"30D"
  },
  hours:{
    open:"9:00am",
    closed:"5:00pm"
  }
}

let pets = [{
  petName:'Lucy',
  age:3,
  gender:'Female',
  breed:'Pit bull',
  service:'Nail clip',
  owner:'Hank'
},{
  petName:'Bob',
  age:6,
  gender:'Male',
  breed:'Dane',
  service:'Grooming',
  owner:'Frank'
},
{
  petName:'Sal',
  age:1,
  gender:'Male',
  breed:'Mixed',
  service:'Grooming',
  owner:'Linda'
},{
  petName:'Bruce',
  age:8,
  gender:'Male',
  breed:'Pit bull',
  service:'Grooming',
  owner:'Nik'
}]
alert(`number of pets: ${pets.length}`)
function consolePets(petRegister){
  for(i=0;i<petRegister.length;i++){
    console.log(petRegister[i].petName)
  }
}
consolePets(pets)