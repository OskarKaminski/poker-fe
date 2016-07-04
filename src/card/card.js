let cardCtrl = function(){
    this.labels = {
        11: 'J',
        12: 'Q',
        13: 'K',
        14: 'A'
    };

    this.$onInit = () => {
        this.label = this.getLabel();
    };

    this.getLabel = () => {
        return this.labels[this.value] || this.value;
    };
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