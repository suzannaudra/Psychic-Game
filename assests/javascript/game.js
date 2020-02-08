var answer = 
var guess = prompt("What's your guess?")

for (i=0; i<9; i ++) {
    guess = prompt("What's your guess?");
    if (answer == guess) {
        alert("You're right!");
        break;
    } else {
        guess = prompt("Guess Again");
    }
}

