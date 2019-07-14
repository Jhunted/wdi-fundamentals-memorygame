var cards = [
{
 	rank: "queen",
 	suit: "hearts",
 	cardImage: "images/queen-of-hearts.png"
},

{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},

{
 	rank: "king",
 	suit: "hearts",
 	cardImage: "images/king-of-hearts.png"
},

{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];



var cardsInPlay = [];



function checkForMatch()
{
	this.setAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay[0] === cardsInPlay[1])
	{
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
	}
}


function flipCard(cardId)
{	
	console.log("***********************************")
	console.log("User flipped " + cards[cardId].rank);
	console.log("The suit was " + cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2) 
	{
		if (cardsInPlay[0] === cardsInPlay[1])
		{
			alert ("You found a match!");
		}
		else{alert("Sorry, try again.")};
	}
}

function createBoard()
{
	var gameBoard = document.getElementById("game-board");
	

	for (var i = 0; i < cards.length; i++) 	
	{
    	var cardElement = document.createElement("img");    	
    		cardElement.setAttribute("src", "images/back.png");
    		cardElement.setAttribute("data-id", i);
    		cardElement.addEventListener("click", flipCard(i));
    		gameBoard.appendChild(cardElement);
    }
}

createBoard();
console.log(document.getElementById("game-board"));


