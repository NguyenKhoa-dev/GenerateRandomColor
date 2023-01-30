const colorsElement = document.querySelector('.colors'),
btnGenerate = document.getElementById('btn-generate'),
inputRange = document.getElementById('input-range'),
rangeValueElement = document.getElementById('range-value')

var maxPaletteBx = inputRange.value

function generateColors() {
    colorsElement.innerHTML = ''

    for (let i = 0; i < maxPaletteBx; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6, "0")}`

        let color = document.createElement('li')
        color.innerHTML = `
            <div class="color-plate" style="background-color: ${randomHex};"></div>
            <div class="value">${randomHex}</div>
        `
        color.onclick = () => {copyColor(randomHex, color)}
        colorsElement.appendChild(color)
    }
}

function copyColor(rdHex, element) {
    let value = element.querySelector('.value')
    navigator.clipboard.writeText(rdHex)
    value.innerText = 'Copied!'
    setTimeout(() => {
        value.innerText = rdHex
    }, 1000)
}

inputRange.oninput = () => {
    rangeValueElement.innerText = inputRange.value
    maxPaletteBx = inputRange.value
}

rangeValueElement.innerText = inputRange.value
generateColors()