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
  },
  pets : []
}

// let pets = [{
//   petName:'Lucy',
//   age:3,
//   gender:'Female',
//   breed:'Pit bull',
//   service:'Nail clip',
//   owner:'Hank'
// },{
//   petName:'Bob',
//   age:6,
//   gender:'Male',
//   breed:'Dane',
//   service:'Grooming',
//   owner:'Frank'
// },
// {
//   petName:'Sal',
//   age:1,
//   gender:'Male',
//   breed:'Mixed',
//   service:'Grooming',
//   owner:'Linda'
// },{
//   petName:'Bruce',
//   age:8,
//   gender:'Male',
//   breed:'Pit bull',
//   service:'Grooming',
//   owner:'Nik'
// }]
// alert(`number of pets: ${pets.length}`)
function consolePets(petRegister){
  for(i=0;i<petRegister.length;i++){
    console.log(petRegister[i].petName)
  }
}
// consolePets(pets)

function PetReg(petName, age, gender, breed, service, owner){
  this.petName=petName
  this.age=age
  this.gender=gender
  this.breed=breed
  this.service=service
  this.owner=owner
}
let dog1 = new PetReg('Spot', 12, 'M', 'mix', 'trim', 'Bill')
let dog2 = new PetReg('Tank', 4, 'M', 'mix', 'trim', 'Ralph')
let dog3 = new PetReg('Sally', 12, 'F', 'mix', 'trim', 'Nancy')
salon.pets.push(dog1, dog2, dog3)
// console.log(dog1.petName)

function register(){
  console.log('register')
  let petName=document.getElementById('txt-petName').value
  let petAge=document.getElementById('txt-petAge').value
  let petGender=document.getElementById('txt-petGender').value
  let petService=document.getElementById('txt-petService').value
  let petOwner=document.getElementById('txt-petOwner').value
  let petObject = new PetReg(petName, petAge, petGender, petService, petOwner)
  document.getElementById('txt-petName').value = null
  document.getElementById('txt-petAge').value = null
  document.getElementById('txt-petGender').value = null
  document.getElementById('txt-petService').value = null
  document.getElementById('txt-petOwner').value = null
  console.log(petObject)
  salon.pets.push(petObject)
}

function displayNames(arr) {
	for (i = 0; i < arr.length; i++) {
    console.log('something')
		document.getElementById('registered-pets').innerHTML += `<li>${arr[i].petName}</li>`
	}
}
console.log(salon)
displayNames(salon.pets)