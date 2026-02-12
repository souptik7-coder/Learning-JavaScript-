// Qs:4 => Before run this code, predict this output

let greet="hellow";
function changeGreet(){
    let greet="Hi How Are You!";
    console.log(greet);
    function innergreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet(); 
