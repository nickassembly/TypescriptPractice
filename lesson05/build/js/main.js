"use strict";
// convert more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Problem with type assertions. Typescript sees no problem, but a string is returned!
let nextVal = addOrConcat(2, 2, 'concat');
//10 as string;
10; // double casting
// The DOM
const img = document.querySelector('img'); // non-null element
const myImg = document.getElementById('#img');
img.src;
myImg.src;
