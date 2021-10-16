const jsinput = document.querySelector(`input`)
console.log(jsinput.dataset.length)
jsinput.addEventListener(`blur`, blurFunction);

function blurFunction(event) {
    if (event.target.value.length === Number(jsinput.dataset.length)) {
        jsinput.classList.add(`valid`)
        jsinput.classList.remove(`invalid`)
    } else {
        jsinput.classList.add(`invalid`)
         jsinput.classList.remove(`valid`)
    }
}