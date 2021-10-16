function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const background = document.querySelector(`body`)
const buttonChangeColor = document.querySelector(`.change-color`)
const spanResultColor = document.querySelector(`.color`)

buttonChangeColor.addEventListener(`click`, changeColorFunc)

function changeColorFunc() {
  const changeColor = getRandomHexColor()
  spanResultColor.textContent = changeColor
  console.log(background.style.backgroundColor = changeColor)

}