//User and Computer can pick from the below array
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y','z'];
var userChoice =[];
var guessesleft = 9;
var wins = 0;
var loses = 0;

//computer guess
var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

for (i=0; i<9; i ++) {
    userChoice = prompt("What's your guess?");
    if (computerChoice == userChoice) {
        alert("You're right!");
        break;
    } else {
        guess = prompt("Guess Again");
    }
}

