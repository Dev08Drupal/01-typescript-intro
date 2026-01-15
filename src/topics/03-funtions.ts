function addNumbers(a: number, b: number) {
  return a + b;
}

// Funciones flecha
// Se puede declarar lo que retorna esa función
const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(
  firtsNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firtsNumber * base;
}

const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
const multiplyResult: number = multiply(5);

// console.log({ result, result2, multiplyResult });

interface Character {
  name: string;
  hp: number;
  // Así se declara la función
  showHP: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHP() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 10);
healCharacter(strider, 30);

strider.showHP();
