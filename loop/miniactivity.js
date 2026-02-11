let guess="Dhurandhar";
let movie=prompt("Enter your movie:");
while((guess!=movie) && (guess!="quit")){
    console.log("Wrong movie");
    movie=prompt("Wrong guess! Try again");
}
if(movie==guess){
    console.log("Congratulations! Your guess is correct");
    alert("Congratulations! Your guess is correct");
}else{
    console.log("Wrong guess");
}