//! Las interfaces definen la "forma" de un objeto
//! Son contratos que especifican qué propiedades y métodos debe tener
//! PARA OBJETOS TRABAJAR CON INTERFACE

export interface Game {
  name: string;
  duration: number;
  genre: string[];
}

const MetalGear: Game = {
  name: "Metal Gear Solid Delta",
  duration: 30,
  genre: ["Action", "Espionage"],
};

export interface Hero {
  name: string;
  readonly power: number;
  city?: string;
}

const hero: Hero = {
  name: "Batman",
  power: 25000,
};

hero.power = 10;

//? Para clases
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

class Reproductor extends MediaPlayer {
  play(): void {
    console.log("Reproduciendo");
  }
  pause(): void {
    console.log("Pausando");
  }
  stop(): void {
    console.log("Detenido");
  }
}

class newReproductor implements MediaPlayer {
  play(): void {
    console.log("Reproduciendo");
  }
  pause(): void {
    console.log("Pausando");
  }
  stop(): void {
    console.log("Detenido");
  }
}
