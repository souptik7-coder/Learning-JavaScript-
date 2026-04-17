function sum(...args){ // arguments
    for(let i=0;i<args.length;i++){
        console.log("You gave us :",args[i]);
    }
}
sum(1,5);


function min(a,b,c,d){
    console.log(arguments);
    console.log(arguments.length);
    // console.log.push(1);  => give error
}
min(1,2,3,4);
