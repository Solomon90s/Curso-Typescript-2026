//! Tipado fuerte
//? Tipado estático el compilador analiza el código antes de ejecutarlo.
//? Tipado fuerte tipa el tipo de dato de las variables. No permite conversiones de tipo.
//* TYPESCRIPT NO FUNCIONA EN TIEMPO DE EJECUCIÓN, LO HACE EN TIEMPO DE COMPILACIÓN. Para esto DEBEMOS VALIDAR LOS DATOS.
const double = (number: number): number => {
  return number * 2;
};

double(4);
