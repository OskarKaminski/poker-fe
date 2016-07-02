let cardCtrl = function(){

};

let card = {
    selector: 'card',
    templateUrl: 'src/card/card.html',
    controller: cardCtrl,
    bindings: {
        symbol: '<'
    }
};

angular.module('app').component('card', card);