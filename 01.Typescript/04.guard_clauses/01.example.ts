//! Uso de guard_clauses para evitar el anidamiento de if-else
//? Esta técnica consiste en invertir la condición (negación !, !=, !==)
let phone: boolean = true;
let brand: string = "Apple";
let model: string = "Iphone";
let version: number = 14;

const checkLastIphone = () => {
  if (!phone) return console.log("No es un teléfono");
  if (brand !== "Apple") return console.log("No es Apple");
  if (model !== "Iphone") return console.log("No es un Iphone");
  if (version !== 14) return console.log("No es el último modelo");
  return console.log("Es el último iphone");
};
