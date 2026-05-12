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
// fetch(url).then((res)=>{
//     console.log(res);
//    return res.json();
// })
// .then((data)=>{
//     console.log(data);
//     return fetch(url);
// })
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data2)=>{
//     console.log(data2);
//     return fetch(url);
// })
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data3)=>{
//     console.log(data3);
// })
// .catch((err)=>{
//     console.log(err);
// })


// using async function is comparatively easy to understand the code


async function getdata(){

    try{
    let data=await fetch(url);
    let original= await data.json();
    console.log(original);
    console.log(original.fact);


    let data2=await fetch(url);
    let original2=await data2.json();
    console.log(original2);
    console.log(original2.fact);


    let data3=await fetch(url);
    let original3=await data3.json();
    console.log(original3);
    console.log(original3.fact);
    }catch(err){
        console.log(err);
    }

}
getdata();