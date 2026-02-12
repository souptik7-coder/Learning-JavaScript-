// Create a function that gives us the average of three numbers

function average(a,b,c){
    let d=(a+b+c)/3;
    console.log("The average number is :",d);
}
average(4,5,7);


// Create a function that prints a table of a number

function multiplicationtable(n){
    console.log(`The multiplication table of ${n} is :`);
    for(let i=n;i<=n*10;i=i+n){
        console.log(i);
    }
}
multiplicationtable(5);
multiplicationtable(7);
