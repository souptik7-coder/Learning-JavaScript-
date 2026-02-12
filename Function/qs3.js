// qs : 3 => Create a Function that returns the concatenation of all strings in an array

let arr=["I"," am"," a"," boy"];
function concatenation(arr){
    let str="";
    for(let i=0;i<arr.length;i++){
        str=str+arr[i];
    }
    return str;
}
console.log("The sentence is :",concatenation(arr));
