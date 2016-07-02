const cards=[
    2,3,4,5,6,7,8,9,10,'J','Q','K','A'
];
const deck=[
    ...cards,...cards,...cards,...cards
];
console.log(deck);
let player1 = {};
let player2 = {};
let player3;
let player4;

function getRandomCard() {
    const randomCardIndex = Math.floor(Math.random()*52);
    return deck[randomCardIndex];
}

player1.cards=[getRandomCard(),getRandomCard()];
player2.cards=[getRandomCard(),getRandomCard()];

console.log(player1.cards[0]);
$('.player1 .card1').text(player1.cards[0]);
$('.player1 .card2').text(player1.cards[1]);
$('.player2 .card1').text(player2.cards[0]);
$('.player2 .card2').text(player2.cards[1]);
