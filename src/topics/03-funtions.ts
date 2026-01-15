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

console.log({ result, result2, multiplyResult });
