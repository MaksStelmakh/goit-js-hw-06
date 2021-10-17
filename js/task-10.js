function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputJs = document.querySelector(`input`)
const createJs = document.querySelector(`button[data-create]`)
const removeJs = document.querySelector(`button[data-destroy]`)
const boxesJs = document.querySelector(`#boxes`)


let startBox = 20

inputJs.addEventListener(`input`, onInputChange);
createJs.addEventListener(`click`, createDivFunc)
removeJs.addEventListener(`click`, removeFunc)

function onInputChange(event){
  inputJs.setAttribute(`counter`, Number(event.currentTarget.value))
}


function createDivFunc() {
  let counterOfBoxes = Number(inputJs.getAttribute(`counter`));
  for (let i = 0; i < counterOfBoxes; i++) {
    startBox += 10;
    const boxEl = document.createElement(`div`);

    boxEl.style.cssText = `width: ${startBox}px; height: ${startBox}px; background-color: ${getRandomHexColor()}`

    boxesJs.style.display = `flex`;
    boxesJs.style.flexDirection = 'column';
    boxesJs.appendChild(boxEl);

    inputJs.value = ``
  }
};

function removeFunc() {
  boxesJs.innerHTML = ``;
}



