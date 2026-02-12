const procesar = (valor: number | string) => {
  if (typeof valor === "number") {
    console.log("El valor es un número:", valor.toFixed(2));
  } else {
    console.log("El valor es un string:", valor.toUpperCase());
  }
};

const imprimirMensaje = (message: string | null | undefined) => {
  //! Si tenemos un mensaje.
  if (message) {
    console.log(message);
  }
};

//? Operator narrowing
type Fish = {
  swim: () => void;
  name: string;
};

type Bird = {
  fly: () => void;
  name: string;
};

type Dog = {
  ladrar: () => void;
  name: string;
};

type Animal = Fish | Bird | Dog;

const moveAnimal = (animal: Animal) => {
  if ("swim" in animal) {
    console.log("El pez está nadando.");
    animal.swim();
  } else if ("fly" in animal) {
    console.log("El pájaro está volando");
    animal.fly();
  } else {
    console.log("El perro está ladrando");
    animal.ladrar();
  }
};

//? instanceof narrowing
const formatDate = (value: Date | string): string => {
  if (value instanceof Date) {
    return value.toUTCString();
  }
  return new Date(value).toUTCString();
};
