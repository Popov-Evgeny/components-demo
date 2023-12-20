import Jane from '../otherPerson/person';


console.log(Jane);
export const pi = 3.14;
export const lifeNumber = 42;
export const numberArray = [4, 8, 15, 16, 23, lifeNumber];

export const Str = 'Hello people!';

const numbers = {
    d6: () => {
        return Math.floor(Math.random() * 6) + 1;
    }
};

export default numbers;

