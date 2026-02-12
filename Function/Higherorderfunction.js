// Function Expression

const sum=function(a,b){
    return a+b;
}
console.log(sum(5,4));

// Higher Order function

function multiplegreet(func,n){
    for(let i=0;i<=n;i++){
        func();
    }
}
let greet=function(){
    console.log("hellow World");
}
multiplegreet(greet,5);