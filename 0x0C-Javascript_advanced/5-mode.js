function changeMode(size, weight, transform, background, color) {
    return () => {
        const body = document.body
        body.style.fontSize = size
        body.style.fontWeight = weight
        body.style.textTransform = transform
        body.style.background = background
        body.style.color = color
    }
}

function main() {
    const body = document.body
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green')
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white')
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black')
    const p = document.createElement("p");
    // Creating p tag
    const node = document.createTextNode("Welcome Holberton!");
    p.appendChild(node);
    body.appendChild(p);
    // Creating and appending Spooky buttom
    const btnSpooky = document.createElement("button")
    btnSpooky.innerHTML = "Spooky"
    document.body.appendChild(btnSpooky)
    // Creating and appending Dark Mode buttom
    const btnDarkmode = document.createElement("button")
    btnDarkmode.innerHTML = "Dark mode"
    document.body.appendChild(btnDarkmode)
    // Creating and appending Scream Mode button
    const btnScreammode = document.createElement("button")
    btnScreammode.innerHTML = "Scream mode"
    document.body.appendChild(btnScreammode)
    // Events for clicks that triggers the modes
    btnSpooky.onclick = spooky
    btnDarkmode.onclick = darkMode
    btnScreammode.onclick = screamMode
}
