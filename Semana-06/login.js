
/*
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
  });
  password.addEventListener('blur', (event) => {
    event.target.style.background = '';
  });

*/

window.onload = function(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var message = document.getElementsByClassName("message");
    var format = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    console.log(email);
    console.log(password);
    console.log(message);

    function validateEmail (){
        if (email.value.match(format)){
            message[0].classList.remove('hide');
            message[0].classList.add('error');
            message[0].innerHTML = "ERROR";
        } else if (email.value.match(format)) {
            message[0].classList.remove('hide');
            message[0].classList.remove('error');
            message[0].classList.add('correct');
            message[0].innerHTML = "CORRECT";
        }
    }


    email.onblur = function(){
        email();
    };

    email.onfocus = function(){
        message[0].classList.add('hide');
    };

}