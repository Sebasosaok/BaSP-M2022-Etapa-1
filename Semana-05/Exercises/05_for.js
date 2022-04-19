console.log('05_for');
/**** START *****/

/* Excercise A */


var palabra;

palabra = ['bucks','lakers','nuggets','suns','mavericks'];

for (i =0;i <=palabra.length -1; i++){
    alert(palabra[i]);
}


/* Excercise B */

var palabra, palabraUpper;

palabra = ['bucks','lakers','nuggets','suns','mavericks'];

palabraUpper = palabra[0].charAt(0).toUpperCase()

palabraUpper = palabra[0].slice(1)

palabraUpper = palabra[0].charAt(0).toUpperCase() + palabra[0].slice(1)


for (i =0;i <=palabra.length-1; i++){
    palabra[i] = palabra[i].charAt(0).toUpperCase() + palabra[i].slice(1)
    alert(palabra[i]);
}


/* Excercise C */


var sentence, palabra;

sentence = '';

palabra = ['bucks','lakers','nuggets','suns','mavericks']


for (i =0;i <=palabra.length-1; i++){
    sentence = sentence + palabra[i]
}
    alert(sentence)


/* Excercise D */

/*Crear una array vacío y con un bucle for de 10 repeticiones. 
Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, 
desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/

var empty;

empty =[];

for (var  i=0;i <10; i++){
    empty[i] = i
}
    console.log(empty.toString())





