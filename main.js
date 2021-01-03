// random

const randomBytes = new Uint8Array(32)
window.crypto.getRandomValues(randomBytes)

const bitString = Array.from(randomBytes).map(num => num.toString(2).padStart(8, "0")).join("")
const n = 5
const l = bitString.length
const m = l % n
const p = n - m
const paddedBitString = bitString.padStart(l + p, "0")
const bit5Array = paddedBitString.match(/.{1,5}/g)

// chars

const randomIndex = max => Math.floor(Math.random() * max)
const chars = bit5Array.map(str => {
  const num = parseInt(str, 2)
  const arr = base32map[num]
  const index = randomIndex(arr.length)
  return base32map[num][index]
})

// DOM

const createSpan = text => {
  const span = document.createElement("span")
  const textNode = document.createTextNode(text)
  span.appendChild(textNode)
  return span
}
const erCodeElem = document.getElementById("er-code")
const markerSymbol = "⊡"
const markerSpan = createSpan(markerSymbol)
erCodeElem.appendChild(markerSpan)

chars.forEach(char => {
  const span = createSpan(char)
  erCodeElem.appendChild(span)
})
