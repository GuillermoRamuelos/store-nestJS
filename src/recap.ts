//const myName = 'Memo';
//const myAGe = 29;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(10, 19);

class Person {
  constructor(
    private name: string,
    private age: number,
  ) {}

  getSummary() {
    return `My name is ${this.name} and I am ${this.age} years old`;
  }
}

const me = new Person('Memo', 29);
console.log(me.getSummary());
