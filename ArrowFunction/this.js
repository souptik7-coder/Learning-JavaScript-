const student={
    name:"Souptik",
    age:23,
    english:85,
    Mathematics:87,
    Physics:88,
    getavg(){
        console.log(this);
        let avg=((this.english+this.Mathematics+this.Physics)/3);
        console.log(`The average marks is :${avg}`);
    }
}
student.getavg();    // print average marks and student objects
function getavg(){
    console.log(this);
}
getavg();                // print windows
