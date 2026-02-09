//! Types para tipar OBJETOS
export type User = {
  readonly username: string; // propiedad de solo lectura
  readonly age: number; // propiedad de solo lectura
  email?: string; // propiedad opcional.
  company?: Company;
  role: "admin" | "user" | "editor"; // SOLO PUEDE SER DE ESOS TIPOS, LITERAL-TYPES
};

//! Si dentro de nuestro objeto tenemos un objeto anidado mejor sacarlo a otro tipo.
export type Company = {
  nameCompany: string;
  address: string;
  phone?: number;
};

//! Literal types
type Direction = "up" | "down" | "left" | "right";

//! Intersection type, 1:00:39
https://www.twitch.tv/videos/2688909256