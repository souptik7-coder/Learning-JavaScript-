// return function

function sum(a,b){
    return a+b;
}
console.log("The sum is :",sum(4,7));


// is adult

function isadult(age){
    if(age>18){
        return "Adult";
    }else{
        return "Not adult";
    }
}
console.log(isadult(20));


// practice qs : 1 => Create a Function that returns the sum of numbers from 1 to n

function sumofnumbers(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(sumofnumbers(15));
