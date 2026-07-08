// This with Arrow Function

const student={
    name:"Souptik",
    marks:87,
    prop:this, // global scope it's means window
    getname:function(){
        console.log(this);  // print student object
        return this.name;
    },
    getmarks:()=>{    // arrow function 
        console.log(this);    // parent scope      // print windows
        return this.marks;    
    },
    getinfo1:function(){
        setTimeout(()=>{
            console.log(this)    // student     because arrow function has no this   
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
