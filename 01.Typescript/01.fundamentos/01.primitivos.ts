/*
!TIPOS PRIMITIVOS
*/
//* 1. String
let firstName: string = "Solomon";
const greet = `Hola, ${firstName}`; // template string

//* 2. Number
let age: number = 30;
const color: number = 0x09f;

//* 3. Boolean
let isDeveloper: boolean; // variable sin valor inicial.
isDeveloper = true;
let isAdult: boolean = false;

//* 4. Nulos o undefined
let nulo: null = null; // null y undefined son diferentes
let indefinido: undefined = undefined;

//* 5. Union Type, puede ser de varios tipos de datos.
let edad: number | null = null;

//* 6. Bigint, número grande
const numberBig: bigint = 9007199254741991n;

//* 7. Symbol
const id: symbol = Symbol("id");

//! diferencia en la inferencia de datos para adivinar el tipo de dato, para let y const.
//! en las constantes el tipo es el propio valor
const city = "Madrid";
city = "Barcelona";
let country = "España";
country = "México";
