console.log('06_functions');

/**** START *****/

/* Excercise A */



function suma(number1,number2){
    return console.log(number1 + number2)
}

suma(20,1000)

/* Excercise B */

function suma(number1,number2){
    if (typeof number1 !== "number" || typeof number2 !== "number"){
        alert('Uno de los parámetros tiene error');
        return('Nan!');
    }
    return console.log(number1 + number2)
}

suma(40,2000)

/* Excercise C */

function validate(x) {
    return Number.isInteger(x)
}
console.log(validate(222))


/* Excercise D */

function suma(number1,number2){
    if (typeof number1 !== "number" || typeof number2 !== "number"){
        alert('Uno de los parámetros tiene error');
        return('Nan!');
    }
    if(validate(number1) == false){
        alert('Hubo un error en parametro 1, valor redondeado: ' + Math.round(number1))
    }
    if (validate(number2)== false){
        alert('Hubo un error en parametro 2, valor redondeado: ' + Math.round(number2))
    }
    return console.log(number1 + number2) ;
}
    
suma(21,20)

/* Excercise E */

function suma(number1,number2){
    if (typeof number1 !== "number" || typeof number2 !== "number"){
        alert('Uno de los parámetros tiene error');
        return('Nan!');
    }
    else {
        return pruebaa(number1,number2)
    }
}
function pruebaa(number1,number2) {
    if (validate(number1) && validate(number2)){
        return number1+number2;
    }else{
        alert("Error debe ingresar numeros enteros")
        return Math.round(number1+number2)
    };
}