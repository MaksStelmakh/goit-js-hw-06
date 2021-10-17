const form = document.querySelector(`.login-form`)


form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
   
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value
    const result = {
        mail,
        password,
    }
    if (mail && password !== ``) {
     console.log(result)
     form.reset();     
    } else {
        alert(`Bсе поля должны быть заполнены!`)
    }
  
}

