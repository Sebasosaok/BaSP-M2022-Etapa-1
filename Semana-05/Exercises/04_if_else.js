console.log('04_if_else');
/**** START *****/

/* Excercise A */

var random;

random = Math.random() *1;

console.log(random);

if(random >0.5){
    console.log('Greater than 0,5');
}else{
    console.log('Lower than 0,5');
}

/* Excercise B */

var age;

age = Math.floor(Math.random() *100) + 0;

console.log(age);

if(age <2){
    console.log('Bebe');
}else if((age>2) && (age <12)){
    console.log('Niño');
}else if((age>12) && (age <19)){
    console.log('Adolescente');
}else if((age>19) && (age <30)){
    console.log('Joven');
}else if((age>31) && (age <60)){
    console.log('Adulto');
}else if((age>61) && (age <75)){
    console.log('Adulto Mayor');
}else if (age>75){
    console.log('Anciano');
}

/**** END *****/

