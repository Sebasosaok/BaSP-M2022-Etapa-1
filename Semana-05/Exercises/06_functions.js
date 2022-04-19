console.log('06_functions');

/**** START *****/

/* Excercise A */

/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

function suma(number1,number2){
    return console.log(number1 + number2)
}

suma(20,1000)

/* Excercise B */

/*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

function suma(number1,number2){
    if (typeof number1 !== "number" || typeof number2 !== "number"){
        alert('Uno de los parámetros tiene error');
        return('Nan!');
    }
    return console.log(number1 + number2)
}

suma(40,2000)

/* Excercise C */

/*Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

function validate(x) {
    return Number.isInteger(x)
}
console.log(validate(222))


/* Excercise D */

/*A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

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

/*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.*/

function suma(number1,number2){
    if (typeof number1 !== "number" || typeof number2 !== "number"){
        alert('Uno de los parámetros tiene error');
        return('Nan!');
    }
    else {
        return valid(number1,number2)
    }
}
function valid(number1,number2) {
    if (validate(number1) && validate(number2)){
        return console.log(number1+number2);
    }else{
        alert("Error debe ingresar numeros enteros")
        return console.log(Math.round(number1+number2))
    };
}

suma(30,1000)

/**** END *****/