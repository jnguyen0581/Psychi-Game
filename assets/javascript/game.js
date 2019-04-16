
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 10;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var wl = document.getElementById("w-l");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");



document.onkeyup = function (event) {
    // console.log(event);
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(event.key);
    if (event.key === "Escape") {
        wins = 0;
        losses = 0;
        guesses = 10;

        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesText.textContent = "guess left: " + guesses;

    }

    if (userGuess === computerGuess) {
        wins++;
        guesses = 10;
    

    } else {
        guesses--;
    }

    if (guesses === 0) {
        losses++;
        guesses = 10;
    }

    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesText.textContent = "guess left: " + guesses;
}