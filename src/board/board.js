let boardCtrl = function(){

};

export let board = {
    selector: 'board',
    templateUrl: 'src/board/board.html',
    controller: boardCtrl,
    bindings: {
        flop: '<',
        turn: '<',
        river: '<'
    }
};