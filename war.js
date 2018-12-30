var cards = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
var suits = ["Spades", "Clubs", "Diamonds", "Hearts"];

var deck = [];
cards.forEach(card => {
  for (var i = 0; i < suits.length; i++) {
    deck.push(`${card} of ${suits[i]}`);
  }
});

console.log(deck);
