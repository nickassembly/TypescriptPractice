let stringArr = ['one', 'hey', 'keller'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

stringArr[0] = 'Keller';
stringArr.push('hey');

guitars[0] = 1984;
guitars.unshift('jim');

guitars = stringArr;
mixedData = guitars;

let test = [];
let bands: string[] = [];
bands.push('Van Halen');

// Tuple 
let myTuple: [string, number, boolean] = ['Keller', 21, false];

let mixed = ['John', 1, true];

myTuple[1] = 43;

// Objects
let myObj: object
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
    prop1: 'Nick',
    prop2: true,
};

exampleObj.prop1 = 'Keller';

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
};

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    active: true,
    albums: ['I', 'II', 'IV']
}

evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello!';
};

console.log(greetGuitarist(jp));

// Enums

enum Grade {
    U = 1, 
    D,
    C,
    B,
    A
};

console.log(Grade.U);

