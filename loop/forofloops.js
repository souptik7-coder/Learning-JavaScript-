// for of loops
console.log("for of loops:");
let fruits=["mango","apple","banana","litchi","orange"];
for(fruit of fruits){
    console.log(fruit);
}

console.log(" ");
console.log("nested for of loops:");
console.log(" ");
// nested
let heroes=[["Superman","batman","wonderman"],["Spiderman","ironman","thor"]];
for(hero of heroes){
    for(list of hero){
        console.log(list);
    }
}
