//User and Computer can pick from the below array
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y','z'];
var userChoice =[];
var guessescount = 9;
var wins = 0;
var loses = 0;

//computer guess
var computerChoice = getRandComputerChoice();

console.log (computerChoice);

function getRandComputerChoice(){
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function resetGame(){
    guessescount = 9;
    userChoice = [];
    computerChoice = getRandComputerChoice();
    updateDom();
}

function updateDom() {
    var winsCount = document.getElementById("wins");
    winsCount.innerHTML = wins;
    var guessescountel = document.getElementById("guessesLeft");
    guessescountel.innerHTML = guessescount;
    var currentGuessesEl = document.getElementById("currentGuesses");
    currentGuessesEl.innerHTML = userChoice.join(','); // => ['a','b'] => a, b;
    var losesCount = document.getElementById("losses");
    losesCount.innerHTML = loses;
}

document.onkeydown = function(event) {
    // It's going to reduce the guesses by one
    // Lowercase the letter
    var letter = event.key.toLowerCase();
    console.log (letter)
// only want ANY of this code to run below IF:
/* 
1. letter to lowercase exists in computerChoices
2. It also cannot be in userChoice
*/
if(computerChoices.indexOf(letter.toLowerCase()) === -1) {
    //Show error to user
    alert('You did not choose a letter');
    return;
}

if(userChoice.indexOf(letter.toLowerCase()) > -1){
    //Show error that letter was already chosen
    alert('You already chose that')
    return;
}
if (letter===computerChoice) {
    console.log (letter)
    console.log (computerChoice)
    alert ("You Win");
    wins = wins + 1  
    resetGame();
    return;
}


else {
    guessescount = guessescount - 1;
    userChoice.push(letter)

}

if (guessescount === 0) {
    alert ("Bummer, you lost this one.")
    loses = loses + 1
    resetGame();
    return;
}

updateDom();
  
}