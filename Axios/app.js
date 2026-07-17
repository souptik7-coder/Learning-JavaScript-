let url = "https://catfact.ninja/fact";

let button = document.querySelector("button");
button.addEventListener("click", async()=>{
    let data = await getP();
    console.log(data);
    let p = document.querySelector("#para");
    p.innerText = data;
})

async function getP() {

    try {
        let res = await axios.get(url);

        
        return res.data.fact;

    }catch(err) {
        console.log(err);
        return "no data found";
    }
}
