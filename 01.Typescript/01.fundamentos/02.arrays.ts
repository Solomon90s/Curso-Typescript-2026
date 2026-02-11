//! Arrays o colecciones de datos.

//* Hay dos tipos de sintaxis en los arrays.
//? 1. Primera sintaxis, la más básica.
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.push(10);

//? 2. Segunda sintaxis,<GENÉRICOS>, esta es más avanzada.
const numbersAlts: Array<number> = [10, 20, 30];
numbersAlts.push(40);

//! Array vacío
const empty = []; //* si es vacío es de tipo any(de cualquier tipo). EVITAR ANY SIEMPRE
let strings: string[] = [];

//! Arrays de tipos mixtos
const mixto: (string | number)[] = ["typescript", 10];
