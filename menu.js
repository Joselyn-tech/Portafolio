let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
    }

    //detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//Formulario

const form = document.getElementById('form')
const button = document.getElementById('submit')

const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

const formIsValid = {
    name: false,
    email: false,
    phone: false,
}

form.addEventlistener('change', (e) => {
    e.preventDefault()
    validateForm()
})

name.addEventlistener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.name = true
})

email.addEventlistener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.email = true
})

phone.addEventlistener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.phone = true
})

const validateForm = () =>{
    //const formValues = Object.values()
   const valid = formValues.findIndex(value => value == false)
   if (valid == -1) form.submit()
   else alert('form invalid')
        
}





