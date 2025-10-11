//Esto es un comenrtario 
/*
Esto es un comentario
de multiples lineas
 */
//TIPOS DE DATOS

import { Estudiante, Persona } from "./poo";

//BOOLEAN
let esActivo: boolean = true; // let: el ambito es local, funciona dentro del scope (funcion dentro de un ciclo, un if una parte de codigo que tengamos con llaves)
var esActivo2: boolean = false; // var: el ambito es en todo el archivo
const esActivo3: boolean = true; //const: para constantes

//NUMBERS
let entero: number = 15;
let enteroLargo: number = 123456789022222222
let real:number = 3.1416
let binario: number = 0b001;
let bincinco: number = 0b101;
let octal: number = 0o11
let hexadecimal: number = 0xC;

//STRING
let sigla: string = 'SIS257'
let materia:string = 'Desarrollo de Aplicacion Int/Internet II'
let concatenar: string = sigla + ' - ' + materia;
let concatenar2: string = `${sigla} - ${materia}`;

let mayusculas: string = materia.toUpperCase()
let minusculas: string = materia.toLocaleLowerCase()
let reemplazo: string = materia.replace(/ /g,'#')
let repetir: string = sigla.repeat(3);
let sinEspaciosExtremos:string = ('   '+materia).trim();
let separar: string[] = materia.split(' ');
let subcadena: string = materia.substring(5,10);
let longitudCadena: number = materia.length;

//ARRAY
let array: string[] = ['uno','dos','tres','cuatro']
let arrayNumerico: number[] = [1,2,3,4]
let longitudArray: number = array.length;
let doble: number[] = arrayNumerico.map(n => n * 2) //es para mapear me dara un nuevo array, mapearemos un array con un numero es decir haremos que se multiple *2
let factorial: number = arrayNumerico.reduce((prev, curr) => prev * curr); //obtenemos la multiplicacion de todos los variables del array
let revertir: number[] = arrayNumerico.reverse();
let impares: number[] = arrayNumerico.filter(n => n % 2 == 1);
array.shift(); //elimina el primer elemento
array.pop(); //eliminar el ultimo elemento
array.push('cinco');  //inserta un nuevo elemento


//tuple es conceptual
let tuple = [true, 7.5, 'Hola', [8,9,10]];
//ENUM
enum sexo {M = 'Masculino', F = 'Femenino'};
enum color {red = 'Rojo', yellow = 'amarillo', blue =  'azul'}; //los enums pueden ser cadenas o numericos cualquier tipo de dato
enum tipo {par = 0, impar = 1}

//ANY
let cualquiera: any = 'cualquier valor';
cualquiera = 89;

//OBJETO
let objeto: object = {nombre: 'Juan', apellido: 'Perez', celular: 76767676};

//estructuras de control
let contiene : boolean;

if(arrayNumerico.includes(3)) contiene = true;
else contiene = false;

contiene = arrayNumerico.includes(3) ? true : false ;
contiene = arrayNumerico.includes(3);

for(let i in array) console.log('for in: '+i)//devuelve las posiciones si quiero obtener los valores 
for(let i of array) console.log('for of: '+i)//obtiene los valores
array.forEach(i => console.log('foreach: '+i)) //me imprime tambien los valores

//ambito de la variable
if(materia.includes('Desarrollo')){
    let local: boolean = true;
    var global: boolean = true;
    console.log(local);
}

// console.log(local); no reconoce la varible porque esta dentro de uns estructura
// console.log(global) reconoce pero no esta inicializada

//Interfaces
interface IVehiculo {
    placa: string,
    chasis: string,
}

let auto: IVehiculo = {placa: '33-5006', chasis: '4354544greg'}


//FUNCIONES
function saludo(nombre: string): void{
    console.log('Hola '+nombre);
}
saludo('Juan');

//POO

var persona = new Persona('123455','Juan ', 'Perez', 'Lopez', new Date(200.5,26), 71717171);
persona.saludar();
var estudiante = new Estudiante('123455','Juan ', 'Perez', 'Lopez', new Date(200.5,26), 71717171, '26-456');
estudiante.saludar();
console.log(auto);