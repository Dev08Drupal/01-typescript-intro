const skills: string[] = ["Bash", "Counter", "Healing"];

// Para mejorar el tipado en mi aplicación se debe declarar siempre el tipo de dato
// Esto ayuda a la mantenibilidad de la app

// En los arrays se debe crear una interface con los nombres y el tipo de dato
// Esto mejora el tipado
interface Character {
  name: string;
  hp: number;
  skills: string[];

  // Si quiero que esta variable de mi array no sea obligatoría
  // se puede agregar el signo de "?"
  hometown?: string;
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter"],
};

strider.hometown = "Rivendell";

console.table(strider);
