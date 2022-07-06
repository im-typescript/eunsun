import IPerson from "./person/IPerson";
import Person2 from "./person/Person2";
import IPerson4 from "./person/Person4";
import AbstractPerson5 from "./person/Person5";
import INameable from "./person/INameable";

let good: IPerson = { name: "Jack", age: 32 };

// let bad1: IPerson = { name: "Jack" };
// let bad2: IPerson = { age: 32 };

// let bad3: IPerson = {};
// let bad4: IPerson = { name: "Jack", age: 32, etc: true };

let jack2: Person2 = new Person2("Jack", 32);

console.log(jack2);

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}

let jack4: IPerson4 = new Person4("Jack", 32);
console.log(jack4);

class Person5 extends AbstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age);
  }
}

let jack5: Person5 = new Person5("Jack", 32);
console.log(jack5);

class A {
  static initValue = 1;
}

let initVal = A.initValue;
A.initValue = 3;
console.log(A.initValue);

interface addressInterface {
  country: string;
  city: string;
  address1: string;
  address2: string;
  address3: string;
}
let address: addressInterface = {
  country: "Korea",
  city: "Seoul",
  address1: "1",
  address2: "2",
  address3: "3",
};

const { country, city, ...detail } = address;
console.log(detail);

let obj: object = { name: "Jack" };

let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;

console.log(name1, name2);

type Test = (a: string, b: number) => void; // (type키워드 + 함수 시그니처)
let a: Test = function (a: string, b: number): void {};

// const Test = (par1?: string, par2?: number, par3?: number) => {
//   console.log(par1);
//   console.log(par2);
//   console.log(par3);
// };
// Test();

// const makePerson = (a?: string, b?: number): any => a
// console.log(makePerson("1"));


type Person10 = {a :string , b: number}
const makePerson = (a:string, b: number = 10 ) : Person10 => ( { a,b } )
console.log(makePerson('test',10));