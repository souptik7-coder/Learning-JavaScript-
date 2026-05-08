// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let game=prompt("Enter your game:");
let num=4;
while((game!=num) && (game!="quit")){
    console.log("Wrong");
    game=prompt("Wrong ! Enter your number again");
}
if(game==num){
    console.log("Congratulations");
    alert("congrats!");
}else{
    console.log("try again");
}

