// methods shorthand in objects

const calculator={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    multiplication(a,b){
        return a*b;
    },
    divison(a,b){   
        return a/b;
    },
    modulo(a,b){
        return a%b;
    }
}
console.log("The sum is :",calculator.add(4,7));
console.log("The sub is :",calculator.sub(8,7));
console.log("The multiplication is :",calculator.multiplication(7,8));
console.log("The divison is :",calculator.divison(4,2));
console.log("The modulo is :",calculator.modulo(10,5));
