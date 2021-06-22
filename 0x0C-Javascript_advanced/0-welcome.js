function welcome(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`
    displayFullName(fullName)
}

function displayFullName(fullName){
    alert(`Welcome ${fullName}!`)
}