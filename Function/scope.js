// Scope - Function , Block and lexical Scope

// **Function Scope**
let sum=54;    // global scope
function calsum(a,b){
    let sum=a+b;                             // function scope
    console.log(sum);
}
calsum(1,2); // ouput is :3
console.log(sum);  // output is :54


// **Block scope**

// {
//     let a=25;                   => It's totally gives error in this code 
// }
// console.log(a);


// **Lexical Scope**

function outerfunc(){
    let x=5;
    let y=6;
    function innerfunc(){
        console.log("The outer function is :",x);
        console.log("The outer function is :",y);
    }
    innerfunc();
}
outerfunc();
// ** If a call innerfunc() outside the outerfunc() , then it's gives us error
