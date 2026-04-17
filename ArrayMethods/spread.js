console.log(..."ApnaCollege");

// with array literals

let arr=[1,2,3,4,5];
let newarr=[...arr];
console.log(newarr);
let char=[..."hello"];
console.log(char);
let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
console.log(...odd,...even);


// with objects
const data={
    email:"souptikmemari264@gmail.com",
    pass:"abcd"
}
const datacopy={...data,id:123};
console.log(datacopy);


let arr1=[1,2,3,4,5];
let obj1={...arr1};
console.log(obj1);    // indexwise print

let obj2={..."hellow"};
console.log(obj2);   // indexwise print
