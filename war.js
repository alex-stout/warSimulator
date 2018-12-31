var player1Hand = [];
var player1Score = 0;
var player2Hand = [];
var player2Score = 0;

createDeck = () => {
  const values = [
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

  const suits = ["Spades", "Clubs", "Diamonds", "Hearts"];

  var deck = [];
  values.forEach(value => {
    for (var i = 0; i < suits.length; i++) {
      deck.push({
        value: value,
        suit: suits[i]
      });
    }
  });
  return deck;
};

shuffle = deck => {
  for (var i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

deal = deck => {
  for (var i = 0; i < deck.length; i++) {
    if (i % 2 === 0) {
      player1Hand.push(deck[i]);
    } else {
      player2Hand.push(deck[i]);
    }
  }
};

playRound = (player1Hand, player2Hand) => {
  // get the top card from each person
  var player1Card = player1Hand.pop();
  var player2Card = player2Hand.pop();
};

// returns the following based on outcome:
// 0: Player 1 wins
// 1: Tie
// 2: Player 2 wins
compareCard = (card1, card2) => {
  const values = [
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
  console.log(card1);
  console.log(card2);
  if (values.indexOf(card1.value) > values.indexOf(card2.value)) {
    console.log("Player 1 wins");
    return 0;
  } else if (values.indexOf(card1.value) === values.indexOf(card2.value)) {
    console.log("Tie!");
    return 1;
  } else {
    console.log("Player 2 wins");
    return 2;
  }
};

engageWar = (player1Hand, player2Hand) => {
  console.log("LETS WAR");
};

var deck = createDeck();
deck = shuffle(deck);
deal(deck);

//console.log(player1Hand);
console.log(`The deck size is ${player1Hand.length}`);
compareCard(player1Hand[0], player2Hand[0]);
