console.log('02_strings');
/**** START *****/

/* Excercise A */

/*Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var team,

team = 'los angeles lakers';

console.log(team.toUpperCase ());

/* Excercise B */

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var teamNba, firtFiveNumbers;

teamNba = 'Milwaukeee Bucks';
firtFiveNumbers = teamNba.substring(0,5);

console.log(firtFiveNumbers);

/* Excercise C */

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var countryEuropa, lastThreeNumbers;

countryEuropa = 'Azerbaiyan';
lastThreeNumbers = countryEuropa.substring(7,10);

console.log(lastThreeNumbers);

/* Excercise D */

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var countryAsia, toUpperLower;

countryAsia = 'mOZAMBIQUE';
toUpperLower = countryAsia.substring(0,1).toUpperCase (0,1) + countryAsia.substring(1,10).toLowerCase (1,10);

console.log(toUpperLower);

/* Excercise E */

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var countryLatam, nuevaVariable;

countryLatam = 'U zbekistan';
nuevaVariable = countryLatam.indexOf(' ');

console.log(nuevaVariable);

/* Excercise F */

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var countryAfrica, solution;

countryAfrica = 'bANGLADESH tAYIKISTAN';

solution = countryAfrica.substring(0,1).toUpperCase(0,1)+
           countryAfrica.substring(1,10).toLowerCase(1,10)+
           countryAfrica.indexOf(" ")+
           countryAfrica.substring(11,12) .toUpperCase(11,12)+
           countryAfrica.substring(12,21).toLowerCase(12,21);
           
console.log(solution);

/**** END *****/




