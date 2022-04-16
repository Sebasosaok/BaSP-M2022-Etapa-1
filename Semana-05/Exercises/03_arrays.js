console.log('03_arrays');
/**** START *****/

/* Excercise A */

var meses;

meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];

console.log(meses[4]);
console.log(meses[10]);

/* Excercise B */

var mes;

mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];

console.log(mes.sort());

/* Excercise C */

var mes

mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];

mes.push('Lakers');
mes.unshift('Bucks');

console.log(mes);

/* Excercise D */

var mes

mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];

mes.shift();
mes.pop();

console.log(mes);

/* Excercise E */

var mes

mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];

mes.reverse();

console.log(mes);

/* Excercise F */

var mes

mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];

console.log(mes.join('-'));

/* Excercise G */

var mes, newArray

mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];
newArray = mes.slice(4,11);

console.log(newArray);

/**** END *****/

