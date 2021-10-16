const jsInput = document.querySelector(`#name-input`)
const jsSpan = document.querySelector(`#name-output`)

jsInput.addEventListener(`input`, saveValue)
function saveValue(event) {
    if (event.currentTarget.value !== "") {
       return jsSpan.textContent = event.currentTarget.value 
    } 
   return jsSpan.textContent = "Anonymous"
}