//! Objetos
//* Importamos el tipo que hemos creado
import type { User } from "./031.types.ts";

//* Tipar objeto mediante type alias(contrato que debe cumplir).
// type User = {
//   username: string;
//   age: number;
// };
const user: User = {
  username: "solomon",
  age: 20,
  email: "solomon@gmail.com",
  role: "admin",
};

user.username = "curry";

const anotherUser: User = {
  username: "gold",
  age: 40,
  role: "user",
};

//! Objeto anidado
const newUser: User = {
  username: "lebron",
  age: 41,
  role: "editor",
  company: {
    nameCompany: "lakers",
    address: "california",
  },
};
