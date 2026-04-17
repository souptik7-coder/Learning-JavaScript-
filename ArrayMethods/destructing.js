let names=["Tony","bruce","peter","steve","abc","xyz","pyqs"];
let[winner,runnerup,secondrunnerup,...others]=names;
console.log("winner=",winner);
console.log("runnerup=",runnerup);
console.log("secondrunnerup:",secondrunnerup);
console.log("others",others);


// objects

const students={
    name: "Souptik",
    age:24,
    class :10,
    subjects:["hindi","english","mathematics","science"],
    username:"karan@123",
    password:"abcd"
}
let{username,password}=students;
console.log(username);
console.log(password);
let{username:user,password:pass,place="Mumbai"}=students;
console.log(place);
console.log(user);
console.log(pass);

