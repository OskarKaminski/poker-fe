const cards=[
    2,3,4,5,6,7,8,9,10,'J','Q','K','A'
];
const deck=[
    ...cards,...cards,...cards,...cards
];

function getRandomCard() {
    const randomCardIndex = Math.floor(Math.random()*52);
    return deck[randomCardIndex];
}

let appCtrl = function(){
    this.player1=[getRandomCard(),getRandomCard()];
    this.player2=[getRandomCard(),getRandomCard()];
};

let app = {
    selector: 'app',
    templateUrl: 'src/app.html',
    controller: appCtrl
};


angular.module('app', []);
angular.module('app').component('app', app);