var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

//note that instructions change this from alert to consolelog
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
			} else {
			console.log("Sorry, not equal");
		}
};

var flipCard = function(cardID) {
	//Display card user selected
	console.log("user flipped " + cards[cardID]);
	//Add that card to inPlay array
	cardsInPlay.push(cardID);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

flipCard(0);

flipCard(2);
