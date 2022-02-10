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

function consolePets(petRegister){
  for(i=0;i<petRegister.length;i++){
    console.log(petRegister[i].petName)
  }
}

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

let TableLables= ['Name', 'Age', 'Gender', 'Breed', 'Service', 'Owner', 'Contact', '']
let formFields = ['petName', 'petAge', 'petService', 'petOwner', 'petBreed', 'petContact']

function displayNames(arr) {
  document.getElementById('lables').innerHTML = null
  for (i = 0; i < TableLables.length; i++) {
    document.getElementById('lables').innerHTML += `<td>${TableLables[i]}</td>`
    }
    document.getElementById('table-info').innerHTML = null
  for (x=0;x<arr.length;x++){
    document.getElementById('table-info').innerHTML += `<tr id="petId${x}"><td>${arr[x].petName}</td><td>${arr[x].age}</td><td>${arr[x].gender}</td><td>${arr[x].breed}</td><td>${arr[x].service}</td><td>${arr[x].owner}</td><td>${arr[x].contact}</td><td><button class="del-arr-item" onclick="delArrItem(${x})">Delete</button></td></tr>`
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

function delArrItem(idx){
  salon.pets.splice(idx, 1)
  displayNames(salon.pets)
}

function searchPets(){
  let searchVal = document.getElementById('petSearch').value
  let petsFound = salon.pets.findIndex(x=> x.petName.toLowerCase() === searchVal.toLowerCase())
  if(searchVal.length > 0){
    document.getElementById('petSearchClear').style.display = "block"
  }
  if(searchVal.length === 0){
    document.getElementById('petSearchClear').style.display = "none"
  }
  if(petsFound!=-1){
    document.getElementById(`petId${petsFound}`).style='background-color:yellow'
  }
  if(petsFound===-1){
    displayNames(salon.pets)
  }
}

function showSearch(){
  let x = document.getElementById('petSearch')
  let i = document.getElementById('petSearchClear')
  if (x.style.display === "none") {
    x.style.display = "block"
    // i.style.display = "block"
    document.getElementById('showPetsBtn').innerText="Hide search"
  } else {
    x.style.display = "none"
    i.style.display = "none"
    document.getElementById('showPetsBtn').innerText="Search pets"
    document.getElementById('petSearch').value = null
    searchPets()
  }
}

function clearSearch(){
  document.getElementById('petSearch').value = null
  searchPets()
}