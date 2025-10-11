"use strict";
//Esto es un comenrtario 
/*
Esto es un comentario
de multiples lineas
 */
//TIPOS DE DATOS
Object.defineProperty(exports, "__esModule", { value: true });
const poo_1 = require("./poo");
//BOOLEAN
let esActivo = true; // let: el ambito es local, funciona dentro del scope (funcion dentro de un ciclo, un if una parte de codigo que tengamos con llaves)
var esActivo2 = false; // var: el ambito es en todo el archivo
const esActivo3 = true; //const: para constantes
//NUMBERS
let entero = 15;
let enteroLargo = 123456789022222222;
let real = 3.1416;
let binario = 0b001;
let bincinco = 0b101;
let octal = 0o11;
let hexadecimal = 0xC;
//STRING
let sigla = 'SIS257';
let materia = 'Desarrollo de Aplicacion Int/Internet II';
let concatenar = sigla + ' - ' + materia;
let concatenar2 = `${sigla} - ${materia}`;
let mayusculas = materia.toUpperCase();
let minusculas = materia.toLocaleLowerCase();
let reemplazo = materia.replace(/ /g, '#');
let repetir = sigla.repeat(3);
let sinEspaciosExtremos = ('   ' + materia).trim();
let separar = materia.split(' ');
let subcadena = materia.substring(5, 10);
let longitudCadena = materia.length;
//ARRAY
let array = ['uno', 'dos', 'tres', 'cuatro'];
let arrayNumerico = [1, 2, 3, 4];
let longitudArray = array.length;
let doble = arrayNumerico.map(n => n * 2); //es para mapear me dara un nuevo array, mapearemos un array con un numero es decir haremos que se multiple *2
let factorial = arrayNumerico.reduce((prev, curr) => prev * curr); //obtenemos la multiplicacion de todos los variables del array
let revertir = arrayNumerico.reverse();
let impares = arrayNumerico.filter(n => n % 2 == 1);
array.shift(); //elimina el primer elemento
array.pop(); //eliminar el ultimo elemento
array.push('cinco'); //inserta un nuevo elemento
//tuple es conceptual
let tuple = [true, 7.5, 'Hola', [8, 9, 10]];
//ENUM
var sexo;
(function (sexo) {
    sexo["M"] = "Masculino";
    sexo["F"] = "Femenino";
})(sexo || (sexo = {}));
;
var color;
(function (color) {
    color["red"] = "Rojo";
    color["yellow"] = "amarillo";
    color["blue"] = "azul";
})(color || (color = {}));
; //los enums pueden ser cadenas o numericos cualquier tipo de dato
var tipo;
(function (tipo) {
    tipo[tipo["par"] = 0] = "par";
    tipo[tipo["impar"] = 1] = "impar";
})(tipo || (tipo = {}));
//ANY
let cualquiera = 'cualquier valor';
cualquiera = 89;
//OBJETO
let objeto = { nombre: 'Juan', apellido: 'Perez', celular: 76767676 };
//estructuras de control
let contiene;
if (arrayNumerico.includes(3))
    contiene = true;
else
    contiene = false;
contiene = arrayNumerico.includes(3) ? true : false;
contiene = arrayNumerico.includes(3);
for (let i in array)
    console.log('for in: ' + i); //devuelve las posiciones si quiero obtener los valores 
for (let i of array)
    console.log('for of: ' + i); //obtiene los valores
array.forEach(i => console.log('foreach: ' + i)); //me imprime tambien los valores
//ambito de la variable
if (materia.includes('Desarrollo')) {
    let local = true;
    var global = true;
    console.log(local);
}
let auto = { placa: '33-5006', chasis: '4354544greg' };
//FUNCIONES
function saludo(nombre) {
    console.log('Hola ' + nombre);
}
saludo('Juan');
//POO
var persona = new poo_1.Persona('123455', 'Juan ', 'Perez', 'Lopez', new Date(200.5, 26), 71717171);
persona.saludar();
var estudiante = new poo_1.Estudiante('123455', 'Juan ', 'Perez', 'Lopez', new Date(200.5, 26), 71717171, '26-456');
estudiante.saludar();
console.log(auto);
//# sourceMappingURL=index.js.map