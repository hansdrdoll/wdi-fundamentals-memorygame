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

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	//Display card user selected
	console.log("user flipped " + cards[cardId].rank);
	console.log("suit is " + cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	//Add that card to inPlay array
	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();