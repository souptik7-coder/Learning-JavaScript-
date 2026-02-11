// loop with arrays
console.log("loop with arrays");
let fruits=["mango","banana","apple","litchi","orange"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

// Nested loops with arrays
console.log("Nested loop with arrays");
console.log(" ");
let students=[["Souptik",55],["Mohon",88],["Rampur",88],["Anik",87]];
for(let i=0;i<students.length;i++){
    for(let j=0;j<students[i].length;j++){
        console.log(students[i][j]);
    }
}
