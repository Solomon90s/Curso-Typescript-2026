//! ANY, UNKNOWN, NEVER AND VOID. Tipos especiales

//? ANY. Acepta cualquier valor. EVITAR USAR ANY. Se salta la verificación de datos.
/*
! Cuando usar ANY,
? 1. En migraciones de JS a TS
? 2. En librería de terceros sin tipos
*/
let cualquierCosa: any = "hola";
cualquierCosa = 42;
cualquierCosa = true;
const result = cualquierCosa + 8;

//? unknown. Acepta cualquier valor. No puedes usarlo directamente. Alternativa segura a ANY. REQUIERE VERIFICACIÓN
let valorDesconocido: unknown = "hola";
valorDesconocido = 42;
valorDesconocido = true;
// const suma = valorDesconocido + 8;

//? Para poder usarlo hacer type narrowing. Verificamos el tipo de dato antes de usarlo.
if (typeof valorDesconocido === "number") {
  const resultadoSeguro = valorDesconocido + 8;
  console.log(resultadoSeguro);
} else if (typeof valorDesconocido === "string") {
  console.log(valorDesconocido.toUpperCase());
}

//? VOID - Funciones que no devuelven ningún valor útil.
const saludar = (): void => {
  console.log("Hola!");
};

const logError = (errorMessage: string): void => {
  if (errorMessage.length === 0) {
    return undefined;
  }
  console.error("Error", errorMessage);
};

//? NEVER - El tipo imposible. EL VALOR QUE NO VA A OCURRIR NUNCA. Para funciones que no terminan o casos imposibles.
const bucleInfinito = (): never => {
  while (true) {
    //
  }
};

const throwError = (message: string): never => {
  //!Función que lanza un error para eso podemos usar el never.
  throw new Error(message);
};
