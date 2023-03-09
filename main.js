//! Nota: instale la extensien better comands de visual studio code para mejor experiencia, si no lo tiene no hay problema
// 1.-Este "Curso" esta todo comeentado para leerlo pero puede decomentar quitando los "//" y ver que hace el codigo
// 2.- Este curso se divide en capitulos cada capitulo tiene distintos temas
//TODO: las pruebas son de color azul con el "?";
//TODO: Los ejemplos de una definicion extensa son de rojo con "!"
//TODO: Las observaciones o puntos a recalcar son con de color naranja con "TODO"
//TODO: Los separedores de capitulos son de verde con "*"
//TODO: Codigo que no es la mejoer forma de escribirlo son con un tachado color cafe que se identifica con doble slash bar de esta manera"// //" (Usado en comparaciones)
/*
    *:
    ?:
    TODO:
    !
    //  
*/
//*Capitulo 1
//* Variables
//var es una forma de declarar una variable que tiene un alcanze de nivel por encima de su bloque(Ya veremos lo que es un bloque pero para que te hagas una idea: Todo lo que esta dentro de llaves es un bloque
//! ejemplo: {var hola = 'hola pa'}
//)
//? var string = 'Hola mundo!';
// let es una variable que se puede cambiar al igual que var pero no puede subi un nivel mas de su bloque
//? let number = 20;
// const es una variable parecida a let pero si valor es absoluto es decir no se puede cambiar
//? const bool = true && false;
// alert solo suelta un mensaje nada mas .__. XD
//? alert(string);
//EL prompt es un inicio al la interacividad que podemos dar con javascript y podemos hacer cosas interesantes como esta
//* Datos con prompt

//? let numero1 = prompt('Dame un numero Hdp');
//? let numero2 = prompt('Dame otro pe o no hay huevos');
//? let resultado = alert(Number(numero1) + Number(numero2));

//* Operadores
// Se puede usar el "=" con los operadores basicos como suma"+" resta"-" multiplicacion"*" y division"/"
// para devolver un resultado de dicha operacion

//? let numero = 10;
//? numero *= 5;
//? alert(numero);
//es lo mismo que decir

//? let numero = 10;
//? numero = 10 * 5;
//? alert(numero);

// como se puede notar es algo de codigo que se ahorra y es un poco mas legible aun mas a largo plazo
//!Tambien estan "%","--","++" y otros operadores
//*Operadore logicos y de comparacion
//Los Operadores logicos como su nombre lo indica nos permiten manejar valores de verdadero o falso de manera logica
// tenemos el operador && o "Y" y el operador || o "or"
//! Cada uno tiene diferentes combinaciones pero siempre nos devolveran un valor "True" o un "False"

//? document.write(false && true);
//? document.write(false || true);

// Los de comparacion comparan diferentes valor y no devuelven un verdadero o falso es muy util para condicionales

//? document.write(5 == '5');
//? document.write('5' === 5);
//? document.write(4 !== '4');

//estos serian los mas usados junto al menor que y mayor que a y el menor igual, mayor igual
// "=="compara si un valor es igual a otro si tomar en cuanta el tipo  y "===" si compara valores toomando en cuenta el tipo luego "!=" pregunta si un valor es diferente a otro sin tomar en cuenta el tipo  tambie tiene su contra parte "!=="  que si toma en cuenta el tipo
//* Capitulo 2

//* Arrays
// un array es algo asi como un contenedor con diferentes datos que tambien puede almacenar diferentes tipos de datos

//? let Array = ['Luis<br>', 12, '<br>Buenaventura'];
//? document.write(Array[0]);
//? document.write(Array[1]);
//? document.write(Array[2]);

//* Arrays asociativos o objetos
// es como un array comun pero se le puede asociar un nobre especifico a cada valor

//? let partesMujer = {
//? 	culo: 'Grande',
//? 	tetas: 'Jugosas',
//? 	vagina: 'Sabrosa',
//? };
//? let culo = partesMujer['culo'];
//? let tetas = partesMujer['tetas'];
//? let vagina = partesMujer['vagina'];

//? let frase = `su culo es muy ${culo}<br>
//?         sus tetas son muy ${tetas}<br>
//?         y con su vagina tan ${vagina} me deja loco`;

//? document.write(frase);

//* Bucles
//* while
//el while consist en pasar unos para metros y luego el bloque de codigo se ejecuta dependiendo de esos parametros el aumento de contador se tiene que poner dentro del bloque de codigo a ejecutar
//? let contador = 0;
//? while (contador < 100) {
//? 	contador++;
//? 	document.write(contador);
//? 	if (contador == 10) {
//? 		document.write('fin');
//? 		break;
//? 	}
//? }
//* For
// For usa el bloque de codigo solo pare eso y en parametro creas el contador lo aumentas a diferencia de while que tenias que crear el contador fuera y aumentarlo dentro del bloque de codigo
//? for (let i = 0; i < 1000; i++) {
//? 	document.write(i);
//? 	if (i == 10) {
//? 		document.write(' fin');
//? 		break;
//? 	}
//? }
//* For in y of
//tengo la variable animales con estos valores
//? let animales = [
//? 	'gato',
//? 	'perro',
//? 	'lagarto',
//? 	'geopardo',
//? 	'tigre',
//? 	'dientes de sable',
//? 	'tiranosaurio rex',
//? ];

// con for in puedo imprimir o tomar el indice de esos valores
//! Es decir que esto: no imprimer un nombre si no un numero
//? for (let animal in animales) {
//? 	document.write(animal + '<br>');
//? }

//? document.write('<br>');
//* con for of puedo imprimir el valor como tal de los objetos
//! Es decir que esto:
//? for (let animal of animales) {
//? 	document.write(animal + '<br>');
//? }

//! Es igual a esto:

//? document.write(animales + '<br>');
//? document.write(animales + '<br>');
//? document.write(animales + '<br>');
//? document.write(animales + '<br>');
//? document.write(animales + '<br>');
//? document.write(animales + '<br>');
//? document.write(animales + '<br>');
//! esto es otro codigo diferente:
//? let array1 = ['Maria', 'Camila', 'Natalia'];
//? let array2 = ['Javier', 'Luis', array1, 'josefina'];

//? forFin: for (let array in array2) {
//? 	if (array == 2) {
//? 		for (array of array1) {
//? 			document.write(array + '<br>');
//? 			continue forFin;
//? 		}
//? 	} else {
//? 		document.write(array2[array] + '<br>');
//? 	}
//? }

//* Funiciones
//con las funciones podemos acceder a un bloque de codigo o muchos bloques de codigo y definirlos en una linea para poder reutilizarlo

//? const saludo = (nombre) => {
//? 	document.write(`Hola ${nombre}, como estas? <br>`);
//? };

//? saludo('Luis picaso');

//? const suma = (num1, num2) => {
//? 	let resultado = `${num1 + num2} <br>`;
//? 	return resultado;
//? };

//? document.write(suma(10, 65));
//* Capitulo 3
//* Programacion orientada a objetos
// La programacion orientada a objetos es una manera de programar que no ayuda ya que programamos objetos como si fueran objetos de la vida real lo cual puede llegar a hacer que programar sea mucho mas simple pero lo veremos en el codigo:
// la sintaxis es crear una clase con la palabra( class ) y darle un nombre, y con la palabra "constructor" podemos darle distintos atributos que son como los parametros de las funciones y los definimos de la misma manera pero para usarlos tenenemos que agregar la palabra this.

//? class animal {
//? 	constructor(especie, edad, color) {
//? 		this.race = especie;
//? 		this.age = edad;
//? 		this.color = color;
//? 		this.info = `soy un ${this.race}, tengo ${this.age} años y soy color ${this.color}`;
//? 	}
//fuera del constructorpodemos declarar funciones que aqui son conocidas como metodos
//? 	verInfo() {
//? 		document.write(this.info + '<br>');
//? 	}
//? }
// tenemos la herencia es una clase que tienen los atributos y metodos de la otra y podemos agrgarle otro que a diferencia de lo que de podria llegar a pensar es muy util. La declaramos de forma normal pero le agregamos la palabra extends y el nombre de la clase que queremos coseguir sus atributos etc.
//? class Perro extends animal {
//! Nota: en el constructor le tenemos que dar los mismos atributos o parametros que la clase de la que se hereda a no ser que queramos excluir alguno simplemente no lo ponemos
//? 	constructor(especie, edad, color, raza) {
// con super le podemos especificar que atributos queremos conseguir y cuales no que
//? 		super(especie, edad, color);
// cuando agrmegamos un atributo tenemos que agrgarlo como se hace normalmente
//? 		this.raza = null;
//? 	}
// los settters declarados con(set) nos permiten como su nombre lo indica setear o cambiar algun atributo de la siguiente manera(Se suelen usar con funciones en remplazo de la palabra functioon):
//? 	set setRaza(newName) {
//? 		this.raza = newName;
//? 	}
//los getters declarado con(get) nos permiten como su nombre lo dige agarrar o conseguir un valor que nos devuelva in atributo o otra cosa se declara de la siguiente manera(Se suelen usar con funciones en remplazo de la palabra functioon):
//? 	get getRaza() {
//? 		return this.raza;
//? 	}
//? }

//? const perro = new Perro('perro', 5, 'cafe', 'Pigbull');
//? const gato = new animal('gato', 4, 'blanco con rayas grises');
//? const loro = new animal('loro', 1.5, 'verde');
//TODO esto:
//? perro.verInfo();
//? gato.verInfo();
//? loro.verInfo();
//TODO: es mejor que todo esto:
// // document.write(gato.info + '<br>');
// // document.write(perro.info + '<br>');
// // document.write(loro.info + '<br>');
//*Capitulo 4
//* Metodos y metodos de arrays
