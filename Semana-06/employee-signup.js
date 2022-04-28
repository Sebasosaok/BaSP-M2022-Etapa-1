/*
window.onload = function(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var message = document.getElementsByClassName("message");
    var format = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var formatPass = /[a-z]/;
*/ 
/**************Validate Email ************************

    function validateEmail (){
        if (!email.value.match(format)){
            message[8].classList.remove('hide');
            message[8].classList.add('error');
            message[8].innerHTML = "*invalid email";
        } else if (email.value.match(format)) {
            message[8].classList.remove('hide');
            message[8].classList.remove('error');
            message[8].classList.add('correct');
            message[8].innerHTML = "*valid email";
        }
    }

    email.onblur = function(){
        validateEmail();
    };

    email.onfocus = function(){
        message[8].classList.add('hide');
    };

*/
/**************Validate Password ************************
function validatePassword (){
    if (!password.value.match(formatPass)){
        message[9].classList.remove('hide');
        message[9].classList.add('error');
        message[9].innerHTML = "*invalid password";
    } else if (password.value.match(formatPass)) {
        message[9].classList.remove('hide');
        message[9].classList.remove('error');
        message[9].classList.add('correct');
        message[9].innerHTML = "*valid password";
    }
}

    password.onblur = function(){
        validatePassword();
    };

    password.onfocus = function(){
        message[9].classList.add('hide');
    };

        var firstName = document.getElementById('firts-name');
        var lastName = document.getElementById('last-name');
        var message = document.getElementsByClassName("message");

    
function validateName (){
    if(fisrtName > 8) {
        console.log('valor correcto');
    } else {
        console.log('valor incorrecto')
    }
}
  

    
}
*/ 
/***************EJERCICIOS *************************/

/*DNI: Solo numero y debe tener más de 7 numeros */

window.onload = function(){
    var dni = document.getElementById('dni')

    function validateDNI () {
        if (dni.value.length > 6) {
            console.log('DNI Correct')
        } else {
            console.log('DNI Invalid')
        }
    }

    dni.onblur = function(){
        validateDNI();
    }

    dni.onfocus = function(){
        console.log('Entry a valid DNI format')
    }
/*Nombre, solo letras y debe tener más de 3 letras */

var inputName = document.getElementById('firtsName')


function validateName () {
   if (inputName.value.length > 3) {
       console.log('Name correct');
   } else {
       console.log('Name incorrecto')
   }
}

    inputName.onblur = function(){
        validateName();
    }

    inputName.onfocus = function(){
        console.log('Entry a valid Name format')
}

/*Apellido, solo letras y debe tener más de 3 letras */

var inputLastName = document.getElementById('lastName')


function validateLastName () {
   if (inputLastName.value.length > 3) {
       console.log('Last Name correct');
   } else {
       console.log('Last Name incorrecto')
   }
}

    inputLastName.onblur = function(){
        validateLastName();
    }

    inputLastName.onfocus = function(){
        console.log('Entry a valid Last Name format')
}

/*Email */
var inputEmail = document.getElementById('email');
var regex =/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

function validateEmail () {
    if (inputEmail.value.match (regex)) {
        console.log( 'Email correct');
    } else {
        console.log('Email Incorrect')
    }
}

    inputEmail.onblur = function(){
        validateEmail();
    }

    inputEmail.onfocus = function(){
        console.log('Entry a valid Email format')
    }

/*Teléfono: Solo número y debe tener 10 números.*/
var inputTelefono = document.getElementById('telefono')


function validateTelefono () {
   if (inputTelefono.value.length > 9) {
       console.log('Telefono correct');
   } else {
       console.log('Telefono incorrecto')
   }
}



    inputTelefono.onblur = function(){
        validateTelefono();
    }

    inputTelefono.onfocus = function(){
        console.log('Entry a valid Telefono format')
}

/*Localidad: Texto alfanumérico y debe tener más de 3 letras. */
var inputLocalidad = document.getElementById('localidad')


function validateLocalidad () {
   if (inputLocalidad.value.length > 2) {
       console.log('Localidad correct');
   } else {
       console.log('Localidad incorrecto')
   }
}

    inputLocalidad.onblur = function(){
        validateLocalidad();
    }

    inputLocalidad.onfocus = function(){
        console.log('Entry a valid Localidad format')
}

/*Código Postal: Solo número y debe tener entre 4 y 5 números. */
var inputCp = document.getElementById('codigo postal')


function validateCp () {
   if (inputCp.value.length > 3) {
       console.log('Codigo Postal correct');
   } else {
       console.log('Codigo Postal incorrecto')
   }
}

    inputCp.onblur = function(){
        validateCp();
    }

    inputCp.onfocus = function(){
        console.log('Entry a valid Codigo Postal format')
}

/*Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.*/
var inputDireccion = document.getElementById('direccion')


function validateDireccion () {
   if (inputDireccion.value.length > 6) {
       console.log('Direccion correct');
   } else {
       console.log('Direcion incorrecto')
   }
}

    inputDireccion.onblur = function(){
        validateDireccion();
    }

    inputDireccion.onfocus = function(){
        console.log('Entry a valid Dirección format')
}

/*Contraseña: Al menos 8 caracteres, formados por letras y números.*/
var inputPassword = document.getElementById('password')


function validatePassword () {
   if (inputPassword.value.length > 7) {
       console.log('Password correct');
   } else {
       console.log('Password incorrecto')
   }
}

    inputPassword.onblur = function(){
        validatePassword();
    }

    inputPassword.onfocus = function(){
        console.log('Entry a Password format')
}

/*Repetir Contraseña: Al menos 8 caracteres, formados por letras y números.*/
var inputRpassword = document.getElementById('repeat password')


function validateRpassword () {
   if (inputRpassword.value.length > 7) {
       console.log('Re Password correct');
   } else {
       console.log('Re Password incorrecto')
   }
}

    inputRpassword.onblur = function(){
        validateRpassword();
    }

    inputRpassword.onfocus = function(){
        console.log('Entry a Re Password format')
}





}
