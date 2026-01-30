function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T,
) {
  return class extends constructor {
    newProperty = "New Property";
    hello = "Override";
  };
}

@classDecorator
export class SuperClass {
  public myProperty: string = "Abc123";
  print() {
    console.log("Hola mundo");
  }
}

// Imprime la definición de la clase
console.log(SuperClass);

// Imprime la instancía de la clase
const myClass = new SuperClass();
console.log(myClass);
