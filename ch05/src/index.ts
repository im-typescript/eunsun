// import { testMakePerson } from "./util/makePerson";
// testMakePerson();

// let array = new Array();
// array.push(1);
// console.log(array);

// let a = [ 1,2,3];
// let o = {name: 'Jack', age: 32};

// //배열의 타입
// let numArray : number[] = [1,2,3];
// let strArray : string[] = ['Hello','World']

// type IPerson = {name: string, age?:number};
// const personArray :IPerson[] = [{name:"Jack"}, {name:"Jane",age: 32}];

// //split

//선언형 sum
import { range, fold, filter, map } from "./util";

let numbers: number[] = range(1, 100 + 1);
let result = fold(numbers, (result, value) => result + value, 0);

console.log("선언형 sum : ", result);
//filter odd sum

const isOdd = (n: number): boolean => n % 2 != 0;

result = fold(filter(numbers, isOdd), (result, value) => result + value, 0);
console.log("filter odd sum:", result);

// map

result = fold(
  map(numbers, (value) => value * value),
  (result, value) => result + value,
  0
);
console.log("map:", result);

//mergeArray
import { mergeArray } from "./util";
const mergeArray1: string[] = mergeArray(["Hello"], ["World"], [""]);
console.log("mergeArray:", mergeArray1);
