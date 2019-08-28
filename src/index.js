const box = document.querySelector("#box")

let r = "00"
let g = "00"
let b = "00"

const red = document.querySelector("#red")
const green = document.querySelector("#green")
const blue = document.querySelector("#blue")

red.value = green.value = blue.value = 0

document.querySelectorAll("[type='range']").forEach(range => {
  range.addEventListener("input", event => {
    r = Number(red.value)
      .toString(16)
      .padStart(2, "0")
    g = Number(green.value)
      .toString(16)
      .padStart(2, "0")
    b = Number(blue.value)
      .toString(16)
      .padStart(2, "0")

    box.style.backgroundColor = `#${r}${g}${b}`
  })
})
