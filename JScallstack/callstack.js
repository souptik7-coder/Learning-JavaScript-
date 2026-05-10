function hello(){
    console.log("hellow world");
}
function demo(){
    console.log("executing hellow world");
    hello();
}
demo();

function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let b= two()+one();
    console.log("The ans is :"+b);
}
three(); // the output is three


// call back 

// here executing quickly after 2s together

function getdata(data){
    setTimeout(()=>{
        console.log("data",data);
    },2000)
}
getdata(1);
getdata(2);
getdata(3);