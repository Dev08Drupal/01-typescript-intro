// Se declara como una cosntante normal esta ya se identifica como string
// Tambien se puede declarar así
// const name: string = "Diego";

const name = "Diego";

// Esto funciona para que el sistema pueda sobreescribir a string o entero y no lo restrinja
// También se puede declara solo una palabra puntual
// let hpPoints: number | "FULL" = 95;
// Para que en su uso funcione así:
// hpPoints = "FULL";
let hpPoints: number | string = 95;

// También puedo declarar booleanos
// Generalmente no es necesario poner el tipo de dato porque typescript lo infiere pero es una buena practica
const isAlive: boolean = true;

hpPoints = "FULL";

console.log({
  name,
  hpPoints,
  isAlive,
});
