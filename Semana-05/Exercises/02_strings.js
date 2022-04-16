console.log('02_strings');
/**** START *****/

/* Excercise A */

var team,

team = 'los angeles lakers';

console.log(team.toUpperCase ());

/* Excercise B */

var teamNba, firtFiveNumbers;

teamNba = 'Milwaukeee Bucks';
firtFiveNumbers = teamNba.substring(0,5);

console.log(firtFiveNumbers);

/* Excercise C */

var countryEuropa, lastThreeNumbers;

countryEuropa = 'Azerbaiyan';
lastThreeNumbers = countryEuropa.substring(7,10);

console.log(lastThreeNumbers);

/* Excercise D */

var countryAsia, toUpperLower;

countryAsia = 'mOZAMBIQUE';
toUpperLower = countryAsia.substring(0,1).toUpperCase (0,1) + countryAsia.substring(1,10).toLowerCase (1,10);

console.log(toUpperLower);

/* Excercise E */

var countryLatam, nuevaVariable;

countryLatam = 'U zbekistan';
nuevaVariable = countryLatam.indexOf(' ');

console.log(nuevaVariable);

/* Excercise F */

var countryAfrica, solution;

countryAfrica = 'bANGLADESH tAYIKISTAN';

solution = countryAfrica.substring(0,1).toUpperCase(0,1)+
           countryAfrica.substring(1,10).toLowerCase(1,10)+
           countryAfrica.substring(10,11).lastIndexOf(" ")+
           countryAfrica.substring(11,12) .toUpperCase(11,12)+
           countryAfrica.substring(12,21).toLowerCase(12,21);
           
console.log(solution);

/**** END *****/




