const jsInput = document.querySelector(`#font-size-control`)
const jsSpan = document.querySelector(`#text`)

jsInput.addEventListener(`input`, sizeFunc)

jsSpan.style.fontSize = `${jsInput.value}px`;

function sizeFunc() {
jsSpan.style.fontSize = `${this.value}px`
}


