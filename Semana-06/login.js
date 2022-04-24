/*
var email,password

email=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

password=/^.{4,12}$/// 4 a 12 digitos

*/



/*
var inputPassword = document.getElementById('password');

function validatePassword (){
    var letterSum = 0;
    var numberSum = 0;

    if (inputPassword.value.length < 8){
        return true;
    }   else{
        for (i=0; i < inputPassword.value.length; i++){
            if (isNaN(inputPassword.value[i])){
                letterSum += 1;
            }   else{
                numberSum += 1;
            }
        }
    }

    return  (letterSum === 0 || numberSum === 0)
}

*/
/*
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
  });
  password.addEventListener('blur', (event) => {
    event.target.style.background = '';
  });

*/
  





var button = document.getElementById("button");
console.log(button);