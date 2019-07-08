import '../styles/index.css';
import '../styles/all.css';
import '../styles/bootstrap.css';
import './files';
import { Function } from 'core-js';
// import { TIMEOUT } from 'dns';

console.log('SunCiti Jack Game');
// siteTitle(){
//     let titleUpper = document.getElementById('site-title').innerHTML=
//     titleUpper.toUpper();
//     return titleUpper;
// };
let ur = document.querySelectorAll('footer');
console.log(ur);

//black jack
    //Using variables declaration
// let card1 = "Ace of Spade",
//     card2 = "Ten of Hearts";
// console.log('Welcome to black jack');
// console.log('You are delt:');
// console.log("  " + card1);
// console.log("  " + card2);

    //using Arrays
// let deck = [
//     "Ace of Spade",
//     "Two of Spade",
//     "Three of Spade"
// ];
// let playerCards = [deck[0], deck[2]];
// console.log('Welcome to black jack');
// console.log('You are delt:');
// console.log("  " + playerCards[0]);
// console.log("  " + playerCards[1]);

    //using loop
//examples
if(5==5){
    console.log('Yes, five equals 5');
}else if (5>5) {
    console.log('Yes, five is greater than 5');
} else {
    console.log('No');
};

let state = "EN",
    percentageTax = 0;

if(state === 'EN'){
    percentageTax = 10;
}else if(state === 'CR'){
  percentageTax = 20;
};
console.log(percentageTax);

let score = 1000;
if(score !== 1000){
    score += 100;
};
console.log('The score is: ', score);

    //switch, case, break;
    let tax = 0;
  switch(state){
    case 'EN':
      tax = (percentageTax/100)*score;
        console.log('Welcome to Enugu\n Your tax due is: ', tax);
        break;
    case 'CR':
        tax = (percentageTax/100)*score;
        console.log('Welcome to Cross River\n Your tax due is: ', tax);
        break;
    default:
      console.log('State unknown');
      break;
  };  

  //for loop
  // let i = 0;
  for(let i=0; i<=10; i++){
    console.log(i);
  };
  //while loop
  let count = 1;
  while (count<=5) {
      console.log('Count number ',count);
      count++;
  };

//NOW THE JACK CARD
//Sunciti jack game
//by PJ Adoga

//CARD VARIABLES
let suits = ['Spades,', 'Hearts,', 'Clubs,', 'Diamond,'],
    values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 
      'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

//DOM VARIABLES      
let title = document.getElementById('title'),
    gameAuthor = document.getElementById('author'),
    newGame = document.getElementById('new-game'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button'),
    result = document.getElementById('result');

//GAME VARIABLES
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    // dealerWon = false;
    dealerCards = [],
    playerCards = [],
    playerScore = 0,
    dealerScore = 0,
    deck = [];

//INITIAL STATUS
    title.style.display = 'block';
    result.style.display = 'none';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
    showStatus();

//NEW GAME BUTTON EVENT     
newGame.addEventListener('click', function(){
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  // dealerWon = false;

  deck = createDeck();
  shuffleDeck(deck);
  playerCards = [getNextCard(), getNextCard()];
  dealerCards = [getNextCard(), getNextCard()];
  
  title.innerText = 'Game Satrted...';
  gameAuthor.style.display = 'block';
  newGame.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
});

//HIT BUTTON EVENT
hitButton.addEventListener('click', function(){
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
});

//STAY BUTTON EVENT
stayButton.addEventListener('click', function(){
  gameOver = true;
  checkForEndOfGame();
  showStatus();
});
 
//CREATE DECK FUNCTION
function createDeck() {
  //create deck locally
  let deck = [];
  //create the loop
  for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      //using objects
      let card = {
            suit: suits[suitsIdx],
            value: values[valueIdx]
          };
      deck.push(card);
    };
  };
  return deck;
};

//CREATE SHUFFLE DECK FUNCTION
function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  };
};

//GET CARD NUMERIC VALUE FUNCTION
function getCardNumericValue(card) {
  switch (card.value) {
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9; 
    default:
      return 10;
  }
}
//GET SCORE FUNCTION
function getScore(cardArray) {
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === 'Ace') {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) {
    return score + 10;
  }
  return score;
}
//UPDATE SCORES FUNCTION
function updateScores() {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

//CHECK FOR END OF GAME
function checkForEndOfGame() {
  updateScores();
  if (gameOver) {
    //let dealer get card
    while (dealerScore < playerScore 
          && dealerScore <= 21 
          && playerScore <= 21) {
    dealerCards.push(getNextCard());
    updateScores();  
    } 
  }
  //CHECK WHO WINS THE GAME
  if (playerScore > 21 ) {
    playerWon = false;
    // dealerWon = true;
    gameOver =true; 
  } else if (dealerScore > 21 ) {
    playerWon = true;
    // dealerWon = false;
    gameOver = true;
  }else if (gameOver) {
    if (playerScore > dealerScore) {
        playerWon = true;
        // dealerWon = false;
    }
    //  else if (playerScore == dealerScore) {
    //     playerWon = false;
    //     dealerWon = false;
    // } 
    else {
      playerWon = false;
      // dealerWon = true;
    } 
  }
}

//CREATE SHOWSTATUS() FUNCTION
function showStatus() {
  if (!gameStarted) {
    title.innerText = 'Welcome to Sunciti Game';
    return;
  }
  for (var i = 0; i < deck.length; i++) {
    title.innerText += '\n' + getCardString(deck[i]);  
  }
  let dealerCardString = '';
  for (var i = 0; i < dealerCards.length; i++) {
    dealerCardString += getCardString(dealerCards[i]) + '\n';
  }
  let playerCardString = '';
  for (var i = 0; i < playerCards.length; i++) {
    playerCardString += getCardString(playerCards[i]) + '\n';
  }

  updateScores();
  title.innerHTML =
  ` <div class = "container">
      <div class ="row col-xs-3 fa-border">
        <h1>Dealer has:</h1> 
        <h3> ${dealerCardString}\n</h3>
        <h3>(Score:  ${dealerScore} )</h3><br>
      </div>
      `
      +
      `<div class ="row col-xs-3 fa-border">
        <h1>Player has:</h1> 
        <h3>  ${playerCardString}\n</h3>
        <h3>(Score:  ${playerScore} )</h3><br>
      </div>
    </div>
  `;

//WRITE CODE TO DISPLAY WHO WINS
  if (gameOver) {
    if (playerWon) {
      title.innerHTML;
      result.innerHTML = '<h2 class ="btn-lg btn-success">YOU WIN!</h2>';
    }else if (!playerWon && playerScore !== dealerScore) {
      title.innerHTML;
      result.innerHTML = '<h2 class ="btn-lg btn-danger">YOU LOST!</h2>';
    } else {
      title.innerHTML;
      result.innerHTML = '<h2 class ="btn-lg btn-warning">IT\'S A TIE, PLEASE REPLAY</h2>';
    }
    gameAuthor.style.display = 'none';
    newGame.style.display = 'inline';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
  }
}

  //Using getCardString function
  function getCardString(card) {
  return card.value + ' of ' + card.suit;
}
  
//CREATE FUNCTION TO GET NEXT CARD
function getNextCard() {
      return deck.shift();
  }

  
// let deck = createDeck();
  
  console.log('Our ', deck.length ,' cards are:\n');
  /*
  let i = 0;
  while (i < deck.length) {
      console.log(deck[i]);
      i++;
  };
  //or using for loop
  for (let i = 0; i < deck.length; i++) {
      // const fullDeck = deck[i];
      console.log(deck[i]);
  };
  */
  
  // let playerCards = [getNextCard(), getNextCard()];
  //     console.log(' ' + getCardString(playerCards[0]));
  //     console.log(' ' + getCardString(playerCards[1]));

    //functions
    function newName(params, gretings) {
        let myName = params + ' Justin;' + gretings;
        return myName;
    };
  //  console.log(newName('Adoga ', ' You are welcomed...'));
  //Passing object in a function
  /*
    function userCard(card){
      card.suit = 'Spade';
    }
  */
  //objects
  //Arrays of objects
  /*
  let cards = [
        {
          suit: 'Heart',
          value: 'Ace'
        },
        {
          suit: 'Club',
          value: 'Two'
        }
      ];

  //userCard(card);
  console.log(cards[1].value+ ' of '+ cards[1].suit );
  console.log(cards[0].value+ ' of '+cards[0].suit);
*/
//writing text to webpage
/*
  let desc = document.getElementById('desc');
        // desc.innerText = "This paragraph is a javaScript descriptor";
  let okButton = document.getElementById('ok-button');
  desc.style.display = 'none';
      okButton.addEventListener('click', function(){
        //this code will fire when the button is clicked
        // desc.innerText = "This paragraph is a javaScript descriptor";
        //this code apply css styling that hides the paragraph
        desc.style.display = 'block';
      });
    */