function displayInformation(){
    document.getElementById('salon-information').innerHTML = `<p>Welcome to ${salon.theName}</p>
    <p id='location'>You can find us at ${salon.address.street}, ${salon.address.number}</p>
    Open from ${salon.hours.open} to ${salon.hours.closed}`
}
displayInformation()