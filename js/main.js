/*
shuffle function thanks to w3resource
https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
*/

/* issues to solve:
1. game evaluates multipule clicks on single card which can return a false match
2. solved!
3. would be great to add a "matches found" counter but if I don't stop adding
   complexity I'll never eat lunch and I'm submitting this late already
4. would be great to make the css responsive
*/

function shuffle(thedeck) {
    let ctr = thedeck.length;
    let temp;
    let index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = thedeck[ctr];
        thedeck[ctr] = thedeck[index];
        thedeck[index] = temp;
    }
    return thedeck;
}

var cards = [
	{
	rank: "joker",
	suit: "haha",
	cardImage: "images/joker.png"
},
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

shuffle(cards);

var cardsInPlay = [];

/*
I thought this would work as
var resetTimer = window.setTimeout(reset, 4000);
but it didn't :(
*/
//var resetTimer = function() {
	//don't let the user stare at their failure for very long
//	setTimeout(reset, 3000);
//}

var timer;

function startTimer() {
	timer = setTimeout(reset, 3000);
	console.log("Timer started");
}

function stopTimer() {
	clearTimeout(timer);
	console.log("Timer stopped");
}

var checkForMatch = function() {
	//return success if cardIds match, or sad message if not
	if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("0=1");
			document.getElementById("score").innerHTML = "You found the first match!"
			} else {
			console.log("0/=1");
			document.getElementById("score").innerHTML = "Sorry, no match."
			}
};

var checkForNextMatch = function() {
		//perfect
		if (cardsInPlay[0] === cardsInPlay[1] && cardsInPlay[2] == cardsInPlay[3]) {
			console.log("0=1 && 2=3")
			document.getElementById("score").innerHTML = "Congrats on a perfect score! You foiled the Joker.<br />Hit Reset to play again."
		//only the second
		} else if (cardsInPlay[0] != cardsInPlay[1] && cardsInPlay[2] === cardsInPlay[3]) {
			console.log("0!=1 && 2=3");
			document.getElementById("score").innerHTML = "You found the second match! Game will reset in 3 seconds.";
			startTimer();
		//only the first
		} else if (cardsInPlay[0] === cardsInPlay[1] && cardsInPlay[2] != cardsInPlay[3]) {
			console.log("0=1 && 2!=3");
			document.getElementById("score").innerHTML = "Good job finding the first pair! Game will reset in 3 seconds.";
			startTimer();
		//no matches
		} else {
			console.log("Zilch")
			document.getElementById("score").innerHTML = "Better luck next time! Game will reset in 3 seconds.";
			startTimer();
			}
};

var flipCard = function() {
	//find out which card the user clicked
	var cardId = this.getAttribute("data-id");
	//add that card to the cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);
	//change the html to display the card image
	this.setAttribute("src", cards[cardId].cardImage);
	//once two cards have been added to array, check for match
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	//check for another match once user flips four cards
	else if (cardsInPlay.length == 4) {
		checkForNextMatch();
	}
};

var createBoard = function() {
	//loop through the cards array and make each an element
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		//make the cards clickable
		cardElement.addEventListener("click", flipCard);
		//place the created elements in the html
		document.getElementById("game-board").appendChild(cardElement);
	}
};

var reset = function() {
	//stop the timer incase user hits reset button early
	stopTimer();
	//clear out the cardsInPlay array
	cardsInPlay = [];
	//shuffle the deck
	shuffle(cards);
	//display an encouraging message
	document.getElementById("score").innerHTML = "Board reset, good luck!";
	//clear out the old cards
	document.getElementById("game-board").innerHTML = "";
	//new board set
	createBoard();
	console.log("Board reset");
};

//make the reset button work
document.getElementById("reset").addEventListener("click", reset);

createBoard();