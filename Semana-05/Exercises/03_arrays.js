console.log('03_arrays');
/**** START *****/

/* Excercise A */

/*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

var meses;

meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];

console.log(meses[4]);
console.log(meses[10]);

/* Excercise B */

/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

var mes;

mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];

console.log(mes.sort());

/* Excercise C */

/*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

var mes

mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];

mes.push('Lakers');
mes.unshift('Bucks');

console.log(mes);

/* Excercise D */

/*Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

var mes

mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];

mes.shift();
mes.pop();

console.log(mes);

/* Excercise E */

/*Invertir el orden del array (utilizar reverse).*/

var mes

mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];

mes.reverse();

console.log(mes);

/* Excercise F */

/*Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/

var mes

mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];

console.log(mes.join('-'));

/* Excercise G */

/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var mes, newArray

mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];
newArray = mes.slice(4,11);

console.log(newArray);

/**** END *****/

