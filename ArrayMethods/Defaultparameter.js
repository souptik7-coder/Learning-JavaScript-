// default parameter

function mul(a,b=4){
    return a*b;
}
console.log(mul(2));   // print 8

function sub(a=4,b){
    return a*b;
}
console.log(sub(5));     // print NaN
