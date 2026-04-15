let num=[1,2,3,4,5];
let double=num.map((el)=>{
    console.log(el);
})



let students=[{
    name:"Arya",
    marks:55,
},{
    name:"Souptik",
    marks:87
},{
    name:"Rohim",
    marks:78
}]
let gpa=students.map((el)=>{
        return el.marks/10;
})
console.log(gpa);    
