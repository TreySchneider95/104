function displayInformation(){
    document.getElementById('salon-information').innerHTML = `<p>Welcome to ${salon.theName}</p>
    <p>You can find us in ${salon.address.street}, ${salon.address.number}</p>
    Open from ${salon.hours.open} to ${salon.hours.closed}`
}
displayInformation()