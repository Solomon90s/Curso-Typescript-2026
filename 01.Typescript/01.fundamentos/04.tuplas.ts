//!Tupla, indicar LA LONGITUD Y TIPO DE DATO.
const fruits: [string, string, string] = ["naranja", "mandarina", "uva"];

const persona: [string, number] = ["solomon", 30];

const [personaName, personaAge] = persona;

//! 1. Coordenadas
type Coordenadas = [latitude: number, longitude: number];
const [lat, lng]: Coordenadas = [40, 3];

//! 2. Rangos de valores
type Rango = [min: number, max: number];
const rangoEdad: Rango = [18, 65];

//! 3. Tuplas con operador rest
type StringAndNumbers = [string, ...number[]];
const [text, firstNumber, restOfNumbers]: StringAndNumbers = [
  "texto",
  1,
  2,
  3,
  4,
  5,
];

type Config = readonly [server: string, port: number, useSSL: boolean];
const dbConfig: Config = ["localhost", 5432, true];
