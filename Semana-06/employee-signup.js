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
        if (dni > 7) {
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
   if (inputName > 3) {
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





}