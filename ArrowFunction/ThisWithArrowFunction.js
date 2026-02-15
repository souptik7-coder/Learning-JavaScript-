// This with Arrow Function

const student={
    name:"Souptik",
    marks:87,
    prop:this, // global scope it's means window
    getname:function(){
        console.log(this);
        return this.name;
    },
    getmarks:()=>{    // arrow function 
        console.log(this);    // parent scope
        return this.marks;    
    },
    getinfo1:function(){
        setTimeout(()=>{
            console.log(this)    // student   
        },2000);                               // arrow function always see parent objects          
    },
    getinfo2:function(){
        setTimeout(function(){
            console.log(this)                  // window
        },2000);  
    }

}
console.log(student.getname());
student.getmarks();
student.getinfo1();
student.getinfo2();
