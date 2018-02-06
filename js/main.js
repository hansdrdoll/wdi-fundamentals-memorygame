var cards = [
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

var cardsInPlay = [];

//note that instructions change this from alert to consolelog
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			} else {
			alert("Sorry, not equal");
		}
};

var flipCard = function(cardID) {
	//Display card user selected
	console.log("user flipped " + cards[cardID].rank);
	console.log("suit is " + cards[cardID].suit);
	console.log(cards[cardID].cardImage);
	//Add that card to inPlay array
	cardsInPlay.push(cards[cardID].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

flipCard(0);

flipCard(2);
