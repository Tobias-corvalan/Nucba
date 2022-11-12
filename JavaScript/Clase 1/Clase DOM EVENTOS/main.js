//MANIPULACION DE DOM(EVENTOS)

const btn = document.querySelector("#btn-background");
//btn.addEventListener('click',cambiarFondo)

const form = document.querySelector(".form");
//console.dir(form)

const firstName = document.querySelector("#first-name-input");
const lastName = document.querySelector("#last-name-input");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");
const repeatPassword = document.querySelector("#repeat-password-input");
const error_name = document.querySelector(".error-container-name");
const error_lastname = document.querySelector(".error-container-lastname");
const error_email = document.querySelector(".error-container-email");
const error_password = document.querySelector(".error-container-password");
const error_repeatpassword = document.querySelector(".error-container-repeat-password");
const error_let = document.querySelectorAll('input[name = ""]')//para buscar input con el name especifico


function cambiarFondo() {
    const bdy = document.querySelector("body");
    bdy.style.backgroundColor = "Red";
}
form.addEventListener("submit",processForm)
function processForm(event){
    //console.log(event)
    event.preventDefault();
   

/*
console.log("Valor firstname: ", firstName);
console.log("Valor lasttname: ", lastName);
console.log("Valor email: ", email);
console.log("Valor password: ", password);
console.log("Valor repeatPassword: ", repeatPassword);
*/
//Validad la Data




if(firstName.value.length > 20){
    //error
    error_name.textContent = "El nombre es muy largo";
    error_name.style.display = "flex";
}else{
    error_name.style.display = "none"
}


if(lastName.value.length > 20){
    //error
    error_lastname.textContent = "El apellido es muy largo";
    error_lastname.style.display = "flex";
}else{
    error_lastname.style.display = "none"
}


if(!email.value.includes("@gmail.com")){
    //error
    error_email.textContent = "El email no es de google";
    error_email.style.display = "flex";
}else{
    error_email.style.display = "none"
}


if(password.value !== repeatPassword.value){
    //error
    error_password.textContent = "la contraseña no coinciden";
    error_password.style.display = "flex";
}else{
    error_password.style.display = "none"
}

if(repeatPassword.value !== password.value){
    //error
    error_repeatpassword.textContent = "la contraseña no coinciden";
    error_repeatpassword.style.display = "flex";
}else{
    error_repeatpassword.style.display = "none"
}

  
   
}



