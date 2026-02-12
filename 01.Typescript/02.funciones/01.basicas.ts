//! Tipar parámetros y retorno
function sumar(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

//? Funciones de flecha arrow functions
const resta = (firstNumber: number, secondNumber: number): number => {
  let result = firstNumber - secondNumber;
  if (result < 0) {
    throw new Error("El resultado no puede ser menor que 0");
  }
  return result;
};

//! Parámetros opcionales
const saludar = (nombre: string, apellido?: string): string => {
  if (apellido) {
    return `Hola ${nombre} ${apellido}`;
  }
  return `Hola ${nombre}`;
};

//! Parámetros por defecto, el parámetro por defecto NO PUEDE SER OPCIONAL
const createUser = (nombre: string, rol: string = "admin") => {
  return {
    nombre,
    rol,
  };
};

//! Rest parameters, el resto de parámetros. NO SABES LA CANTIDAD QUE VA A RECIBIR
const sumarNumeros = (...numeros: number[]): number => {
  return numeros.reduce((acc: number, curr: number): number => acc + curr, 0);
};

sumarNumeros(1, 2, 3);
sumarNumeros(1, 2, 3, 4, 5, 6);
