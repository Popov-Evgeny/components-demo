import PersonJohn from "./otherPerson/person";
import PersonJane from "../Person";
import * as Numbers from "./numbers/numbers";

console.log(PersonJohn.name);
console.log(PersonJane.name);

console.log(Numbers.lifeNumber);
console.log(Numbers.pi); //3.14
console.log(Numbers.numberArray); //[]
console.log(Numbers.Str);
console.log('d6()', Numbers.default.d6());

