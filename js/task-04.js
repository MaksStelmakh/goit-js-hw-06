const valueDisplay = document.querySelector(`#value`)
const decrementBtn = document.querySelector(`button[data-action="decrement"]`)
const incrementBtn = document.querySelector(`button[data-action="increment"]`)
let counterValue = 0
incrementBtn.addEventListener(`click`, () => {
    counterValue += 1
    valueDisplay.textContent = counterValue
})

decrementBtn.addEventListener(`click`, () => {
    counterValue -= 1
    valueDisplay.textContent = counterValue
})
