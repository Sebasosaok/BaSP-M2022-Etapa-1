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
            message[0].classList.remove('hide');
            message[0].classList.add('error');
            message[0].innerHTML = "*invalid email";
        } else if (email.value.match(format)) {
            message[0].classList.remove('hide');
            message[0].classList.remove('error');
            message[0].classList.add('correct');
            message[0].innerHTML = "*valid email";
        }
    }

    email.onblur = function(){
        validateEmail();
    };

    email.onfocus = function(){
        message[0].classList.add('hide');
    };

*/
/**************Validate Password ************************
function validatePassword (){
    if (!password.value.match(formatPass)){
        message[1].classList.remove('hide');
        message[1].classList.add('error');
        message[1].innerHTML = "*invalid password";
    } else if (password.value.match(formatPass)) {
        message[1].classList.remove('hide');
        message[1].classList.remove('error');
        message[1].classList.add('correct');
        message[1].innerHTML = "*valid password";
    }
}

    password.onblur = function(){
        validatePassword();
    };

    password.onfocus = function(){
        message[1].classList.add('hide');
    };
}
*/


