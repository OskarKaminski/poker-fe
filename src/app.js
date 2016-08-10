import React, {Component, PropTypes} from 'react'
import Table from "./table/table";
import {GameService} from './services/game/game.service';
import {combinationService} from './services/combination/combination.service';

const App = () => {

    let gameService = new GameService();

    let player1 = {
        name: 'Oskar',
    };
    let player2 = {
        name: 'Computer'
    };
    player1.cards = gameService.pullOutPlayerCards(player1.name);
    player2.cards = gameService.pullOutPlayerCards(player2.name);
    let flop = gameService.pullOutFlop();
    let turn = gameService.pullOutTurn();
    let river = gameService.pullOutRiver();
    player1.combination =
        combinationService.checkCombination([...player1.cards,
            ...flop,
            ...turn,
            ...river]);
    player2.combination =
        combinationService.checkCombination([...player2.cards,
            ...flop,
            ...turn,
            ...river]);

    return (
        <div className='app'>
            <h1>Comments</h1>
            <Table player1={player1} player2={player2} flop={flop} turn={turn} river={river}/>
        </div>
    )

};

export default App;