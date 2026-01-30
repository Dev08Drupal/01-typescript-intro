export class Person {
  //   public name: string;
  //   private address: string;

  constructor(
    public name: string,
    private address: string,
  ) {}
}

const ironman = new Person("Ironman", "New York ");

console.log(ironman);
