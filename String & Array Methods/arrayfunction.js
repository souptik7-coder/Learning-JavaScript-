// arrays are mutable

let fruits=["apple","mango","pine apple","banana"];
console.log(fruits);
fruits[0]="orange";
console.log(fruits);

  // array methods - push , pop, unshift , shift

let cars=["audi","bmw","xuv","maruti"];
console.log(cars);
cars.push("honda");
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift("Galmmer");
console.log(cars);
cars.shift();
console.log(cars);
  

// practice qs - 1

let start=["January","July","March","August"];
console.log(start);
// final = ["July","June","March","August"];
start.shift();
start.shift();
start.unshift("June");
start.unshift("july");
console.log(start);


// indexOf

let primary=["red","yellow","blue"];
console.log(primary.indexOf("red"));   // 0
console.log(primary.indexOf("blue"));  //2
console.log(primary.indexOf("yellow")); //1
console.log(primary.indexOf("Yellow")); // -1

// includes

console.log(primary.includes("orange")); // false
console.log(primary.includes("blue")); // true


// contact & merge 2 arrays

let a=["yellow-violet","yellow-green","red-balck","oliver","deep-black"];
let b=["orange-yellow","orange-blue","orange-green","orange-navyblue"];
console.log(a.concat(b));

// reverse 
console.log(a.reverse());


// slice & splice 

// slice

let colors=["red","yellow","blue","orange","pink","white"];
 console.log(colors.slice(0,4));                                  // slice(start,end)  --> here "end" is exclusive
 console.log(colors.slice(-4));


// splice

colors.splice(0,4);
console.log(colors);                           // splice(starting index , deletecount)   
colors.splice(0,1); 
console.log(colors); // white


// sorts an array

let days=["Monday","Sunday","Wednesday","Tuesday"];
days.sort();
console.log(days);   

let squares=[25,16,4,49,36,9];
squares.sort();
console.log(squares);     // it sorted not numerically . It's sorted as strings based on Unicode 

// practice qs :1

let starts=["january","July","March","August"];
// let ends=["July","June","March","August"];
starts.splice(0,2,"July","June");
console.log(starts);

// practice qs :2

let language=["c","C++","HTML","JS","Python","Java","C#","SQL"];
console.log(language.reverse());
console.log(language.indexOf("JS"));

// nested arrays
let nums =[[2,4],[3,6],[4,8]];
console.log(nums);
console.log(nums[0]);
console.log(nums[0][1]);


// tic-tac-toe game

let arr=[["X","0","0"],["0","X","0"],["0","0","X"]];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// constant array

// const arr1=[1,2,3,4];  - Now it's constant

// let a=5;
// const a=5;  - don't use another time because it's error