import React, {Component, PropTypes} from 'react'
import Table from "./table/table";
import {GameService} from './services/game/game.service';
import {combinationService} from './services/combination/combination.service';

const App = () => {

    const gameService = new GameService();

    const player1 = {
        id: 1,
        name: 'Oskar',
    };
    const player2 = {
        id: 2,
        name: 'Computer'
    };
    player1.cards = gameService.pullOutPlayerCards(player1.name);
    player2.cards = gameService.pullOutPlayerCards(player2.name);

    const board = {
        flop: gameService.pullOutFlop(),
        turn: gameService.pullOutTurn(),
        river: gameService.pullOutRiver()
    };

    player1.combination =
        combinationService.checkCombination([
            ...player1.cards,
            ...board.flop,
            board.turn,
            board.river]);
    player2.combination =
        combinationService.checkCombination([
            ...player2.cards,
            ...board.flop,
            board.turn,
            board.river]);

    const players = [player1, player2];

    return (
        <div className='app'>
            <h1>Comments</h1>
            <Table players={players} board={board}/>
        </div>
    )

};

export default App;