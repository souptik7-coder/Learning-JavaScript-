// forEach
// let arr=[1,2,3,4,5];
// let print=function(el){
//     console.log(el);                 // normal function
// }
// arr.forEach(print);

// let arr=[1,2,3,4,5];
// function print(el){                  // normal function
//     console.log(el);
// }
// arr.forEach(print);

let arr=[1,2,3,4,5];
let print=((el)=>{
    console.log(el);                  // arrow function
});
arr.forEach(print);


let data=[{
    name:"Souptik",
    marks:55
},{
    name:"Rahul",
    marks:88
},{
    name:"Rohan",
    marks:89
}]
data.forEach((student)=>{
    console.log(student.marks);
})
data.forEach((student)=>{
    console.log(student.name);
})