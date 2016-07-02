let cardCtrl = function(){

};

export let card = {
    selector: 'card',
    templateUrl: 'src/card/card.html',
    controller: cardCtrl,
    bindings: {
        value: '@',
        symbol: '@'
    }
};