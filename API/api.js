// let jsondata='{"fact":"In just 7 years, one un-spayed female cat and one un-neutered male cat and their offspring can result in 420,000 kittens.","length":121}';

// // JSON data to JS object

// let valid=JSON.parse(jsondata);
// console.log(valid);
// console.log(valid.fact);


// // JS object to JSON data

// let student={
//     name:"Souptik",
//     roll:44,
//     place:"Kolkata"
// }
// console.log(JSON.stringify(student));

let url="https://catfact.ninja/fact";
fetch(url).then((res)=>{
    console.log(res);
   return res.json();
})
.then((data)=>{
    console.log(data);
    return fetch(url);
})
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data2)=>{
    console.log(data2);
})
.catch((err)=>{
    console.log(err);
})
