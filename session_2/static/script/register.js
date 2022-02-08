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

function PetReg(petName, age, gender, breed, service, owner, contact){
  this.petName=petName
  this.age=age
  this.gender=gender
  this.breed=breed
  this.service=service
  this.owner=owner
  this.contact=contact
}
let dog1 = new PetReg('Spot', 12, 'M', 'mix', 'trim', 'Bill', '389-408-2786')
let dog2 = new PetReg('Tank', 4, 'M', 'mix', 'trim', 'Ralph', '635-837-9086')
let dog3 = new PetReg('Sally', 12, 'F', 'mix', 'trim', 'Nancy', '749-984-9032')
salon.pets.push(dog1, dog2, dog3)
// console.log(dog1.petName)
let TableLables= ['Name', 'Age', 'Gender', 'Breed', 'Service', 'Owner', 'Contact']
let formFields = ['petName', 'petAge', 'petService', 'petOwner', 'petBreed', 'petContact']
function displayNames(arr) {
  document.getElementById('lables').innerHTML = null
  for (i = 0; i < TableLables.length; i++) {
    document.getElementById('lables').innerHTML += `<td>${TableLables[i]}</td>`
    }
    document.getElementById('table-info').innerHTML = null
  for (x=0;x<arr.length;x++){
    document.getElementById('table-info').innerHTML += `<tr><td>${arr[x].petName}</td><td>${arr[x].age}</td><td>${arr[x].gender}</td><td>${arr[x].breed}</td><td>${arr[x].service}</td><td>${arr[x].owner}</td><td>${arr[x].contact}</td></tr>`
  }
    // table.innerHTML = ``
}

function register(){
  let petName=document.getElementById('txt-petName').value
  let petAge=document.getElementById('txt-petAge').value
  let petGender=document.getElementById('txt-petGender').value
  let petBreed=document.getElementById('txt-petBreed').value
  let petService=document.getElementById('txt-petService').value
  let petOwner=document.getElementById('txt-petOwner').value
  let petContact=document.getElementById('txt-petContact').value
  let petObject = new PetReg(petName, petAge, petGender, petBreed, petService, petOwner, petContact)
  for(x=0;x<formFields.length;x++){
    document.getElementById(`txt-${formFields[x]}`).value = null
  }
  salon.pets.push(petObject)
  displayNames(salon.pets)
}