// creating number

let a = 10;

console.log(a);

console.log(typeof(a)); // number


// creating boolean

let b = true;

console.log(b);

console.log(typeof(b));  // boolean


// creating string

let c = "Campus Hub";

console.log(c);

console.log(typeof(c));  // string

// null 

let d = null;

console.log(d);  // null

console.log(typeof(d));  // object

// undefined

let e = undefined;

console.log(e);  // undefined

console.log(typeof(e));  // undefined

// bigint

let f = 1.2589632475232e7;

console.log(f);

console.log(typeof(f));  // bigint

//  creating symbols

const symb1 = Symbol();
const symb2 = Symbol("id");
const symb3 = Symbol("id");

// Every symbol is completely unique, even if they share same description

console.log(symb2 == symb3);  // false

console.log(symb1 == symb2); // false

console.log(typeof(symb1));

